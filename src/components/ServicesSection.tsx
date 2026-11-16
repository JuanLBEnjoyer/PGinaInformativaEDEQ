import { useState } from 'react'
import {
  Zap,
  Sun,
  Car,
  Wrench,
  Lightbulb,
  ShieldCheck,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  FileCheck2,
  X,
} from 'lucide-react'
import { SERVICES_CATALOG, type ServiceItem } from '../data/edeqData'

const CATEGORY_FILTERS = [
  { id: 'todos', label: 'Portafolio Completo' },
  { id: 'hogares', label: 'Hogares y Usuarios' },
  { id: 'empresas', label: 'Empresas y Agroindustria' },
  { id: 'nuevas-energias', label: 'Transición Solar y Movilidad' },
] as const

function ServiceIcon({
  name,
  className,
}: {
  name: ServiceItem['iconName']
  className?: string
}) {
  switch (name) {
    case 'zap':
      return <Zap className={className} />
    case 'sun':
      return <Sun className={className} />
    case 'car':
      return <Car className={className} />
    case 'wrench':
      return <Wrench className={className} />
    case 'lightbulb':
      return <Lightbulb className={className} />
    case 'shield':
      return <ShieldCheck className={className} />
  }
}

function getToneClasses(tone: ServiceItem['accentTone']) {
  if (tone === 'green') {
    return {
      bar: 'bg-gradient-to-r from-edeq-green to-edeq-lime',
      iconWrap: 'bg-edeq-green-soft text-edeq-green',
      badge: 'bg-edeq-green-soft text-edeq-green',
      button: 'text-edeq-green hover:bg-edeq-green-soft',
    }
  }
  if (tone === 'blue') {
    return {
      bar: 'bg-gradient-to-r from-edeq-navy via-edeq-blue to-edeq-cyan',
      iconWrap: 'bg-edeq-blue-soft text-edeq-blue',
      badge: 'bg-edeq-blue-soft text-edeq-navy',
      button: 'text-edeq-blue hover:bg-edeq-blue-soft',
    }
  }
  return {
    bar: 'bg-gradient-to-r from-edeq-orange to-edeq-orange-warm',
    iconWrap: 'bg-edeq-orange-soft text-edeq-amber-deep',
    badge: 'bg-edeq-orange-soft text-edeq-amber-deep',
    button: 'text-edeq-amber-deep hover:bg-edeq-orange-soft',
  }
}

export function ServicesSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORY_FILTERS)[number]['id']>('todos')
  const [activeService, setActiveService] = useState<ServiceItem | null>(null)

  const visibleServices =
    selectedCategory === 'todos'
      ? SERVICES_CATALOG
      : SERVICES_CATALOG.filter((item) => item.category === selectedCategory)

  return (
    <section id="servicios" className="py-20 bg-surface-canvas scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de seccion */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-edeq-green bg-edeq-green-soft px-3 py-1 rounded-full">
              Nuestros Servicios Públicos y Soluciones
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-primary">
              Energía diseñada para hogares, el campo y la industria regional
            </h2>
            <p className="text-ink-secondary text-base leading-relaxed">
              Más allá de distribuir electricidad confiable, acompañamos a nuestros usuarios con
              autogeneración solar, movilidad eléctrica, eficiencia energética y programas de inclusión social.
            </p>
          </div>

          {/* Filtros por segmento */}
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filtrar servicios por categoría"
          >
            {CATEGORY_FILTERS.map((filter) => {
              const isActive = selectedCategory === filter.id
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(filter.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-edeq-forest text-white shadow-xs'
                      : 'bg-white text-ink-secondary border border-ink-primary/10 hover:border-edeq-green hover:text-edeq-green'
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Cuadricula de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service) => {
            const styles = getToneClasses(service.accentTone)
            return (
              <article
                key={service.id}
                className="group bg-white rounded-2xl border border-ink-primary/8 shadow-xs hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex flex-col overflow-hidden"
              >
                <div className={`h-1.5 w-full ${styles.bar}`} />
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${styles.iconWrap}`}
                      >
                        <ServiceIcon name={service.iconName} className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${styles.badge}`}
                      >
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-ink-primary group-hover:text-edeq-green transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-ink-secondary mt-2 leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-1">
                      {service.highlights.slice(0, 2).map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-xs text-ink-secondary"
                        >
                          <CheckCircle2 className="w-4 h-4 text-edeq-green shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-ink-primary/8 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs text-ink-muted">
                      <Clock className="w-3.5 h-3.5 text-edeq-blue shrink-0" />
                      <span>{service.slaTime}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => setActiveService(service)}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${styles.button}`}
                    >
                      <span>Requisitos y detalle</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Modal de ficha tecnica y requisitos del servicio */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-edeq-forest/65 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
          onClick={() => setActiveService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-ink-primary/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-2 w-full ${getToneClasses(activeService.accentTone).bar}`} />
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <span
                    className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${
                      getToneClasses(activeService.accentTone).badge
                    }`}
                  >
                    {activeService.badge}
                  </span>
                  <h3
                    id="modal-service-title"
                    className="text-2xl font-extrabold text-ink-primary"
                  >
                    {activeService.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  className="p-2 rounded-xl text-ink-muted hover:text-ink-primary hover:bg-surface-muted cursor-pointer"
                  aria-label="Cerrar detalle del servicio"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                {activeService.fullDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-surface-canvas p-4 rounded-xl border border-ink-primary/8">
                <div>
                  <span className="text-xs font-semibold text-ink-muted block">
                    Tiempo estimado de respuesta
                  </span>
                  <span className="text-sm font-bold text-ink-primary mt-0.5 block">
                    {activeService.slaTime}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-ink-muted block">
                    Esquema tarifario / comercial
                  </span>
                  <span className="text-sm font-bold text-edeq-blue mt-0.5 block">
                    {activeService.tariffNote}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <h4 className="text-sm font-bold text-ink-primary flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-edeq-green" />
                    <span>Alcance y beneficios</span>
                  </h4>
                  <ul className="space-y-2">
                    {activeService.highlights.map((item) => (
                      <li key={item} className="text-xs sm:text-sm text-ink-secondary leading-snug">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-sm font-bold text-ink-primary flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-edeq-blue" />
                    <span>Requisitos para radicar</span>
                  </h4>
                  <ul className="space-y-2">
                    {activeService.requirements.map((req) => (
                      <li key={req} className="text-xs sm:text-sm text-ink-secondary leading-snug">
                        • {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-ink-primary/10 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-ink-secondary hover:bg-surface-muted cursor-pointer"
                >
                  Cerrar
                </button>
                <a
                  href="#canales-atencion"
                  onClick={() => setActiveService(null)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-edeq-green hover:bg-edeq-green-hover transition-colors"
                >
                  Ver Canales para Solicitar este Servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
