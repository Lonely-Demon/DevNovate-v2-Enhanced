#!/bin/bash

# Combined script to setup and run the DevNovate-v2 application

# Run the setup script
./setup.sh

# If setup was successful, run the application
if [ $? -eq 0 ]; then
  echo "Setup completed, starting the application..."
  # Start the application
  ./run_dev.sh
else
  echo "Setup failed, please check the error messages above."
  exit 1
fi