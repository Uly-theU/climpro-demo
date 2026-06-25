FROM nginx:alpine

# Copier le build statique
COPY out/ /usr/share/nginx/html/

# Config nginx optimisée pour Next.js static export
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
