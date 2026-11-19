const SITE = 'https://verusauctor.com';

export function GET() {
  const pages = Object.keys(import.meta.glob('./**/*.astro'))
    .map((file) => file.replace(/^\.\//, '/').replace(/\.astro$/, '').replace(/\/index$/, '/'))
    .filter((path) => path !== '/404')
    .map((path) => (path.endsWith('/') ? path : path + '/'))
    .sort();
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    pages.map((path) => `  <url><loc>${SITE}${path}</loc></url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
