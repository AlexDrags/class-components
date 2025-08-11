import QueryProvider from './providers';
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
        <div id="root">
          <QueryProvider>{children}</QueryProvider>
        </div>
      </body>
    </html>
  );
}
