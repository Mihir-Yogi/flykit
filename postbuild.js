// postbuild.js
import { copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  // Copy _redirects file to dist/public
  copyFileSync(
    join(__dirname, '_redirects'), 
    join(__dirname, 'dist', 'public', '_redirects')
  );
  console.log('Successfully copied _redirects file to dist/public');
} catch (err) {
  console.error('Error copying _redirects file:', err);
}