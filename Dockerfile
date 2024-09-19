# Use Node.js LTS version as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install --force

# Copy the rest of the application files to the container
COPY . .

# Expose port 3000 (or the port your app uses)
EXPOSE 3000

# Start the app using nodemon for hot-reloading in development
CMD ["npx", "nodemon", "app.js"]
