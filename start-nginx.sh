#!/bin/sh
set -e

PORT=${PORT:-8080}
echo "Container starting on port: $PORT"

# Create nginx config with dynamic port
mkdir -p /etc/nginx
cat > /etc/nginx/nginx.conf << EOF
worker_processes 1;
events {
    worker_connections 1024;
}
http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    sendfile on;
    keepalive_timeout 65;
    
    server {
        listen ${PORT};
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;
        
        location / {
            try_files \$uri \$uri/ /index.html;
        }
    }
}
EOF

echo "Nginx config created for port ${PORT}. Testing..."
nginx -t

echo "Starting nginx..."
exec nginx -g "daemon off;"