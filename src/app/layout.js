import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/app/component/Header/Header"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Want To Say Something!',
  description: 'Saad Khalid',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundColor:"black"}}>
        <Header/>
        {children}</body>
    </html>
  )
}
