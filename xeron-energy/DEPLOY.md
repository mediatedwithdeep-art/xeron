# Deploying Xeron Energy to GitHub + Vercel

This is a **Next.js app** (App Router). Your "app and pages not found" error on Vercel
means Vercel was looking at the wrong folder — it needs to point at the folder that
contains `package.json` and `src/app`. Fix it one of two ways.

---

## ✅ Easiest path — push this folder as its own repo

The extracted `xeron-energy/` folder has `package.json` and `src/` directly inside it.
Make **that folder** the root of a brand-new repo so `package.json` sits at the repo root:

1. Create a **new, empty** GitHub repo (do **not** reuse a repo that has `index.html` /
   `book.html` at its root — those confuse Vercel).
2. From a terminal **inside the extracted `xeron-energy/` folder**:
   ```bash
   git init
   git add .
   git commit -m "Xeron Energy website"
   git branch -M main
   git remote add origin https://github.com/<you>/<new-repo>.git
   git push -u origin main
   ```
   (Confirm `package.json` is at the top of the repo on GitHub — not inside another folder.)
3. Go to **vercel.com → Add New → Project → Import** that repo.
4. Leave **every setting at its default** (Framework: Next.js, Root Directory: `./`,
   Build Command: `next build`). Click **Deploy**. Done.

Because `package.json` is at the repo root, Vercel auto-detects Next.js and it just works.

---

## Alternative — if your app stays inside a subfolder

If you keep the app inside a subfolder (e.g. `xeron-energy/`) of a larger repo, you must
tell Vercel where it is:

1. Vercel → your project → **Settings → Build and Deployment → Root Directory**.
2. Set **Root Directory** to the subfolder name, e.g. `xeron-energy`.
3. Save and **Redeploy**.

That single setting resolves the "couldn't find app or pages directory" error.

---

## Local run (to confirm before deploying)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — must pass before Vercel will succeed
npm run start
```

## Notes / gotchas

- **Node version:** requires Node **20.9+** (Next.js 16). Vercel's default is fine.
- **Don't commit** `node_modules/` or `.next/` — the included `.gitignore` already
  excludes them; Vercel rebuilds them.
- **Contact form:** `/api/contact` runs as a serverless function (works on Vercel out of
  the box). It currently logs leads server-side; wire it to your email/CRM/WhatsApp in
  `src/app/api/contact/route.ts`.
- **No environment variables are required** to deploy. `src/lib/site.ts` holds all content;
  update `site.url` there to your real domain when you have one.
