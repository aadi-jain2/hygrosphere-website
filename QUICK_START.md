# Quick Start Guide - How to View the Website

## Step 1: Open Terminal/Command Prompt

- **Windows**: Press `Win + R`, type `cmd` or `powershell`, press Enter
- **Mac**: Press `Cmd + Space`, type `Terminal`, press Enter
- **VS Code**: Press `` Ctrl + ` `` (backtick) to open integrated terminal

## Step 2: Navigate to the Project Folder

```bash
cd hygrosphere-website
```

(Or navigate to wherever you saved the `hygrosphere-website` folder)

## Step 3: Install Dependencies

First time only - this downloads all the required packages:

```bash
npm install
```

This may take 1-2 minutes. You'll see progress bars downloading packages.

## Step 4: Start the Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

## Step 5: Open in Browser

The website will automatically open in your default browser at:
**http://localhost:3000**

If it doesn't open automatically, copy `http://localhost:3000` and paste it into your browser.

## That's It! 🎉

You should now see the Hygrosphere website with:
- Home page with hero section
- Navigation to all 6 pages
- All the content we created

## Troubleshooting

### "npm is not recognized"
- Install Node.js from https://nodejs.org/ (download LTS version)
- Restart your terminal after installing

### "Port 3000 is already in use"
- Close any other applications using port 3000
- Or change the port in `vite.config.js`

### "Cannot find module"
- Make sure you're in the `hygrosphere-website` folder
- Run `npm install` again

### To Stop the Server
- Press `Ctrl + C` in the terminal

### To Run Again Later
- Just run `npm run dev` (no need to install again)

## Building for Production

If you want to create a production build:

```bash
npm run build
```

This creates a `dist` folder with optimized files you can deploy to any web hosting service.

