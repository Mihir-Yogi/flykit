# Flykit Agency Website - Local Setup Instructions

This guide will help you set up and run the Flykit Agency website on your local machine.

## Prerequisites

Before starting, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

## Step 1: Extract the ZIP File

1. Extract the `flykit-agency.zip` file to a folder on your computer

## Step 2: Install Dependencies

1. Open a terminal or command prompt
2. Navigate to the extracted project folder
3. Run the following command to install the required dependencies:

```bash
npm install
```

## Step 3: Start the Development Server

1. After the dependencies are installed, run the following command to start the development server:

```bash
npm run dev
```

2. The server will start and you should see output similar to:
```
> rest-express@1.0.0 dev
> NODE_ENV=development tsx server/index.ts
[express] serving on port 5000
```

3. Open your web browser and navigate to:
```
http://localhost:5000
```

## Project Structure

Here's an overview of the main project structure:

- `client/` - Frontend React application
  - `src/components/` - Reusable UI components
  - `src/pages/` - Website pages
  - `src/hooks/` - Custom React hooks
  - `src/lib/` - Utility functions
- `server/` - Backend Express server
- `shared/` - Shared code between frontend and backend

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Runs the production build

## Features

- Responsive design that works on mobile, tablet, and desktop
- Dark/light theme support
- Animated UI components using Framer Motion
- Contact form submission
- Smooth scrolling navigation

## Technologies Used

- React with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Express.js for the backend server
- Zod for form validation

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed correctly
2. Check that you're using a compatible Node.js version
3. Ensure port 5000 is not being used by another application

For additional help, check the console output for error messages.