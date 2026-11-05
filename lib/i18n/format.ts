import type { Locale } from "./config";

export function formatNumber(value: number, locale: Locale) {
  return value.toLocaleString(locale);
}

export function formatShortDate(iso: string, locale: Locale) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  })
    .format(new Date(Date.UTC(year, month - 1, day)))
    .replace(" de ", " ")
    .replace(".", "");
}
