import '../index.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import NavigationPanel from '../components/NavigationPanel/NavigationPanel';
import ThemeToggle from '../components/themeToogle/ThemeToggle';

export const metadata: Metadata = {
  title: 'Vite + React + TS + Next',
  description: 'My App is a...',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body>
        <section className="top-section">
          <ThemeToggle />
          <NavigationPanel />
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
            GitHub author
          </a>
          <p>2025.</p>
        </footer>
      </body>
    </html>
  );
}
