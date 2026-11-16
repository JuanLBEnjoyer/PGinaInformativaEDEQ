import { useState } from 'react'
import {
  PhoneCall,
  Menu,
  X,
  FileText,
  ShieldCheck,
  Activity,
} from 'lucide-react'
import { EdeqLogo } from './EdeqLogo'

interface NavbarProps {
  fontScale: 'sm' | 'md' | 'lg'
  onChangeFontScale: (scale: 'sm' | 'md' | 'lg') => void
  onQuickInvoiceClick: () => void
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Canales y Horarios', href: '#canales-atencion' },
  { label: 'Medio Ambiente', href: '#medio-ambiente' },
  { label: 'Mantenimientos', href: '#mantenimientos' },
  { label: 'Noticias', href: '#noticias' },
]

export function Navbar({
  fontScale,
  onChangeFontScale,
  onQuickInvoiceClick,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 shadow-xs">
      {/* Franja superior institucional y controles de accesibilidad */}
      <div className="bg-edeq-forest text-white/90 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5 font-medium text-edeq-lime">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Empresa de Energía del Quindío S.A. E.S.P. · Vigilado Superservicios</span>
            </span>
            <span className="hidden md:inline text-white/25">|</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-white/80">
              <Activity className="w-3.5 h-3.5 text-edeq-cyan shrink-0" />
              <span>Sistema Regional: Operación Normal (99,94 %)</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href="#canales-atencion"
              className="inline-flex items-center gap-1.5 font-semibold text-edeq-orange hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Emergencias 24/7: Línea 115</span>
            </a>

            <div
              className="hidden sm:inline-flex items-center gap-1 bg-white/10 rounded-md p-0.5 border border-white/10"
              role="group"
              aria-label="Tamaño de texto accesible"
            >
              {(
                [
                  { id: 'sm', label: 'A-' },
                  { id: 'md', label: 'A' },
                  { id: 'lg', label: 'A+' },
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onChangeFontScale(item.id)}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                    fontScale === item.id
                      ? 'bg-edeq-lime text-edeq-forest'
                      : 'text-white/80 hover:text-white'
                  }`}
                  title={`Ajustar escala de lectura (${item.label})`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filete tricolor con las variantes cromaticas del logo */}
        <div
          className="h-[3px] w-full"
          style={{
            background:
              'linear-gradient(90deg, #00853E 0%, #78BE20 38%, #007FC4 70%, #F39200 100%)',
          }}
        />
      </div>

      {/* Navegacion principal */}
      <nav
        aria-label="Navegación principal EDEQ"
        className="bg-white/95 backdrop-blur-md border-b border-ink-primary/8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <a
            href="#inicio"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-edeq-green rounded-lg"
          >
            <EdeqLogo />
          </a>

          {/* Enlaces escritorio */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-ink-secondary hover:text-edeq-green hover:bg-edeq-green-soft/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Acciones rapidas */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#canales-atencion"
              className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-edeq-blue bg-edeq-blue-soft hover:bg-edeq-blue hover:text-white transition-colors"
            >
              Oficinas y Horarios
            </a>
            <button
              type="button"
              onClick={onQuickInvoiceClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-edeq-green hover:bg-edeq-green-hover shadow-xs transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Consultar Factura</span>
            </button>
          </div>

          {/* Boton movil */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-ink-primary hover:bg-surface-muted transition-colors cursor-pointer"
            aria-expanded={mobileOpen}
            aria-label="Abrir menú de navegación"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Panel desplegable movil */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-ink-primary/8 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-ink-primary hover:bg-edeq-green-soft hover:text-edeq-green"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href="#canales-atencion"
                onClick={() => setMobileOpen(false)}
                className="text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-edeq-blue bg-edeq-blue-soft"
              >
                Canales y Horarios
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false)
                  onQuickInvoiceClick()
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-edeq-green cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Consultar Factura</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
