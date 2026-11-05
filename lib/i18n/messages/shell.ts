import type { Locale } from "../config";

const ptBR = {
  ui: {
    close: "Fechar",
  },
  sidebar: {
    tagline: "Funil de empresas",
    primaryNav: "Principal",
    navigationTitle: "Navegação",
    navigationDescription: "Seções e funis do Delta CRM",
    resize: "Redimensionar barra lateral",
    companies: "Empresas",
    dealsBoard: "Quadro de negócios",
    forecast: "Previsão",
    activities: "Atividades",
    contacts: "Contatos",
    emailSequences: "Sequências de e-mail",
    team: "Equipe",
    strategicAEs: "AEs estratégicos",
    midMarket: "Mid Market",
    sdrTeam: "Time de SDR",
    reporting: "Relatórios",
    q1Forecast: "Previsão do 1º tri",
    slippingDeals: "Negócios em risco",
    pipelines: "Funis",
    northAmerica: "América do Norte",
    emeaEnterprise: "EMEA Enterprise",
    apacExpansion: "APAC Expansion",
    inviteTeammates: "Convidar colegas",
    help: "Ajuda",
    trialDays: "14 dias",
    trialLeft: "restantes no teste",
    addBilling: "Assinar",
  },
  header: {
    openNavigation: "Abrir navegação",
    title: "Empresas",
    active: "Ativo",
    search: "Buscar",
    openProfile: (name: string) => `Abrir perfil de ${name}`,
    tabs: {
      companies: "Empresas",
      deals: "Negócios",
      forecast: "Previsão",
    },
  },
};

export type ShellMessages = typeof ptBR;

const en: ShellMessages = {
  ui: {
    close: "Close",
  },
  sidebar: {
    tagline: "Company pipeline",
    primaryNav: "Primary",
    navigationTitle: "Navigation",
    navigationDescription: "Delta CRM sections and pipelines",
    resize: "Resize sidebar",
    companies: "Companies",
    dealsBoard: "Deals Board",
    forecast: "Forecast",
    activities: "Activities",
    contacts: "Contacts",
    emailSequences: "Email Sequences",
    team: "Team",
    strategicAEs: "Strategic AEs",
    midMarket: "Mid Market",
    sdrTeam: "SDR Team",
    reporting: "Reporting",
    q1Forecast: "Q1 Forecast",
    slippingDeals: "Slipping Deals",
    pipelines: "Pipelines",
    northAmerica: "North America",
    emeaEnterprise: "EMEA Enterprise",
    apacExpansion: "APAC Expansion",
    inviteTeammates: "Invite teammates",
    help: "Help",
    trialDays: "14 Days",
    trialLeft: "Left on trials",
    addBilling: "Add Billings",
  },
  header: {
    openNavigation: "Open navigation",
    title: "Companies",
    active: "Active",
    search: "Search",
    openProfile: (name: string) => `Open profile for ${name}`,
    tabs: {
      companies: "Companies",
      deals: "Deals",
      forecast: "Forecast",
    },
  },
};

const shell: Record<Locale, ShellMessages> = { "pt-BR": ptBR, en };

export default shell;
