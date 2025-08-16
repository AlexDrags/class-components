// import { ClientOnly } from './client';
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
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
