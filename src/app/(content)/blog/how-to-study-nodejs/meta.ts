import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como Estudar Melhor e Dominar Node.js",
  description:
    "Descubra técnicas científicas de aprendizado e um roadmap completo para dominar Node.js. Aprenda Pomodoro para programação, projetos práticos com Express.js, MongoDB, JWT e muito mais. Guia definitivo para desenvolvedores que querem acelerar sua carreira backend.",
  keywords: [
    "como estudar nodejs",
    "guia nodejs 2024",
    "aprender nodejs",
    "roadmap nodejs",
    "técnicas de estudo programação",
    "pomodoro programação",
    "express.js tutorial",
    "mongodb nodejs",
    "jwt authentication",
    "api rest nodejs",
    "backend development",
    "javascript server side",
    "npm packages",
    "microservices nodejs",
    "streams nodejs",
    "async await nodejs",
    "event loop",
    "node.js projects",
    "full stack development",
    "Gustavo Murdiga",
  ],
  authors: [
    {
      name: "Gustavo Murdiga",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    },
  ],
  creator: "Gustavo Murdiga",
  publisher: "Gustavo Murdiga - Desenvolvedor Full-Stack",
  category: "Desenvolvimento e Programação",
  openGraph: {
    title: "Como Estudar e Dominar Node.js: Guia Prático Completo",
    description:
      "Descubra técnicas científicas de aprendizado e um roadmap completo para dominar Node.js. Aprenda Pomodoro para programação, projetos práticos com Express.js, MongoDB, JWT e muito mais. Guia definitivo para desenvolvedores que querem acelerar sua carreira backend.",
    type: "article",
    siteName: "Gustavo Murdiga - Blog de Desenvolvimento",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/how-to-study-nodejs`,
    locale: "pt_BR",
    countryName: "Brasil",
    images: [
      {
        url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&h=630&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "Desenvolvedor estudando Node.js com livros, computador e código na tela - Guia de estudos para programação backend",
        type: "image/jpeg",
      },
      {
        url: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0",
        width: 800,
        height: 600,
        alt: "Logo Node.js e código JavaScript - Tutorial de aprendizado",
        type: "image/jpeg",
      },
    ],
    publishedTime: "2025-11-23T12:00:00.000Z",
    modifiedTime: new Date().toISOString(),
    expirationTime: "2026-11-23T12:00:00.000Z",
    authors: ["Gustavo Murdiga"],
    section: "Tutoriais e Guias",
    tags: [
      "Node.js",
      "JavaScript",
      "Backend Development",
      "Express.js",
      "MongoDB",
      "API REST",
      "JWT",
      "Técnicas de Estudo",
      "Pomodoro",
      "Programação",
      "Tutorial",
      "Guia Prático",
      "Full Stack",
      "NPM",
      "Async Programming",
    ],
  },
  twitter: {
    title: "Como Estudar Melhor e Dominar Node.js",
    description:
      "Descubra técnicas científicas de aprendizado e um roadmap completo para dominar Node.js. Aprenda Pomodoro para programação, projetos práticos com Express.js, MongoDB, JWT e muito mais. Guia definitivo para desenvolvedores que querem acelerar sua carreira backend.",
    card: "summary_large_image",
    creator: "@GustavoMurdiga",
    site: "@GustavoMurdiga",
    images: [
      {
        url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&h=630&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "Guia prático para estudar e dominar Node.js - Desenvolvedor estudando programação",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    title: "Guia Node.js - Gustavo Murdiga",
    statusBarStyle: "black-translucent",
    capable: true,
    startupImage: "/icons/nodejs-tutorial-icon.png",
  },
  verification: {
    google: "WQbYrmDaHz95-t54jPgWbYHPSBebm4LWjt1QC3UQtrg",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/how-to-study-nodejs`,
    languages: {
      "pt-BR": `${process.env.NEXT_PUBLIC_SITE_URL}/blog/how-to-study-nodejs`,
    },
    types: {
      "application/rss+xml": [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
          title: "Gustavo Murdiga - Tutoriais de Desenvolvimento",
        },
      ],
    },
  },
  other: {
    "article:author": "Gustavo Murdiga",
    "article:section": "Programação e Desenvolvimento",
    "article:published_time": "2025-11-23T12:00:00.000Z",
    "article:modified_time": new Date().toISOString(),
    "article:tag":
      "Node.js, JavaScript, Backend, Express.js, MongoDB, Tutorial, Programação",

    "content-type": "educational-tutorial",
    "skill-level": "beginner-to-intermediate",
    "estimated-reading-time": "15-20 minutes",
    "tutorial-difficulty": "intermediate",

    "og:see_also": [
      `${process.env.NEXT_PUBLIC_SITE_URL}/blog/my-history`,
      `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
      `${process.env.NEXT_PUBLIC_SITE_URL}/skills`,
    ],
    "theme-color": "#121214",
    "color-scheme": "light dark",
    "format-detection": "telephone=no",
  },
};
