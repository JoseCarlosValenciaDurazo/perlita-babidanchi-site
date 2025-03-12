
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Create a static version for GitHub Pages
console.log('Building for GitHub Pages...');

try {
  // Build the client using the GitHub-specific config
  execSync('npx vite build --config vite.config.github.ts', { stdio: 'inherit' });
  
  // Copy index.html to 404.html for GitHub Pages routing
  const distDir = path.resolve('dist', 'github');
  fs.copyFileSync(
    path.join(distDir, 'index.html'),
    path.join(distDir, '404.html')
  );
  
  // Create a .nojekyll file to prevent Jekyll processing
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
  
  // Create a custom 404 page that redirects to index with the path
  const redirectScript = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    // Redirect with the correct base path
    const segment = window.location.pathname.replace(/^\\/perlita-babidanchi-site\\/?/, '');
    window.location.href = '/perlita-babidanchi-site/#/' + segment;
  </script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
  `;
  
  fs.writeFileSync(path.join(distDir, '404.html'), redirectScript);
  
  console.log('Build completed successfully! Files are in dist/github directory.');
  console.log('To deploy to GitHub Pages:');
  console.log('1. Create a GitHub repository');
  console.log('2. Push the contents of the dist/github directory to the gh-pages branch');
  console.log('3. Enable GitHub Pages in your repository settings');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
