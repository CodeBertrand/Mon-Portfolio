# Portfolio

Bertrand Houtoumtai Boukar's personal portfolio. Built with React + Vite.

## How this is organized

The content lives in `src/data/` — this is the only place you should need to
edit day to day:

| File | What it controls |
|---|---|
| `src/data/profile.js` | Name, bio, headline, links, photo |
| `src/data/projects.js` | The project cards on the site |
| `src/data/skills.js` | The skills grid |
| `src/data/currently.js` | The "Currently" list |

Adding a new project, for example, means adding one object to the array in
`src/data/projects.js` — you never need to touch the layout or CSS.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that automatically builds and deploys to GitHub Pages on every push to `main`.

One-time setup:
1. Push this repo to GitHub.
2. Go to **Settings → Pages** in the repo.
3. Under "Build and deployment", set **Source** to **GitHub Actions**.
4. Push to `main` — the site deploys automatically within a minute or two.

### Important: the `base` path

In `vite.config.js`, the `base` option must match how your site is hosted:

- If your repo is named `portfolio` → keep `base: "/portfolio/"`.
- If your repo is named `<your-username>.github.io` (the special
  "profile site" repo) → change it to `base: "/"`.

### Using a custom domain (e.g. `.dev`)

1. Buy the domain (GitHub Student Pack often includes a free/discounted
   domain via Namecheap).
2. In the repo, add a file `public/CNAME` containing just your domain, e.g.:
   ```
   bertrand.dev
   ```
3. In your domain registrar, point the domain's DNS to GitHub Pages
   (GitHub's docs explain the exact records to add).
4. Set `base: "/"` in `vite.config.js` when using a custom domain.
