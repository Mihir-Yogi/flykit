# Deploying to Netlify

This guide will help you deploy the Flykit Agency website to Netlify without running into 404 errors or other common issues.

## Method 1: Deploy via the Netlify UI

1. **Build locally first**:
   ```bash
   npm run build
   ```

2. **Copy the _redirects file to the build output**:
   ```bash
   # After building, run:
   node postbuild.js
   ```
   
3. **Upload to Netlify**:
   - Go to [Netlify](https://app.netlify.com/)
   - Drag and drop the entire `dist/public` folder to the Netlify UI
   - Wait for the upload to complete

## Method 2: Connect to a Git repository

1. **Push your code to GitHub, GitLab, or Bitbucket**

2. **Connect Netlify to your repository**:
   - Go to [Netlify](https://app.netlify.com/)
   - Click "New site from Git"
   - Select your repository

3. **Configure the build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Advanced build settings: Add environment variable NODE_ENV with value `production`

4. **Deploy the site**:
   - Click "Deploy site"
   - Wait for the build and deployment to complete

## Fixing 404 Errors

The 404 errors occur because Netlify doesn't know how to handle client-side routing. We've addressed this with two methods:

1. **netlify.toml file**: This configuration file tells Netlify to redirect all requests to index.html
2. **_redirects file**: A simpler alternative that accomplishes the same thing

Both files are included in this project. The netlify.toml file takes precedence if both are present.

## Verifying Your Deployment

After deploying, test these scenarios:

1. **Refresh the page**: Navigate to a page and refresh - it should still work
2. **Direct URL access**: Enter a direct URL (like yourdomain.netlify.app/about) - it should load properly
3. **Navigation**: Click through the site navigation - all links should work

## Troubleshooting

If you still encounter 404 errors:

1. **Check Netlify's deploy logs** for any errors
2. **Verify the _redirects file** was included in your deployment
3. **Clear your browser cache** and try again
4. **Check the Netlify dashboard** for any deployment issues

## Further Optimizations

Consider these additional optimizations:

1. **Custom domain**: Set up a custom domain in the Netlify settings
2. **HTTPS**: Netlify provides free SSL certificates
3. **Form handling**: Use Netlify Forms for the contact form
4. **Prerendering**: Enable prerendering for improved SEO