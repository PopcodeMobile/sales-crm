import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SITE_URL, pageMetadata } from "@/lib/seo";
import ScrollToTop from "@/components/_common/scroll-to-top";
import { PreferencesProvider } from "@/components/_common/preferences-provider";
import { getMessages } from "@/lib/i18n/messages";
import { getPreferences } from "@/lib/i18n/server";
import { SIDEBAR_WIDTH_SCRIPT } from "@/lib/sidebar";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getPreferences();
  const { meta } = getMessages(locale).app;

  return {
    metadataBase: new URL(SITE_URL),
    ...pageMetadata({
      title: meta.title,
      description: meta.description,
      path: "/",
      locale,
    }),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale, theme } = await getPreferences();

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${theme}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration="manual";${SIDEBAR_WIDTH_SCRIPT}`,
          }}
        />
      </head>
      <body className="relative z-0 font-sans antialiased">
        <PreferencesProvider initialLocale={locale} initialTheme={theme}>
          <ScrollToTop />
          {children}
        </PreferencesProvider>
      </body>
    </html>
  );
}
