import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Applied Compute',
  description: 'Front-end development for Applied Compute',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
