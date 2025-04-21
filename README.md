# Flykit Agency Website

A modern, responsive website for Flykit Agency, a creative tech agency specializing in branding, web design, and digital solutions for startups.

## Features

- 🌓 Dark/Light mode theming
- 🚀 Fast and responsive design
- ✨ Smooth animations and transitions
- 📱 Mobile-friendly interface
- 🔍 SEO optimized
- 🛠️ Built with React, TypeScript, and Express

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourname/flykit-agency.git
   cd flykit-agency
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   NODE_ENV=development
   ```

### Running the Development Server

```
npm run dev
```

This will start both the Express backend server and the Vite development server.

### Windows Users

For Windows users, the NODE_ENV environment variable needs to be set differently. We recommend installing the cross-env package:

```
npm install --save cross-env
```

Then update your package.json scripts to use cross-env:

```json
"scripts": {
  "dev": "cross-env NODE_ENV=development tsx server/index.ts",
  "start": "cross-env NODE_ENV=production node dist/index.js"
}
```

A pre-configured package.json file is provided in the root directory as `updated-package.json`.

## Building for Production

```
npm run build
```

This will generate a production-ready build in the `dist` directory.

## Deployment

See the `buildAndDeploy.txt` file for detailed deployment instructions.

## Project Structure

- `client/` - Frontend React application
  - `src/` - Source code
    - `components/` - UI components
    - `hooks/` - Custom React hooks
    - `lib/` - Utility functions
    - `pages/` - Page components
- `server/` - Backend Express server
- `shared/` - Shared code between frontend and backend
- `dist/` - Production build output (created after build)

## Contact

For questions or suggestions, please contact us at hello@flykit.agency.

## License

This project is licensed under the MIT License - see the LICENSE file for details.