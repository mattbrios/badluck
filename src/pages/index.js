import { Sono } from 'next/font/google'
import HomeComponent from './home'

const sono = Sono({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-8 ${sono.className}`}>
      <HomeComponent />
    </main>
  )
}
