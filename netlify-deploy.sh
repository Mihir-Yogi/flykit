#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Ensure _redirects file exists in the output directory
echo "Copying _redirects file to build output..."
cp _redirects dist/public/ 2>/dev/null || :
cp public/_redirects dist/public/ 2>/dev/null || :

# If neither file exists, create the _redirects file
if [ ! -f dist/public/_redirects ]; then
  echo "Creating _redirects file..."
  echo "/* /index.html 200" > dist/public/_redirects
fi

echo "Build complete and ready for Netlify deployment!"
echo "Upload the 'dist/public' folder to Netlify or use Netlify CLI to deploy."