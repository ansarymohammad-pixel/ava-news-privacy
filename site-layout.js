(function () {
  const site = window.AVA_SITE;
  if (!site) return;

  function currentPage() {
    return location.pathname.split("/").pop() || "index.html";
  }

  function createLink(item, page) {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    if (item.match && item.match.includes(page)) {
      link.className = "active";
    }
    return link;
  }

  function renderHeader() {
    const brand = document.querySelector(".brand");
    if (brand) {
      brand.href = site.brand.homeUrl;
      brand.innerHTML = `<span class="brand-mark">${site.brand.mark}</span><span>${site.brand.label}</span>`;
    }

    const nav = document.querySelector(".nav-links");
    if (!nav) return;

    const languageSwitcher = nav.querySelector(".language-switcher");
    nav.innerHTML = "";
    const page = currentPage();

    site.nav.forEach((item) => nav.appendChild(createLink(item, page)));
    if (languageSwitcher) {
      nav.appendChild(languageSwitcher);
    }
  }

  function renderFooter() {
    const footer = document.querySelector(".footer-grid");
    if (!footer) return;

    const links = site.footerLinks
      .map((item) => `<a href="${item.href}">${item.label}</a>`)
      .join("");

    footer.innerHTML = `<span>${site.brand.footer}</span><div class="footer-links">${links}</div>`;
  }

  function renderProducts() {
    const grid = document.querySelector("[data-products-grid]");
    if (!grid) return;

    grid.innerHTML = site.products.map((product) => {
      const features = product.features.map((feature) => `<li>${feature}</li>`).join("");
      return `
        <article class="product-card">
          <div class="app-logo ${product.logoClass}"><span>${product.logoText}</span></div>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <ul>${features}</ul>
          <a class="product-link" href="${product.href}">${product.cta}</a>
        </article>
      `;
    }).join("");
  }

  renderHeader();
  renderFooter();
  renderProducts();
})();
