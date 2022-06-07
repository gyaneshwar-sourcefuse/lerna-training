# Get node image
FROM node:14-alpine AS ANGULAR_BUILD

# Setup working directory
WORKDIR /usr/local/app

# Copy sourcecode to app
COPY ./ /usr/local/app/

# Install dependencies
RUN npm install

# Build application
RUN npm run build --prod

# Get nginx image
FROM nginx:latest

# Copy the angular build
COPY --from=ANGULAR_BUILD /usr/local/app/dist/chat-frontend /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
# Expose port 80
ENV HOST=::
EXPOSE 80