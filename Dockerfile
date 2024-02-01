FROM nginx:alpine
COPY configs/nginx/ /etc/nginx/
COPY build/ /var/www/dev.qtr.ai/public
COPY build/ /usr/share/nginx/html