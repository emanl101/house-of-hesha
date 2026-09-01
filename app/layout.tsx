import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'House of Hesha — Friseur in München',
  description: 'Luxuriöser Friseursalon nahe der Münchner Freiheit, spezialisiert auf individuelle Schnitte und Farbe.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
