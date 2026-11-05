import type { Locale } from "../config";

const ptBR = {
  detail: {
    title: "Detalhes da empresa",
    description: "Resumo da conta, saúde do pipeline, atividade e scorecards",
    close: "Fechar detalhes",
    logoAlt: (name: string) => `Logo da ${name}`,
    openProfile: (name: string) => `Abrir perfil de ${name}`,
    accountSummary: "Resumo da conta",
    pipelineHealth: "Saúde do pipeline",
    activityTrend: "Tendência de atividade",
    scoreCard: "Scorecard",
    help: "Precisa de ajuda? Fale com a gente.",
    cancel: "Cancelar",
    save: "Salvar alterações",
  },
  pipelineHealth: {
    winProbability: "Probabilidade de ganho em todos os negócios abertos",
    discovery: "Descoberta",
    evaluation: "Avaliação",
    procurement: "Compras",
  },
  activityTrend: {
    note: "Picos em torno da preparação de QBR e da revisão de renovação",
    touches: "Total de interações",
    emails: "E-mails",
    meetings: "Reuniões",
    calls: "Ligações e notas",
  },
  scoreCard: {
    cards: {
      businessFit: {
        title: "Aderência ao negócio",
        description:
          "Avalia o quanto a empresa se alinha ao nosso perfil de cliente ideal.",
      },
      technicalFit: {
        title: "Aderência técnica",
        description:
          "Avalia compatibilidade técnica, requisitos de segurança e prontidão para integração.",
      },
    },
    verdict: "Alto potencial SN",
    updatedHours: (hours: number) => `Atualizado há ${hours}h`,
    stars: (count: number) => `${count} de 5 estrelas`,
  },
  profile: {
    myProfile: "Meu perfil",
    ownerProfile: "Perfil do responsável",
    description: "Dados de contato, resumo do pipeline e contas atribuídas",
    close: "Fechar perfil",
    contact: "Contato",
    teamPipeline: "Pipeline do time",
    pipeline: "Pipeline",
    teamAccounts: "Contas do time",
    accounts: "Contas",
    noAccounts: "Nenhuma conta atribuída ainda.",
    closeButton: "Fechar",
    showAll: "Mostrar todas as contas",
    filterByOwner: "Filtrar tabela por responsável",
    stats: {
      accounts: "Contas",
      openDeals: "Negócios abertos",
      pipeline: "Pipeline",
      avgWin: "Ganho médio",
    },
    account: {
      openDetails: (name: string) => `Abrir detalhes de ${name}`,
      openDeals: (count: number) =>
        `${count} ${count === 1 ? "negócio aberto" : "negócios abertos"}`,
    },
  },
  data: {
    windows: {
      "Last 7 Days": "Últimos 7 dias",
      "Last 30 Days": "Últimos 30 dias",
      "Last 90 Days": "Últimos 90 dias",
    } as Record<string, string>,
    roles: {
      "Head of Sales": "Diretor Comercial",
      "Senior Account Executive": "Executivo de Contas Sênior",
      "Account Executive": "Executivo de Contas",
    } as Record<string, string>,
    interactions: {
      Discovery: "Descoberta",
      Demo: "Demo",
      Pricing: "Precificação",
      Security: "Segurança",
      Legal: "Jurídico",
      Product: "Produto",
      Pilot: "Piloto",
      Exec: "Executivo",
      "QBR Call": "Reunião de QBR",
      Partner: "Parceiro",
      Renewal: "Renovação",
      Expansion: "Expansão",
    } as Record<string, string>,
  },
};

export type DetailMessages = typeof ptBR;

const en: DetailMessages = {
  detail: {
    title: "Companies Detail",
    description: "Account summary, pipeline health, activity and score cards",
    close: "Close details",
    logoAlt: (name: string) => `${name} logo`,
    openProfile: (name: string) => `Open ${name} profile`,
    accountSummary: "Account summary",
    pipelineHealth: "Pipeline health",
    activityTrend: "Activity trend",
    scoreCard: "Score card",
    help: "Need help? Ask us.",
    cancel: "Cancel",
    save: "Save Update",
  },
  pipelineHealth: {
    winProbability: "Win probability across all open deals",
    discovery: "Discovery",
    evaluation: "Evaluation",
    procurement: "Procurement",
  },
  activityTrend: {
    note: "Spikes around QBR prep and renewal review",
    touches: "Total touches",
    emails: "Emails",
    meetings: "Meetings",
    calls: "Calls & notes",
  },
  scoreCard: {
    cards: {
      businessFit: {
        title: "Business fit",
        description:
          "Evaluates how well the company aligns with our ideal customer profile.",
      },
      technicalFit: {
        title: "Technical fit",
        description:
          "Evaluates technical compatibility, security requirements, and integration readiness.",
      },
    },
    verdict: "High potential SN",
    updatedHours: (hours: number) => `Updated ${hours}h ago`,
    stars: (count: number) => `${count} out of 5 stars`,
  },
  profile: {
    myProfile: "My Profile",
    ownerProfile: "Owner Profile",
    description: "Contact details, pipeline summary and assigned accounts",
    close: "Close profile",
    contact: "Contact",
    teamPipeline: "Team pipeline",
    pipeline: "Pipeline",
    teamAccounts: "Team accounts",
    accounts: "Accounts",
    noAccounts: "No accounts assigned yet.",
    closeButton: "Close",
    showAll: "Show all accounts",
    filterByOwner: "Filter table by owner",
    stats: {
      accounts: "Accounts",
      openDeals: "Open deals",
      pipeline: "Pipeline",
      avgWin: "Avg. win",
    },
    account: {
      openDetails: (name: string) => `Open ${name} details`,
      openDeals: (count: number) => `${count} open ${count === 1 ? "deal" : "deals"}`,
    },
  },
  data: {
    windows: {
      "Last 7 Days": "Last 7 Days",
      "Last 30 Days": "Last 30 Days",
      "Last 90 Days": "Last 90 Days",
    },
    roles: {
      "Head of Sales": "Head of Sales",
      "Senior Account Executive": "Senior Account Executive",
      "Account Executive": "Account Executive",
    },
    interactions: {
      Discovery: "Discovery",
      Demo: "Demo",
      Pricing: "Pricing",
      Security: "Security",
      Legal: "Legal",
      Product: "Product",
      Pilot: "Pilot",
      Exec: "Exec",
      "QBR Call": "QBR Call",
      Partner: "Partner",
      Renewal: "Renewal",
      Expansion: "Expansion",
    },
  },
};

const detail: Record<Locale, DetailMessages> = { "pt-BR": ptBR, en };

export default detail;
