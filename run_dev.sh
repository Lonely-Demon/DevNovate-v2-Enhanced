#!/bin/bash

# Script to run the DevNovate-v2 application
echo "Starting DevNovate-v2 development server..."

# Navigate to project directory
cd DevNovate-v2 || { echo "DevNovate-v2 directory not found"; exit 1; }

# Start the development server
PORT=5000 npm run dev