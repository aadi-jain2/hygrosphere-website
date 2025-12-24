# How to Enable GitHub Pages (Show Website Interface)

Follow these steps to make your GitHub repository show the actual website when people visit it.

## Step 1: Push the Updated Files

I've created a GitHub Actions workflow file. You need to push it to your repository:

1. **If using GitHub Desktop:**
   - The new files should appear in GitHub Desktop
   - Write commit message: "Add GitHub Pages deployment"
   - Click "Commit to main"
   - Click "Push origin"

2. **If using Git commands:**
   ```bash
   cd C:\Users\dnsja\Downloads\udaan\hygrosphere-website
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push
   ```

## Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/aadi-jain2/hygrosphere-website
2. Click **Settings** (top right of the repository page)
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select: **GitHub Actions**
5. The page will save automatically

## Step 3: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait 2-3 minutes for it to complete (you'll see a green checkmark when done)

## Step 4: Access Your Website

Once deployment is complete, your website will be available at:

```
https://aadi-jain2.github.io/hygrosphere-website/
```

**Note:** It may take a few minutes after the workflow completes for the site to be accessible.

## What Changed?

- Added `.github/workflows/deploy.yml` - Automatically builds and deploys your site
- Updated `vite.config.js` - Added base path for GitHub Pages
- Updated `App.jsx` - Changed to HashRouter for GitHub Pages compatibility

## Troubleshooting

- **Site shows 404:** Wait 5-10 minutes after deployment completes
- **Workflow fails:** Check the Actions tab for error messages
- **Site not updating:** Make sure you pushed the latest changes

Your website will now be live and accessible to anyone with the link!

