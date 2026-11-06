import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import legacy from './src/redirects.json' with { type: 'json' };

// Old Jekyll post URLs looked like /technology/2012/08/21/slug.html. Redirect each
// one (and the same URL without ".html"). Spaces are decoded because the server
// decodes %20 before looking up the folder on disk.
const redirects = {};
for (const [from, to] of Object.entries(legacy)) {
  const path = decodeURIComponent(from);
  redirects[path] = to;
  redirects[path.replace(/\.html$/, '')] = to;
}
// Old paginated home pages and the CMS admin page.
for (const n of [2, 3, 4]) redirects[`/page${n}`] = '/blog/';
redirects['/admin'] = '/';

// Change `site` here if the primary domain moves (e.g. to robjefferson.au).
export default defineConfig({
  site: 'https://robjefferson.uk',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // Old Jekyll URLs -> new URLs, so existing links keep working.
  redirects,
});
