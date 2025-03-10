
# Mina Babidanchi Website

## GitHub Pages Deployment Instructions

This project can be deployed to GitHub Pages by following these steps:

1. Build the project for GitHub Pages:
```
npm run build:github
```

2. Create a new GitHub repository at https://github.com/new

3. Initialize the repository in the dist/github directory:
```
cd dist/github
git init
git add .
git commit -m "Initial GitHub Pages deployment"
```

4. Add your GitHub repository as remote and push:
```
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

5. Set up GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select "main" branch as the source
   - Save the settings

6. Your site will be published at: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/

Note: This is a static version of the site. Backend functionality is mocked for GitHub Pages.
