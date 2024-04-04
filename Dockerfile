FROM node:latest

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    git \
    python

# Install Watchman (optional)
RUN apt-get install -y watchman

# Install Java Development Kit (JDK) for Android development
RUN apt-get install -y default-jdk

# Install Android Studio (optional)
# Download Android Studio from official website and install it programmatically

# Set up Android SDK (optional)
# Set environment variables

# Set up React Native CLI
RUN npm install -g react-native-cli

# Set up project directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose ports for React Native development server
EXPOSE 8081
