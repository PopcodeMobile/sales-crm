import type { Locale } from "../config";
import app from "./app";
import tags from "./tags";
import shell from "./shell";
import companies from "./companies";
import detail from "./detail";
import overlays from "./overlays";

export function getMessages(locale: Locale) {
  return {
    app: app[locale],
    tags: tags[locale],
    shell: shell[locale],
    companies: companies[locale],
    detail: detail[locale],
    overlays: overlays[locale],
  };
}

export type Messages = ReturnType<typeof getMessages>;
