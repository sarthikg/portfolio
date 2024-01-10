FROM node:20

# Set the working dir inside the image
WORKDIR /app

# Copy the startup script & give executable permission
COPY ./deployment/dev /app/deployment/dev
RUN chmod +x /app/deployment/dev/startup-script.sh

# Copy the project dependencies
COPY ./package.json /app
COPY ./package-lock.json /app

# Copy Environment Variables
COPY ./deployment/dev/.env ./.env.development

# Install the packages
RUN npm install