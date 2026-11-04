# Vigneshwaran Panchatsaram — Portfolio

Personal portfolio for a NetSuite Technical Consultant, built with **React 18**, **Vite 5** and **Lucide React** icons. It has no other runtime dependencies.

## Requirements

- Node.js 18 or newer (20 LTS recommended)
- npm 9 or newer

## Run it locally

```bash
npm install
npm run dev        # starts the site at http://localhost:5173
```

## Production build

```bash
npm run build      # writes the optimized site to /dist
npm run preview    # serves /dist locally at http://localhost:4173 to check it
```

## Updating content

All text lives in `src/data/`. You rarely need to touch a component.

| What to change | File |
| --- | --- |
| Name, email, phone, LinkedIn, **GitHub URL**, **resume path**, availability badge | `src/data/site.js` |
| Skill groups and chips | `src/data/skills.js` |
| Projects, their data-flow diagrams and filter categories | `src/data/projects.js` |
| Custom solutions | `src/data/solutions.js` |
| Certifications and **verification links** | `src/data/certifications.js` |

### Things you should configure

1. **GitHub profile** — set `github` in `src/data/site.js`, e.g. `'https://github.com/your-username'`. While it is empty, every GitHub button is hidden, so there are no dead links.
2. **Resume PDF** — the current resume is at `public/Vigneshwaran_Panchatsaram_NetSuite_Resume.pdf`. To update it, replace that file. If you use a different file name, change `resume` in `src/data/site.js` to match.
3. **Certification verification links** — add each credential URL to `verifyUrl` in `src/data/certifications.js`. A "Verify credential" link appears on that card only when a URL is set.
4. **Availability badge** — hidden by default. Set `availability.show` to `true` in `src/data/site.js` to show it in the hero, and edit its `label`.
5. **Share preview image** — `public/og-image.png` is used when the site is shared on LinkedIn, WhatsApp and similar apps. Replace it with your own 1200×630 image if you like. Once the site has its final domain, you can make the `og:image` URL in `index.html` absolute (e.g. `https://your-domain.com/og-image.png`) for the most reliable previews.

### Adding a project

Add an object to the `projects` array in `src/data/projects.js`:

```js
{
  name: 'New Integration',
  category: 'Retail | Order Management',
  filter: 'Retail',            // must match one of projectFilters
  problem: 'What needed to change.',
  solution: 'What was built.',
  flow: [                      // drawn left to right on the card
    { label: 'External App', kind: 'ext' },
    { label: 'REST API', kind: 'mid' },
    { label: 'NetSuite', kind: 'ns' },
  ],
  bidirectional: false,
  contributions: ['What you did', 'What else you did'],
  tech: ['NetSuite', 'SuiteScript 2.1'],
}
```

### Adding a certification

Add an entry to `src/data/certifications.js`:

```js
{ name: 'Certification name', issuer: 'Oracle NetSuite', date: 'March 2027', verifyUrl: '' }
```

## Project structure

```
src/
  components/      Navbar, Hero, About, Skills, Experience, Projects, Solutions,
                   Certifications, Approach, Contact, Footer, BackToTop,
                   hooks.jsx (scroll reveal + active section), icons.jsx (LinkedIn/GitHub logos)
  data/            site.js, skills.js, projects.js, solutions.js, certifications.js
  App.jsx
  main.jsx
  index.css        All styles and design tokens (colors, fonts, spacing)
public/            favicon.svg, og-image.png, resume PDF
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Create the empty repository on GitHub first, without a README, so the first push goes through cleanly.

## Deploy on Vercel

**From the Vercel dashboard (easiest)**

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. Click **Add New → Project** and import the repository.
3. Vercel detects Vite automatically. The settings should be:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**. Every later push to `main` redeploys the site automatically.

**From the command line**

```bash
npm i -g vercel
vercel          # first deploy, follow the prompts
vercel --prod   # deploy to production
```

`vercel.json` already contains the build settings, so no extra configuration is needed. To use your own domain, open the project in Vercel → **Settings → Domains**.

## Accessibility and performance notes

- Keyboard friendly: skip link, visible focus rings, `Esc` closes the mobile menu, expandable project cards use `aria-expanded`.
- Respects the operating system's **reduced motion** setting by turning off animations and smooth scrolling.
- No images in the main page, so there is little to load and no layout shift. Fonts load from Google Fonts with `display=swap`.
