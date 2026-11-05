import type { Locale } from "../config";

const ptBR = {
  meta: {
    title: "Sales CRM",
    description: "Pipeline de empresas para o time de vendas.",
  },
  currency: "US$",
  preferences: {
    language: "Idioma",
    switchLanguage: "Mudar idioma para inglês",
    lightMode: "Ativar modo claro",
    darkMode: "Ativar modo escuro",
  },
};

export type AppMessages = typeof ptBR;

const en: AppMessages = {
  meta: {
    title: "Sales CRM",
    description: "Company pipeline for the sales team.",
  },
  currency: "$",
  preferences: {
    language: "Language",
    switchLanguage: "Switch language to Portuguese",
    lightMode: "Switch to light mode",
    darkMode: "Switch to dark mode",
  },
};

const app: Record<Locale, AppMessages> = { "pt-BR": ptBR, en };

export default app;
