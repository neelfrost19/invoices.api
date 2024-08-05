# Invoices API

Invoices API is a simple and efficient API for managing invoices. This project provides endpoints to create, read, update, and delete invoices. It's built using JavaScript and includes environment configuration and package management.

## Features

- Create new user
- Autheticate User
- Create invoice and render PDF

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDb

### Library used

- Joi
- Luxon
- Uuid
- Dotenv
- Winston
- Jsonwebtoken

### Installation

1. Clone the repository:
    git clone https://github.com/neelfrost19/invoices.api.git
   
3. Navigate to the project directory:
    cd invoices.api
   
5. Install the dependencies:
    npm install

### Configuration

1. Copy the example environment configuration file:
    cp .env.example .env
   
3. Edit the `.env` file with your configuration settings.

### Running the API

Start the server:
npm start
The API will be accessible at http://localhost:3000.

Project Structure
src/ - Contains the source code for the API
.env.example - Example environment configuration file
.gitignore - Specifies files to be ignored by Git
package.json - Project metadata and dependencies
