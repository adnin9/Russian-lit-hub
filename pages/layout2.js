import { Inter } from 'next/font/google'
import './globals2.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Russian Lit Hub',
  description: 'made by adn',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
