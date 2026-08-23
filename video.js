// Click-to-load: o player do YouTube só é carregado quando a pessoa clica,
// para não pagar o script do player em quem não vai assistir.
(function () {
  var ALLOW = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

  function carregar(botao) {
    var id = botao.getAttribute("data-yt");
    if (!id) return;

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0&modestbranding=1";
    iframe.title = botao.getAttribute("aria-label") || "YouTube";
    iframe.allow = ALLOW;
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    botao.replaceWith(iframe);
    iframe.focus();
  }

  var botoes = document.querySelectorAll(".yt-thumb");
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function (e) {
      carregar(e.currentTarget);
    });
  }
})();
