# Multi-stage Dockerfile for production
# Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies (use package-lock for reproducible builds)
COPY package.json package-lock.json ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

# Production stage: serve with nginx
FROM nginx:stable-alpine AS production
LABEL maintainer="Katkojwal Krishna <you@example.com>"

# Replace default nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
