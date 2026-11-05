import type { Stage } from "./companies";

export type NotificationKind =
  | "mention"
  | "stage"
  | "alert"
  | "update"
  | "invite";

export type NotificationEvent =
  | { type: "mention" }
  | { type: "stage"; stage: Stage }
  | { type: "winDrop"; percent: number }
  | { type: "scoreUpdate" }
  | { type: "demo" }
  | { type: "pipelineUp"; value: number }
  | { type: "teamAdd" };

export type NotificationQuote = "pilotReview";

export type Notification = {
  id: string;
  kind: NotificationKind;
  actor?: string;
  companyId: string;
  event: NotificationEvent;
  quote?: NotificationQuote;
  minutesAgo: number;
  unread: boolean;
};

export const NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    kind: "mention",
    actor: "Marcos Andrade",
    companyId: "microsoft",
    event: { type: "mention" },
    quote: "pilotReview",
    minutesAgo: 2,
    unread: true,
  },
  {
    id: "n2",
    kind: "stage",
    actor: "Mariana Costa",
    companyId: "lvmh",
    event: { type: "stage", stage: "Renewal" },
    minutesAgo: 18,
    unread: true,
  },
  {
    id: "n3",
    kind: "alert",
    companyId: "slack",
    event: { type: "winDrop", percent: 23 },
    minutesAgo: 60,
    unread: true,
  },
  {
    id: "n4",
    kind: "update",
    actor: "Ana Ribeiro",
    companyId: "shopify",
    event: { type: "scoreUpdate" },
    minutesAgo: 180,
    unread: false,
  },
  {
    id: "n5",
    kind: "update",
    actor: "Rodrigo",
    companyId: "stripe",
    event: { type: "demo" },
    minutesAgo: 1440,
    unread: false,
  },
  {
    id: "n6",
    kind: "alert",
    companyId: "snowflake",
    event: { type: "pipelineUp", value: 520000 },
    minutesAgo: 2880,
    unread: false,
  },
  {
    id: "n7",
    kind: "invite",
    actor: "Vivian Madureira",
    companyId: "hubspot",
    event: { type: "teamAdd" },
    minutesAgo: 4320,
    unread: false,
  },
];
