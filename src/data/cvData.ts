export const name = "Mateo Javier Bonnin";

export const cvData = {
  en: {
    title: "Unity Game Developer",
    downloadBtn: "Download CV as PDF",
    sections: {
      skills: "Technical Skills",
      languages: "Languages",
      experience: "Professional Experience",
      projects: "Featured Projects"
    },
    projectAction: "View Project",
    categories: {
      engines: "Engines",
      languages: "Languages",
      software: "Software"
    },
    techSkills: {
      engines: ["Unity", "Godot"],
      languages: ["C#"],
      software: ["GitHub", "Copilot", "Blender", "Jira", "Trello", "Slack"]
    },
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Proficient - [C1]" }
    ],
    experiences: [
      {
        company: "Quest Seeker Games",
        role: "Senior Unity Developer",
        modality: "Full Time - Co-founder",
        date: "Jun 2023 - Present",
        tags: ["Midcore", "PC", "Steam", "iOS", "Android", "Small Team", "From Scratch", "500k Downloads"],
        bullets: [
          "Working on Rogue Slime, an RPG-Deckbuilding Roguelike mobile and PC game alongside a small team, building everything from scratch.",
          "A passion project that reached 500k downloads; we continue to provide regular updates and are planning a Steam release in the near future."
        ]
      },
      {
        company: "Spiky Games",
        role: "Senior Unity Developer",
        modality: "Full Time - Freelance",
        date: "Jul 2020 - May 2023",
        tags: ["Hyper-Casual", "Mobile", "iOS", "Android", "Quick Development", "Solo Development", "Store Integration", "Rapid Prototyping"],
        bullets: [
          "Owned the full product lifecycle of hyper-casual iOS games in Unity.",
          "Independently drove programming, asset sourcing, and game design from concept to launch."
        ]
      },
      {
        company: "Jam City",
        role: "Semi Senior Unity Developer",
        modality: "Full Time / On-site",
        date: "Mar 2018 - Jul 2020",
        tags: ["Casual Games", "Mobile", "iOS", "Android", "Social Features", "UI Architecture", "Core Mechanics", "Large-scale Team", "LiveOps"],
        bullets: [
          "Developed a new project from the ground up, architecting core systems including endgame conditions, dialogue systems, and primary gameplay mechanics.",
          "Integrated social and event-based features into a legacy project, developing user status panels, skin customization systems, and in-game monetization features."
        ]
      }
    ],
    projects: [
      {
        title: "Rogue Slime",
        tech: "Unity / C#",
        links: [
          { type: "appstore", label: "App Store", url: "https://apps.apple.com/us/app/rogue-slime/id6744260496" },
          { type: "playstore", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.QuestSeekerGames.Rogueslime" },
          { type: "steam", label: "Steam", url: "https://store.steampowered.com/app/4439030/Rogue_Slime_PC_Edition" },
          { type: "website", label: "Website", url: "https://questseeker.games/" }
        ],
        images: ['/rogue-slime-picture01.webp', '/rogue-slime-picture02.webp', '/rogue-slime-picture03.webp', '/rogue-slime-picture04.webp'],
        videoSrc: "/rogue-slime-gameplay.mp4",
        bullets: [
          "Passion project with co-workers. Managed to get 500k downloads across all platforms.",
          "Main gameplay mechanics and systems development."
        ]
      },
      {
        title: "Dicey Hell",
        tech: "Unity / C# / Game Jam",
        links: [
          { type: "itch", label: "Itch.io", url: "https://luquitasdev.itch.io/diceyhell" },
        ],
        videoSrc: "/dicey-hell-gameplay.mp4",
        bullets: [
          "Jam project.",
          "Weekend project - Rogue Slime team."
        ]
      },
      {
        title: "Believe or Die",
        tech: "Unity / C# / Game Jam",
        links: [
          { type: "itch", label: "Itch.io", url: "https://luquitasdev.itch.io/believeordie" },
        ],
        images: ['/believe-or-die-picture01.webp', '/believe-or-die-picture02.webp', '/believe-or-die-picture03.webp'],
        videoSrc: "/believe-or-die-gameplay.mp4",
        bullets: [
          "Another jam project.",
          "Weekend project - Rogue Slime team."
        ]
      },
      {
        title: "Miniature Heist",
        tech: "Unity / C# / Game Jam",
        links: [
          { type: "itch", label: "Itch.io", url: "https://luquitasdev.itch.io/miniature-heist" },
        ],
        images: ['/miniature-heist-picture01.webp', '/miniature-heist-picture02.webp', '/miniature-heist-picture03.webp'],
        videoSrc: "/miniature-heist-gameplay.mp4",
        bullets: [
          "Another jam project.",
          "Weekend project - Rogue Slime team."
        ]
      }
    ]
  },
  es: {
    title: "Unity Game Developer",
    downloadBtn: "Descargar CV en PDF",
    sections: {
      skills: "Habilidades Técnicas",
      languages: "Idiomas",
      experience: "Experiencia Profesional",
      projects: "Proyectos Destacados"
    },
    projectAction: "Ver Proyecto",
    categories: {
      engines: "Motores Gráficos",
      languages: "Lenguajes",
      software: "Software"
    },
    techSkills: {
      engines: ["Unity", "Godot"],
      languages: ["C#"],
      software: ["GitHub", "Copilot", "Blender", "Jira", "Trello", "Slack"]
    },
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Avanzado - [C1]" }
    ],
    experiences: [
      {
        company: "Quest Seeker Games",
        role: "Senior Unity Developer",
        modality: "Full Time - Co-founder",
        date: "Jun 2023 - Presente",
        tags: ["Midcore", "PC", "Steam", "iOS", "Android", "Equipo Reducido", "Desde Cero", "500k Descargas"],
        bullets: [
          "Desarrollo de Rogue Slime, un juego de PC y mobile RPG-Deckbuilding Roguelike trabajando junto a un equipo reducido y construyendo todo desde cero.",
          "Proyecto personal que alcanzó las 500k descargas; continuamos lanzando actualizaciones periódicas y planeamos un release en Steam próximamente."
        ]
      },
      {
        company: "Spiky Games",
        role: "Senior Unity Developer",
        modality: "Full Time - Freelance",
        date: "Jul 2020 - May 2023",
        tags: ["Hyper-Casual", "Mobile", "iOS", "Android", "Agile Development", "Solo Dev", "Integración de Tiendas", "Prototipado Rápido"],
        bullets: [
          "Responsable del ciclo de vida completo del producto para juegos hyper-casual de iOS en Unity.",
          "Lideré de forma independiente la programación, búsqueda de assets y game design desde la idea hasta el lanzamiento."
        ]
      },
      {
        company: "Jam City",
        role: "Semi Senior Unity Developer",
        modality: "Full Time / Presencial",
        date: "Mar 2018 - Jul 2020",
        tags: ["Casual Games", "Mobile", "iOS", "Android", "Mecanicas Sociales", "Implementación de UI", "Mecánicas Principales", "Equipo Completo: QA - Liveops - Devs"],
        bullets: [
          "Desarrollé un proyecto nuevo desde cero, diseñando la arquitectura de los sistemas core, incluyendo condiciones de endgame, sistemas de diálogo y mecánicas principales.",
          "Integré features sociales y eventos en un proyecto legacy, desarrollando paneles de estado de usuario, sistemas de personalización de skins y monetización in-game."
        ]
      }
    ],
    projects: [
      {
        title: "Rogue Slime",
        tech: "Unity / C#",
        links: [
          { type: "appstore", label: "App Store", url: "https://apps.apple.com/us/app/rogue-slime/id6744260496" },
          { type: "playstore", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.QuestSeekerGames.Rogueslime" },
          { type: "steam", label: "Steam", url: "https://store.steampowered.com/app/4439030/Rogue_Slime_PC_Edition" },
          { type: "website", label: "Sitio Web", url: "https://questseeker.games/" }
        ],
        images: ['/rogue-slime-picture01.webp', '/rogue-slime-picture02.webp', '/rogue-slime-picture03.webp', '/rogue-slime-picture04.webp'],
        videoSrc: "/rogue-slime-gameplay.mp4",
        bullets: [
          "Proyecto personal con compañeros de trabajo. Logramos alcanzar 500.000 descargas en todas las plataformas.",
          "Desarrollo de los sistemas y mecánicas principales del juego."
        ]
      },
      {
        title: "Dicey Hell",
        tech: "Unity / C# / Game Jam",
        links: [
          { type: "itch", label: "Itch.io", url: "https://luquitasdev.itch.io/diceyhell" },
        ],
        videoSrc: "/dicey-hell-gameplay.mp4",
        bullets: [
          "Proyecto de Game Jam.",
          "Proyecto de fin de semana - Equipo de Rogue Slime."
        ]
      },
      {
        title: "Believe or Die",
        tech: "Unity / C# / Game Jam",
        links: [
          { type: "itch", label: "Itch.io", url: "https://luquitasdev.itch.io/believeordie" },
        ],
        images: ['/believe-or-die-picture01.webp', '/believe-or-die-picture02.webp', '/believe-or-die-picture03.webp'],
        videoSrc: "/believe-or-die-gameplay.mp4",
        bullets: [
          "Otro proyecto de Game Jam.",
          "Proyecto de fin de semana - Equipo de Rogue Slime."
        ]
      },
      {
        title: "Miniature Heist",
        tech: "Unity / C# / Game Jam",
        links: [
          { type: "itch", label: "Itch.io", url: "https://luquitasdev.itch.io/miniature-heist" },
        ],
        images: ['/miniature-heist-picture01.webp', '/miniature-heist-picture02.webp', '/miniature-heist-picture03.webp'],
        videoSrc: "/miniature-heist-gameplay.mp4",
        bullets: [
          "Otro proyecto de Game Jam.",
          "Proyecto de fin de semana - Equipo de Rogue Slime."
        ]
      }
    ]
  }
};