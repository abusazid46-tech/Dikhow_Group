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
import type { LucideIcon } from "lucide-react";

const cp1252Reverse: Record<number, number> = {
  0x20ac: 0x80,
  0x201a: 0x82,
  0x0192: 0x83,
  0x201e: 0x84,
  0x2026: 0x85,
  0x2020: 0x86,
  0x2021: 0x87,
  0x02c6: 0x88,
  0x2030: 0x89,
  0x0160: 0x8a,
  0x2039: 0x8b,
  0x0152: 0x8c,
  0x017d: 0x8e,
  0x2018: 0x91,
  0x2019: 0x92,
  0x201c: 0x93,
  0x201d: 0x94,
  0x2022: 0x95,
  0x2013: 0x96,
  0x2014: 0x97,
  0x02dc: 0x98,
  0x2122: 0x99,
  0x0161: 0x9a,
  0x203a: 0x9b,
  0x0153: 0x9c,
  0x017e: 0x9e,
  0x0178: 0x9f
};

const decodeAssamese = (value: string) => {
  if (!/[àâ]/.test(value)) return value;

  const bytes = Uint8Array.from(
    Array.from(value, (character) => {
      const code = character.codePointAt(0) ?? 0;
      if (code <= 0xff) return code;
      return cp1252Reverse[code] ?? 0x3f;
    })
  );

  return new TextDecoder().decode(bytes);
};

const decodeAssameseList = (values: string[]) => values.map(decodeAssamese);

export type Division = {
  slug: string;
  name: string;
  shortName: string;
  established: string;
  industry: string;
  image: string;
  logo: string;
  icon: LucideIcon;
  accent: string;
  description: string;
  longDescription: string;
  services: string[];
  highlights: string[];
  sourceNote?: string;
  assameseTitle?: string;
  assameseSubtitle?: string;
  assameseAbout?: string[];
  assameseMission?: string[];
  assameseVision?: string[];
  assamesePromise?: string[];
};

export const contact = {
  phoneLabel: "+91 91810 35358",
  phoneHref: "tel:+919181035358",
  whatsappNumber: "919181035358",
  whatsappHref:
    "https://wa.me/919181035358?text=Hello%20Dikhow%20Group%2C%20I%20would%20like%20to%20discuss%20a%20business%20enquiry.",
  email: "contact@dikhowgroup.com",
  location: "Assam, India"
};

export const brand = {
  logo: "/images/logos/dikhow-group-logo.jpeg"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/divisions/construction", label: "Construction" },
  { href: "/divisions/agro-organic", label: "Agro Organic" },
  { href: "/divisions/erinest", label: "EriNest" },
  { href: "/contact", label: "Contact" }
];

