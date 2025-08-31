import './globals.css'

export const metadata = {
  title: 'Dun Fulfillment',
  description: 'Orders. Done. Boutique fulfillment for small brands.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-gray-900">
        <header className="py-6 px-10 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-orange">
            <img src="/DUN_Logo.png" alt="DUN Logo" className="h-36" style={{ display: 'inline', verticalAlign: 'middle' }} />
          </h1>
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