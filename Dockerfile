# Use the official Node.js image as the base
FROM node:latest

# Install system dependencies required for React Native and Android development
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    git \
    python3 \
    openjdk-11-jdk

# Install Watchman (optional but recommended for better performance)
RUN apt-get install -y watchman

# Install React Native CLI globally
RUN npm install -g react-native-cli

# Set up the project directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose ports for React Native development server
EXPOSE 8081
