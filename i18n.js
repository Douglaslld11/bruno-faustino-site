(function () {
  var WA = "https://wa.me/595981288323?text=";

  var I18N = {
    pt: {
      "@lang": "pt-BR",
      "@title": "Bruno Faustino | Cêis qué modinha ou modão?",
      "@description": "Bruno Faustino — sertanejo para casamentos, aniversários, shows e todo tipo de evento.",

      "wa.evento": WA + "Ol%C3%A1%2C%20Bruno%21%20Gostaria%20de%20falar%20sobre%20um%20evento.",
      "wa.agenda": WA + "Ol%C3%A1%2C%20Bruno%21%20Quero%20consultar%20a%20agenda%20para%20um%20evento.",

      "nav.aria": "Navegação principal",
      "nav.sobre": "O som",
      "nav.videos": "Vídeos",
      "nav.contato": "Contato",
      "nav.cta": "Contrate",

      "hero.eyebrow": "Sertanejo ao vivo",
      "hero.tagline": "Cêis qué modinha ou modão?",
      "hero.intro": "A trilha sonora certa para fazer seu evento ficar na memória.",
      "hero.cta1": "Falar sobre meu evento",
      "hero.cta2": "Assistir agora",
      "hero.credit": "BRUNO FAUSTINO · AO VIVO",

      "about.label": "01 — O show",
      "about.h2": "Do modão que arrepia à modinha que todo mundo canta junto.",
      "about.p": "Com um repertório sertanejo que atravessa gerações, Bruno Faustino leva energia, presença e muita música boa para o seu momento especial.",
      "about.link": "Acompanhe no Instagram",

      "events.label": "02 — Para celebrar",
      "events.h2": "Seu evento merece<br />uma noite inesquecível.",
      "events.1.h": "Casamentos",
      "events.1.p": "Canções para marcar cada capítulo do grande dia.",
      "events.2.h": "Aniversários",
      "events.2.p": "O repertório e a energia para sua festa acontecer.",
      "events.3.h": "Shows &amp; bares",
      "events.3.p": "Um set envolvente, do começo ao último bis.",
      "events.4.h": "Eventos especiais",
      "events.4.p": "Confraternizações, eventos corporativos e muito mais.",

      "videos.label": "03 — No palco",
      "videos.h2": "Aperta o play<br />e sente o som.",
      "videos.link": "Ver canal no YouTube",
      "videos.fallback": "Seu navegador não suporta vídeo.",

      "gallery.aria": "Galeria de fotos",
      "gallery.alt1": "Bruno Faustino em apresentação",
      "gallery.alt2": "Bruno Faustino no palco",
      "gallery.alt3": "Bruno Faustino cantando sertanejo",

      "contact.eyebrow": "Agenda aberta",
      "contact.h2": "Vamos fazer<br /><em>acontecer?</em>",
      "contact.p": "Conte a data, o lugar e o tipo de evento. Vamos montar uma noite do seu jeito.",
      "contact.cta": "Chamar no WhatsApp",

      "footer.p": "Bruno Faustino · Sertanejo ao vivo"
    },

    es: {
      "@lang": "es",
      "@title": "Bruno Faustino | ¿Quieren modinha o modão?",
      "@description": "Bruno Faustino — sertanejo para casamientos, cumpleaños, shows y todo tipo de evento.",

      "wa.evento": WA + "%C2%A1Hola%2C%20Bruno%21%20Quer%C3%ADa%20hablar%20sobre%20un%20evento.",
      "wa.agenda": WA + "%C2%A1Hola%2C%20Bruno%21%20Quiero%20consultar%20la%20agenda%20para%20un%20evento.",

      "nav.aria": "Navegación principal",
      "nav.sobre": "El sonido",
      "nav.videos": "Videos",
      "nav.contato": "Contacto",
      "nav.cta": "Contratar",

      "hero.eyebrow": "Sertanejo en vivo",
      "hero.tagline": "¿Quieren modinha o modão?",
      "hero.intro": "La banda sonora justa para que tu evento quede en la memoria.",
      "hero.cta1": "Hablar sobre mi evento",
      "hero.cta2": "Ver ahora",
      "hero.credit": "BRUNO FAUSTINO · EN VIVO",

      "about.label": "01 — El show",
      "about.h2": "Del modão que eriza la piel a la modinha que todos cantan juntos.",
      "about.p": "Con un repertorio sertanejo que atraviesa generaciones, Bruno Faustino lleva energía, presencia y mucha buena música a tu momento especial.",
      "about.link": "Seguilo en Instagram",

      "events.label": "02 — Para celebrar",
      "events.h2": "Tu evento merece<br />una noche inolvidable.",
      "events.1.h": "Casamientos",
      "events.1.p": "Canciones para marcar cada capítulo del gran día.",
      "events.2.h": "Cumpleaños",
      "events.2.p": "El repertorio y la energía que tu fiesta necesita.",
      "events.3.h": "Shows &amp; bares",
      "events.3.p": "Un set envolvente, desde el comienzo hasta el último bis.",
      "events.4.h": "Eventos especiales",
      "events.4.p": "Fiestas de fin de año, eventos corporativos y mucho más.",

      "videos.label": "03 — En el escenario",
      "videos.h2": "Dale play<br />y sentí el sonido.",
      "videos.link": "Ver el canal en YouTube",
      "videos.fallback": "Tu navegador no soporta video.",

      "gallery.aria": "Galería de fotos",
      "gallery.alt1": "Bruno Faustino en una presentación",
      "gallery.alt2": "Bruno Faustino en el escenario",
      "gallery.alt3": "Bruno Faustino cantando sertanejo",

      "contact.eyebrow": "Agenda abierta",
      "contact.h2": "¿Vamos a<br /><em>hacerlo realidad?</em>",
      "contact.p": "Contanos la fecha, el lugar y el tipo de evento. Armamos una noche a tu manera.",
      "contact.cta": "Escribir por WhatsApp",

      "footer.p": "Bruno Faustino · Sertanejo en vivo"
    }
  };

  var LANGS = ["pt", "es"];
  var STORE_KEY = "bf-lang";
  var ATTRS = ["alt", "aria-label", "href"];

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) {
      /* modo privado / cookies bloqueados */
    }
    return null;
  }

  function apply(lang) {
    var dict = I18N[lang] || I18N.pt;

    document.documentElement.lang = dict["@lang"];
    document.title = dict["@title"];

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", dict["@description"]);

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", dict["@title"]);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", dict["@description"]);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var value = dict[nodes[i].getAttribute("data-i18n")];
      if (value == null) continue;
      if (value.indexOf("<") !== -1 || value.indexOf("&") !== -1) nodes[i].innerHTML = value;
      else nodes[i].textContent = value;
    }

    for (var a = 0; a < ATTRS.length; a++) {
      var attr = ATTRS[a];
      var targets = document.querySelectorAll("[data-i18n-" + attr + "]");
      for (var t = 0; t < targets.length; t++) {
        var val = dict[targets[t].getAttribute("data-i18n-" + attr)];
        if (val != null) targets[t].setAttribute(attr, val);
      }
    }

    var buttons = document.querySelectorAll(".lang-switch button");
    for (var b = 0; b < buttons.length; b++) {
      buttons[b].setAttribute("aria-pressed", String(buttons[b].getAttribute("data-lang") === lang));
    }

    store(STORE_KEY, lang);

    try {
      var url = new URL(window.location.href);
      if (lang === "pt") url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      history.replaceState(null, "", url.toString());
    } catch (e) {
      /* file:// não aceita replaceState */
    }
  }

  function pick() {
    var fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (LANGS.indexOf(fromUrl) !== -1) return fromUrl;

    var saved = store(STORE_KEY);
    if (LANGS.indexOf(saved) !== -1) return saved;

    var nav = (navigator.language || "pt").toLowerCase();
    return nav.indexOf("es") === 0 ? "es" : "pt";
  }

  var switcher = document.querySelector(".lang-switch");
  if (switcher) {
    switcher.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-lang]");
      if (button) apply(button.getAttribute("data-lang"));
    });
  }

  apply(pick());
})();
