# How to Deploy the Website

Once your code is on GitHub, you can deploy it for free so people can view it online!

## Option 1: Netlify (Recommended - Easiest)

1. Go to: https://www.netlify.com
2. Sign up with your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Choose "Deploy with GitHub"
5. Select your `hygrosphere-website` repository
6. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Click "Deploy site"
8. Your site will be live at: `https://your-site-name.netlify.app`

## Option 2: Vercel

1. Go to: https://vercel.com
2. Sign up with your GitHub account
3. Click "Add New Project"
4. Import your `hygrosphere-website` repository
5. Framework Preset: **Vite**
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click "Deploy"
9. Your site will be live at: `https://your-site-name.vercel.app`

## Option 3: GitHub Pages

1. In your GitHub repository, go to **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Create `.github/workflows/deploy.yml` in your repo with:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. Your site will be at: `https://YOUR_USERNAME.github.io/hygrosphere-website`

## After Deployment

Share the live URL with people! They can view your website without needing to run it locally.

