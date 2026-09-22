import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articles'>;

/** Articles publiés (les brouillons n'apparaissent qu'en local, avec `npm run dev`). */
export async function articlesPublies(): Promise<Article[]> {
  const tous = await getCollection('articles', ({ data }) =>
    import.meta.env.DEV ? true : !data.brouillon,
  );
  return tous.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** L'article « à la une » : le plus récent coché « à la une », sinon le plus récent tout court. */
export function articleALaUne(liste: Article[]): Article | undefined {
  return liste.find((a) => a.data.une) ?? liste[0];
}

const FORMAT_DATE = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Paris',
});
const FORMAT_DATE_COURTE = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'Europe/Paris',
});
const FORMAT_NOMBRE = new Intl.NumberFormat('fr-FR');

export const dateFr = (d: Date): string => FORMAT_DATE.format(d);
export const dateCourte = (d: Date): string => FORMAT_DATE_COURTE.format(d);
export const nombre = (n: number): string => FORMAT_NOMBRE.format(n);
export const pluriel = (n: number, mot: string): string => `${nombre(n)} ${mot}${n > 1 ? 's' : ''}`;

/** Temps de lecture en minutes (≈ 230 mots par minute). */
export function tempsDeLecture(texte: string | undefined): number {
  const mots = (texte ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(mots / 230));
}

/** Longueur en signes, espaces comprises : l'unité des gabarits d'écriture. */
export function signes(texte: string | undefined): number {
  const brut = (texte ?? '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/[*_]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return Array.from(brut).length;
}

export const lienArticle = (a: Article): string => `/articles/${a.id}/`;

/** Citation arabe complète (texte, traduction et source), sinon rien. */
export function citationComplete(a: Article) {
  const c = a.data.citation;
  return c && c.arabe && c.traduction && c.source
    ? { arabe: c.arabe, traduction: c.traduction, source: c.source, traducteur: c.traducteur ?? '' }
    : undefined;
}
