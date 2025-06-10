import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meterbolic | Where health meets Longevity',
  description: 'Advanced metabolic testing for optimal health',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Script id="remove-bisect-attributes">
          {`
            document.querySelectorAll('[bis_skin_checked], [bis_id], [bis_size], [bis_register]').forEach(el => {
              el.removeAttribute('bis_skin_checked');
              el.removeAttribute('bis_id');
              el.removeAttribute('bis_size');
              el.removeAttribute('bis_register');
            });
          `}
        </Script>
      </body>
    </html>
  )
}