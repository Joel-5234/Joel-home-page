# GitHub Actions Deployment Setup

## ✅ Workflow Configuration

The GitHub Actions workflow is already configured at `.github/workflows/deploy.yml`.

**What it does:**
- Automatically builds the site when you push to `main` branch
- Packages files into `dist/` folder
- Deploys to GitHub Pages automatically
- Can also be triggered manually from the Actions tab

## 🚀 Setup Steps

### Step 1: Add Git Remote (if not already added)

```bash
git remote add origin https://github.com/Joel-5234/Joel-home-page.git
```

### Step 2: Initial Commit and Push

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Joel's personal website with GitHub Actions deployment"

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages with GitHub Actions

1. Go to your repository: https://github.com/Joel-5234/Joel-home-page
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Click **Save**

### Step 4: Verify Deployment

1. Go to the **Actions** tab in your repository
2. You should see the workflow running (or completed)
3. Once complete, your site will be live at:
   **https://joel-5234.github.io/Joel-home-page/**

## 🔄 Future Updates

After the initial setup, any push to `main` will automatically:
1. Build the site
2. Deploy to GitHub Pages
3. Update your live site

Just commit and push:
```bash
git add .
git commit -m "Update site"
git push
```

## 📋 Workflow Details

- **Triggers**: 
  - Push to `main` branch
  - Manual trigger from Actions tab
- **Build**: Runs `./scripts/build` to create `dist/` folder
- **Deploy**: Automatically deploys `dist/` contents to GitHub Pages
- **Status**: Check the Actions tab to see deployment status

## ⚠️ Important Notes

1. **First time setup**: You must enable GitHub Actions in Settings > Pages
2. **Permissions**: The workflow needs Pages write permissions (already configured)
3. **Build time**: First deployment may take 2-3 minutes
4. **Updates**: Subsequent deployments are usually faster

## 🐛 Troubleshooting

### Workflow not running?
- Check that you pushed to the `main` branch
- Verify the workflow file exists at `.github/workflows/deploy.yml`
- Check repository Settings > Actions > General > Workflow permissions

### Pages not deploying?
- Make sure you selected "GitHub Actions" (not "Deploy from a branch") in Pages settings
- Check the Actions tab for error messages
- Verify the workflow completed successfully

### Site not updating?
- GitHub Pages can take a few minutes to update
- Clear browser cache
- Check the Actions tab to see if deployment completed

