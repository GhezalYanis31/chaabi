/**
 * Citations arabes du magazine.
 *
 * Règle éditoriale : l'arabe sert d'ornement au texte, jamais de jeu de mots.
 * Chaque citation a son texte arabe exact, une traduction française publiée
 * (ou signalée comme traduction de la rédaction) et une référence précise.
 */
export interface Citation {
  /** Texte arabe, vocalisé. */
  arabe: string;
  /** Traduction française. */
  traduction: string;
  /** Référence de l'œuvre (auteur, titre, passage). */
  source: string;
  /** Traducteur ou « traduction de la rédaction ». */
  traducteur: string;
}

/** Épigraphe du magazine — page À propos et pied de page. */
export const EPIGRAPHE_SITE: Citation = {
  arabe:
    'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
  traduction:
    "Ô hommes ! Nous vous avons créés d'un mâle et d'une femelle, et Nous avons fait de vous des nations et des tribus, pour que vous vous entre-connaissiez.",
  source: 'Coran, sourate Al-Hujurât (49), verset 13 — extrait',
  traducteur: 'Traduction de Muhammad Hamidullah',
};

/** Version courte pour le pied de page. */
export const EPIGRAPHE_COURTE: Citation = {
  arabe: 'وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
  traduction:
    '… et Nous avons fait de vous des nations et des tribus, pour que vous vous entre-connaissiez.',
  source: 'Coran, 49:13',
  traducteur: 'trad. Muhammad Hamidullah',
};
