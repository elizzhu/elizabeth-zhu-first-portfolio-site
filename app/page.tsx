import Hero from '@/components/Hero'
import Resume from '@/components/Resume'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <Resume />
      <Work />
      <Contact />
    </main>
  )
}
