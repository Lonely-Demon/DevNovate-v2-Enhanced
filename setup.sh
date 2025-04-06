#!/bin/bash

# DevNovate-v2 Project Setup Script
# This script clones the DevNovate-v2 repository and sets up the project environment

# Set text colors for better readability
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== DevNovate-v2 Project Setup ===${NC}"
echo "This script will clone the DevNovate-v2 repository and set up the project environment."
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}Git is not installed. Please install Git and try again.${NC}"
    exit 1
fi

# Create project directory
read -p "Enter the directory name for your project (default: DevNovate-v2): " PROJECT_DIR
PROJECT_DIR=${PROJECT_DIR:-DevNovate-v2}

if [ -d "$PROJECT_DIR" ]; then
    echo -e "${YELLOW}Directory $PROJECT_DIR already exists.${NC}"
    read -p "Do you want to delete it and continue? (y/n): " CONFIRM
    if [[ $CONFIRM == [yY] || $CONFIRM == [yY][eE][sS] ]]; then
        rm -rf "$PROJECT_DIR"
    else
        echo -e "${RED}Setup aborted.${NC}"
        exit 1
    fi
fi

# Clone the repository
echo -e "\n${BLUE}Cloning the DevNovate-v2 repository...${NC}"
if git clone https://github.com/Lonely-Demon/DevNovate-v2.git "$PROJECT_DIR"; then
    echo -e "${GREEN}Repository cloned successfully.${NC}"
else
    echo -e "${RED}Failed to clone the repository. Please check the URL and your internet connection.${NC}"
    exit 1
fi

# Enter the project directory
cd "$PROJECT_DIR" || exit

# Detect project type and install dependencies
echo -e "\n${BLUE}Detecting project type and setting up dependencies...${NC}"

# Check for package.json (Node.js project)
if [ -f "package.json" ]; then
    echo -e "${YELLOW}Node.js project detected.${NC}"
    
    # Check if npm is installed
    if ! command -v npm &> /dev/null; then
        echo -e "${RED}npm is not installed. Please install Node.js and npm to proceed.${NC}"
        exit 1
    fi
    
    echo -e "${BLUE}Installing dependencies with npm...${NC}"
    if npm install; then
        echo -e "${GREEN}Dependencies installed successfully.${NC}"
    else
        echo -e "${RED}Failed to install dependencies.${NC}"
        exit 1
    fi
    
    # Check for React/Next.js project
    if grep -q "react\|next" package.json; then
        echo -e "${YELLOW}React/Next.js project detected.${NC}"
        FRONTEND_PORT=5000
        
        # Update package.json to use port 5000 if it's a frontend project
        if grep -q "\"start\":" package.json; then
            sed -i 's/"start": "next start"/"start": "next start -p 5000"/g' package.json
            sed -i 's/"start": "react-scripts start"/"start": "PORT=5000 react-scripts start"/g' package.json
            echo -e "${YELLOW}Updated start script to use port 5000${NC}"
        fi
    fi
fi

# Check for requirements.txt (Python project)
if [ -f "requirements.txt" ]; then
    echo -e "${YELLOW}Python project detected.${NC}"
    
    # Check if pip is installed
    if ! command -v pip &> /dev/null && ! command -v pip3 &> /dev/null; then
        echo -e "${RED}pip is not installed. Please install Python and pip to proceed.${NC}"
        exit 1
    fi
    
    # Set up a virtual environment
    echo -e "${BLUE}Setting up a virtual environment...${NC}"
    if command -v python3 &> /dev/null; then
        python3 -m venv venv
    else
        python -m venv venv
    fi
    
    # Activate the virtual environment
    echo -e "${BLUE}Activating virtual environment...${NC}"
    source venv/bin/activate
    
    # Install dependencies
    echo -e "${BLUE}Installing dependencies with pip...${NC}"
    if command -v pip3 &> /dev/null; then
        pip3 install -r requirements.txt
    else
        pip install -r requirements.txt
    fi
    
    echo -e "${GREEN}Dependencies installed successfully.${NC}"
    
    # Check for Django/Flask project and update to bind to 0.0.0.0:8000
    if grep -q "django\|flask" requirements.txt; then
        echo -e "${YELLOW}Django/Flask project detected. Backend will be configured to run on 0.0.0.0:8000${NC}"
        
        # Create or modify run script for backend
        echo '#!/bin/bash' > run_backend.sh
        
        if grep -q "django" requirements.txt; then
            echo 'python manage.py runserver 0.0.0.0:8000' >> run_backend.sh
        elif grep -q "flask" requirements.txt; then
            echo 'export FLASK_APP=app.py' >> run_backend.sh
            echo 'export FLASK_ENV=development' >> run_backend.sh
            echo 'flask run --host=0.0.0.0 --port=8000' >> run_backend.sh
        fi
        
        chmod +x run_backend.sh
        echo -e "${GREEN}Created run_backend.sh script to start the backend server${NC}"
    fi
