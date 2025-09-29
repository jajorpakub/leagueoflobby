#!/bin/sh

# Set default port if not provided
PORT=${PORT:-8080}

# Replace the placeholder in nginx config with actual port
sed -i "s/listen 8080;/listen $PORT;/g" /etc/nginx/nginx.conf

# Start nginx
nginx -g "daemon off;"