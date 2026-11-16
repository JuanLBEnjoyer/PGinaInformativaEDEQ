import { useState, type FormEvent } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  CreditCard,
  Leaf,
  AlertTriangle,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'
import { HERO_IMAGE, SAMPLE_INVOICES, type SampleInvoice } from '../data/edeqData'

interface HeroSectionProps {
  nicInputRef: React.RefObject<HTMLInputElement | null>
}

function formatCop(value: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(value)
}

function buildSyntheticInvoice(nicCode: string): SampleInvoice {
  const clean = nicCode.replace(/\D/g, '') || '502190'
  const seed = Number(clean.slice(-3)) || 145
  const kwh = 110 + (seed % 210)
  return {
    nic: clean,
    subscriber: `Suscriptor Titular #${clean.slice(0, 6)}`,
    municipality: 'Armenia · Zona Urbana Residencial',
    stratumOrSector: 'Residencial · Estrato 3',
    period: 'Abril 2025',
    consumptionKwh: kwh,
    averageKwh: kwh + 12,
    amountCop: kwh * 845,
    dueDate: '29 de mayo de 2025',
    status: 'Pendiente de pago',
  }
}

export function HeroSection({ nicInputRef }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<'factura' | 'reporte'>('factura')
  const [nicQuery, setNicQuery] = useState(SAMPLE_INVOICES[0].nic)
  const [selectedInvoice, setSelectedInvoice] = useState<SampleInvoice>(SAMPLE_INVOICES[0])
  const [paymentCompleted, setPaymentCompleted] = useState(false)

  // Estado para reporte rapido de danos
  const [municipality, setMunicipality] = useState('Armenia')
  const [issueType, setIssueType] = useState('Interrupción del servicio en el sector')
  const [sectorAddress, setSectorAddress] = useState('')
  const [generatedTicket, setGeneratedTicket] = useState<string | null>(null)

  const handleSearchInvoice = (e: FormEvent) => {
    e.preventDefault()
    setPaymentCompleted(false)
    const trimmed = nicQuery.trim()
    if (!trimmed) return
    const found = SAMPLE_INVOICES.find((inv) => inv.nic === trimmed)
    setSelectedInvoice(found ?? buildSyntheticInvoice(trimmed))
  }

  const handleSelectSample = (sample: SampleInvoice) => {
    setNicQuery(sample.nic)
    setSelectedInvoice(sample)
    setPaymentCompleted(false)
  }

  const handleReportSubmit = (e: FormEvent) => {
    e.preventDefault()
    const randomDigits = Math.floor(10000 + Math.random() * 89999)
    setGeneratedTicket(`RAD-2025-${randomDigits}`)
  }

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-edeq-forest text-white"
    >
      {/* Imagen fotografica del paisaje cafetero con superposicion botanica */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE.url}
          alt={HERO_IMAGE.alt}
          className="w-full h-full object-cover object-center opacity-35 scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(112deg, rgba(8,45,33,0.96) 0%, rgba(13,68,50,0.89) 52%, rgba(10,61,98,0.86) 100%)',
          }}
        />
        {/* Resplandor sutil con los tres tonos del logo */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F39200 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 left-1/4 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #78BE20 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna editorial institucional */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-xs text-xs sm:text-sm font-medium text-edeq-lime">
              <Leaf className="w-4 h-4 shrink-0" />
              <span>Empresa de Servicios Públicos Domiciliarios · Energía Sostenible</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.95rem] font-extrabold leading-[1.12] tracking-tight text-white">
              Energía confiable que impulsa el desarrollo y protege la{' '}
              <span className="text-edeq-lime">riqueza natural</span> de nuestra región.
            </h1>

            <p className="text-base sm:text-lg text-white/82 max-w-2xl leading-relaxed">
              En <strong className="font-semibold text-white">EDEQ S.A. E.S.P.</strong> llevamos
              electricidad de origen limpio a hogares, fincas cafeteras e industrias, articulando
              innovación solar, canales cercanos de atención y conservación activa de nuestras
              cuencas y bosques andinos.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-edeq-orange hover:bg-edeq-orange-warm text-edeq-forest shadow-md transition-all"
              >
                <span>Conocer Portafolio de Servicios</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#canales-atencion"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-white/10 hover:bg-white/18 text-white border border-white/20 backdrop-blur-xs transition-all"
              >
                <Clock className="w-4 h-4 text-edeq-cyan" />
                <span>Canales y Horarios de Atención</span>
              </a>
            </div>

            {/* Indicadores institucionales clave */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                  +215 mil
                </p>
                <p className="text-xs sm:text-sm text-white/72 mt-0.5">
                  Hogares y empresas conectadas
                </p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-edeq-lime tabular-nums">
                  98,2 %
                </p>
                <p className="text-xs sm:text-sm text-white/72 mt-0.5">
                  Energía de matriz limpia y renovable
                </p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-edeq-cyan tabular-nums">
                  24 / 7
                </p>
                <p className="text-xs sm:text-sm text-white/72 mt-0.5">
                  Atención técnica en 12 municipios
                </p>
              </div>
            </div>
          </div>

          {/* Modulo interactivo de autogestion ciudadana */}
          <div id="autogestion" className="lg:col-span-5">
            <div className="bg-white text-ink-primary rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Pestanas superiores */}
              <div className="grid grid-cols-2 bg-surface-muted p-1.5 gap-1.5 border-b border-ink-primary/8">
                <button
                  type="button"
                  onClick={() => setActiveTab('factura')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === 'factura'
                      ? 'bg-white text-edeq-green shadow-xs'
                      : 'text-ink-secondary hover:text-ink-primary'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Consulta tu Factura</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('reporte')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === 'reporte'
                      ? 'bg-white text-edeq-amber-deep shadow-xs'
                      : 'text-ink-secondary hover:text-ink-primary'
                  }`}
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span>Reportar Daño Eléctrico</span>
                </button>
              </div>

              {activeTab === 'factura' ? (
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="text-lg font-bold text-ink-primary">
                        Consulta Express por NIC
                      </h2>
                      <p className="text-xs text-ink-muted mt-0.5">
                        Ingresa tu Número de Identificación del Contrato (NIC) o consulta una cuenta rápida:
                      </p>
                    </div>
                    <span className="shrink-0 text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-edeq-green-soft text-edeq-green">
                      Pagos PSE
                    </span>
                  </div>

                  {/* Chips de prueba rapida */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {SAMPLE_INVOICES.map((sample) => (
                      <button
                        key={sample.nic}
                        type="button"
                        onClick={() => handleSelectSample(sample)}
                        className={`text-xs font-mono px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                          selectedInvoice.nic === sample.nic
                            ? 'bg-edeq-green text-white border-edeq-green font-semibold'
                            : 'bg-surface-canvas text-ink-secondary border-ink-primary/12 hover:border-edeq-green'
                        }`}
                      >
                        NIC {sample.nic}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSearchInvoice} className="flex gap-2">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-ink-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        ref={nicInputRef}
                        type="text"
                        value={nicQuery}
                        onChange={(e) => setNicQuery(e.target.value)}
                        placeholder="Ej. 482910"
                        aria-label="Número de Identificación del Contrato NIC"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-ink-primary/15 bg-surface-canvas text-sm font-mono focus:outline-none focus:ring-2 focus:ring-edeq-green focus:bg-white"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl bg-edeq-blue hover:bg-edeq-blue-hover text-white text-sm font-semibold transition-colors cursor-pointer shrink-0"
                    >
                      Consultar
                    </button>
                  </form>

                  {/* Resumen de factura */}
                  <div className="rounded-xl bg-surface-canvas border border-ink-primary/10 p-4 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-mono text-ink-muted">
                          NIC {selectedInvoice.nic} · {selectedInvoice.period}
                        </p>
                        <p className="text-sm font-bold text-ink-primary mt-0.5">
                          {selectedInvoice.subscriber}
                        </p>
                        <p className="text-xs text-ink-secondary">
                          {selectedInvoice.municipality} ({selectedInvoice.stratumOrSector})
                        </p>
                      </div>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                          selectedInvoice.status === 'Al día'
                            ? 'bg-edeq-green-soft text-edeq-green'
                            : 'bg-edeq-orange-soft text-edeq-amber-deep'
                        }`}
                      >
                        {selectedInvoice.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-ink-primary/8">
                      <div>
                        <span className="text-[11px] text-ink-muted block">Total a pagar</span>
                        <span className="font-display text-xl font-extrabold text-edeq-forest tabular-nums">
                          {paymentCompleted || selectedInvoice.status === 'Al día'
                            ? '$ 0'
                            : formatCop(selectedInvoice.amountCop)}
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] text-ink-muted block">Consumo del mes</span>
                        <span className="font-mono text-sm font-semibold text-edeq-blue tabular-nums">
                          {selectedInvoice.consumptionKwh} kWh{' '}
                          <span className="text-xs font-normal text-ink-muted">
                            (Prom. {selectedInvoice.averageKwh})
                          </span>
                        </span>
                        <span className="text-[11px] text-ink-muted block mt-0.5">
                          Límite: {selectedInvoice.dueDate}
                        </span>
                      </div>
                    </div>

                    {paymentCompleted ? (
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-edeq-green-soft text-edeq-green text-xs font-medium">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>
                          Pago registrado: Comprobante electrónico #PSE-88412 aplicado a tu cuenta.
                        </span>
                      </div>
                    ) : selectedInvoice.status === 'Al día' ? (
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-edeq-green-soft text-edeq-green text-xs font-medium">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        <span>Este contrato se encuentra al día con EDEQ S.A. E.S.P.</span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPaymentCompleted(true)}
                        className="w-full py-2.5 px-4 rounded-xl bg-edeq-green hover:bg-edeq-green-hover text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Pagar en Línea por PSE</span>
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <h2 className="text-lg font-bold text-ink-primary">
                      Reporte Técnico de Daños 24/7
                    </h2>
                    <p className="text-xs text-ink-muted mt-0.5">
                      Para cables caídos o riesgo vital comunícate de inmediato a la línea gratuita{' '}
                      <strong className="text-edeq-amber-deep">115</strong>.
                    </p>
                  </div>

                  <form onSubmit={handleReportSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-xs font-semibold text-ink-secondary mb-1">
                          Municipio
                        </label>
                        <select
                          value={municipality}
                          onChange={(e) => {
                            setMunicipality(e.target.value)
                            setGeneratedTicket(null)
                          }}
                          className="w-full px-3 py-2 rounded-xl border border-ink-primary/15 bg-surface-canvas text-sm focus:outline-none focus:ring-2 focus:ring-edeq-orange"
                        >
                          {[
                            'Armenia',
                            'Calarcá',
                            'Circasia',
                            'Filandia',
                            'La Tebaida',
                            'Montenegro',
                            'Quimbaya',
                            'Salento',
                            'Pijao / Córdoba / Génova',
                          ].map((mun) => (
                            <option key={mun} value={mun}>
                              {mun}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-ink-secondary mb-1">
                          Tipo de novedad
                        </label>
                        <select
                          value={issueType}
                          onChange={(e) => {
                            setIssueType(e.target.value)
                            setGeneratedTicket(null)
                          }}
                          className="w-full px-3 py-2 rounded-xl border border-ink-primary/15 bg-surface-canvas text-sm focus:outline-none focus:ring-2 focus:ring-edeq-orange"
                        >
                          <option>Interrupción del servicio en el sector</option>
                          <option>Variación o bajón de voltaje</option>
                          <option>Rama sobre red aérea / riesgo preventivo</option>
                          <option>Falla en medidor del predio</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ink-secondary mb-1">
                        Barrio, vereda o punto de referencia
                      </label>
                      <input
                        type="text"
                        required
                        value={sectorAddress}
                        onChange={(e) => {
                          setSectorAddress(e.target.value)
                          setGeneratedTicket(null)
                        }}
                        placeholder="Ej. Vereda San Juan, frente a escuela rural"
                        className="w-full px-3.5 py-2 rounded-xl border border-ink-primary/15 bg-surface-canvas text-sm focus:outline-none focus:ring-2 focus:ring-edeq-orange"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-xl bg-edeq-orange hover:bg-edeq-orange-warm text-edeq-forest font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Zap className="w-4 h-4" />
                      <span>Registrar Reporte Técnico</span>
                    </button>
                  </form>

                  {generatedTicket && (
                    <div className="p-3.5 rounded-xl bg-edeq-blue-soft border border-edeq-blue/20 text-xs space-y-1">
                      <p className="font-bold text-edeq-navy flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-edeq-blue shrink-0" />
                        <span>Reporte registrado: {generatedTicket}</span>
                      </p>
                      <p className="text-ink-secondary">
                        Cuadrilla operativa de <strong>{municipality}</strong> asignada para
                        atender: <em>{issueType}</em>.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
