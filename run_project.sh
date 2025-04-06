#!/bin/bash

# Script to install dependencies and run the DevNovate-v2 project
echo "Setting up and running DevNovate-v2..."

# Navigate to project directory
cd DevNovate-v2 || { echo "DevNovate-v2 directory not found"; exit 1; }

# Install dependencies
echo "Installing dependencies..."
npm install

# Set up the database (run migrations)
echo "Setting up database..."
npx drizzle-kit push:pg

# If database setup was successful, start the server
if [ $? -eq 0 ]; then
  echo "Database setup completed successfully."
  
  # Start the development server
  echo "Starting development server..."
  PORT=5000 npm run dev
else
  echo "Database setup failed. Please check the error messages above."
  exit 1
fi