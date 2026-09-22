import rss from '@astrojs/rss';
import { articlesPublies } from '../lib/articles';
import reglages from '../data/reglages.json';

export async function GET(context) {
  const articles = (await articlesPublies()).filter((a) => !a.data.brouillon);
  return rss({
    title: 'CHAABI',
    description: reglages.description,
    site: context.site,
    customData: '<language>fr-fr</language>',
    items: articles.map((a) => ({
      title: a.data.titre,
      description: a.data.chapo ?? '',
      pubDate: a.data.date,
      link: `/articles/${a.id}/`,
      author: a.data.auteur,
    })),
  });
}
