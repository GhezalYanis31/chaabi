/**
 * Typographie française pour les textes saisis au clavier :
 * apostrophes courbes et espaces fines insécables avant : ; ! ? et dans les guillemets.
 */
const FINE = ' ';

export function typo(texte: string | undefined | null): string {
  if (!texte) return '';
  return texte
    .replace(/(\p{L})'(?=\p{L})/gu, '$1’')
    .replace(/'/g, '’')
    .replace(/\s+([:;!?»])/g, `${FINE}$1`)
    .replace(/«\s+/g, `«${FINE}`)
    .replace(/(\p{L}|\p{N}|\)|\]|…)([;!?»])/gu, `$1${FINE}$2`);
}
