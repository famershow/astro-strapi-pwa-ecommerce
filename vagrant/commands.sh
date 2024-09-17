# Update the package list
sudo apt-get update

# Upgrade all the packages to their latest versions
sudo apt-get upgrade

# Download and run the Node.js setup script from the NodeSource repository for Node.js version 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Install Node.js
sudo apt-get install -y nodejs

# Install pnpm globally using npm
sudo npm install -g pnpm

# Install yarn globally using npm
sudo npm install -g yarn
