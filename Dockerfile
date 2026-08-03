# Use the official Nginx alpine image as the base
FROM nginx:alpine

# Remove the default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/

# Copy the website files into the nginx html directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80

# The default command is to start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
