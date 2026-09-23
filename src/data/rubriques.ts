export interface Rubrique {
  slug: string;
  nom: string;
  presentation: string;
}

/**
 * Les cinq rubriques du magazine.
 * Les artistes (musiciens compris) sont traités dans « Portraits ».
 * Pour ajouter une rubrique : l'ajouter ici ET dans public/admin/config.yml
 * (champ « rubrique » de la collection Articles).
 *
 * Les citations arabes ne sont plus attachées aux rubriques : le magazine n'en
 * affiche qu'une, l'épigraphe (src/data/citations.ts), en pied de page et sur
 * la page À propos. Un article peut en porter une, remplie dans l'espace
 * rédaction. Les anciennes citations de rubrique sont conservées dans le guide.
 */
export const RUBRIQUES: Rubrique[] = [
  {
    slug: 'portraits',
    nom: 'Portraits',
    presentation:
      "Artistes, créateurs, entrepreneurs, passeurs. Des trajectoires racontées dans la durée, au plus près du travail et de celles et ceux qui le font.",
  },
  {
    slug: 'mode',
    nom: 'Mode',
    presentation:
      "Créateurs, ateliers, marques indépendantes, friperie : ce que le vêtement dit d'une époque, et de celles et ceux qui le portent.",
  },
  {
    slug: 'sport',
    nom: 'Sport',
    presentation:
      "Le terrain, le ring, le playground : des disciplines où se forgent des carrières, des fidélités et une manière d'être au monde.",
  },
  {
    slug: 'scenes',
    nom: 'Scènes',
    presentation:
      "Concerts, expositions, festivals, soirées : les lieux où la culture se montre, se partage et se transforme.",
  },
  {
    slug: 'heritage',
    nom: 'Héritage',
    presentation:
      "Immigration, mémoire, transmission : ce que l'on reçoit, ce que l'on garde, ce que l'on transmet à son tour.",
  },
];

export const rubriqueParSlug = (slug: string): Rubrique | undefined =>
  RUBRIQUES.find((r) => r.slug === slug);
