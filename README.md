# DevNovate-v2 Project Setup

This project provides an automated setup script for cloning and configuring the [DevNovate-v2](https://github.com/Lonely-Demon/DevNovate-v2) repository.

## Getting Started

Follow these steps to set up the project:

1. Make the setup script executable:
   ```
   chmod +x setup.sh
   ```

2. Run the setup script:
   ```
   ./setup.sh
   ```

3. Follow the prompts in the script to complete the setup process.

## What the Setup Script Does

The setup script performs the following tasks:

1. Clones the DevNovate-v2 repository from GitHub
2. Detects the project type (Node.js, Python, Java, etc.)
3. Installs dependencies based on the project type
4. Sets up appropriate development environment (e.g., virtual environment for Python)
5. Configures frontend applications to bind to port 5000 and backend applications to bind to port 8000
6. Creates helper scripts for running the application

## Project Configuration

- Frontend applications are configured to bind to port 5000 (0.0.0.0:5000)
- Backend applications are configured to bind to port 8000 (0.0.0.0:8000)

## Troubleshooting

If you encounter issues during setup:

1. Ensure you have the required tools installed (Git, Node.js, Python, etc.)
2. Check your internet connection
3. Verify that you have appropriate permissions for the target directory

## License

This setup script is provided as-is and maintains the original license from the DevNovate-v2 repository.
