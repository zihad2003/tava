# ☁️ Cloudflare Pages Deployment Guide — Tava Restaurant

This repository is pre-configured and optimized for seamless, ultra-fast deployments on **Cloudflare Pages**. 

Every time you push a commit to the `main` branch of your GitHub repository (`https://github.com/zihad2003/tava`), Cloudflare will automatically build and update your website live!

---

## 🛠️ Step-by-Step Deployment Instructions

### 1. Connect GitHub Repository to Cloudflare Pages
1. Sign in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. On the left sidebar, navigate to **Workers & Pages** -> **Overview**.
3. Click the **Create** button and select the **Pages** tab.
4. Click **Connect to Git**.
5. Log into your GitHub account and select your repository: `zihad2003/tava`.
6. Click **Begin setup**.

### 2. Configure Build & Build Settings
On the **Configure builds and deployments** page, enter these exact settings:
* **Project Name**: `tava` (or your preferred subdomain)
* **Production Branch**: `main`
* **Framework Preset**: Select **Vite** (or **None**)
* **Build Command**: `npm run build`
* **Build Output Directory**: `dist`
* **Root Directory**: Leave blank (`/`)

### 3. Click "Save and Deploy" 🚀
* Cloudflare will now clone your code, automatically compile it using Node 20 (as defined in our `.node-version` file), and publish your website to a secure `https://tava.pages.dev` subdomain!

---

## 💎 Pre-Configured Cloudflare Environment Files Included

We have pre-configured these critical files in the codebase to make your deployment flawless:
1. **[`.node-version`](file:///d:/Tava/.node-version)**: Tells the Cloudflare compiler to use Node.js 20, ensuring maximum compilation compatibility.
2. **[`public/_redirects`](file:///d:/Tava/public/_redirects)**: An essential Cloudflare rewrite file (`/* /index.html 200`). This ensures that client-side page refreshes (like loading `/menu` directly) load flawlessly without throwing Cloudflare 404 errors!
