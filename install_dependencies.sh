#!/bin/bash

# Script to install additional dependencies for the DevNovate-v2 project
echo "Installing additional dependencies for DevNovate-v2..."

# Navigate to project directory
cd DevNovate-v2 || { echo "DevNovate-v2 directory not found"; exit 1; }

# Install react-icons
echo "Installing react-icons..."
npm install react-icons

echo "Dependencies installed successfully!"