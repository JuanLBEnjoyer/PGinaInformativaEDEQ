import { useState } from 'react'
import {
  Wrench,
  Calendar,
  Clock,
  MapPin,
  Newspaper,
  ArrowRight,
  X,
} from 'lucide-react'
import {
  MAINTENANCE_SCHEDULE,
  NEWS_ITEMS,
  type MaintenanceEvent,
  type NewsArticle,
} from '../data/edeqData'

function getNewsBadgeStyle(tone: NewsArticle['accentTone']) {
  if (tone === 'green') return 'bg-edeq-green-soft text-edeq-green'
  if (tone === 'blue') return 'bg-edeq-blue-soft text-edeq-navy'
  return 'bg-edeq-orange-soft text-edeq-amber-deep'
}

export function MaintenanceAndNewsSection() {
  const [zoneFilter, setZoneFilter] = useState<'Todos' | MaintenanceEvent['zoneType']>('Todos')
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null)

  const visibleMaintenance =
    zoneFilter === 'Todos'
      ? MAINTENANCE_SCHEDULE
      : MAINTENANCE_SCHEDULE.filter((item) => item.zoneType === zoneFilter)

  const featuredNews = NEWS_ITEMS[0]
  const secondaryNews = NEWS_ITEMS.slice(1)

  return (
    <>
      {/* Bloque A: Mantenimientos preventivos programados */}
      <section id="mantenimientos" className="py-16 bg-surface-canvas scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-edeq-amber-deep bg-edeq-orange-soft px-3 py-1 rounded-full">
                <Wrench className="w-3.5 h-3.5" />
                <span>Transparencia Operativa</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-primary">
                Trabajos y mantenimientos preventivos programados
              </h2>
              <p className="text-sm text-ink-secondary">
                Informamos con anticipación las maniobras técnicas de modernización y poda ecológica
                para que hogares y comercios planifiquen sus actividades.
              </p>
            </div>

            <div className="flex gap-1.5 bg-white p-1 rounded-xl border border-ink-primary/10 self-start">
              {(['Todos', 'Urbana', 'Rural'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setZoneFilter(type)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    zoneFilter === type
                      ? 'bg-edeq-forest text-white'
                      : 'text-ink-secondary hover:text-ink-primary'
                  }`}
                >
                  {type === 'Todos' ? 'Todas las zonas' : `Zona ${type}`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {visibleMaintenance.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-ink-primary/10 p-5 flex flex-col justify-between space-y-4 shadow-2xs"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-edeq-blue-soft text-edeq-navy">
                      {item.municipality}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded ${
                        item.zoneType === 'Rural'
                          ? 'bg-edeq-green-soft text-edeq-green'
                          : 'bg-edeq-orange-soft text-edeq-amber-deep'
                      }`}
                    >
                      {item.zoneType} · {item.circuitCode}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-ink-primary leading-snug">
                    {item.sector}
                  </h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">{item.workType}</p>
                </div>

                <div className="pt-3 border-t border-ink-primary/8 space-y-1 text-xs">
                  <p className="font-semibold text-ink-primary flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-edeq-green shrink-0" />
                    <span>{item.date}</span>
                  </p>
                  <p className="text-ink-muted flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5 text-edeq-orange shrink-0" />
                    <span>{item.timeWindow}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloque B: Noticias recientes y actualidad institucional */}
      <section id="noticias" className="py-20 bg-white border-t border-ink-primary/8 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2.5 max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-edeq-green bg-edeq-green-soft px-3 py-1 rounded-full">
                <Newspaper className="w-3.5 h-3.5" />
                <span>Actualidad y Sala de Prensa EDEQ</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-primary">
                Noticias recientes e hitos para la región
              </h2>
              <p className="text-ink-secondary text-base">
                Conoce los avances en transición energética, inversión social, infraestructura
                eléctrica y sostenibilidad ambiental en el territorio.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Noticia principal destacada */}
            <article
              onClick={() => setSelectedArticle(featuredNews)}
              className="lg:col-span-7 group rounded-2xl overflow-hidden border border-ink-primary/10 bg-surface-canvas flex flex-col cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={featuredNews.imageUrl}
                  alt={featuredNews.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-edeq-green text-white shadow-xs">
                    Destacado · {featuredNews.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted">
                    <span>{featuredNews.date}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-edeq-blue" />
                      {featuredNews.location}
                    </span>
                    <span>•</span>
                    <span>{featuredNews.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-ink-primary group-hover:text-edeq-green transition-colors leading-snug">
                    {featuredNews.title}
                  </h3>
                  <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                    {featuredNews.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-ink-primary/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-5">
                    {featuredNews.keyFigures.map((fig) => (
                      <div key={fig.label}>
                        <span className="font-display text-base font-extrabold text-edeq-forest block">
                          {fig.value}
                        </span>
                        <span className="text-[11px] text-ink-muted">{fig.label}</span>
                      </div>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-edeq-green group-hover:translate-x-0.5 transition-transform">
                    <span>Leer comunicado</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>

            {/* Columna de noticias recientes */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-5">
              {secondaryNews.map((news) => (
                <article
                  key={news.id}
                  onClick={() => setSelectedArticle(news)}
                  className="group rounded-2xl border border-ink-primary/10 bg-white hover:bg-surface-canvas/70 p-4 sm:p-5 flex gap-4 items-start cursor-pointer hover:shadow-md transition-all"
                >
                  <img
                    src={news.imageUrl}
                    alt={news.imageAlt}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover shrink-0"
                  />
                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${getNewsBadgeStyle(
                          news.accentTone
                        )}`}
                      >
                        {news.category}
                      </span>
                      <span className="text-[11px] text-ink-muted">{news.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-ink-primary group-hover:text-edeq-blue transition-colors leading-snug line-clamp-2">
                      {news.title}
                    </h3>

                    <p className="text-xs text-ink-secondary line-clamp-2 leading-relaxed">
                      {news.summary}
                    </p>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-edeq-blue pt-0.5">
                      <span>Ampliar noticia</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal lector de noticia completa */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-edeq-forest/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="news-modal-title"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-ink-primary/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 sm:h-64">
              <img
                src={selectedArticle.imageUrl}
                alt={selectedArticle.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-edeq-forest/85 via-edeq-forest/25 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/45 text-white hover:bg-black/70 transition-colors cursor-pointer"
                aria-label="Cerrar comunicado"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-edeq-lime text-edeq-forest">
                  {selectedArticle.category}
                </span>
                <p className="text-xs text-white/85">
                  {selectedArticle.location} · {selectedArticle.date} · {selectedArticle.readTime}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <h3
                id="news-modal-title"
                className="text-2xl font-extrabold text-ink-primary leading-snug"
              >
                {selectedArticle.title}
              </h3>

              <div className="grid grid-cols-3 gap-3 bg-surface-canvas p-4 rounded-xl border border-ink-primary/8">
                {selectedArticle.keyFigures.map((fig) => (
                  <div key={fig.label}>
                    <span className="font-display text-lg sm:text-xl font-extrabold text-edeq-green block">
                      {fig.value}
                    </span>
                    <span className="text-xs text-ink-muted">{fig.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-ink-secondary leading-relaxed">
                {selectedArticle.bodyParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-ink-primary/10 flex items-center justify-between text-xs text-ink-muted">
                <span>Boletín de Prensa Oficial · Comunicaciones EDEQ S.A. E.S.P.</span>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 rounded-xl bg-edeq-forest text-white font-semibold text-xs hover:bg-edeq-pine cursor-pointer"
                >
                  Cerrar lectura
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
