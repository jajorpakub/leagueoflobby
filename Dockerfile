# Dockerfile for Polish Lobby React App

# Build stage
FROM node:18 as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built app from build stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy startup script
COPY start-nginx.sh /start-nginx.sh
RUN chmod +x /start-nginx.sh

# Expose port 8080 (will be overridden by Cloud Run's PORT env var)
EXPOSE 8080

# Start nginx with environment variable support
CMD ["/start-nginx.sh"]