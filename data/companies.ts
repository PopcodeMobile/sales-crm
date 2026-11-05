export const SEGMENTS = [
  "Enterprise",
  "Mid-Market",
  "SMB",
  "Strategic",
] as const;

export const STAGES = [
  "New Logo",
  "Upsell",
  "Expansion",
  "Renewal",
  "Pilot",
  "Co-Sell",
  "Land & Expand",
] as const;

export type Segment = (typeof SEGMENTS)[number];
export type Stage = (typeof STAGES)[number];
export type Tag = Segment | Stage;

export type TagTone =
  | "blue"
  | "purple"
  | "green"
  | "moss"
  | "red"
  | "orange"
  | "amber"
  | "teal"
  | "yellow"
  | "neutral";

export const TAG_TONES: Record<Tag, TagTone> = {
  Enterprise: "blue",
  "Mid-Market": "moss",
  SMB: "yellow",
  Strategic: "red",
  "New Logo": "green",
  Upsell: "purple",
  Expansion: "green",
  Renewal: "green",
  Pilot: "orange",
  "Co-Sell": "amber",
  "Land & Expand": "teal",
};

export type Owner = {
  name: string;
  avatar: string;
  email: string;
  phone: string;
  role: string;
};

const AVATARS = Array.from(
  { length: 10 },
  (_, i) => `/assets/images/_common/avatars/avatar-${i + 1}.png`,
);

const OWNER_NAMES = [
  "Mariana Costa",
  "João Tavares",
  "Fernanda Lima",
  "Juliana Moraes",
  "Hugo Dória",
  "Marcos Andrade",
  "Diego Nascimento",
  "Larissa Souza",
  "Camila Freitas",
  "Beatriz Carvalho",
  "Ricardo Barros",
  "Helena Martins",
  "Ana Ribeiro",
  "Otávio Campos",
  "Aline Bezerra",
  "Rodrigo",
  "Vivian Madureira",
  "Clara Pinheiro",
];

export const OWNERS: Owner[] = OWNER_NAMES.map((name, i) => ({
  name,
  avatar: AVATARS[i % AVATARS.length],
  email: `${name.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(" ", ".")}@crm.com`,
  phone: `+1 (202) ${String(199 + i).padStart(3, "0")}-${String(5520 + i * 37).slice(-4)}`,
  role: i % 3 === 0 ? "Senior Account Executive" : "Account Executive",
}));

export const CURRENT_USER: Owner = {
  name: "Gui Junqueira",
  avatar: "/assets/images/_common/avatars/jensen.png",
  email: "gui.junqueira@crm.com",
  phone: "+1 (202) 184-5501",
  role: "Head of Sales",
};

export function ownerByName(name: string): Owner {
  return OWNERS.find((owner) => owner.name === name) ?? OWNERS[0];
}

export function profileByName(name: string): Owner {
  return name === CURRENT_USER.name ? CURRENT_USER : ownerByName(name);
}

export type Company = {
  id: string;
  name: string;
  tags: Tag[];
  owner: string;
  openDeals: number;
  pipelineValue: number;
  winProbability: number;
  trend: number[];
  lastInteraction: { date: string; label: string };
  activityDays: number;
  logo?: string;
};

export const TREND_PATTERN = [
  false,
  true,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  true,
  false,
];

export const DEFAULT_TREND = [4, 4, 5, 5, 2, 7, 11, 7, 5, 7, 5, 3, 7, 14];

const TREND_A = [4, 4, 10, 3, 2, 4, 7, 4, 11, 4, 11, 7, 4, 14];
const TREND_B = [4, 4, 5, 5, 2, 7, 11, 7, 5, 7, 5, 3, 7, 14];
const TREND_C = [4, 4, 10, 5, 2, 7, 11, 7, 11, 7, 11, 7, 7, 14];
const TREND_D = [4, 4, 5, 12, 5, 7, 11, 3, 11, 3, 11, 3, 7, 14];

