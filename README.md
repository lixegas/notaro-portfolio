# Peppino Notaro — Portfolio

Portfolio personale single-page, pubblicato su GitHub Pages: <https://lixegas.github.io/notaro-portfolio/>

Realizzato con Next.js 15 (App Router, export statico), React 19, TypeScript e Tailwind CSS v4.

## Sviluppo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # export statico in ./dist
npm run lint
```

## Struttura

| Percorso | Contenuto |
| --- | --- |
| `src/app/` | Layout, pagina principale, 404, `robots.txt`, `sitemap.xml`, immagini Open Graph |
| `src/components/` | Sezioni della pagina: navbar, home, lavori, recensioni, contatti, footer |
| `src/static/content/` | **Tutti i testi e i dati** (progetti, recensioni, contatti, tecnologie) |
| `src/lib/` | `formatText` e helper per lo scroll alle sezioni |
| `src/contexts/theme.tsx` | Tema chiaro/scuro |
| `src/ui/` | Componenti UI riutilizzabili |
| `public/` | Immagini e `curriculum.pdf` |

## Modificare i contenuti

I testi si modificano nei file `src/static/content/*.content.ts`, senza toccare i componenti.
Racchiudere una parola tra `**` la evidenzia in giallo: `"Ciao, sono **Peppino**"`.

Per aggiungere un progetto basta inserire un elemento in `works.content.ts` e mettere l'immagine
(preferibilmente `.webp`) in `public/images/`.

## Deploy

Ogni push su `main` avvia il workflow `.github/workflows/nextjs.yml`, che esegue la build e pubblica `./dist` su GitHub Pages.
In produzione il sito è servito sotto il `basePath` `/notaro-portfolio` (vedi `next.config.mjs`).

L'URL pubblico usato per metadata, sitemap e robots è definito in `src/constants/common.ts`.
