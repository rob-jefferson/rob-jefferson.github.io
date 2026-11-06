import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { excerpt } from '../utils';

export async function GET(context) {
  const posts = (await getCollection('posts', (p) => !p.data.draft)).map((p) => ({
    title: p.data.title, pubDate: p.data.date, description: p.data.description ?? excerpt(p.body), link: `/blog/${p.id}/`,
  }));
  const notes = (await getCollection('notes', (n) => !n.data.draft)).map((n) => ({
    title: n.data.title ?? `Note, ${n.data.date.toISOString().slice(0, 10)}`,
    pubDate: n.data.date, description: excerpt(n.body, 280), link: `/notes/${n.id}/`,
  }));
  const items = [...posts, ...notes].sort((a, b) => b.pubDate - a.pubDate);
  return rss({ title: SITE_TITLE, description: SITE_DESCRIPTION, site: context.site, items });
}