fi

# Check for other project types
if [ -f "pom.xml" ]; then
    echo -e "${YELLOW}Java Maven project detected.${NC}"
    # Check if Maven is installed
    if ! command -v mvn &> /dev/null; then
        echo -e "${RED}Maven is not installed. Please install Maven to proceed.${NC}"
    else
        echo -e "${BLUE}Installing dependencies with Maven...${NC}"
        if mvn install; then
            echo -e "${GREEN}Dependencies installed successfully.${NC}"
        else
            echo -e "${RED}Failed to install dependencies.${NC}"
            exit 1
        fi
    fi
fi

if [ -f "build.gradle" ] || [ -f "build.gradle.kts" ]; then
    echo -e "${YELLOW}Gradle project detected.${NC}"
    # Check if Gradle is installed
    if ! command -v gradle &> /dev/null; then
        echo -e "${RED}Gradle is not installed. Please install Gradle to proceed.${NC}"
    else
        echo -e "${BLUE}Building project with Gradle...${NC}"
        if gradle build; then
            echo -e "${GREEN}Project built successfully.${NC}"
        else
            echo -e "${RED}Failed to build the project.${NC}"
            exit 1
        fi
    fi
fi

# Check for Docker/docker-compose
if [ -f "Dockerfile" ] || [ -f "docker-compose.yml" ]; then
    echo -e "${YELLOW}Docker configuration detected.${NC}"
    echo -e "${BLUE}Note: Docker support is not available in this environment.${NC}"
    echo -e "${YELLOW}You will need to run the application without Docker.${NC}"
fi

# Create a basic README if it doesn't exist
if [ ! -f "README.md" ]; then
    echo -e "\n${BLUE}Creating a basic README.md file...${NC}"
    
    cat > README.md << 'EOF'
# DevNovate-v2 Project

This is a working copy of the [DevNovate-v2](https://github.com/Lonely-Demon/DevNovate-v2) repository.

## Setup
This project was set up using the automated setup script.

## Running the Project
Refer to the original repository documentation for specific instructions on running the project.

### General Guidelines:
- For frontend: The application is configured to run on port 5000
- For backend: The application is configured to run on port 8000

## License
This project maintains the original license from the DevNovate-v2 repository.
EOF
    
    echo -e "${GREEN}Basic README.md created.${NC}"
fi

# Final instructions
echo -e "\n${GREEN}====== Setup Complete ======${NC}"
echo -e "${YELLOW}Project has been set up in the '${PROJECT_DIR}' directory.${NC}"
echo ""
echo -e "${BLUE}Next Steps:${NC}"

if [ -f "package.json" ]; then
    echo -e "1. To start the Node.js application:"
    echo -e "   cd ${PROJECT_DIR}"
    echo -e "   npm start${NC}"
    echo ""
fi

if [ -f "requirements.txt" ]; then
    echo -e "1. To activate the Python virtual environment:"
    echo -e "   cd ${PROJECT_DIR}"
    echo -e "   source venv/bin/activate"
    echo ""
    
    if [ -f "run_backend.sh" ]; then
        echo -e "2. To start the backend server:"
        echo -e "   ./run_backend.sh"
        echo ""
    fi
fi

echo -e "${BLUE}For more detailed instructions, please refer to the original repository documentation.${NC}"
echo -e "${GREEN}Happy coding with DevNovate-v2!${NC}"
