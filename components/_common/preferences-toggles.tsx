"use client";

import Button from "@/components/_ui/button";
import { usePreferences } from "./preferences-provider";
import SunIcon from "@/public/assets/images/_common/sun.svg";
import MoonIcon from "@/public/assets/images/_common/moon.svg";

export default function PreferencesToggles() {
  const { locale, theme, t, setLocale, setTheme } = usePreferences();
  const isDark = theme === "dark";
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        className="caption-style font-medium"
        aria-label={t.app.preferences.switchLanguage}
        title={t.app.preferences.language}
        onClick={() => setLocale(locale === "pt-BR" ? "en" : "pt-BR")}
      >
        {locale === "pt-BR" ? "EN" : "PT"}
      </Button>
      <Button
        variant="secondary"
        size="icon"
        aria-label={
          isDark ? t.app.preferences.lightMode : t.app.preferences.darkMode
        }
        aria-pressed={!isDark}
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        <ThemeIcon aria-hidden className="size-3.5" />
      </Button>
    </>
  );
}
