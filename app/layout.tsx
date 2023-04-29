import Navbar from './(component)/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LifeWild',
  description: "Your collection of Earth's lifeforms.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid grid-rows-[min-content_auto_min-content] h-screen relative`}>
        <Navbar />
        <div className="">
          {children}
        </div>
      </body>
    </html>
  )
}
