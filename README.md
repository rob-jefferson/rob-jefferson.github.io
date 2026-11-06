# On The Tools

Rob Jefferson's personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Writing

- **Post**: add `src/content/posts/my-title.md` with `title` and `date` front matter.
- **Note** (short, no title needed): add `src/content/notes/anything.md` with just a `date`.
- Set `draft: true` to keep something unpublished.

## Running locally

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Site-wide settings (title, links, Substack URL) live in `src/consts.ts`. The primary domain is set in `astro.config.mjs` and `public/CNAME`.
