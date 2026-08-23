# Bruno Faustino — site

Página de divulgação (sertanejo ao vivo). HTML/CSS/JS estáticos, sem build.

- `index.html` — a página inteira
- `styles.css` — estilos
- `i18n.js` — dicionário PT/ES e o seletor de idioma
- `assets/` — fotos, vídeos, og-image e ícone

## Idiomas

O texto vive todo em `i18n.js`, nas chaves `pt` e `es`. Para mudar uma frase,
edite os dois idiomas — o HTML só carrega o português como padrão.

O idioma é escolhido nesta ordem: `?lang=es` na URL → escolha salva no navegador
→ idioma do navegador. Link direto em espanhol: `?lang=es`.

## Rodar local

    python3 -m http.server 8777

## Deploy

Push na branch `main` — GitHub Pages publica automaticamente.
