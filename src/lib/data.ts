export interface Project {
  id: string
  title: string
  year: string
  subtitle: string
  bgImage: string
  posterImage: string
  description: string
  headline: string
}

export interface Capability {
  number: string
  title: string
  description: string
  image: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export interface NavItem {
  name: string
  href: string
}

export const projects: Project[] = [
  {
    id: "merla",
    title: "MERLA",
    year: "2026",
    subtitle: "FEATURED PROJECT",
    bgImage: "/images/project_merla_bg.png",
    posterImage: "/images/merla_poster_card.png",
    description:
      "An RFID platform that counts a warehouse in seconds instead of days, with the brand and site to match.",
    headline:
      "Komma Komma is a product design & web-experience creative studio created for brands that refuse to blend in.",
  },
  {
    id: "hanna-stina",
    title: "HANNA STÍNA",
    year: "2026",
    subtitle: "FEATURED PROJECT",
    bgImage: "/images/project_hanna_bg.png",
    posterImage: "/images/project_hanna_bg.png",
    description:
      "An image-led portfolio for interior architect Hanna Stína, built around large photography and room to breathe.",
    headline:
      "An image-led portfolio for interior architect Hanna Stína, built around large photography and room to breathe.",
  },
  {
    id: "tolum-islensku",
    title: "TÖLUM ÍSLENSKU",
    year: "2026",
    subtitle: "FEATURED PROJECT",
    bgImage: "/images/project_tolum_bg.png",
    posterImage: "/images/project_tolum_bg.png",
    description:
      "A pin campaign that gives Icelandic learners a visible way to ask for the conversation they are trying to have.",
    headline:
      "A pin campaign that gives Icelandic learners a visible way to ask for the conversation they are trying to have.",
  },
  {
    id: "dagens",
    title: "DAGENS",
    year: "2025",
    subtitle: "FEATURED PROJECT",
    bgImage: "/images/dark_forest_bg.png",
    posterImage: "/images/dark_forest_bg.png",
    description:
      "A modern editorial publication platform designed for deep reading and rich visual stories.",
    headline:
      "A modern editorial publication platform designed for deep reading and rich visual stories.",
  },
  {
    id: "perla",
    title: "PERLA",
    year: "2024",
    subtitle: "FEATURED PROJECT",
    bgImage: "/images/project_merla_bg.png",
    posterImage: "/images/merla_poster_card.png",
    description:
      "Comprehensive brand identity and digital presence for premium sustainable goods.",
    headline:
      "Comprehensive brand identity and digital presence for premium sustainable goods.",
  },
]

export const capabilities: Capability[] = [
  {
    number: "(01)",
    title: "Brand Strategy",
    description:
      "Before anything visual, we work out what the brand stands for and who it is actually talking to. Skip this part and the design becomes decoration with nothing underneath it.",
    image: "/images/merla_poster_card.png",
  },
  {
    number: "(02)",
    title: "Brand Identity",
    description:
      "We build cohesive visual systems, logo suites, typography, color palettes, and comprehensive guidelines that give your brand a distinct voice.",
    image: "/images/project_hanna_bg.png",
  },
  {
    number: "(03)",
    title: "Brand Presence",
    description:
      "From digital campaigns to social direction and physical touchpoints, we ensure your brand delivers a consistent, memorable impression.",
    image: "/images/project_tolum_bg.png",
  },
  {
    number: "(04)",
    title: "Website Design",
    description:
      "Art directed, typography-first web layouts tailored around your content, created to engage visitors and express brand personality.",
    image: "/images/dark_forest_bg.png",
  },
  {
    number: "(05)",
    title: "Website Development",
    description:
      "Custom, high-performance web engineering with Next.js, smooth animations, responsive interfaces, and seamless content systems.",
    image: "/images/project_merla_bg.png",
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      "We have worked with Komma Komma on a couple of projects now, and somehow they always delivered beyond what we expected. They are consistent, easy to work with, and have great attention to detail.",
    name: "Kristín Eva Ólafsdóttir",
    role: "CEO at Gagarin",
  },
  {
    quote:
      "Their approach to editorial web design and brand strategy gave our company a presence that truly stands out in our industry.",
    name: "Oliver Jónsson",
    role: "Founder at Merla",
  },
  {
    quote:
      "Working with the team was an absolute delight. They translated complex ideas into an elegant, intuitive experience.",
    name: "Hanna Stína",
    role: "Lead Architect",
  },
]

export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "Studio", href: "#studio" },
  { name: "Contact", href: "#contact" },
]
