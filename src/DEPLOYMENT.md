# 🚀 Deployment Guide - Vaarahi Silks

Complete guide to deploy your Vaarahi Silks e-commerce website to production.

## 📋 Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Build for Production](#build-for-production)
3. [Deployment Options](#deployment-options)
   - [Vercel (Recommended)](#vercel-recommended)
   - [Netlify](#netlify)
   - [GitHub Pages](#github-pages)
   - [AWS S3](#aws-s3)
   - [Custom Server](#custom-server)
4. [Post-Deployment](#post-deployment)
5. [Troubleshooting](#troubleshooting)

---

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All features working locally
- [ ] No console errors
- [ ] Responsive on all devices
- [ ] Images loading correctly
- [ ] Forms validating properly
- [ ] Shopping cart functioning
- [ ] Payment flow complete
- [ ] All dependencies installed
- [ ] Code committed to Git (if using)

### Test Production Build Locally

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

Visit `http://localhost:4173` and test thoroughly.

---

## 🏗️ Build for Production

### Step 1: Create Production Build

```bash
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Bundle and minify code
- Optimize assets
- Generate static files in `dist/` folder

### Step 2: Verify Build

```bash
# Check dist folder
ls -la dist/

# Should see:
# - index.html
# - assets/ (JS and CSS files)
```

### Build Output

```
dist/
├── assets/
│   ├── index-[hash].js       # Optimized JavaScript
│   ├── index-[hash].css      # Optimized CSS
│   └── [image files]         # Optimized images
└── index.html                # Entry HTML file
```

---

## 🌐 Deployment Options

### 1️⃣ Vercel (Recommended) ⭐

**Why Vercel?**
- Built for Vite apps
- Automatic deployments
- Free SSL certificates
- Global CDN
- Zero configuration

#### Method A: Using Vercel CLI

**Step 1: Install Vercel CLI**

```bash
npm install -g vercel
```

**Step 2: Login**

```bash
vercel login
```

**Step 3: Deploy**

```bash
# From project root
vercel

# For production
vercel --prod
```

#### Method B: Using Vercel Dashboard

1. Visit [vercel.com](https://vercel.com)
2. Sign up / Log in
3. Click "Add New Project"
4. Import from Git repository OR upload `dist/` folder
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

**Done!** Your site will be live at `https://your-project.vercel.app`

#### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for propagation (can take up to 48 hours)

---

### 2️⃣ Netlify

**Why Netlify?**
- Drag & drop deployment
- Continuous deployment from Git
- Free SSL
- Form handling
- Split testing

#### Method A: Drag & Drop

1. Build project: `npm run build`
2. Visit [app.netlify.com](https://app.netlify.com)
3. Drag `dist/` folder to upload area
4. **Done!** Site is live

#### Method B: Git Integration

1. Push code to GitHub/GitLab/Bitbucket
2. Login to [app.netlify.com](https://app.netlify.com)
3. Click "New site from Git"
4. Connect repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

#### Custom Domain

1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Follow DNS configuration steps

---

### 3️⃣ GitHub Pages

**Why GitHub Pages?**
- Free hosting
- Automatic from repository
- Great for open source

#### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

#### Step 2: Update package.json

Add homepage and deploy scripts:

```json
{
  "homepage": "https://your-username.github.io/vaarahi-silks",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### Step 3: Update vite.config.ts

Add base path:

```typescript
export default defineConfig({
  base: '/vaarahi-silks/', // Your repo name
  plugins: [react(), tailwindcss()],
  // ... rest of config
})
```

#### Step 4: Deploy

```bash
npm run deploy
```

Visit: `https://your-username.github.io/vaarahi-silks`

---

### 4️⃣ AWS S3 + CloudFront

**Why AWS?**
- Scalable
- Professional grade
- Full control

#### Step 1: Create S3 Bucket

```bash
# Using AWS CLI
aws s3 mb s3://vaarahi-silks-website
```

#### Step 2: Configure Bucket for Hosting

```bash
# Enable static website hosting
aws s3 website s3://vaarahi-silks-website \
  --index-document index.html \
  --error-document index.html
```

#### Step 3: Upload Build

```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://vaarahi-silks-website --delete
```

#### Step 4: Set Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::vaarahi-silks-website/*"
    }
  ]
}
```

#### Step 5: Setup CloudFront (Optional but Recommended)

1. Create CloudFront distribution
2. Origin: Your S3 bucket
3. Enable HTTPS
4. Configure custom domain

---

### 5️⃣ Custom Server (VPS/Dedicated)

**Requirements:**
- Web server (Nginx/Apache)
- SSH access
- Domain name

#### Using Nginx

**Step 1: Build Locally**

```bash
npm run build
```

**Step 2: Upload to Server**

```bash
# Using SCP
scp -r dist/* user@your-server:/var/www/vaarahi-silks/
```

**Step 3: Configure Nginx**

```nginx
server {
    listen 80;
    server_name vaarahisilks.com www.vaarahisilks.com;
    root /var/www/vaarahi-silks;
    index index.html;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

**Step 4: Enable SSL (Let's Encrypt)**

```bash
# Install certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d vaarahisilks.com -d www.vaarahisilks.com
```

**Step 5: Restart Nginx**

```bash
sudo systemctl restart nginx
```

---

## 🔧 Environment Variables

If you need environment variables in production:

### Vercel

1. Go to Project Settings → Environment Variables
2. Add variables with `VITE_` prefix
3. Redeploy

### Netlify

1. Go to Site Settings → Build & Deploy → Environment
2. Add variables
3. Redeploy

### Others

Create `.env.production`:

```env
VITE_API_URL=https://api.vaarahisilks.com
VITE_PAYMENT_KEY=pk_live_xxxxx
```

---

## 📊 Post-Deployment

### Verification Checklist

After deployment, verify:

- [ ] Site is accessible
- [ ] All pages load correctly
- [ ] No 404 errors
- [ ] Images display properly
- [ ] Forms work
- [ ] Shopping cart functions
- [ ] Mobile responsive
- [ ] SSL certificate active (HTTPS)
- [ ] Fast load times
- [ ] No console errors

### Performance Testing

```bash
# Using Lighthouse
npm install -g lighthouse

# Test your site
lighthouse https://your-site.com --view
```

### SEO Optimization

1. Add `robots.txt`:

```txt
User-agent: *
Allow: /
Sitemap: https://your-site.com/sitemap.xml
```

2. Add `sitemap.xml` (generate using tools)

3. Update meta tags in `index.html`:

```html
<meta name="description" content="Vaarahi Silks - Premium handloom silk sarees">
<meta property="og:title" content="Vaarahi Silks">
<meta property="og:image" content="https://your-site.com/og-image.jpg">
```

---

## 🐛 Troubleshooting

### Issue: 404 on Refresh

**Problem**: Page works on first load but 404 on refresh.

**Solution**: Configure server for SPA routing.

**Vercel**: Add `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Netlify**: Add `_redirects` in `public/`:
```
/* /index.html 200
```

### Issue: Assets Not Loading

**Problem**: CSS/JS files not loading.

**Solution**: Check base path in `vite.config.ts`:
```typescript
base: '/' // For root domain
base: '/subdirectory/' // For subdirectory
```

### Issue: Images Broken

**Problem**: Images show broken link icon.

**Solutions:**
1. Check image URLs (use relative paths)
2. Verify images in `public/` folder
3. Check network tab for 404s

### Issue: Slow Load Times

**Solutions:**
1. Enable Gzip compression
2. Use CDN (Vercel/Netlify have built-in)
3. Optimize images
4. Enable caching headers

### Issue: Environment Variables Not Working

**Problem**: `import.meta.env.VITE_*` is undefined.

**Solutions:**
1. Ensure variables start with `VITE_`
2. Restart dev server after adding vars
3. Check platform-specific config

---

## 🔒 Security Checklist

Before going live:

- [ ] Remove console.logs
- [ ] No sensitive data in code
- [ ] API keys in environment variables
- [ ] HTTPS enabled
- [ ] CORS configured properly
- [ ] Input validation on forms
- [ ] XSS protection
- [ ] CSRF protection for forms

---

## 📈 Monitoring

### Analytics

**Add Google Analytics:**

```html
<!-- In index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking

**Sentry (Optional):**

```bash
npm install @sentry/react
```

```typescript
// In main.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: "production",
});
```

---

## 🎯 Deployment Strategy

### Recommended Workflow

1. **Develop locally**: `npm run dev`
2. **Test locally**: `npm run build && npm run preview`
3. **Commit changes**: `git commit`
4. **Push to Git**: `git push`
5. **Auto-deploy**: Vercel/Netlify deploys automatically
6. **Verify**: Test production site
7. **Monitor**: Check analytics & errors

---

## 🌟 Best Practices

1. **Always test production build locally first**
2. **Use environment variables for sensitive data**
3. **Enable HTTPS (SSL)**
4. **Set up custom domain**
5. **Configure CDN for better performance**
6. **Monitor with analytics**
7. **Set up error tracking**
8. **Regular backups**
9. **Keep dependencies updated**
10. **Document deployment process**

---

## 📞 Support

### Platform Support

- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Netlify**: [netlify.com/support](https://netlify.com/support)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)
- **AWS**: [aws.amazon.com/support](https://aws.amazon.com/support)

---

## 🎉 Success!

Your Vaarahi Silks website is now live! 🚀

**Next Steps:**
- Share your live URL
- Test on different devices
- Monitor performance
- Collect user feedback
- Iterate and improve

---

## 📝 Deployment Comparison

| Platform | Difficulty | Cost | Speed | Features |
|----------|------------|------|-------|----------|
| **Vercel** | ⭐ Easy | Free | ⚡ Fast | Auto-deploy, CDN, SSL |
| **Netlify** | ⭐ Easy | Free | ⚡ Fast | Drag-drop, Forms, CDN |
| **GitHub Pages** | ⭐⭐ Medium | Free | 🚀 Good | Git integration |
| **AWS S3** | ⭐⭐⭐ Hard | $$ | ⚡⚡ Very Fast | Full control, Scalable |
| **Custom Server** | ⭐⭐⭐⭐ Expert | $$$ | Varies | Complete control |

---

**Ready to deploy?** Choose your platform and follow the steps!

**Need help?** Check troubleshooting section or platform docs.

**Happy deploying!** 🚀🎉

---

Made with ❤️ for Vaarahi Silks