const COMPANY_RECORDS: Omit<Company, "logo">[] = [
  {
    id: "lvmh",
    name: "LVMH",
    tags: ["Enterprise", "Upsell", "Expansion", "Renewal"],
    owner: "Mariana Costa",
    openDeals: 7,
    pipelineValue: 420000,
    winProbability: 70,
    trend: TREND_A,
    lastInteraction: { date: "2026-02-21", label: "QBR Call" },
    activityDays: 88,
  },
  {
    id: "disney",
    name: "Disney",
    tags: ["Enterprise", "New Logo"],
    owner: "João Tavares",
    openDeals: 4,
    pipelineValue: 311242,
    winProbability: 51,
    trend: TREND_B,
    lastInteraction: { date: "2026-02-22", label: "Demo" },
    activityDays: 87,
  },
  {
    id: "paypal",
    name: "Paypal",
    tags: ["Enterprise"],
    owner: "Fernanda Lima",
    openDeals: 5,
    pipelineValue: 124232,
    winProbability: 22,
    trend: TREND_C,
    lastInteraction: { date: "2026-03-12", label: "Security" },
    activityDays: 84,
  },
  {
    id: "united-airlines",
    name: "United Airlines",
    tags: ["Renewal"],
    owner: "Juliana Moraes",
    openDeals: 2,
    pipelineValue: 221231,
    winProbability: 77,
    trend: TREND_D,
    lastInteraction: { date: "2026-03-17", label: "Legal" },
    activityDays: 81,
  },
  {
    id: "apple",
    name: "Apple",
    tags: ["Pilot"],
    owner: "Hugo Dória",
    openDeals: 6,
    pipelineValue: 530111,
    winProbability: 82,
    trend: TREND_C,
    lastInteraction: { date: "2026-03-12", label: "Exec" },
    activityDays: 83,
  },
  {
    id: "microsoft",
    name: "Microsoft",
    tags: ["Strategic", "Expansion"],
    owner: "Marcos Andrade",
    openDeals: 8,
    pipelineValue: 320222,
    winProbability: 86,
    trend: TREND_C,
    lastInteraction: { date: "2026-03-15", label: "Pilot" },
    activityDays: 79,
  },
  {
    id: "airbnb",
    name: "Airbnb",
    tags: ["Upsell", "Expansion", "SMB", "Pilot"],
    owner: "Diego Nascimento",
    openDeals: 3,
    pipelineValue: 122230,
    winProbability: 51,
    trend: TREND_B,
    lastInteraction: { date: "2026-03-18", label: "Pricing" },
    activityDays: 78,
  },
  {
    id: "intercom",
    name: "Intercom",
    tags: ["Enterprise", "Mid-Market"],
    owner: "Larissa Souza",
    openDeals: 5,
    pipelineValue: 230112,
    winProbability: 61,
    trend: TREND_C,
    lastInteraction: { date: "2026-03-28", label: "Product" },
    activityDays: 74,
  },
  {
    id: "attio",
    name: "Attio",
    tags: ["Mid-Market", "Upsell", "Renewal", "Co-Sell"],
    owner: "Camila Freitas",
    openDeals: 2,
    pipelineValue: 420222,
    winProbability: 38,
    trend: TREND_C,
    lastInteraction: { date: "2026-06-14", label: "Pricing" },
    activityDays: 58,
  },
  {
    id: "google",
    name: "Google",
    tags: ["SMB", "Enterprise", "Expansion", "Pilot"],
    owner: "Beatriz Carvalho",
    openDeals: 8,
    pipelineValue: 112277,
    winProbability: 24,
    trend: TREND_B,
    lastInteraction: { date: "2026-06-07", label: "Renewal" },
    activityDays: 62,
  },
  {
    id: "netflix",
    name: "Netflix",
    tags: ["Mid-Market"],
    owner: "Ricardo Barros",
    openDeals: 3,
    pipelineValue: 221221,
    winProbability: 72,
    trend: TREND_C,
    lastInteraction: { date: "2026-06-18", label: "Pilot" },
    activityDays: 55,
  },
  {
    id: "spotify",
    name: "Spotify",
    tags: ["Land & Expand", "Expansion", "Strategic"],
    owner: "Helena Martins",
    openDeals: 5,
    pipelineValue: 170991,
    winProbability: 55,
    trend: TREND_C,
    lastInteraction: { date: "2026-07-01", label: "Expansion" },
    activityDays: 48,
  },
  {
    id: "shopify",
    name: "Shopify",
    tags: ["Co-Sell", "Expansion"],
    owner: "Ana Ribeiro",
    openDeals: 9,
    pipelineValue: 139007,
    winProbability: 45,
    trend: TREND_C,
    lastInteraction: { date: "2026-07-18", label: "Renewal" },
    activityDays: 40,
  },
  {
    id: "zoom",
    name: "Zoom",
    tags: ["Expansion", "Land & Expand", "Renewal"],
    owner: "Otávio Campos",
    openDeals: 8,
    pipelineValue: 289921,
    winProbability: 38,
    trend: TREND_D,
    lastInteraction: { date: "2026-08-08", label: "Partner" },
    activityDays: 27,
  },
  {
    id: "slack",
    name: "Slack",
    tags: ["Mid-Market", "Co-Sell"],
    owner: "Aline Bezerra",
    openDeals: 4,
    pipelineValue: 333221,
    winProbability: 23,
    trend: TREND_C,
    lastInteraction: { date: "2026-08-12", label: "Discovery" },
    activityDays: 24,
  },
  {
    id: "stripe",
    name: "Stripe",
    tags: ["Expansion", "SMB", "Upsell", "Pilot"],
    owner: "Rodrigo",
    openDeals: 3,
    pipelineValue: 442231,
    winProbability: 44,
    trend: TREND_C,
    lastInteraction: { date: "2026-09-09", label: "Demo" },
    activityDays: 8,
  },
  {
    id: "snowflake",
    name: "Snowflake",
    tags: ["Enterprise", "Mid-Market"],
    owner: "Vivian Madureira",
    openDeals: 6,
    pipelineValue: 520000,
    winProbability: 24,
    trend: TREND_C,
    lastInteraction: { date: "2026-09-11", label: "Pricing" },
    activityDays: 6,
  },
  {
    id: "hubspot",
    name: "Hubspot",
    tags: ["Expansion", "Co-Sell", "Renewal", "Pilot"],
    owner: "Clara Pinheiro",
    openDeals: 2,
    pipelineValue: 210123,
    winProbability: 52,
    trend: TREND_C,
    lastInteraction: { date: "2026-09-18", label: "QBR Call" },
    activityDays: 2,
  },
];

