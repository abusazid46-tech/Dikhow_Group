import {
  BadgeCheck,
  Building2,
  Handshake,
  Leaf,
  LineChart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Sprout,
  Target,
  Tractor,
  Users,
  Waves
} from "lucide-react";

export const contact = {
  phoneLabel: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  whatsappHref:
    "https://wa.me/910000000000?text=Hello%20Dikhow%20Group%2C%20I%20would%20like%20to%20discuss%20a%20business%20enquiry.",
  email: "contact@dikhowgroup.com",
  location: "Assam, India"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/divisions/construction", label: "Construction" },
  { href: "/divisions/agro-organic", label: "Agro Organic" },
  { href: "/divisions/eri-firm", label: "Eri Firm" },
  { href: "/contact", label: "Contact" }
];

export const divisions = [
  {
    slug: "construction",
    name: "Dikhow Construction",
    shortName: "Construction",
    established: "6th March 2009",
    industry: "Construction & Infrastructure",
    image: "/images/dikhow-construction.png",
    icon: Building2,
    accent: "Infrastructure",
    description:
      "A trusted construction and infrastructure division delivering residential, commercial, infrastructure, renovation, and maintenance projects with disciplined execution.",
    longDescription:
      "Dikhow Construction is the group foundation, established on 6th March 2009 to deliver dependable construction services for homes, institutions, commercial assets, and public-facing infrastructure. The division combines practical project management with quality controls and a long-term commitment to client trust.",
    services: [
      "Residential Construction",
      "Commercial Buildings",
      "Infrastructure Projects",
      "Renovation & Maintenance"
    ],
    highlights: [
      "Project planning and execution",
      "Quality-focused material practices",
      "Reliable maintenance support"
    ]
  },
  {
    slug: "agro-organic",
    name: "Dikhow Agro Organic",
    shortName: "Agro Organic",
    established: "24th April 2026",
    industry: "Organic Agriculture",
    image: "/images/dikhow-agro-organic.png",
    icon: Sprout,
    accent: "Sustainable Agriculture",
    description:
      "An organic agriculture venture focused on responsible farming, organic produce supply, consulting, and sustainable farming solutions.",
    longDescription:
      "Dikhow Agro Organic advances the group's sustainability ambitions through organic farming, produce supply, and agricultural advisory services. The division is built to support healthier food systems, soil-conscious methods, and practical farming solutions for growers and partners.",
    services: [
      "Organic Farming",
      "Organic Produce Supply",
      "Agricultural Consultancy",
      "Sustainable Farming Solutions"
    ],
    highlights: [
      "Soil-first organic practices",
      "Farm advisory and planning",
      "Responsible supply relationships"
    ]
  },
  {
    slug: "eri-firm",
    name: "Dikhow Eri Firm",
    shortName: "Eri Firm",
    established: "24th April 2026",
    industry: "Eri Silk & Traditional Textiles",
    image: "/images/dikhow-eri-firm.png",
    icon: Waves,
    accent: "Heritage Textiles",
    description:
      "A heritage-led textile division preserving Assamese Eri silk traditions through production, weaving, handcrafted textiles, and wholesale and retail supply.",
    longDescription:
      "Dikhow Eri Firm brings Assamese textile heritage into a modern enterprise framework. The division supports Eri silk production, handcrafted textiles, traditional weaving, and market access for customers seeking authentic, responsibly produced materials.",
    services: [
      "Eri Silk Production",
      "Handcrafted Textiles",
      "Traditional Weaving",
      "Wholesale & Retail Supply"
    ],
    highlights: [
      "Traditional Assamese craft focus",
      "Premium tactile textile quality",
      "Wholesale and retail readiness"
    ]
  }
];

export const values = [
  {
    title: "Integrity",
    text: "Transparent relationships, responsible commitments, and dependable delivery.",
    icon: ShieldCheck
  },
  {
    title: "Sustainability",
    text: "Long-term choices that respect land, people, and local resources.",
    icon: Leaf
  },
  {
    title: "Innovation",
    text: "Practical improvements that help each division work smarter and grow stronger.",
    icon: Sparkles
  },
  {
    title: "Excellence",
    text: "A consistent standard of quality across projects, produce, and textiles.",
    icon: BadgeCheck
  },
  {
    title: "Community Development",
    text: "Business growth designed to create shared opportunity across Assam and beyond.",
    icon: Users
  }
];

export const whyChooseUs = [
  { title: "Established Legacy Since 2009", icon: Target },
  { title: "Multi-Sector Expertise", icon: LineChart },
  { title: "Sustainable Practices", icon: Leaf },
  { title: "Customer-Centric Approach", icon: Handshake },
  { title: "Quality Assurance", icon: BadgeCheck },
  { title: "Long-Term Commitment", icon: ShieldCheck }
];

export const contactCards = [
  { title: "Call", value: contact.phoneLabel, href: contact.phoneHref, icon: Phone },
  { title: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { title: "Location", value: contact.location, href: "/contact", icon: MapPin },
  { title: "WhatsApp", value: "Start a conversation", href: contact.whatsappHref, icon: Tractor }
];
