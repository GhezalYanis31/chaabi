import type { Citation } from './citations';

export interface Rubrique {
  slug: string;
  nom: string;
  presentation: string;
  citation: Citation;
}

/**
 * Les cinq rubriques du magazine.
 * Les artistes (musiciens compris) sont traités dans « Portraits ».
 * Pour ajouter une rubrique : l'ajouter ici ET dans public/admin/config.yml
 * (champ « rubrique » de la collection Articles).
 */
export const RUBRIQUES: Rubrique[] = [
  {
    slug: 'portraits',
    nom: 'Portraits',
    presentation:
      "Artistes, créateurs, entrepreneurs, passeurs. Des trajectoires racontées dans la durée, au plus près du travail et de celles et ceux qui le font.",
    citation: {
      arabe: 'قِيمَةُ كُلِّ امْرِئٍ مَا يُحْسِنُ',
      traduction: "Ce que vaut chacun, c'est ce qu'il sait faire avec excellence.",
      source:
        "Parole attribuée à ʿAlî ibn Abî Tâlib, rapportée par al-Jâhiz dans Kitâb al-Bayân wa-t-tabyîn (IXᵉ siècle)",
      traducteur: 'Traduction de la rédaction',
    },
  },
  {
    slug: 'mode',
    nom: 'Mode',
    presentation:
      "Créateurs, ateliers, marques indépendantes, friperie : ce que le vêtement dit d'une époque, et de celles et ceux qui le portent.",
    citation: {
      arabe:
        'يَا بَنِي آدَمَ قَدْ أَنْزَلْنَا عَلَيْكُمْ لِبَاسًا يُوَارِي سَوْآتِكُمْ وَرِيشًا ۖ وَلِبَاسُ التَّقْوَىٰ ذَٰلِكَ خَيْرٌ',
      traduction:
        "Ô enfants d'Adam ! Nous avons fait descendre sur vous un vêtement pour cacher vos nudités, ainsi que des parures. Mais le vêtement de la piété voilà qui est meilleur.",
      source: 'Coran, sourate Al-Aʿrâf (7), verset 26 — extrait',
      traducteur: 'Traduction de Muhammad Hamidullah',
    },
  },
  {
    slug: 'sport',
    nom: 'Sport',
    presentation:
      "Le terrain, le ring, le playground : des disciplines où se forgent des carrières, des fidélités et une manière d'être au monde.",
    citation: {
      arabe: 'وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ',
      traduction: "… et qu'en vérité, l'homme n'obtient que [le fruit] de ses efforts.",
      source: 'Coran, sourate An-Najm (53), verset 39',
      traducteur: 'Traduction de Muhammad Hamidullah',
    },
  },
  {
    slug: 'scenes',
    nom: 'Scènes',
    presentation:
      "Concerts, expositions, festivals, soirées : les lieux où la culture se montre, se partage et se transforme.",
    citation: {
      arabe: 'فِي أَنَّ الصَّنَائِعَ إِنَّمَا تَكْمُلُ بِكَمَالِ الْعُمْرَانِ الْحَضَرِيِّ وَكَثْرَتِهِ',
      traduction:
        "Les arts se perfectionnent dans une ville à mesure du progrès de la civilisation et de l'accroissement de la population.",
      source:
        'Ibn Khaldûn, al-Muqaddima (1377), chapitre V — titre de section',
      traducteur: 'Traduction de William Mac Guckin de Slane, Les Prolégomènes, t. II (1863-1868)',
    },
  },
  {
    slug: 'heritage',
    nom: 'Héritage',
    presentation:
      "Immigration, mémoire, transmission : ce que l'on reçoit, ce que l'on garde, ce que l'on transmet à son tour.",
    citation: {
      arabe:
        'فَحَزَمْتُ أَمْرِي عَلَى هَجْرِ الْأَحْبَابِ مِنَ الْإِنَاثِ وَالذُّكُورِ، وَفَارَقْتُ وَطَنِي مُفَارَقَةَ الطُّيُورِ لِلْوُكُورِ',
      traduction:
        "Je me déterminai donc à me séparer de mes amis des deux sexes, et j'abandonnai ma demeure comme les oiseaux abandonnent leur nid.",
      source: 'Ibn Battûta, Tuhfat an-nuzzâr, dite la Rihla (1355), départ de Tanger',
      traducteur:
        "Traduction de C. Defrémery et B. R. Sanguinetti, Voyages d'Ibn Batoutah, t. I (1853)",
    },
  },
];

export const rubriqueParSlug = (slug: string): Rubrique | undefined =>
  RUBRIQUES.find((r) => r.slug === slug);
