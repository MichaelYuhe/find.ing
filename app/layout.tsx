import { Metadata } from 'next';
import '../styles/globals.css';

const title = 'Find .ing';
const description = 'Find the best .ing domain for your website.';

export const metadata: Metadata = {
  metadataBase: new URL('https://zeabur.com'),
  title,
  description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
