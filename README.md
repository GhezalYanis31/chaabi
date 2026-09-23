# CHAABI — le site

Magazine des cultures urbaines et de leurs héritages.
Site statique (Astro), espace rédaction à l'adresse `/admin`, hébergement gratuit sur Netlify.

> **Aperçu sans installation.** Le fichier `site-pret-a-publier/index.html` (dans le dossier « Site CHAABI ») s'ouvre d'un double-clic pour consulter le site. Il sert uniquement à regarder : ses polices viennent de Google Fonts et il n'a pas d'espace rédaction. **Ne le publiez pas.** La mise en ligne se fait avec le projet Astro (partie 2), dont les polices sont hébergées avec le site.

---

## 1. Ce que contient ce dossier

| Élément | Rôle |
|---|---|
| `src/content/articles/` | Les articles, un fichier par article. L'espace rédaction les écrit pour vous. |
| `src/content/pages/` | Les textes des pages À propos et Mentions légales. |
| `src/data/reglages.json` | E-mail de contact, comptes Instagram et TikTok, textes de la newsletter. |
| `src/data/rubriques.ts` | Les cinq rubriques et leur présentation. |
| `src/data/citations.ts` | L’épigraphe du magazine (la seule citation arabe affichée d’office). |
| `public/admin/` | L'espace rédaction (formulaire de publication). |
| `public/images/uploads/` | Les photos envoyées depuis l'espace rédaction. |
| `netlify.toml` | Les réglages d'hébergement. Rien à modifier. |

Les cinq rubriques : **Portraits** (les artistes, musiciens compris, y sont traités), **Mode**, **Sport**, **Scènes**, **Héritage**.

---

## 2. Mettre le site en ligne (environ 20 minutes, gratuit)

> **Déjà fait.** Le site est en ligne à <https://chaabi-magazine.netlify.app> (projet Netlify `chaabi-magazine`) et l’inscription à la newsletter est active. En attendant GitHub, le site est compilé sur l’ordinateur puis envoyé déjà prêt : la compilation à distance de Netlify échoue à l’installation des dépendances, ce qui se réglera une fois le dépôt relié. Il reste les étapes 1 et 2 (GitHub), puis, **à la place de l’étape 3**, relier ce projet existant au dépôt : dans Netlify, ouvrez **chaabi-magazine** → **Project configuration** → **Build & deploy** → **Link repository** → **GitHub** → `chaabi`, en vérifiant ensuite que le dossier publié est bien `dist`. L’étape 4 est déjà faite.

Il faut deux comptes gratuits : **GitHub** (qui garde les fichiers du site) et **Netlify** (qui le publie).

### Étape 1 — Déposer le site sur GitHub

