// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sur Netlify, la variable URL contient l'adresse publique du site.
// En local, on retombe sur l'adresse de développement.
const site = process.env.URL || 'http://localhost:4321';

export default defineConfig({
  site,
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/merci/') && !page.includes('/admin/'),
    }),
  ],
});
