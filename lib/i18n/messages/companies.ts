import type { Locale } from "../config";
import type { SortKey } from "@/data/companies";

const ptBR = {
  toolbar: {
    sortBy: "Ordenar por",
    filter: "Filtro",
    stage: "Estágio",
    lastActivity: "Última atividade",
    export: "Exportar",
    newCompany: "Nova empresa",
    allOwners: "Todos os responsáveis",
    anyStage: "Qualquer",
    days: (n: number) => `${n} dias`,
    sort: {
      pipelineValue: "Valor do pipeline",
      winProbability: "Probabilidade de ganho",
      openDeals: "Negócios abertos",
      lastInteraction: "Última interação",
      name: "Nome da empresa",
    } satisfies Record<SortKey, string>,
  },
  filters: {
    title: "Filtros",
    description: "Ordene e filtre a tabela de empresas",
    close: "Fechar filtros",
    sortBy: "Ordenar por",
    accountOwner: "Responsável pela conta",
    stage: "Estágio",
    lastActivity: "Última atividade",
    reset: "Limpar",
    triggerLabel: (active: number) =>
      active > 0
        ? `Filtros, ${active} ${active === 1 ? "ativo" : "ativos"}`
        : "Filtros",
    show: (n: number) => `Ver ${n} ${n === 1 ? "empresa" : "empresas"}`,
  },
  table: {
    columns: {
      name: "Empresas",
      segment: "Segmento e estágio",
      owner: "Responsável",
      openDeals: "Negócios",
      pipelineValue: "Pipeline",
      winProbability: "Prob. de ganho",
      trend: "Tendência",
      lastInteraction: "Última interação",
      action: "Ação",
    },
    selectAll: "Selecionar todas as empresas",
    empty: "Nenhuma empresa corresponde aos filtros atuais.",
    select: (name: string) => `Selecionar ${name}`,
    openProfile: (name: string) => `Abrir perfil de ${name}`,
    openDetails: (name: string) => `Abrir detalhes de ${name}`,
  },
  footer: {
    inView: "Empresas na visualização",
    sumPipeline: "Soma do pipeline",
    avgWinProbability: "Média de probabilidade de ganho",
    addCalculation: "Adicionar cálculo",
  },
  csv: {
    filenamePrefix: "empresas",
    headers: [
      "Empresa",
      "Segmento e estágio",
      "Responsável pela conta",
      "Negócios abertos",
      "Valor do pipeline",
      "Probabilidade de ganho (%)",
      "Data da última interação",
      "Última interação",
    ],
  },
};

export type CompaniesMessages = typeof ptBR;

const en: CompaniesMessages = {
  toolbar: {
    sortBy: "Sort by",
    filter: "Filter",
    stage: "Stage",
    lastActivity: "Last Activity",
    export: "Export",
    newCompany: "New Company",
    allOwners: "All Owners",
    anyStage: "Any",
    days: (n) => `${n} Days`,
    sort: {
      pipelineValue: "Pipeline Value",
      winProbability: "Win Probability",
      openDeals: "Open Deals",
      lastInteraction: "Last Interaction",
      name: "Company Name",
    },
  },
  filters: {
    title: "Filters",
    description: "Sort and filter the companies table",
    close: "Close filters",
    sortBy: "Sort by",
    accountOwner: "Account owner",
    stage: "Stage",
    lastActivity: "Last activity",
    reset: "Reset",
    triggerLabel: (active) =>
      active > 0 ? `Filters, ${active} active` : "Filters",
    show: (n) => `Show ${n} ${n === 1 ? "company" : "companies"}`,
  },
  table: {
    columns: {
      name: "Companies",
      segment: "Segment & Stage",
      owner: "Account Owner",
      openDeals: "Open Deals",
      pipelineValue: "Pipeline Value",
      winProbability: "Win Probability",
      trend: "Activity Trend",
      lastInteraction: "Last Interaction",
      action: "Action",
    },
    selectAll: "Select all companies",
    empty: "No companies match the current filters.",
    select: (name) => `Select ${name}`,
    openProfile: (name) => `Open ${name} profile`,
    openDetails: (name) => `Open ${name} details`,
  },
  footer: {
    inView: "Companies in view",
    sumPipeline: "Sum of pipeline",
    avgWinProbability: "Avg win probability",
    addCalculation: "Add Calculation",
  },
  csv: {
    filenamePrefix: "companies",
    headers: [
      "Company",
      "Segment & Stage",
      "Account Owner",
      "Open Deals",
      "Pipeline Value",
      "Win Probability (%)",
      "Last Interaction Date",
      "Last Interaction",
    ],
  },
};

const companies: Record<Locale, CompaniesMessages> = { "pt-BR": ptBR, en };

export default companies;
