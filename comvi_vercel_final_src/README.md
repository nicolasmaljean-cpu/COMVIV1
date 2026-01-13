# COMVI — site (Vite + React) prêt pour GitHub + Vercel

## Prérequis
- Node.js 18+ (recommandé)

## Lancer en local
```bash
npm install
npm run dev
```

## Build production
```bash
npm run build
npm run preview
```

## Déploiement Vercel (sans prise de tête)
1. Push ce projet sur GitHub
2. Sur Vercel : **Add New → Project → Import Git Repository**
3. Framework preset : **Vite**
4. Build command : `npm run build`
5. Output directory : `dist`
6. Deploy

## Images
Le projet inclut :
- le logo (`public/images/logo-comvi.png`)
- une image Open Graph (`public/images/og-comvi.png`)
- 4 miniatures de réalisations (`public/images/realisations/*.jpg`)

Tu peux remplacer ces fichiers par tes assets réels en gardant les mêmes noms.
