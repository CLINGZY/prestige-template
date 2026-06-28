import heroImage from "../assets/images/hero-image.jpg";
import visionImage from "../assets/images/vision-image.jpg";


export const siteData = {
  businessName: "Forma",

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
      label: "Contact",
      href: "#contact",
    },
  ],

  primaryCTA: {
    text: "Begin a Project",
    href: "#contact",
  },

  hero: {
    eyebrow:
      "Lagos · Abuja · London — Est. 2011",

    title: [
      "Space",
      "designed to",
      "endure.",
    ],

    description:
      "We create interior environments and architectural spaces for those who understand that great design is not decoration — it is a statement about who you are.",

    image: heroImage,
  },




  vision: {
    chapter: "Chapter I — Vision",

    heading: [
      "We don't design",
      "interiors.",
      "We design",
      "legacies."
    ],

    paragraphs: [
      "Forma was built on a single conviction: the environments you inhabit shape the person you become, the clients you attract, and the life you lead. Every project we undertake begins not with measurements, but with intention.",

      "Our work sits at the intersection of architectural precision and artistic restraint — spaces that feel inevitable rather than decorated, as though they could not have existed any other way."
    ],

    stats: [
      {
        number: "14",
        label: "Years of practice"
      },
      {
        number: "200+",
        label: "Projects completed"
      },
      {
        number: "3",
        label: "Countries served"
      }
    ],

    image: visionImage,

    imageCaption:
      "Ikoyi Residence, Lagos — 2024",
  },
};