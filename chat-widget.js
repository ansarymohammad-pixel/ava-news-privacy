(function () {
  const API_URL = (window.AVA_API_URL || "http://127.0.0.1:8000").replace(/\/$/, "");
  const copy = {
    fr: {
      subtitle: "Assistant IA AVA",
      checking: "Connexion a Gemini...",
      online: "Gemini disponible",
      offline: "Gemini indisponible",
      fallbackStatus: "Guide AVA disponible - Gemini hors ligne",
      greeting: "Bonjour. Je peux vous guider dans AVA Fuel, ElectricityCost, Parking et News Verify.",
      placeholder: "Posez votre question...",
      close: "Fermer l'assistant",
      open: "Ouvrir l'assistant AVA",
      send: "Envoyer",
      error: "Je ne peux pas joindre Gemini. Verifiez le backend FastAPI, puis reessayez.",
      fallbackGeneric: "Gemini est indisponible. Je peux toutefois vous guider vers AVA Fuel, ElectricityCost, Parking ou News Verify.",
      fallbackFuel: "AVA Fuel compare les prix par pays et operateur, indique la source et la date, puis presente une tendance explicative. Ouvrez la page AVA Fuel pour comparer France, Italie et Espagne.",
      fallbackElectricity: "AVA ElectricityCost estime le cout d'un appareil selon sa puissance, sa duree et le prix du kWh, puis suggere un horaire moins couteux.",
      fallbackParking: "AVA Parking est concu pour combiner disponibilite, trafic et prediction afin d'orienter l'utilisateur vers une zone de stationnement adaptee.",
      fallbackNews: "AVA News Verify analyse la credibilite de la source, la rhetorique, la fraicheur et l'impact probable d'une nouvelle.",
      prompts: ["Comparer les carburants", "Meilleur horaire electricite", "Comment AVA verifie une news ?"]
    },
    en: {
      subtitle: "AVA AI assistant",
      checking: "Connecting to Gemini...",
      online: "Gemini available",
      offline: "Gemini unavailable",
      fallbackStatus: "AVA guide available - Gemini offline",
      greeting: "Hello. I can guide you through AVA Fuel, ElectricityCost, Parking, and News Verify.",
      placeholder: "Ask your question...",
      close: "Close assistant",
      open: "Open AVA assistant",
      send: "Send",
      error: "I cannot reach Gemini. Check the FastAPI backend, then try again.",
      fallbackGeneric: "Gemini is unavailable. I can still guide you to AVA Fuel, ElectricityCost, Parking, or News Verify.",
      fallbackFuel: "AVA Fuel compares prices by country and operator, shows the source and date, and presents an explanatory trend. Open AVA Fuel to compare France, Italy, and Spain.",
      fallbackElectricity: "AVA ElectricityCost estimates appliance cost from power, duration, and kWh price, then suggests a lower-cost time.",
      fallbackParking: "AVA Parking is designed to combine availability, traffic, and prediction to guide users toward a suitable parking area.",
      fallbackNews: "AVA News Verify analyzes source credibility, rhetoric, freshness, and the probable impact of a news item.",
      prompts: ["Compare fuel prices", "Best electricity time", "How does AVA verify news?"]
    },
    es: {
      subtitle: "Asistente IA AVA",
      checking: "Conectando con Gemini...",
      online: "Gemini disponible",
      offline: "Gemini no disponible",
      fallbackStatus: "Guia AVA disponible - Gemini desconectado",
      greeting: "Hola. Puedo guiarte por AVA Fuel, ElectricityCost, Parking y News Verify.",
      placeholder: "Escribe tu pregunta...",
      close: "Cerrar asistente",
      open: "Abrir asistente AVA",
      send: "Enviar",
      error: "No puedo conectar con Gemini. Comprueba el backend FastAPI e intentalo de nuevo.",
      fallbackGeneric: "Gemini no esta disponible. Aun puedo guiarte hacia AVA Fuel, ElectricityCost, Parking o News Verify.",
      fallbackFuel: "AVA Fuel compara precios por pais y operador, muestra fuente y fecha, y presenta una tendencia explicativa. Abre AVA Fuel para comparar Francia, Italia y Espana.",
      fallbackElectricity: "AVA ElectricityCost estima el coste de un aparato segun potencia, duracion y precio del kWh, y sugiere un horario mas barato.",
      fallbackParking: "AVA Parking esta disenado para combinar disponibilidad, trafico y prediccion y orientar al usuario hacia una zona adecuada.",
      fallbackNews: "AVA News Verify analiza credibilidad de la fuente, retorica, actualidad e impacto probable de una noticia.",
      prompts: ["Comparar combustibles", "Mejor horario electrico", "Como verifica AVA una noticia?"]
    }
  };

  let language = localStorage.getItem("avaLanguage") || document.documentElement.lang || "fr";
  let history = [];
  let busy = false;

  const launcher = document.createElement("button");
  launcher.className = "ava-chat-launcher";
  launcher.type = "button";
  launcher.textContent = "AVA";

  const panel = document.createElement("section");
  panel.className = "ava-chat-panel";
  panel.hidden = true;
  panel.innerHTML = `
    <header class="ava-chat-header">
      <div class="ava-chat-title"><strong>AVA Assistant</strong><small></small></div>
      <button class="ava-chat-close" type="button" aria-label="Close">&times;</button>
    </header>
    <div class="ava-chat-body" aria-live="polite">
      <div class="ava-chat-status"></div>
      <div class="ava-chat-messages"></div>
      <div class="ava-chat-quick-prompts"></div>
    </div>
    <form class="ava-chat-form">
      <textarea rows="1" maxlength="2000"></textarea>
      <button class="ava-chat-send" type="submit" aria-label="Send">&uarr;</button>
    </form>`;

  document.body.append(launcher, panel);

  const closeButton = panel.querySelector(".ava-chat-close");
  const subtitle = panel.querySelector(".ava-chat-title small");
  const statusNode = panel.querySelector(".ava-chat-status");
  const messagesNode = panel.querySelector(".ava-chat-messages");
  const promptsNode = panel.querySelector(".ava-chat-quick-prompts");
  const form = panel.querySelector(".ava-chat-form");
  const input = form.querySelector("textarea");
  const sendButton = panel.querySelector(".ava-chat-send");

  function currentCopy() {
    return copy[language] || copy.fr;
  }

  function fallbackAnswer(message) {
    const text = currentCopy();
    const normalized = message.toLowerCase();
    if (/fuel|carbur|essence|diesel|combust|station/.test(normalized)) return text.fallbackFuel;
    if (/electric|kwh|appareil|device|horaire|horario|lavage|washing/.test(normalized)) return text.fallbackElectricity;
    if (/parking|stationnement|aparcamiento|place/.test(normalized)) return text.fallbackParking;
    if (/news|nouvelle|actualit|noticia|credib|source|verif/.test(normalized)) return text.fallbackNews;
    return text.fallbackGeneric;
  }

  function appendMessage(role, content) {
    const message = document.createElement("div");
    message.className = `ava-chat-message ${role}`;
    message.textContent = content;
    messagesNode.append(message);
    messagesNode.parentElement.scrollTop = messagesNode.parentElement.scrollHeight;
  }

  function renderLanguage() {
    const text = currentCopy();
    subtitle.textContent = text.subtitle;
    launcher.setAttribute("aria-label", text.open);
    closeButton.setAttribute("aria-label", text.close);
    input.placeholder = text.placeholder;
    sendButton.setAttribute("aria-label", text.send);
    promptsNode.replaceChildren();
    text.prompts.forEach((prompt) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = prompt;
      button.addEventListener("click", () => {
        input.value = prompt;
        input.focus();
      });
      promptsNode.append(button);
    });
    if (!history.length) {
      messagesNode.replaceChildren();
      appendMessage("assistant", text.greeting);
    }
  }

  async function checkStatus() {
    statusNode.className = "ava-chat-status";
    statusNode.textContent = currentCopy().checking;
    try {
      const response = await fetch(`${API_URL}/chat/status`, { signal: AbortSignal.timeout(4000) });
      if (!response.ok) throw new Error("status failed");
      const status = await response.json();
      statusNode.classList.add(status.available ? "online" : "fallback");
      statusNode.textContent = status.available ? currentCopy().online : currentCopy().fallbackStatus;
    } catch (error) {
      statusNode.classList.add("fallback");
      statusNode.textContent = currentCopy().fallbackStatus;
    }
  }

  async function sendMessage(message) {
    if (busy || !message.trim()) return;
    busy = true;
    input.disabled = true;
    sendButton.disabled = true;
    appendMessage("user", message.trim());

    try {
      const response = await fetch(`${API_URL}/chat/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message.trim(),
          history: history.slice(-10),
          language,
          page: location.pathname.split("/").pop() || "index.html"
        })
      });
      if (!response.ok) throw new Error("chat failed");
      const data = await response.json();
      history.push({ role: "user", content: message.trim() }, { role: "assistant", content: data.answer });
      history = history.slice(-10);
      appendMessage("assistant", data.answer);
    } catch (error) {
      appendMessage("assistant", fallbackAnswer(message));
    } finally {
      busy = false;
      input.disabled = false;
      sendButton.disabled = false;
      input.value = "";
      input.focus();
    }
  }

  launcher.addEventListener("click", () => {
    panel.hidden = false;
    launcher.hidden = true;
    input.focus();
    checkStatus();
  });

  closeButton.addEventListener("click", () => {
    panel.hidden = true;
    launcher.hidden = false;
    launcher.focus();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendMessage(input.value);
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  window.addEventListener("ava-language-change", (event) => {
    language = event.detail.lang;
    renderLanguage();
    if (!panel.hidden) checkStatus();
  });

  renderLanguage();
})();
