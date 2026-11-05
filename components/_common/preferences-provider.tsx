"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  LOCALE_COOKIE,
  PREFERENCE_MAX_AGE,
  THEME_COOKIE,
  type Locale,
  type Theme,
} from "@/lib/i18n/config";
import { getMessages, type Messages } from "@/lib/i18n/messages";

type PreferencesContextValue = {
  locale: Locale;
  theme: Theme;
  t: Messages;
  setLocale: (locale: Locale) => void;
  setTheme: (theme: Theme) => void;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

function writeCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=${PREFERENCE_MAX_AGE}; samesite=lax`;
}

export function PreferencesProvider({
  initialLocale,
  initialTheme,
  children,
}: {
  initialLocale: Locale;
  initialTheme: Theme;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState(initialLocale);
  const [theme, setThemeState] = useState(initialTheme);

  const setLocale = useCallback((next: Locale) => {
    writeCookie(LOCALE_COOKIE, next);
    document.documentElement.lang = next;
    setLocaleState(next);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    writeCookie(THEME_COOKIE, next);
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(next);
    setThemeState(next);
  }, []);

  const value = useMemo(
    () => ({ locale, theme, t: getMessages(locale), setLocale, setTheme }),
    [locale, theme, setLocale, setTheme],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }
  return context;
}

export function useI18n() {
  const { locale, t, setLocale } = usePreferences();
  return { locale, t, setLocale };
}
