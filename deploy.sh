#!/bin/bash
# deploy.sh — Déploiement du site démo sur le VPS
# Usage : bash deploy.sh [user@host]
# Défaut : root@srv1569424-1.tail30aba5.ts.net

HOST="${1:-root@srv1569424-1.tail30aba5.ts.net}"
REMOTE_DIR="/opt/climpro-demo"

echo "🚀 Déploiement sur $HOST..."

# 1. Créer le dossier sur le VPS
ssh "$HOST" "mkdir -p $REMOTE_DIR"

# 2. Copier les fichiers (Dockerfile + nginx.conf + out/)
rsync -avz --delete \
  --include="out/***" \
  --include="Dockerfile" \
  --include="nginx.conf" \
  --include="docker-compose.yml" \
  --exclude="*" \
  ./ "$HOST:$REMOTE_DIR/"

# 3. Build + démarrage sur le VPS
ssh "$HOST" "cd $REMOTE_DIR && docker compose down && docker compose build --no-cache && docker compose up -d"

echo ""
echo "✅ Déployé !"
echo "🌐 http://$HOST_IP:3010"
echo "🔒 Via Tailscale : http://srv1569424-1.tail30aba5.ts.net:3010"
