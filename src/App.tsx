import { useEffect, useRef, useState } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { ChannelsSection } from './components/ChannelsSection'
import { EnvironmentSection } from './components/EnvironmentSection'
import { MaintenanceAndNewsSection } from './components/MaintenanceAndNewsSection'
import { Footer } from './components/Footer'

export default function App() {
  const [fontScale, setFontScale] = useState<'sm' | 'md' | 'lg'>('md')
  const nicInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    document.title = 'EDEQ — Empresa de Energía del Quindío S.A. E.S.P. | Grupo EPM'
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (fontScale === 'sm') {
      root.style.fontSize = '93.75%'
    } else if (fontScale === 'lg') {
      root.style.fontSize = '108%'
    } else {
      root.style.fontSize = '100%'
    }
    return () => {
      root.style.fontSize = ''
    }
  }, [fontScale])

  const handleQuickInvoiceClick = () => {
    const section = document.getElementById('autogestion')
    section?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    window.setTimeout(() => {
      nicInputRef.current?.focus()
    }, 350)
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface-canvas text-ink-primary">
      <Navbar
        fontScale={fontScale}
        onChangeFontScale={setFontScale}
        onQuickInvoiceClick={handleQuickInvoiceClick}
      />

      <main className="flex-1">
        <HeroSection nicInputRef={nicInputRef} />
        <ServicesSection />
        <ChannelsSection />
        <EnvironmentSection />
        <MaintenanceAndNewsSection />
      </main>

      <Footer />
    </div>
  )
}
