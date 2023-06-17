import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LUXRacers',
  description: 'The ultimate mini RC drift cars',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="rc-fav.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
