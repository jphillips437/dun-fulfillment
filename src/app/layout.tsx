import './globals.css'
import { Corben } from 'next/font/google'

const corben = Corben({ subsets: ['latin'], weight: ['400','700'] })

export const metadata = {
  title: 'Dun Fulfillment',
  description: 'Orders. Done. Premium fulfillment for small businesses.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${corben.className} bg-cream text-gray-900`}>
        <header className="py-6 px-10 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-orange">DUN</h1>
          <span className="text-lg italic">Orders. Done.</span>
        </header>
        {children}
        <footer className="py-6 text-center text-gray-600">
          © 2025 Dun Fulfillment
        </footer>
      </body>
    </html>
  )
}