export function GET({ site }) {
  const plan = new URL('sitemap-index.xml', site).href;
  return new Response(`User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${plan}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
