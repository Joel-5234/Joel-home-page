# Quick Deployment Guide

## 🚀 Quick Start

### 1. Build the Site
```bash
./scripts/build
```

This creates a `dist/` folder with all deployment files.

### 2. Deploy to GitHub Pages

**Repository**: https://github.com/Joel-5234/Joel-home-page.git

#### Automatic (Recommended)
1. Push to main branch
2. Enable GitHub Actions in Settings > Pages
3. Done! Site deploys automatically

#### Manual
```bash
# Copy dist files to root
cp dist/* .

# Commit and push
git add index.html styles.css script.js
git commit -m "Deploy site"
git push origin main
```

Then enable GitHub Pages in repository settings.

### 3. Your Site Will Be Live At:
**https://joel-5234.github.io/Joel-home-page/**

## 📦 What's in dist/

- `index.html` - Main HTML file
- `styles.css` - All CSS styles  
- `script.js` - All JavaScript functionality

## 📚 Full Documentation

See `docs/deployment.md` for detailed deployment instructions.

