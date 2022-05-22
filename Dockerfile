FROM node:16-alpine AS builder
ENV NODE_ENV production
WORKDIR /app

# Cache deps
COPY package.json .
COPY package-lock.json .
RUN npm install --production

# Copy and build
COPY . .
RUN npm run build

# Host compiled files with nginx
FROM nginx:mainline-alpine as production
EXPOSE 80
ENV NODE_ENV production

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Start nginx
CMD ["nginx", "-g", "daemon off;"]