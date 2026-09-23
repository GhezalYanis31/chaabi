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

const echappe = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Rend cliquables les liens écrits en Markdown — [texte](adresse) — dans une
 * ligne de crédit photo. Tout le reste est échappé.
 */
export function liensSimples(texte: string): string {
  const re = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  let sortie = '';
  let dernier = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(texte))) {
    sortie += echappe(texte.slice(dernier, m.index));
    sortie += `<a href="${echappe(m[2])}" rel="noopener" target="_blank">${echappe(m[1])}</a>`;
    dernier = re.lastIndex;
  }
  return sortie + echappe(texte.slice(dernier));
}
