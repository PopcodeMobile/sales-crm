import type { Locale } from "../config";
import type { Tag } from "@/data/companies";

const ptBR: Record<Tag, string> = {
  Enterprise: "Enterprise",
  "Mid-Market": "Mid-Market",
  SMB: "PME",
  Strategic: "Estratégico",
  "New Logo": "Novo cliente",
  Upsell: "Upsell",
  Expansion: "Expansão",
  Renewal: "Renovação",
  Pilot: "Piloto",
  "Co-Sell": "Co-venda",
  "Land & Expand": "Land & Expand",
};

const en: Record<Tag, string> = {
  Enterprise: "Enterprise",
  "Mid-Market": "Mid-Market",
  SMB: "SMB",
  Strategic: "Strategic",
  "New Logo": "New Logo",
  Upsell: "Upsell",
  Expansion: "Expansion",
  Renewal: "Renewal",
  Pilot: "Pilot",
  "Co-Sell": "Co-Sell",
  "Land & Expand": "Land & Expand",
};

const tags: Record<Locale, Record<Tag, string>> = { "pt-BR": ptBR, en };

export default tags;
