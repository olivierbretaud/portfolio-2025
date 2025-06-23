import { IProject, ITool } from '@/types/projects';
import rennes from './pictures/rennes-election.jpg';
import systemU from './pictures/system-u.jpg';
import resofit from './pictures/resofit.jpg';
import jloo from './pictures/jloo.png';
import bdi from './pictures/bdi.png';
import mobidys from './pictures/mobydis.jpg';
import zecompatble from './pictures/zecomptable.jpg';
import oiikos from './pictures/oiikos-mockup.jpg';
import quadrare from './pictures/quadrare.jpg';
import upSport from './pictures/up-sport.png';
import audiar from './pictures/audiar.jpg';
import octapharma from './pictures/octapharma.jpg';

const projects : IProject[] = [
  {
    title: "Rennes Ville et Métropole",
    description: "Développer une solution sur-mesure de visualisation de résultats électoraux.",
    tags: ["Datavisualisation", "Site Internet"],
    tools: ["React", "d3.js"],
    picture: rennes,
    link: 'https://elections.rennesmetropole.fr/'
  },
  {
    title: "Octapharma",
    description: "Développer un outil de recherche de documents pour le corps médical (vue géographique, timeline , cartographie réseau ...)",
    tags: ["Datavisualisation","Outil métier"],
    tools: ["React"],
    picture: octapharma,
  },
  {
    title: "Bretagne Développement Innovation",
    description: "Créer un éditeur de tableaux de bord pour visualiser les données relatives aux acteurs de l’innovation en Bretagne.",
    tags: ["Datavisualisation","Outil métier"],
    tools: ["React", "mongodb", "node.js", "typescript", "d3.js"],
    picture: bdi,
  },
  {
    title: "OIIKOS",
    description: "Développer une solution de gestion et de suivi dédiée à l’exploitation des piscines. ",
    tags: ["Outil métier"],
    tools: ["React"],
    picture: oiikos,
  },
  {
    title: "Audiar",
    description: "Développer un outil permettant de visualiser le bassin d’emploi de la région rennaise.",
    tags: ["Datavisualisation"],
    tools: ["React", "D3.js"],
    // link: "https://app.audiar.bakasable.fr/",
    picture: audiar,
  },
  {
    title: "RESOFIT",
    description: "Développer un site web et son interface d’administration pour un réseau de salles de sports.",
    tags: ["Site Internet", "Backoffice"],
    tools: ["Next.js", "mongodb", "node.js", "typescript","React"],
    link: "https://resofit.fr/",
    picture: resofit,
  },
  {
    title: "UpSport&Loisirs",
    description: "Développer un site web ainsi qu'une plateforme pour les adhérents et les bénéficiaires de chèques-cadeaux loisirs.",
    tags: ["Site Internet", "Backoffice","Outil métier"],
    tools: ["Next.js", "mongodb", "node.js", "typescript","React"],
    link: "https://up-sport-loisirs.fr/recherche?page=0&limit=12&isMap=true",
    picture: upSport,
  },
  {
    title: "Système U",
    description: "Concevoir un showroom numérique interactif avec une interface d’administration, basé sur des images à 360°.",
    tags: ["Outil métier","Backoffice"],
    tools: ["React", "mongodb", "node.js", "typescript"],
    picture: systemU,
  },

  {
    title: "Quadrare",
    description: "Développer un module de visualisation de parcours au sein d’une application RH de gestion de parcours professionnels.",
    tags: ["Outil métier", 'Datavisualisation'],
    tools: ["Vue"],
    picture: quadrare ,
  },
  {
    title: "Mobidys",
    description: "Développement d’un outil prototype d’assistance à la lecture, adapté aux besoins des personnes dyslexiques.",
    tags: ["Outil métier"],
    tools: ["React"],
    picture: mobidys,
  },
  {
    title: "ZeComptable",
    description: "Développer les interfaces d'une suite d’outils numériques destinés aux professionnels de la comptabilité.",
    tags: ["Site Internet","Backoffice"],
    tools: ["React"],
    picture: zecompatble,
  },
  {
    title: "JLOO",
    description: "Mise en place d’un outil interne pour optimiser la coordination autour de la rédaction des supports de communication",
    tags: ["Outil métier"],
    tools: ["Laravel", "Php"],
    picture: jloo,
  }
];

export default projects;

export const tools : ITool[] = [
  {
    label:"React",
    type: "Front-end"
  },
  {
    label:"Next",
    type: "Front-end"
  },
  {
    label:"Vite",
    type: "Front-end"
  },
  {
    label:"Redux",
    type: "Front-end"
  },
  {
    label:"React Query",
    type: "Front-end"
  },
  {
    label:"Framer motion",
    type: "Front-end"
  },
  {
    label:"D3.js",
    type: "Front-end"
  },
  {
    label:"Sass",
    type: "Front-end"
  },
  {
    label:"Node.js",
    type: "Front-end"
  },
  {
    label:"TypeScript",
    type: "Front-end"
  },
  {
    label:"Express",
    type: "Front-end"
  },
  {
    label:"Fastify",
    type: "Front-end"
  },
  {
    label:"MongoDB",
    type: "Front-end"
  },
  {
    label:"Git",
    type: "Front-end"
  },
  {
    label:"Cursor",
    type: "Front-end"
  },
  {
    label:"Figma",
    type: "Front-end"
  },
  {
    label:"Notion",
    type: "Front-end"
  },
]