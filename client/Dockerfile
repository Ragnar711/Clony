# Use an official Node.js image as the base image
FROM node

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 to the host
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]

# docker build -t my-react-app .
#docker run -p 3000:3000 my-react-app
