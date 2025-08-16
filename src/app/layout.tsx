import '../index.css';
import QueryProvider from './providers';
import NavigationPanel from '../components/NavigationPanel/NavigationPanel';
import ThemeToggle from '../components/themeToogle/ThemeToggle';

export const metadata: Metadata = {
  title: 'Vite + React + TS + Next',
  description: 'My App is a...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <section className="top-section">
          <ThemeToggle />
          <NavigationPanel />
        </section>

        <QueryProvider>
          <main>{children}</main>
        </QueryProvider>
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