export const COMPANIES: Company[] = COMPANY_RECORDS.map((company) => ({
  ...company,
  logo: `/assets/images/companies/logos/${company.id}.svg`,
}));

export const SORT_OPTIONS = [
  { value: "pipelineValue", label: "Pipeline Value" },
  { value: "winProbability", label: "Win Probability" },
  { value: "openDeals", label: "Open Deals" },
  { value: "lastInteraction", label: "Last Interaction" },
  { value: "name", label: "Company Name" },
] as const;

export type SortKey = (typeof SORT_OPTIONS)[number]["value"];

export const INTERACTION_TYPES = [
  "Discovery",
  "Demo",
  "Pricing",
  "Security",
  "Legal",
  "Product",
  "Pilot",
  "Exec",
  "QBR Call",
  "Partner",
  "Renewal",
  "Expansion",
] as const;

export const ACTIVITY_WINDOWS = [7, 30, 60, 90] as const;

export type ActivityWindow = (typeof ACTIVITY_WINDOWS)[number];

export const TREND_WINDOWS = ["Last 7 Days", "Last 30 Days", "Last 90 Days"];

export type ScoreCardKey = "businessFit" | "technicalFit";

export type ScoreCard = {
  key: ScoreCardKey;
  reviewer: string;
  reviewerAvatar: string;
  updatedHours: number;
  stars: number;
};

export const SCORE_CARDS: ScoreCard[] = [
  {
    key: "businessFit",
    reviewer: "Ana Ribeiro",
    reviewerAvatar: "/assets/images/_common/avatars/detail-2.png",
    updatedHours: 2,
    stars: 4,
  },
  {
    key: "technicalFit",
    reviewer: "Ricardo Barros",
    reviewerAvatar: "/assets/images/_common/avatars/detail-3.png",
    updatedHours: 2,
    stars: 4,
  },
  {
    key: "technicalFit",
    reviewer: "Taylor Leroy",
    reviewerAvatar: "/assets/images/_common/avatars/detail-1.png",
    updatedHours: 2,
    stars: 4,
  },
];
