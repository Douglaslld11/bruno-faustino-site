#!/usr/bin/env bash
# Monta o diretório publicado.
# Os MP4 ficam no repositório como backup mas NÃO são publicados: os termos da
# Cloudflare permitem servir "non-HTML content (e.g., image files, audio files)
# other than video files".
set -euo pipefail
rm -rf dist
mkdir -p dist
rsync -a --exclude 'dist' --exclude '.git' --exclude '.netlify' \
      --exclude 'node_modules' --exclude '*.mp4' --exclude 'build.sh' \
      --exclude '*.bak' --exclude '.DS_Store' \
      --exclude '.gitignore' --exclude 'README.md' --exclude 'netlify.toml' \
      --exclude '.nojekyll' --exclude '.wrangler' \
      ./ dist/
echo "publicando $(find dist -type f | wc -l | tr -d ' ') arquivos"
find dist -type f -name '*.mp4' | grep . && { echo "ERRO: mp4 no dist"; exit 1; } || true
