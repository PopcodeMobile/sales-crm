import type { Locale } from "../config";

const ptBR = {
  notifications: {
    title: "Notificações",
    label: (unread: number) =>
      unread > 0 ? `Notificações, ${unread} ${unread === 1 ? "não lida" : "não lidas"}` : "Notificações",
    markAllRead: "Marcar todas como lidas",
    tabAll: "Todas",
    tabUnread: "Não lidas",
    unread: "Não lida",
    emptyTitle: "Tudo em dia",
    emptyDescription: "Novas menções e atualizações de negócios aparecem aqui.",
    events: {
      mention: (company: string) => `mencionou você em ${company}`,
      stage: (company: string, stage: string) =>
        `moveu ${company} para ${stage}`,
      winDrop: (company: string, percent: number) =>
        `A probabilidade de ganho de ${company} caiu para ${percent}%`,
      scoreUpdate: (company: string) =>
        `atualizou o card de aderência ao negócio de ${company}`,
      demo: (company: string) => `registrou uma demo com ${company}`,
      pipelineUp: (company: string, value: string) =>
        `O valor do pipeline de ${company} subiu para ${value}`,
      teamAdd: (company: string) =>
        `adicionou você ao time da conta ${company}`,
    },
    quotes: {
      pilotReview:
        "Você consegue participar da revisão do piloto na sexta? O time de compras quer uma apresentação de segurança.",
    },
    time: {
      minutes: (value: number) => `há ${value} min`,
      hours: (value: number) => `há ${value} ${value === 1 ? "hora" : "horas"}`,
      yesterday: "Ontem",
      days: (value: number) => `há ${value} dias`,
    },
  },
  commandMenu: {
    title: "Buscar",
    description: "Busque empresas por nome, responsável, segmento ou estágio",
    placeholder: "Buscar empresas, responsáveis, estágios…",
    empty: (query: string) => `Nenhum resultado para “${query}”`,
    actions: "Ações",
    newCompany: "Nova empresa",
    newCompanyKeywords: ["Nova empresa", "New Company", "Adicionar", "Criar"],
    navigate: "Navegar",
    open: "Abrir",
    headers: {
      company: "Empresa",
      segmentStage: "Segmento e estágio",
      owner: "Responsável pela conta",
      pipeline: "Pipeline",
      winProbability: "Probabilidade de ganho",
      lastInteraction: "Última interação",
    },
  },
  newCompany: {
    title: "Nova empresa",
    description:
      "Adicione uma empresa ao pipeline. Ela aparece na lista na hora.",
    sectionCompany: "Empresa",
    companyName: "Nome da empresa",
    companyNamePlaceholder: "Acme Ltda.",
    nameRequired: "Informe o nome da empresa.",
    segment: "Segmento",
    stage: "Estágio",
    sectionOwnership: "Responsável e negócio",
    owner: "Responsável pela conta",
    pipelineValue: "Valor do pipeline",
    openDeals: "Negócios em aberto",
    winProbability: "Probabilidade de ganho",
    sectionInteraction: "Última interação",
    date: "Data",
    type: "Tipo",
    cancel: "Cancelar",
    create: "Criar empresa",
    logo: {
      preview: "Prévia do logo da empresa",
      upload: "Enviar logo",
      replace: "Trocar logo",
      remove: "Remover",
      hint: "PNG, JPG, WebP ou SVG de até 2 MB. Você também pode soltar um arquivo aqui.",
      errorType: "Use uma imagem PNG, JPG, WebP ou SVG.",
      errorSize: "Mantenha a imagem abaixo de 2 MB.",
    },
  },
};

export type OverlaysMessages = typeof ptBR;

const en: OverlaysMessages = {
  notifications: {
    title: "Notifications",
    label: (unread) =>
      unread > 0 ? `Notifications, ${unread} unread` : "Notifications",
    markAllRead: "Mark all as read",
    tabAll: "All",
    tabUnread: "Unread",
    unread: "Unread",
    emptyTitle: "You’re all caught up",
    emptyDescription: "New mentions and deal updates will show up here.",
    events: {
      mention: (company) => `mentioned you on ${company}`,
      stage: (company, stage) => `moved ${company} to ${stage}`,
      winDrop: (company, percent) =>
        `Win probability for ${company} dropped to ${percent}%`,
      scoreUpdate: (company) =>
        `updated the Business fit score card for ${company}`,
      demo: (company) => `logged a demo with ${company}`,
      pipelineUp: (company, value) =>
        `Pipeline value for ${company} increased to ${value}`,
      teamAdd: (company) => `added you to the ${company} account team`,
    },
    quotes: {
      pilotReview:
        "Can you join the pilot review on Friday? Procurement wants a security walkthrough.",
    },
    time: {
      minutes: (value) => `${value}m ago`,
      hours: (value) => `${value}h ago`,
      yesterday: "Yesterday",
      days: (value) => `${value}d ago`,
    },
  },
  commandMenu: {
    title: "Search",
    description: "Search companies by name, owner, segment or stage",
    placeholder: "Search companies, owners, stages…",
    empty: (query) => `No results for “${query}”`,
    actions: "Actions",
    newCompany: "New Company",
    newCompanyKeywords: ["New Company", "Nova empresa", "Add", "Create"],
    navigate: "Navigate",
    open: "Open",
    headers: {
      company: "Company",
      segmentStage: "Segment & Stage",
      owner: "Account owner",
      pipeline: "Pipeline",
      winProbability: "Win probability",
      lastInteraction: "Last interaction",
    },
  },
  newCompany: {
    title: "New Company",
    description:
      "Add a company to the pipeline. It appears in the list right away.",
    sectionCompany: "Company",
    companyName: "Company name",
    companyNamePlaceholder: "Acme Inc.",
    nameRequired: "Enter a company name.",
    segment: "Segment",
    stage: "Stage",
    sectionOwnership: "Ownership & deal",
    owner: "Account owner",
    pipelineValue: "Pipeline value",
    openDeals: "Open deals",
    winProbability: "Win probability",
    sectionInteraction: "Last interaction",
    date: "Date",
    type: "Type",
    cancel: "Cancel",
    create: "Create Company",
    logo: {
      preview: "Company logo preview",
      upload: "Upload logo",
      replace: "Replace logo",
      remove: "Remove",
      hint: "PNG, JPG, WebP or SVG up to 2 MB. You can also drop a file here.",
      errorType: "Use a PNG, JPG, WebP or SVG image.",
      errorSize: "Keep the image under 2 MB.",
    },
  },
};

const overlays: Record<Locale, OverlaysMessages> = { "pt-BR": ptBR, en };

export default overlays;
