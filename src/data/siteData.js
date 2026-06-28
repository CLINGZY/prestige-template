const whatsapp = "https://wa.me/2349070081056"
const facebook = "https://www.facebook.com/clinton.uduophori"
const instagram = "https://www.instagram.com/clinton_web_dev?igsh=cWdmdWFpbGF5b2F6/"

export const siteData = {
  /* NAVBAR */
  logo: {
    type: "text",
    text: "Prestige Collective",
    image: "",
    href: "/",
  },

  navigationLinks: [
    {
      id: 1,
      label: "Work",
      href: "#work",
    },
    {
      id: 2,
      label: "Philosophy",
      href: "#philosophy",
    },
    {
      id: 3,
      label: "Process",
      href: "#process",
    },
    {
      id: 4,
      label: "Legacy",
      href: "#legacy",
    },
  ],

  socialLinks: [
    {
      id: 1,
      platform: "Instagram",
      url: instagram,
      icon: "instagram",
    },
    {
      id: 2,
      platform: "Facebook",
      url: facebook,
      icon: "facebook",
    },
    {
      id: 3,
      platform: "WhatsApp",
      url: whatsapp,
      icon: "whatsapp",
    },
  ],

  primaryCTA: {
    text: "Enquire Now",
    href: whatsapp,
  },


  /* HERO */
  hero: {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",

    chapterNumber: "I",

    eyebrow: "Design • Architecture • Craft",

    title: [
      "Design",
      "With",
      "Purpose",
    ],

    description:
    "We create timeless environments, experiences, and destinations through exceptional design, craftsmanship, and uncompromising attention to detail.",

    primaryCTA: {
      text: "Enquire Now",
      href: whatsapp,
    },
  },



  /* VISION */
  vision: {
    ghostNumber: "I",

    heading: [
      "We don't create",
      "projects.",
      "We create",
      "legacies.",
    ],

    paragraphs: [
      "Forma was built on a single conviction: the environments and experiences people encounter shape how they live, work, gather, and grow. Every project we undertake begins not with drawings, but with intention.",

      "Our work exists at the intersection of precision, innovation, and refined execution — delivering outcomes that feel enduring, purposeful, and impossible to imagine any other way.",
    ],

    stats: [
      {
        id: 1,
        number: "14",
        label: "Years of practice",
      },
      {
        id: 2,
        number: "200+",
        label: "Projects completed",
      },
      {
        id: 3,
        number: "3",
        label: "Countries served",
      },
    ],

    image: {
      src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=85",
      alt: "Luxury Interior",
      caption: "Signature Project, Lagos — 2024",
    },
  },



  /* METRIC BAND */
  metricsBand: [
    {
      id: 1,
      number: "₦2.4B",
      label: "Total project value delivered",
    },
    {
      id: 2,
      number: "97%",
      label: "Clients return for a second project",
    },
    {
      id: 3,
      number: "18",
      label: "Industry awards received",
    },
    {
      id: 4,
      number: "4.2×",
      label: "Average property value increase",
    },
  ],



  /* WORK */
  work: {
    heading: [
      "Projects",
      "that outlive",
      "the moment.",
    ],

    description:
      "Each commission is a singular act of collaboration — between our studio, our clients, and the unique demands of every brief. No two projects share the same resolution. Below is a selection of our most defining work.",

    featuredProject: {
      image:
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1800&q=85",

      tag: "Flagship Project — Abuja",

      title: [
        "The Maitama",
        "House",
      ],

      description:
        "A landmark project conceived around permanence, craftsmanship, and a lasting sense of place.",

      year: "2023",
    },

    projects: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80",

        tag: "Residential Project",

        title: "Victoria Penthouse",
      },

      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80",

        tag: "Commercial Development",

        title: "Executive Headquarters",
      },

      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",

        tag: "Bespoke Design",

        title: "Culinary Studio",
      },

      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1000&q=80",

        tag: "Premium Development",

        title: "Garden Estate Residence",
      },
    ],
  },



  /* QUOTE STRIP */
  quoteStrip: {
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1800&q=80",

    quote: [
      "We do not ask what our clients want their",
      "project to look like. We ask what they want",
      "their investment to make",
    ],

    emphasis: "possible.",
  },




  /* PHILOSOPHY */
  philosophy: {
    ghostNumber: "III",

    quote: [
      "The standard is not excellence.",
      "The standard is",
      "projects that could not have been",
      "executed any other way.",
    ],

    emphasis: "inevitability",

    paragraphs: [
      "We begin every project with a period of deep listening. We study our clients' ambitions, objectives, audiences, and long-term vision. Only then do we begin to create.",

      "This process takes longer than most firms are willing to invest. It is also why our work remains relevant for years, continues to deliver value, and earns the trust of clients who return again and again.",
    ],
  },



  /* TRANSFORMATION */
  transformation: {
    image:
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=900&q=85",

    eyebrow: "What our clients experience",

    heading: [
      "The same address.",
      "A completely",
      "different",
      "future.",
    ],

    paragraphs: [
      "Every project produces a transformation that extends beyond the physical. Perception changes. Opportunities expand. The value of the investment grows.",

      "This is the cumulative effect of every decision — strategy, design, execution, and detail — resolved with intention.",
    ],

    testimonials: [
      {
        id: 1,
        quote:
          "They didn't just deliver a project — they elevated how our business is perceived.",

        name: "Adebayo Okonkwo",

        role: "Managing Director",
      },

      {
        id: 2,
        quote:
          "The final result exceeded every expectation. It feels timeless, intentional, and distinctly ours.",

        name: "Chidinma Eze",

        role: "Private Client",
      },

      {
        id: 3,
        quote:
          "The team understood exactly what we wanted to achieve and translated it into something exceptional.",

        name: "Tunde & Funmi Adeyemi",

        role: "Project Clients",
      },
    ],
  },




  /* PROCESS */
  process: {
    ghostNumber: "V",

    heading: [
      "How we",
      "work.",
    ],

    intro:
      "Our process is not a formula. It is a discipline — a set of convictions about how to move from an initial brief to a finished outcome that exceeds expectations.",

    steps: [
      {
        number: "01",
        title: "Discovery & Immersion",

        body:
          "We spend the first weeks doing nothing but listening. We study your vision, objectives, audience, and ambitions. Everything informs the final outcome.",
      },

      {
        number: "02",
        title: "Concept Development",

        body:
          "We present a single fully resolved concept. Every decision connects back to a principle and your original brief.",
      },

      {
        number: "03",
        title: "Design Development & Detailing",

        body:
          "Every element is refined for performance, longevity, functionality, and visual impact — ensuring nothing is left unresolved.",
      },

      {
        number: "04",
        title: "Delivery & Stewardship",

        body:
          "We remain involved until every detail meets our standard and continue supporting our clients long after completion.",
      },
    ],
  },




  /* LEGACY */
  legacy: {
    backgroundImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1800&q=85",

    eyebrow: "Begin a conversation",

    heading: [
      "Every great",
      "project begins",
      "with a question.",
    ],

    emphasis: "great",

    text:
      "We take on a limited number of projects each year. If you are considering something significant, we would like to hear from you.",

    primaryCTA: {
      text: "Enquire Now",
      href: whatsapp,
    },

    secondaryCTA: {
      text: "@prestigecollective",
      href: instagram,
    },
  },




  /* FOOTER */
  footer: {
  brand: {
    name: "Prestige Collective",

    description:
      "Premium design, architecture, and consultancy services for clients who understand that exceptional projects are among life's most enduring investments.",
  },

  columns: [
    {
      title: "Services",

      links: [
        {
          label: "Residential Projects",
          href: "#",
        },

        {
          label: "Commercial Projects",
          href: "#",
        },

        {
          label: "Architecture & Design",
          href: "#",
        },

        {
          label: "Project Consultation",
          href: "#",
        },

        {
          label: "Bespoke Solutions",
          href: "#",
        },
      ],
    },

    {
      title: "Studio",

      links: [
        {
          label: "Work",
          href: "#work",
        },

        {
          label: "Philosophy",
          href: "#philosophy",
        },

        {
          label: "Process",
          href: "#process",
        },

        {
          label: "Legacy",
          href: "#legacy",
        },
      ],
    },

    {
      title: "Connect",

      links: [
        {
          label: "Instagram",
          href: instagram,
        },

        {
          label: "Facebook",
          href: facebook,
        },

        {
          label: "WhatsApp",
          href: whatsapp,
        },
      ],
    },
  ],

  copyright:
    "© 2026 Atelier Noir. All rights reserved.",

  locations: "By Appointment Only",
},
};