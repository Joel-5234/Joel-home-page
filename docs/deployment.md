# Deployment Guide

This guide explains how to deploy Joel's Personal Website to GitHub Pages.

## Repository

- **GitHub Repository**: https://github.com/Joel-5234/Joel-home-page.git
- **GitHub Pages URL**: https://joel-5234.github.io/Joel-home-page/ (after deployment)

## Prerequisites

- Git installed and configured
- Access to the GitHub repository
- GitHub Pages enabled in repository settings

## Build Process

The site is packaged into a `dist/` folder containing only the essential files:

```bash
./scripts/build
```

This creates:
- `dist/index.html` - Main HTML file
- `dist/styles.css` - All CSS styles
- `dist/script.js` - All JavaScript functionality

## Deployment Methods

### Method 1: GitHub Actions (Automatic - Recommended)

This is the easiest method. The repository includes a GitHub Actions workflow that automatically builds and deploys when you push to the main branch.

#### Steps:

1. **Build the site locally** (optional, for testing):
   ```bash
   ./scripts/build
   ```

2. **Commit and push your changes**:
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

3. **Enable GitHub Pages with GitHub Actions**:
   - Go to your repository on GitHub
   - Click Settings > Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

4. **The workflow will automatically**:
   - Build the site
   - Deploy it to GitHub Pages
   - Make it available at: `https://joel-5234.github.io/Joel-home-page/`

#### Workflow File

The workflow is located at: `.github/workflows/deploy.yml`

It runs on:
- Push to `main` branch
- Manual trigger (workflow_dispatch)

### Method 2: Manual Deployment to Root

Deploy the files directly to the repository root:

1. **Build the site**:
   ```bash
   ./scripts/build
   ```

2. **Copy files to root**:
   ```bash
   cp dist/index.html .
   cp dist/styles.css .
   cp dist/script.js .
   ```

3. **Commit and push**:
   ```bash
   git add index.html styles.css script.js
   git commit -m "Deploy site"
   git push origin main
   ```

4. **Enable GitHub Pages**:
   - Go to Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: "main" / "/ (root)"
   - Click Save

### Method 3: Deploy to gh-pages Branch

Deploy to a separate `gh-pages` branch:

1. **Build the site**:
   ```bash
   ./scripts/build
   ```

2. **Deploy to gh-pages branch**:
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

3. **Enable GitHub Pages**:
   - Go to Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: "gh-pages" / "/ (root)"
   - Click Save

## Verifying Deployment

After deployment, verify the site is working:

1. Visit: https://joel-5234.github.io/Joel-home-page/
2. Check that all sections load correctly
3. Test navigation links
4. Verify responsive design on mobile

## Troubleshooting

### Site not updating

- GitHub Pages can take a few minutes to update
- Check the Actions tab for deployment status
- Clear browser cache and try again

### 404 errors

- Ensure `index.html` is in the root of the deployed branch
- Check that GitHub Pages is enabled in Settings
- Verify the branch name matches your Pages source

### Build errors

- Check that all required files exist (index.html, styles.css, script.js)
- Run `./scripts/build` locally to test
- Check GitHub Actions logs for errors

## Updating the Site

To update the site:

1. Make changes to `index.html`, `styles.css`, or `script.js`
2. Build: `./scripts/build`
3. Commit and push: `git add . && git commit -m "Update site" && git push`
4. GitHub Actions will automatically deploy (if using Method 1)

## Local Testing Before Deployment

Always test locally before deploying:

```bash
# Build the site
./scripts/build

# Test the dist folder
cd dist
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Notes

- The `dist/` folder is included in git for easy deployment
- The GitHub Actions workflow automatically builds from source files
- All deployment methods result in the same final site
- The site is a static site, so no server-side processing is needed

