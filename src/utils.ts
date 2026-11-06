/** Plain-text description from the start of a Markdown/HTML body (~155 chars, ends on a word). */
export function excerpt(body: string | undefined, max = 155): string | undefined {
  if (!body) return undefined;
  const clean = (s: string) =>
    s
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/<(script|style|aside)[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/<https?:[^>]+>/g, ' ')
      .replace(/^#{1,6}\s+/gm, '')
      .replace(/[*_`>]+/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim();
  const paras = body
    .split(/\n\s*\n/)
    .map(clean)
    .filter((p) => p.length >= 40);
  const text = paras[0];
  if (!text) return undefined;
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\-–—\s]+$/, '') + '…';
}
