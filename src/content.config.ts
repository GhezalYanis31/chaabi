import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const SLUGS_RUBRIQUES = ['portraits', 'mode', 'sport', 'scenes', 'heritage'] as const;

/** Chaîne vide ou absente → undefined (le CMS enregistre parfois des champs vides). */
const texteOptionnel = z
  .string()
  .optional()
  .nullable()
  .transform((v) => (v && v.trim() ? v.trim() : undefined));

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    titre: z.string(),
    rubrique: z.enum(SLUGS_RUBRIQUES),
    date: z.coerce.date(),
    chapo: texteOptionnel,
    auteur: z.string().optional().nullable().transform((v) => v?.trim() || 'La rédaction'),
    couverture: texteOptionnel,
    credit_photo: texteOptionnel,
    une: z.boolean().optional().nullable().transform((v) => !!v),
    brouillon: z.boolean().optional().nullable().transform((v) => !!v),
    exemple: z.boolean().optional().nullable().transform((v) => !!v),
    citation: z
      .object({
        arabe: texteOptionnel,
        traduction: texteOptionnel,
        source: texteOptionnel,
        traducteur: texteOptionnel,
      })
      .optional()
      .nullable(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    titre: z.string(),
    chapo: texteOptionnel,
  }),
});

export const collections = { articles, pages };
