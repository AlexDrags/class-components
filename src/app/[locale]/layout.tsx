import '../../index.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';
import ThemeToggle from '../../components/themeToogle/ThemeToggle';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <title>Vite + React + TS + Next</title>
      </head>
      <body>
        <section className="top-section">
          <NextIntlClientProvider>
            <ThemeToggle />
            <NavigationPanel />
          </NextIntlClientProvider>
        </section>
        <main>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </main>
        <footer>
          <a
            href="https://github.com/AlexDrags"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <p>2025.</p>
        </footer>
      </body>
    </html>
  );
}
