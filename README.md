# NexusBot Pro Landing Page

Static landing page ready for GitHub + Cloudflare Pages.

## What to Upload

Upload the contents of this folder as the root of your GitHub repository:

- `index.html`
- `assets/`
- `_headers`
- `_redirects`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`

## Cloudflare Pages Settings

Use these settings when connecting the GitHub repo:

- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/`
- Root directory: `/` if you uploaded this folder as the repo root

If you put this folder inside a larger repo, set the Cloudflare Pages root directory to:

```text
nexusbot-pro-landing
```

## Replace the Download Link

All download buttons are controlled from:

```text
assets/js/main.js
```

Replace this value:

```js
const DOWNLOAD_URL =
  "https://raw.githubusercontent.com/example/nexusbot-pro/main/downloads/NexusBotPro-Latest.zip";
```

with your real GitHub raw download URL.

## Included Assets

- Real dashboard screenshot: `assets/images/app-dashboard-real.png`
- Chart/detail screenshot: `assets/images/app-chart-detail.png`
- Positions/detail screenshot: `assets/images/app-positions-detail.png`
- Market/risk panel screenshot: `assets/images/app-market-risk-detail.png`
- Social/thumbnail image: `assets/images/social-preview.png`
- Promo video: `assets/video/nexusbot-pro-promo.mp4`
- Logo/favicons: `assets/icons/`

## Local Preview

From this folder:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```
