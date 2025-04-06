#!/bin/bash

# Setup script for DevNovate-v2
echo "Setting up DevNovate-v2..."

# Navigate to project directory
cd DevNovate-v2 || { echo "DevNovate-v2 directory not found"; exit 1; }

# Install dependencies
echo "Installing dependencies..."
npm install

# Set up the database (run migrations)
echo "Setting up database..."
npx drizzle-kit push:pg

echo "Setup completed successfully!"