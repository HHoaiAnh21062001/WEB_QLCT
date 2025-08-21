# client/README.md

# Fullstack Application

This is a fullstack application built with Node.js for the backend and Vue.js for the frontend. 

## Client Setup

To set up the client-side application, follow these steps:

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run serve
   ```

## Usage

The client application communicates with the backend API to fetch and manipulate data. You can access the application in your browser at `http://localhost:8080` (or the port specified in your configuration).

## Components

- **App.vue**: The root component of the application.
- **HelloWorld.vue**: A simple component that displays a message.

## Routing

The application uses Vue Router for navigation. Routes are defined in `src/router/index.js`.

## State Management

Vuex is used for state management. The store is set up in `src/store/index.js`.

## Additional Information

For more details on the server-side setup and API usage, please refer to the `server/README.md` file.