export const divisions: Division[] = [
  {
    slug: "construction",
    name: "Dikhow Construction",
    shortName: "Construction",
    established: "6th March 2009",
    industry: "Construction & Infrastructure",
    image: "/images/dikhow-construction.png",
    logo: "/images/logos/dikhow-construction-logo.jpeg",
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
    ],
    sourceNote: "About available on Google Business"
  },
  {
    slug: "agro-organic",
    name: "Dikhow Agro Organic",
    shortName: "Agro Organic",
    established: "24th April 2026",
    industry: "Organic Agriculture",
    image: "/images/dikhow-agro-organic.png",
    logo: "/images/logos/dikhow-agro-organic-logo.jpeg",
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
    ],
    assameseTitle: decodeAssamese("About Dikhow Agro Organic"),
    assameseAbout: decodeAssameseList([
      "Dikhow Agro Organic হৈছে অসমৰ গ্ৰামাঞ্চলত প্ৰকৃতি-অনুকূল আৰু জৈৱিক কৃষি ব্যৱস্থাক শক্তিশালী কৰাৰ লক্ষ্যৰে গঢ়ি উঠা এক আধুনিক, দায়িত্বশীল আৰু দূৰদৰ্শী কৃষি উদ্যোগ। আমাৰ মূল উদ্দেশ্য হৈছে অনাবাদী অথবা কম ব্যৱহৃত কৃষিজমিসমূহ পুনৰ উৎপাদনমুখী কৰি তোলা আৰু বৈজ্ঞানিক পদ্ধতিৰে জৈৱিক কৃষিৰ উন্নয়ন সাধন কৰা।",
      "বৰ্তমান সময়ত অসমৰ বহু কৃষিজমি বিভিন্ন কাৰণত অনাবাদী হৈ পৰিছে। ইয়াৰ ফলত কৃষিভিত্তিক অৰ্থনীতি দুৰ্বল হোৱাৰ লগতে গ্ৰামাঞ্চলত কৰ্মসংস্থাপনৰ সমস্যাও বৃদ্ধি পাইছে। এই পৰিস্থিতিৰ এক ইতিবাচক সমাধান হিচাপে Dikhow Agro Organic এ ভূমি মালিক, স্থানীয় কৃষক আৰু গ্ৰাম্য সমাজক এক সমন্বিত অংশীদাৰিত্বৰ মাজেৰে জৈৱিক কৃষিৰ নতুন সম্ভাৱনা গঢ়ি তুলিবলৈ কাম কৰি আছে।",
      "আমি ভূমি মালিকসকলৰ সৈতে আইনসন্মত আৰু স্বচ্ছ চুক্তিৰ জৰিয়তে ন্যূনতম ৫ বছৰৰ বাবে কৃষিজমি লিজ লৈ আধুনিক আৰু বৈজ্ঞানিক কৃষি পদ্ধতিৰে কৃষিকাৰ্য সম্পাদন কৰোঁ। এই ব্যৱস্থাৰ ফলত ভূমি মালিকসকলে নিৰাপদ আৰু স্থায়ী আয় লাভ কৰাৰ লগতে কৃষিজমিৰ সঠিক আৰু ফলপ্ৰসূ ব্যৱহাৰ নিশ্চিত হয়।",
      "Dikhow Agro Organic এ সম্পূৰ্ণ জৈৱিক, ৰাসায়নিকমুক্ত আৰু পৰিৱেশবান্ধৱ কৃষি পদ্ধতি অনুসৰণ কৰে। আমি মাটিৰ উৰ্বৰতা সংৰক্ষণ, স্বাস্থ্যসম্মত খাদ্য উৎপাদন আৰু প্ৰাকৃতিক ভাৰসাম্য ৰক্ষা কৰাত বিশেষ গুৰুত্ব আৰোপ কৰোঁ। আমাৰ বিশ্বাস, জৈৱিক কৃষিয়েই ভৱিষ্যতৰ সুস্থ সমাজ আৰু শক্তিশালী অৰ্থনীতি গঢ়ি তোলাৰ অন্যতম ভেটি।",
      "আমাৰ অন্যতম লক্ষ্য হৈছে অসমৰ অনাবাদী আৰু পৰিত্যক্ত কৃষিজমিসমূহ পুনৰ সেউজীয়া আৰু উৎপাদনমুখী কৰি তোলা। লগতে নতুন প্ৰজন্মক কৃষিৰ প্ৰতি আগ্ৰহী, আত্মনিৰ্ভৰশীল আৰু কৃষিমুখী হ’বলৈ উৎসাহিত কৰাটোও আমাৰ এক গুৰুত্বপূর্ণ উদ্দেশ্য। আধুনিক কৃষি জ্ঞান, প্ৰযুক্তি আৰু বাণিজ্যিক সম্ভাৱনাৰ জৰিয়তে কৃষিখণ্ডক অধিক লাভজনক আৰু সন্মানজনক পেছা হিচাপে প্ৰতিষ্ঠা কৰাৰ লক্ষ্য লৈ আমি আগবাঢ়িছোঁ।"
    ]),
    assameseMission: decodeAssameseList([
      "অসমৰ অনাবাদী আৰু পৰিত্যক্ত কৃষিজমি পুনৰ সেউজীয়া আৰু উৎপাদনমুখী কৰি তোলা।",
      "নতুন প্ৰজন্মক কৃষিৰ প্ৰতি আগ্ৰহী আৰু আত্মনিৰ্ভৰশীল হ’বলৈ উৎসাহিত কৰা।",
      "জৈৱিক আৰু প্ৰকৃতি-অনুকূল কৃষিৰ জৰিয়তে সুস্থ সমাজ আৰু শক্তিশালী গ্ৰাম্য অৰ্থনীতি গঢ়ি তোলা।",
      "স্থানীয় কৃষক আৰু ভূমি মালিকসকলৰ সৈতে দীৰ্ঘম্যাদী উন্নয়নমূলক অংশীদাৰিত্ব স্থাপন কৰা।"
    ]),
    assameseVision: decodeAssameseList([
      "অসমৰ কৃষিভিত্তিক অৰ্থনীতিক অধিক শক্তিশালী কৰি তোলা, গ্ৰামাঞ্চলত নতুন কৰ্মসংস্থাপনৰ সুযোগ সৃষ্টি কৰা আৰু জৈৱিক কৃষিৰ জৰিয়তে এক সুস্থ, স্বাৱলম্বী আৰু পৰিৱেশ-সচেতন সমাজ গঢ়ি তোলা।",
      "Dikhow Agro Organic বিশ্বাস কৰে যে সঠিক পৰিকল্পনা, আধুনিক কৃষি ব্যৱস্থা আৰু সমাজভিত্তিক সহযোগিতাৰ জৰিয়তে অসমৰ কৃষিখণ্ডত এক নতুন সম্ভাৱনাৰ দ্বাৰ মুকলি কৰিব পাৰি। আমাৰ লক্ষ্য কেৱল শস্য উৎপাদন নহয়, বৰং কৃষি, পৰিৱেশ আৰু সমাজৰ মাজত এক সুস্থ আৰু স্থায়ী সম্পৰ্ক গঢ়ি তোলা।"
    ])
  },
  {
    slug: "erinest",
    name: "Dikhow EriNest",
    shortName: "EriNest",
    established: "24th April 2026",
    industry: "Eri Silk & Traditional Textiles",
    image: "/images/dikhow-eri-firm.png",
    logo: "/images/logos/dikhow-erinest-logo.jpeg",
    icon: Waves,
    accent: "Heritage Textiles",
    description:
      "A heritage-led textile division presenting Assamese Eri silk, handloom craft, and cultural richness through ethical, sustainable textile production.",
    longDescription:
      "Dikhow EriNest brings Assamese textile heritage into a modern enterprise framework. The division preserves Eri silk culture and handloom craft while connecting traditional artistry with modern demand and market access.",
    services: [
      "Eri Silk Production",
      "Handcrafted Textiles",
      "Traditional Weaving",
      "Wholesale & Retail Supply"
    ],
    highlights: [
      "Ahimsa Silk and ethical textile focus",
      "Traditional Assamese handloom identity",
      "Made in Assam market positioning"
    ],
    assameseTitle: decodeAssamese("About ডিখৌ EriNest"),
    assameseSubtitle: decodeAssamese("অসমৰ ঐতিহ্য, সংস্কৃতি আৰু প্ৰকৃতিৰ এক গৌৰৱময় প্ৰতিচ্ছবি"),
    assameseAbout: decodeAssameseList([
      "ডিখৌ EriNest হৈছে অসমৰ ঐতিহ্যবাহী এৰি ৰেচম, হস্ততাঁত শিল্প আৰু সাংস্কৃতিক ঐশ্বৰ্য্যক বিশ্বদৰবাৰত গৌৰৱেৰে উপস্থাপন কৰাৰ এক আন্তৰিক আৰু দায়িত্বশীল প্ৰচেষ্টা। আমাৰ লক্ষ্য হৈছে অসমৰ শতাব্দীপ্ৰাচীন এৰি সংস্কৃতি আৰু তাঁতশিল্পক সংৰক্ষণ কৰি আধুনিক যুগৰ চাহিদাৰ সৈতে সংযোগ স্থাপন কৰা।",
      "এৰি ৰেচম, যাক বিশ্বজুৰি “Ahimsa Silk” বা “শান্তিৰ বস্ত্ৰ” হিচাপে জনা যায়, এক অনন্য পৰিবেশ-বন্ধু আৰু নৈতিক বস্ত্ৰ। ইয়াৰ উৎপাদনত ৰেচম পলুক ক্ষতি কৰা নহয়, যাৰ ফলত এৰি ৰেচমে মানৱতা, প্ৰকৃতি আৰু টেকসই জীৱনধাৰাৰ এক সুন্দৰ সমন্বয় প্ৰতিফলিত কৰে।",
      "অসমৰ গাঁও অঞ্চলৰ দক্ষ তাঁতশিল্পীসকলে যুগ যুগ ধৰি নিজৰ শিল্পকলা, পৰিশ্ৰম আৰু সাংস্কৃতিক মূল্যবোধৰ জৰিয়তে এই ঐতিহ্যক জীয়াই ৰাখিছে। ডিখৌ EriNest-এ সেইসকল শিল্পীৰ সপোন, দক্ষতা আৰু পৰিশ্ৰমক সন্মান জনাই এক শক্তিশালী মঞ্চ প্ৰদান কৰাৰ বাবে প্ৰতিশ্ৰুতিবদ্ধ।",
      "আমাৰ প্ৰতিটো সৃষ্টি অসমৰ মাটি, নদী, প্ৰকৃতি, উৎসৱ, পৰম্পৰা আৰু জীৱনশৈলীৰ এক জীৱন্ত প্ৰতিফলন। আমি বিশ্বাস কৰোঁ যে এৰি ৰেচম কেৱল এক বস্ত্ৰ নহয়, ই অসমৰ আত্মা, সংস্কৃতি আৰু পৰিচয়ৰ বাহক।"
    ]),
    assameseVision: decodeAssameseList([
      "অসমৰ ঐতিহ্যবাহী এৰি ৰেচম আৰু হস্ততাঁত শিল্পক বিশ্ববজাৰত এক গৌৰৱময়, পৰিবেশ-বন্ধু আৰু টেকসই পৰিচয় হিচাপে প্ৰতিষ্ঠা কৰা।",
      "স্থানীয় তাঁতশিল্পী, গ্ৰাম্য উদ্যোগ আৰু অসমৰ সমৃদ্ধ সাংস্কৃতিক ঐতিহ্যক শক্তিশালী কৰি নতুন প্ৰজন্মৰ মাজত এৰি ৰেচমৰ মূল্য, মৰ্যাদা আৰু সম্ভাৱনাক অধিক জনপ্ৰিয় কৰি তোলা।"
    ]),
    assameseMission: decodeAssameseList([
      "অসমৰ খাঁটি এৰি ৰেচম, হস্ততাঁত আৰু হস্তশিল্পৰ সংৰক্ষণ, উন্নয়ন আৰু প্ৰচাৰ।",
      "স্থানীয় তাঁতশিল্পী, বিশেষকৈ মহিলা উদ্যোগীসকলক আৰ্থিকভাৱে স্বাৱলম্বী আৰু আত্মনিৰ্ভৰশীল কৰাৰ সুযোগ সৃষ্টি।",
      "পৰিবেশ-বন্ধু, প্ৰাকৃতিক আৰু টেকসই উৎপাদন ব্যৱস্থাৰ জৰিয়তে Sustainable Fashion-ক উৎসাহিত কৰা।",
      "পৰম্পৰাগত শিল্পক আধুনিক নকশা আৰু গুণগত মানৰ সৈতে সংযোগ কৰি বিশ্বমানৰ এৰি পণ্য উৎপাদন।",
      "\"Made in Assam\" পৰিচয়ক জাতীয় আৰু আন্তঃৰাষ্ট্ৰীয় বজাৰত শক্তিশালী আৰু বিশ্বাসযোগ্য ব্ৰেণ্ড হিচাপে প্ৰতিষ্ঠা কৰা।",
      "অসমৰ গ্ৰাম্য অৰ্থনীতি, সংস্কৃতি আৰু ঐতিহ্যৰ সংৰক্ষণত সক্ৰিয় ভূমিকা পালন কৰা।"
    ]),
    assamesePromise: decodeAssameseList([
      "ডিখৌ EriNest-এ কেৱল এৰি ৰেচমৰ পণ্য উৎপাদন নকৰে; আমি অসমৰ ঐতিহ্য, শিল্প, সংস্কৃতি আৰু পৰিচয়ক নতুন প্ৰজন্ম আৰু বিশ্বসমাজৰ সৈতে সংযোগ স্থাপন কৰোঁ। আমাৰ প্ৰতিটো পণ্যত নিহিত থাকে অসমৰ মাটিৰ সুবাস, শিল্পীৰ পৰিশ্ৰম আৰু সংস্কৃতিৰ গৌৰৱ।",
      "“ডিখৌ EriNest — অসমৰ ঐতিহ্য, শান্তি আৰু সৌন্দৰ্য্যক বিশ্বদৰবাৰত গৌৰৱেৰে উপস্থাপন কৰাৰ এক বিশ্বাসযোগ্য যাত্ৰা।”"
    ])
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
