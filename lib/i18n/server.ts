import { cookies } from "next/headers";
import {
  LOCALE_COOKIE,
  THEME_COOKIE,
  resolveLocale,
  resolveTheme,
} from "./config";

export async function getPreferences() {
  const store = await cookies();
  return {
    locale: resolveLocale(store.get(LOCALE_COOKIE)?.value),
    theme: resolveTheme(store.get(THEME_COOKIE)?.value),
  };
}
