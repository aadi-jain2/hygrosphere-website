# How to Upload to GitHub

Follow these steps to put your Hygrosphere website on GitHub.

## Step 1: Install Git (if not installed)

1. Download Git from: https://git-scm.com/download/win
2. Run the installer (use default settings)
3. Restart your terminal/command prompt after installing

## Step 2: Create a GitHub Account (if you don't have one)

1. Go to: https://github.com
2. Click "Sign up"
3. Create your account

## Step 3: Create a New Repository on GitHub

1. Log into GitHub
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `hygrosphere-website` (or any name you want)
4. Description: "Marketing website for Hygrosphere - A solar water station for off-grid communities"
5. Choose **Public** (so people can see it)
6. **DO NOT** check "Initialize with README" (we already have files)
7. Click **"Create repository"**

## Step 4: Upload Your Code

Open your terminal/command prompt in the `hygrosphere-website` folder and run these commands:

### First time setup (if needed):
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Initialize and push to GitHub:
```bash
# Navigate to your project folder
cd C:\Users\dnsja\Downloads\udaan\hygrosphere-website

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Hygrosphere marketing website"

# Add GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/hygrosphere-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** When you run `git push`, GitHub will ask for your username and password. 
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your regular password)

### How to create a Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Name it: "Hygrosphere Website"
4. Select scopes: Check **"repo"** (full control of private repositories)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when pushing

## Step 5: Share Your Repository

Once uploaded, you can share the link:
```
https://github.com/YOUR_USERNAME/hygrosphere-website
```

## Alternative: Using GitHub Desktop (Easier!)

If you prefer a visual interface:

1. Download GitHub Desktop: https://desktop.github.com/
2. Install and sign in with your GitHub account
3. File → Add Local Repository
4. Browse to `C:\Users\dnsja\Downloads\udaan\hygrosphere-website`
5. Click "Publish repository" button
6. Choose name and make it Public
7. Click "Publish repository"

## Troubleshooting

### "git is not recognized"
- Install Git from https://git-scm.com/download/win
- Restart your terminal after installing

### "Authentication failed"
- Make sure you're using a Personal Access Token, not your password
- Create a new token if needed

### "Repository not found"
- Check that you created the repository on GitHub first
- Make sure the repository name matches in the `git remote add origin` command

