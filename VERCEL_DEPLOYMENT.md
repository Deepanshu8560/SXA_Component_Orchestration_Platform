# Deploying Sitecore SXA Component Library to Vercel

## 📋 Prerequisites

Before deploying to Vercel, ensure you have:
- A GitHub account
- A Vercel account (sign up at https://vercel.com)
- Git installed on your machine
- Your project pushed to a GitHub repository

---

## 🚀 Deployment Steps

### Step 1: Prepare Your Project for Deployment

**1.1 Build Static Storybook**

```bash
cd d:\Sitecore
npm run build-storybook
```

This creates a static build in the `storybook-static` folder.

**1.2 Create vercel.json Configuration**

Create a `vercel.json` file in your project root:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "storybook-static"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

**1.3 Update package.json**

Add a build script for Vercel in your `package.json`:

```json
{
  "scripts": {
    "build": "npm run build-storybook",
    "vercel-build": "npm run build-storybook"
  }
}
```

**1.4 Create .vercelignore**

Create a `.vercelignore` file to exclude unnecessary files:

```
node_modules
.storybook
src
*.log
.DS_Store
```

---

### Step 2: Push to GitHub

**2.1 Initialize Git (if not already done)**

```bash
git init
```

**2.2 Create .gitignore**

Ensure you have a `.gitignore` file:

```
node_modules/
storybook-static/
dist/
.DS_Store
*.log
.env
.env.local
```

**2.3 Commit Your Changes**

```bash
git add .
git commit -m "Prepare Sitecore SXA Component Library for Vercel deployment"
```

**2.4 Create GitHub Repository**

1. Go to https://github.com/new
2. Create a new repository (e.g., `sitecore-sxa-component-library`)
3. Don't initialize with README (you already have one)

**2.5 Push to GitHub**

```bash
git remote add origin https://github.com/YOUR_USERNAME/sitecore-sxa-component-library.git
git branch -M main
git push -u origin main
```

---

### Step 3: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

**3.1 Login to Vercel**

1. Go to https://vercel.com
2. Click "Login" or "Sign Up"
3. Sign in with your GitHub account

**3.2 Import Project**

1. Click "Add New..." → "Project"
2. Select "Import Git Repository"
3. Find your `sitecore-sxa-component-library` repository
4. Click "Import"

**3.3 Configure Project**

1. **Framework Preset**: Select "Other" or "Storybook"
2. **Root Directory**: Leave as `./`
3. **Build Command**: `npm run build-storybook`
4. **Output Directory**: `storybook-static`
5. **Install Command**: `npm install`

**3.4 Deploy**

1. Click "Deploy"
2. Wait for the build to complete (2-5 minutes)
3. Your site will be live at `https://your-project-name.vercel.app`

#### Option B: Deploy via Vercel CLI

**3.1 Install Vercel CLI**

```bash
npm install -g vercel
```

**3.2 Login to Vercel**

```bash
vercel login
```

**3.3 Deploy**

```bash
# From your project directory
cd d:\Sitecore

# Deploy to production
vercel --prod
```

**3.4 Follow Prompts**

- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? `sitecore-sxa-component-library`
- In which directory is your code located? `./`
- Want to override settings? **N**

---

### Step 4: Configure Custom Domain (Optional)

**4.1 Add Custom Domain**

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Enter your custom domain
4. Follow DNS configuration instructions

**4.2 Update DNS Records**

Add the following records to your domain provider:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

### Step 5: Environment Variables (If Needed)

If you have any environment variables:

1. Go to "Settings" → "Environment Variables"
2. Add variables:
   - `NODE_ENV` = `production`
   - Add any other required variables

---

### Step 6: Verify Deployment

**6.1 Check Build Logs**

1. Go to "Deployments" tab
2. Click on the latest deployment
3. Check build logs for any errors

**6.2 Test Your Site**

Visit your Vercel URL and verify:
- ✅ All components load correctly
- ✅ Theme switcher works
- ✅ Language switcher works
- ✅ Experience Editor toggle works
- ✅ All variants display properly
- ✅ Responsive design works

---

## 🔄 Continuous Deployment

### Automatic Deployments

Vercel automatically deploys when you push to GitHub:

**Production Deployments** (main branch):
```bash
git add .
git commit -m "Update components"
git push origin main
```

**Preview Deployments** (feature branches):
```bash
git checkout -b feature/new-component
git add .
git commit -m "Add new component"
git push origin feature/new-component
```

Each branch gets its own preview URL!

---

## 🛠️ Troubleshooting

### Build Fails

**Error**: `Command "npm run build-storybook" exited with 1`

**Solution**:
```bash
# Test build locally first
npm run build-storybook

# Check for errors
# Fix any issues
# Commit and push again
```

### Missing Dependencies

**Error**: `Cannot find module 'xyz'`

**Solution**:
```bash
# Ensure all dependencies are in package.json
npm install xyz --save

# Commit package.json and package-lock.json
git add package.json package-lock.json
git commit -m "Add missing dependency"
git push
```

### Storybook Not Loading

**Error**: Blank page or 404 errors

**Solution**:
1. Check `vercel.json` configuration
2. Verify `storybook-static` folder is generated
3. Check build logs in Vercel dashboard

### Theme/Language Switcher Not Working

**Solution**:
1. Ensure all JavaScript files are included in build
2. Check browser console for errors
3. Verify localStorage is accessible

---

## 📊 Deployment Checklist

Before deploying, ensure:

- [ ] `npm run build-storybook` works locally
- [ ] All components render without errors
- [ ] Theme switching works
- [ ] Language switching works (including RTL)
- [ ] Experience Editor toggle works
- [ ] All images/assets are included
- [ ] package.json has correct build scripts
- [ ] .gitignore excludes node_modules and build folders
- [ ] README.md is updated with deployment URL
- [ ] vercel.json is configured correctly

---

## 🎯 Post-Deployment

### Update README

Add your deployment URL to README.md:

```markdown
## 🌐 Live Demo

View the live component library: https://your-project.vercel.app
```

### Share with Team

Share the Vercel URL with:
- Development team
- Designers
- Content editors
- Stakeholders

### Monitor Performance

1. Go to Vercel Dashboard → Analytics
2. Monitor:
   - Page load times
   - Visitor statistics
   - Build times

---

## 🔐 Security Best Practices

1. **Environment Variables**: Never commit sensitive data
2. **Access Control**: Use Vercel's password protection for staging
3. **HTTPS**: Vercel provides free SSL certificates
4. **Headers**: Configure security headers in vercel.json:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## 📱 Quick Commands Reference

```bash
# Build locally
npm run build-storybook

# Deploy to Vercel (CLI)
vercel --prod

# Check deployment status
vercel ls

# View deployment logs
vercel logs

# Remove deployment
vercel remove [deployment-url]
```

---

## 🆘 Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Storybook Deployment**: https://storybook.js.org/docs/react/sharing/publish-storybook
- **Vercel Support**: https://vercel.com/support

---

## ✅ Success!

Your Sitecore SXA Component Library is now live on Vercel! 🎉

**Next Steps**:
1. Share the URL with your team
2. Set up custom domain (optional)
3. Configure analytics
4. Continue developing components

**Deployment URL**: `https://your-project-name.vercel.app`

---

**Last Updated**: December 18, 2024  
**Deployment Platform**: Vercel  
**Build Time**: ~2-5 minutes