1. Créez un compte sur [github.com](https://github.com).
2. En haut à droite : **+** → **New repository**. Nom : `chaabi`. Choisissez **Private** ou **Public** (les deux fonctionnent). Cliquez **Create repository**.
3. Sur la page du dépôt vide, cliquez **uploading an existing file**.
4. Décompressez `chaabi-site.zip`, ouvrez le dossier `chaabi`, sélectionnez **tout son contenu** (dossiers `src`, `public`, et tous les fichiers, y compris `.gitignore`) et glissez-le dans la page. Cliquez **Commit changes**.

### Étape 2 — Indiquer le dépôt à l'espace rédaction

1. Dans votre dépôt GitHub, ouvrez `public/admin/config.yml`, puis l'icône crayon (**Edit**).
2. Vérifiez la ligne `repo: GhezalYanis31/chaabi` : elle doit correspondre à votre compte et au nom du dépôt. Corrigez-la si vous avez choisi un autre nom.
3. **Commit changes**.

### Étape 3 — Publier avec Netlify

1. Créez un compte sur [netlify.com](https://www.netlify.com) en choisissant **Sign up with GitHub**.
2. **Add new project** (ou *Add new site*) → **Import an existing project** → **GitHub** → autorisez l'accès → choisissez `chaabi`.
3. Les réglages sont lus automatiquement dans `netlify.toml`. Cliquez **Deploy**.
4. Après une à deux minutes, le site est en ligne à une adresse du type `quelque-chose.netlify.app`. Pour la changer : **Project configuration** → **Change project name** → `chaabi` (si le nom est libre).

### Étape 4 — Activer l’inscription à la newsletter

Dans Netlify : menu **Forms** → **Enable form detection**. Puis **Deploys** → **Trigger deploy** → **Deploy site**.
Les adresses inscrites apparaîtront dans **Forms** → **lettre**. Vous pourrez les exporter en CSV le jour où vous choisirez un outil d'envoi (Brevo, par exemple).

### Étape 5 — Ouvrir l'espace rédaction

L'espace rédaction se connecte avec votre compte GitHub. Deux façons de faire :

**La plus rapide — par jeton d'accès.**
Allez sur `https://votre-site.netlify.app/admin/`, choisissez **Se connecter avec un jeton d'accès** (*Sign In Using Access Token*), suivez le lien proposé pour créer le jeton sur GitHub (droit **Contents : Read and write** sur le dépôt `chaabi`), collez-le. Le jeton reste enregistré dans votre navigateur.

**La plus confortable — bouton « Se connecter avec GitHub ».**
1. Sur GitHub : photo de profil → **Settings** → **Developer settings** → **OAuth Apps** → **New OAuth App**.
   - *Application name* : `CHAABI rédaction`
   - *Homepage URL* : l'adresse de votre site (`https://….netlify.app`)
   - *Authorization callback URL* : `https://api.netlify.com/auth/done`
2. Cliquez **Register application**, copiez le **Client ID**, puis **Generate a new client secret** et copiez-le.
3. Sur Netlify : **Project configuration** → **Access & security** → **OAuth** → **Install provider** → **GitHub**, collez les deux valeurs.

---

## 3. Publier un article

1. Allez sur `https://votre-site/admin/` et connectez-vous.
2. **Articles** → **Nouvel article**.
3. Remplissez : titre, rubrique, date, chapô, signature, image de couverture, crédit photo.
4. Écrivez le texte. Les boutons de mise en forme suffisent :
   - **Titre 2** → un intertitre ;
   - **Citation** → une phrase mise en exergue, en grand et en vermillon ;
   - une ligne en arabe, seule dans son paragraphe, s'affiche automatiquement de droite à gauche, dans la police prévue. Mettez la traduction et la source juste en dessous.
5. Cases à cocher : **Mettre à la une** (l'article s'affiche en grand sur l'accueil), **Brouillon** (enregistré mais invisible sur le site).
6. **Citation en arabe (facultatif)** : elle s'affiche en grand avant le texte. Elle n'apparaît que si le texte arabe, la traduction **et** la source sont remplis.
7. **Enregistrer**. Le site se met à jour tout seul en une à deux minutes.

**Les gabarits d’écriture** : les cinq articles marqués « Exemple » sont des modèles (structure, longueur, sources). Ils sont enregistrés en **brouillon**, donc invisibles sur le site, et restent dans l’espace rédaction : ouvrez-en un pour vous en inspirer, ou dupliquez-le pour écrire par-dessus. Supprimez-les quand ils ne vous servent plus.

---

## 4. Les blancs à compléter

Ils s'affichent sur le site en gris, soulignés d'une ondulation vermillon (comme une marque de correcteur), tant qu'ils ne sont pas remplis.

| Quoi | Où, dans l'espace rédaction |
|---|---|
| Adresse e-mail de contact | **Réglages** → Réglages du site |
| Comptes Instagram et TikTok | **Réglages** → Réglages du site |
| Paragraphe « La rédaction » | **Pages** → À propos |
| Responsable de la publication, e-mail | **Pages** → Mentions légales |
| Nom de domaine (ex. `chaabi.fr`) | À acheter chez un registraire (OVH, Gandi…), puis Netlify → **Domain management** → **Add a domain** |
| Outil d’envoi de la newsletter | À choisir ; les inscriptions attendent dans Netlify → Forms |

---

## 4 bis. Brancher Brevo pour envoyer la newsletter

Les inscriptions arrivent aujourd'hui dans Netlify → **Forms** → **lettre**. Pour envoyer les messages :

1. Créez un compte gratuit sur [brevo.com](https://www.brevo.com) (jusqu'à 300 envois par jour, société européenne).
2. Dans Brevo : **Contacts** → **Listes** → nouvelle liste, par exemple « CHAABI ».
3. Récupérez les adresses déjà collectées : Netlify → **Forms** → **lettre** → **Download CSV**, puis importez ce fichier dans la liste Brevo.
4. Ensuite, deux façons de faire :
   - **Au plus simple** : gardez le formulaire actuel et réimportez le CSV avant chaque envoi.
   - **Automatique** : dans Brevo, **Formulaires d'inscription** → créez un formulaire, copiez son adresse d'envoi (`https://….sibforms.com/serve/…`). Dans `src/components/Lettre.astro`, remplacez la valeur de `action` par cette adresse, puis supprimez `data-netlify="true"`, `netlify-honeypot` et le champ caché `form-name`. Brevo envoie alors lui-même l'e-mail de confirmation (double opt-in).

Dans les deux cas, la mention du site reste exacte : l'adresse ne sert qu'à cet envoi.

## 5. Les citations arabes

Règle éditoriale : l’arabe orne le texte, il ne sert jamais de jeu de mots. Chaque citation est donnée dans sa langue, traduite et sourcée.

Le site n’en affiche plus qu’une : l’**épigraphe** du magazine (Coran 49:13), en pied de page et en tête de la page À propos. Un article peut en porter une seconde, remplie dans l’espace rédaction. Les citations ci-dessous, écrites pour les rubriques, ne sont plus affichées : elles restent ici, prêtes à servir dans un texte.

| Où | Citation | Source | Traduction |
|---|---|---|---|
| À propos, pied de page | وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا | Coran, 49:13 — *chuʿûb*, pluriel de *chaʿb*, la racine de *chaʿbî* | Muhammad Hamidullah |
| Portraits | قِيمَةُ كُلِّ امْرِئٍ مَا يُحْسِنُ | ʿAlî ibn Abî Tâlib, rapporté par al-Jâhiz, *al-Bayân wa-t-tabyîn* | La rédaction |
| Mode | لِبَاسًا يُوَارِي سَوْآتِكُمْ وَرِيشًا… | Coran, 7:26 | Muhammad Hamidullah |
| Sport | وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ | Coran, 53:39 | Muhammad Hamidullah |
| Scènes | فِي أَنَّ الصَّنَائِعَ إِنَّمَا تَكْمُلُ بِكَمَالِ الْعُمْرَانِ الْحَضَرِيِّ… | Ibn Khaldûn, *al-Muqaddima*, chap. V, titre de section | W. de Slane, *Les Prolégomènes* |
| Héritage | وَفَارَقْتُ وَطَنِي مُفَارَقَةَ الطُّيُورِ لِلْوُكُورِ | Ibn Battûta, *Rihla*, départ de Tanger | C. Defrémery et B. R. Sanguinetti |
| Exemple Sport | عَلَى قَدْرِ أَهْلِ الْعَزْمِ تَأْتِي الْعَزَائِمُ | al-Mutanabbî, qasîda à Sayf ad-Dawla | La rédaction |

Pour changer l’épigraphe : fichier `src/data/citations.ts` (éditable directement sur GitHub, icône crayon).

---

## 6. Pour les développeurs

```bash
npm install
npm run dev      # http://localhost:4321 — les brouillons y sont visibles
npm run build    # génère le site dans dist/
```

- Astro 7, contenus en Markdown (collections `articles` et `pages`).
- Espace rédaction : [Sveltia CMS](https://sveltiacms.app) (configuration compatible Decap CMS) dans `public/admin/`.
- Polices hébergées avec le site (Fontsource) : Archivo (titres, axe de largeur), Literata (texte), Amiri (arabe). Aucun appel à Google Fonts.
- Direction visuelle « Spécimen » (papier blanc, encre noire, vermillon de rubrique) : variables CSS dans `src/styles/global.css`. Le détail du système est dans `DESIGN.md`, à la racine du dossier « Blog Culture ».
