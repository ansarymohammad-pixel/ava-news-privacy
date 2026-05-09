(function () {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const pointer = { x: -1000, y: -1000 };
  let width = 0;
  let height = 0;
  let points = [];
  let partitions = [];
  let animationId = 0;

  canvas.className = "network-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    seed();
  }

  function seed() {
    const count = Math.max(38, Math.min(86, Math.floor((width * height) / 18000)));
    points = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      optimal: index < 5
    }));

    partitions = points
      .filter((point) => point.optimal)
      .map((point, index) => ({
        point,
        color: ["rgba(25,161,132,0.08)", "rgba(47,111,237,0.07)", "rgba(242,184,75,0.07)", "rgba(24,161,127,0.06)", "rgba(255,255,255,0.045)"][index]
      }));
  }

  function drawPartitions() {
    const cell = 86;
    partitions.forEach(({ point, color }) => {
      ctx.beginPath();
      for (let x = -cell; x < width + cell; x += cell) {
        for (let y = -cell; y < height + cell; y += cell) {
          let closest = point;
          let best = Infinity;
          partitions.forEach((partition) => {
            const dx = x - partition.point.x;
            const dy = y - partition.point.y;
            const distance = dx * dx + dy * dy;
            if (distance < best) {
              best = distance;
              closest = partition.point;
            }
          });
          if (closest === point) ctx.rect(x, y, cell, cell);
        }
      }
      ctx.fillStyle = color;
      ctx.fill();
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    drawPartitions();

    points.forEach((point) => {
      if (!reducedMotion) {
        point.x += point.vx;
        point.y += point.vy;
      }

      if (point.x < -20 || point.x > width + 20) point.vx *= -1;
      if (point.y < -20 || point.y > height + 20) point.vy *= -1;

      const pullX = pointer.x - point.x;
      const pullY = pointer.y - point.y;
      const pullDistance = Math.hypot(pullX, pullY);
      if (!reducedMotion && pullDistance < 160) {
        point.x -= pullX * 0.002;
        point.y -= pullY * 0.002;
      }
    });

    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const a = points[i];
        const b = points[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance < 145) {
          const opacity = (1 - distance / 145) * (a.optimal || b.optimal ? 0.38 : 0.18);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(139, 220, 186, ${opacity})`;
          ctx.lineWidth = a.optimal || b.optimal ? 1.2 : 0.8;
          ctx.stroke();
        }
      }
    }

    points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.optimal ? 4.5 : 2.2, 0, Math.PI * 2);
      ctx.fillStyle = point.optimal ? "rgba(242,184,75,0.95)" : "rgba(224,244,239,0.62)";
      ctx.fill();

      if (point.optimal) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 13, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(242,184,75,0.22)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    });

    if (!reducedMotion) animationId = requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });
  window.addEventListener("pointerleave", () => {
    pointer.x = -1000;
    pointer.y = -1000;
  });

  resize();
  draw();
  window.addEventListener("beforeunload", () => cancelAnimationFrame(animationId));
})();
