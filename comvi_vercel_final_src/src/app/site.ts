export const SITE = {
  name: "COMVI",
  city: "Charleroi",
  area: "Charleroi et alentours",
  baseline: "Vidéo & visibilité locale à Charleroi",

  email: "contact@comvi.be",

  // Coordonnées à adapter si besoin
  phoneDisplay: "0470 00 00 00",
  phoneE164: "+32470000000",
  whatsappE164: "32470000000",

  socials: {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/company/com-vi/",
    instagram: "https://www.instagram.com/comvi.agence/"
  },

  // Mettez un chiffre ici uniquement si c'est vrai (sinon laissez vide)
  proof: {
    companiesLocal: "", // ex: "30"
    videosProduced: "", // ex: "150"
    years: "",          // ex: "5"
    rating: ""          // ex: "4.9/5"
  }
} as const;

export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    id: "video",
    title: "Vidéos professionnelles",
    description: "On filme votre activité et on transforme ça en vidéos prêtes à publier. Vous gagnez en crédibilité, vite.",
    bullets: ["Tournage sur place", "Montage + sous-titres", "Formats réseaux sociaux", "Livraison prête à publier"]
  },
  {
    id: "social",
    title: "Réseaux sociaux (gestion + contenu)",
    description: "On vous aide à être régulier et clair. Du contenu qui montre votre savoir-faire, sans y passer vos soirées.",
    bullets: ["Planning simple", "Création de contenus", "Cohérence visuelle", "Suivi mensuel"]
  },
  {
    id: "local",
    title: "Visibilité locale",
    description: "Quand on vous cherche, il faut vous trouver et vous croire. On rend votre présence locale plus propre et plus efficace.",
    bullets: ["Présence locale optimisée", "Contenus orientés clients", "Recommandations simples", "Priorité mobile"]
  },
  {
    id: "pr",
    title: "RP & médias locaux",
    description: "Pour vos actus, événements ou lancements : on prépare le message et on aide à le diffuser localement.",
    bullets: ["Communiqué clair", "Angles locaux", "Diffusion selon opportunités", "Suivi des retombées"]
  },
  {
    id: "talents",
    title: "Talents à la mission",
    description: "Besoin d’un renfort pour exécuter ? COMVI mobilise des talents (étudiants/indés) et pilote la qualité.",
    bullets: ["Flexibilité", "Rapidité", "Encadrement COMVI", "Budget maîtrisé"]
  }
];

export type PricingPack = {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  bullets: string[];
  highlight?: boolean;
};

export const PRICING: PricingPack[] = [
  {
    id: "starter",
    name: "Starter",
    price: "à partir de 590 €",
    subtitle: "Pour démarrer proprement",
    bullets: ["1 vidéo courte (30–60 sec)", "3 déclinaisons formats", "Sous-titres inclus", "Livraison rapide"]
  },
  {
    id: "visibilite",
    name: "Visibilité",
    price: "à partir de 1 190 €",
    subtitle: "Pour être vu localement",
    bullets: ["2 vidéos (courtes) + déclinaisons", "Contenus réseaux sociaux prêts", "Recommandations visibilité locale", "Suivi sur 30 jours"],
    highlight: true
  },
  {
    id: "premium",
    name: "Premium",
    price: "sur mesure",
    subtitle: "Pour une cadence continue",
    bullets: ["Production régulière", "Pilotage complet", "Priorité planning", "Reporting simple"]
  }
];

export type WorkItem = {
  id: string;
  title: string;
  type: string;
  instagramUrl: string;
  thumb: string; // fichier à placer dans public/images/...
};

export const WORKS: WorkItem[] = [
  {
    id: "aftermovie",
    title: "Aftermovie",
    type: "Événement",
    instagramUrl: "https://www.instagram.com/reel/Cq-2lJqIo7U/",
    thumb: "/images/realisations/aftermovie.jpg"
  },
  {
    id: "produit",
    title: "Présentation produit",
    type: "Produit",
    instagramUrl: "https://www.instagram.com/reel/CsEhyYuIJ_3/",
    thumb: "/images/realisations/produit.jpg"
  },
  {
    id: "entreprise",
    title: "Vidéo d’entreprise",
    type: "Entreprise",
    instagramUrl: "https://www.instagram.com/reel/CsRThQIISc_/",
    thumb: "/images/realisations/entreprise.jpg"
  },
  {
    id: "service",
    title: "Présentation de service",
    type: "Service",
    instagramUrl: "https://www.instagram.com/reel/DNSsxX1twIe/",
    thumb: "/images/realisations/service.jpg"
  }
];
