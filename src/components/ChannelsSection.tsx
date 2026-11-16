import { useState, type FormEvent } from 'react'
import {
  PhoneCall,
  MessageSquare,
  Globe,
  Headphones,
  MapPin,
  Clock,
  CalendarCheck,
  Accessibility,
  CheckCircle2,
  Building2,
} from 'lucide-react'
import {
  DIGITAL_CHANNELS,
  OFFICE_LOCATIONS,
  type DigitalChannel,
  type OfficeLocation,
} from '../data/edeqData'

type ScheduleScenario = 'habil' | 'sabado' | 'festivo'

function ChannelIcon({
  name,
  className,
}: {
  name: DigitalChannel['iconName']
  className?: string
}) {
  switch (name) {
    case 'phone-alert':
      return <PhoneCall className={className} />
    case 'message':
      return <MessageSquare className={className} />
    case 'globe':
      return <Globe className={className} />
    case 'headset':
      return <Headphones className={className} />
  }
}

export function ChannelsSection() {
  const [scenario, setScenario] = useState<ScheduleScenario>('habil')
  const [selectedZone, setSelectedZone] = useState<'Todas' | OfficeLocation['zone']>('Todas')

  // Reserva de turno presencial
  const [selectedOfficeId, setSelectedOfficeId] = useState(OFFICE_LOCATIONS[0].id)
  const [procedureType, setProcedureType] = useState('Facturación y acuerdo de pago')
  const [visitorName, setVisitorName] = useState('')
  const [turnConfirmation, setTurnConfirmation] = useState<string | null>(null)

  const filteredOffices =
    selectedZone === 'Todas'
      ? OFFICE_LOCATIONS
      : OFFICE_LOCATIONS.filter((office) => office.zone === selectedZone)

  const handleBookTurn = (e: FormEvent) => {
    e.preventDefault()
    const office = OFFICE_LOCATIONS.find((o) => o.id === selectedOfficeId)
    const num = Math.floor(10 + Math.random() * 89)
    setTurnConfirmation(
      `Turno A-${num} reservado en ${office?.municipality ?? 'Armenia'} para "${procedureType}".`
    )
  }

  const scenarioInfo: Record<
    ScheduleScenario,
    { statusBadge: string; description: string; officesOpen: boolean }
  > = {
    habil: {
      statusBadge: 'Lunes a Viernes · Todos los canales activos',
      description:
        'Sedes presenciales abiertas desde las 7:30 a. m. (Sede Principal Armenia en jornada continua hasta las 4:30 p. m.) y canales digitales/telefónicos operando al 100 %.',
      officesOpen: true,
    },
    sabado: {
      statusBadge: 'Sábados · Atención matutina y canales digitales',
      description:
        'Oficinas principales y Unidad Móvil rural atienden entre 8:00 a. m. y 12:30 p. m. Línea 115, Oficina Virtual PSE y WhatsApp Lumina continúan activos.',
      officesOpen: true,
    },
    festivo: {
      statusBadge: 'Domingos, Festivos y Horario Nocturno',
      description:
        'Oficinas físicas cerradas. Operan sin interrupción la Línea 115 para emergencias técnicas, pagos en línea PSE, Kioscos digitales y autogestión por WhatsApp.',
      officesOpen: false,
    },
  }

  return (
    <section
      id="canales-atencion"
      className="py-20 bg-white border-y border-ink-primary/8 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Encabezado + Consulta de disponibilidad por franja */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-edeq-blue bg-edeq-blue-soft px-3 py-1 rounded-full">
              Cercanía y Servicio al Ciudadano
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-primary">
              Canales y horarios de atención al usuario
            </h2>
            <p className="text-ink-secondary text-base leading-relaxed">
              Ponemos a tu disposición canales digitales permanentes 24/7, líneas gratuitas de
              emergencia y una red de oficinas presenciales y unidades móviles en todo el territorio.
            </p>
          </div>

          {/* Tarjeta interactiva de consulta por dia */}
          <div className="lg:col-span-5 bg-surface-canvas rounded-2xl p-5 border border-ink-primary/10 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                Consultar disponibilidad según día:
              </span>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  scenarioInfo[scenario].officesOpen
                    ? 'bg-edeq-green-soft text-edeq-green'
                    : 'bg-edeq-orange-soft text-edeq-amber-deep'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    scenarioInfo[scenario].officesOpen ? 'bg-edeq-green' : 'bg-edeq-orange'
                  }`}
                />
                {scenarioInfo[scenario].officesOpen ? 'Oficinas Abiertas' : 'Solo Canales 24/7'}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 bg-white p-1 rounded-xl border border-ink-primary/8">
              {(
                [
                  { id: 'habil', label: 'Lun – Vie' },
                  { id: 'sabado', label: 'Sábados' },
                  { id: 'festivo', label: 'Dom / Festivo' },
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setScenario(item.id)}
                  className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    scenario === item.id
                      ? 'bg-edeq-blue text-white shadow-xs'
                      : 'text-ink-secondary hover:text-ink-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <p className="text-xs text-ink-secondary leading-relaxed">
              <strong className="text-ink-primary block mb-0.5">
                {scenarioInfo[scenario].statusBadge}
              </strong>
              {scenarioInfo[scenario].description}
            </p>
          </div>
        </div>

        {/* Bloque 1: Canales No Presenciales y Lineas Telefonicas */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-ink-primary flex items-center gap-2">
            <Headphones className="w-5 h-5 text-edeq-blue" />
            <span>Líneas Telefónicas y Canales Digitales de Autogestión</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIGITAL_CHANNELS.map((channel) => {
              const isEmergency = channel.tone === 'orange'
              const isGreen = channel.tone === 'green'
              return (
                <div
                  key={channel.id}
                  className={`rounded-2xl p-5 border flex flex-col justify-between space-y-4 transition-all ${
                    isEmergency
                      ? 'bg-edeq-orange-soft/55 border-edeq-orange/35'
                      : 'bg-surface-canvas border-ink-primary/10 hover:border-edeq-blue/40'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isEmergency
                            ? 'bg-edeq-orange text-edeq-forest'
                            : isGreen
                              ? 'bg-edeq-green text-white'
                              : 'bg-edeq-blue text-white'
                        }`}
                      >
                        <ChannelIcon name={channel.iconName} className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          isEmergency
                            ? 'bg-edeq-orange text-edeq-forest'
                            : isGreen
                              ? 'bg-edeq-green-soft text-edeq-green'
                              : 'bg-edeq-blue-soft text-edeq-navy'
                        }`}
                      >
                        {channel.availabilityBadge}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-base text-ink-primary">{channel.name}</h4>
                      <p className="font-mono text-sm font-bold text-edeq-forest mt-1">
                        {channel.contactValue}
                      </p>
                    </div>

                    <p className="text-xs text-ink-secondary leading-relaxed">
                      {channel.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-ink-primary/10 flex items-start gap-2 text-xs font-medium text-ink-primary">
                    <Clock className="w-4 h-4 text-edeq-green shrink-0 mt-0.5" />
                    <span>{channel.schedule}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bloque 2: Directorio de Sedes Presenciales + Agendamiento de Turno */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-ink-primary flex items-center gap-2">
                <Building2 className="w-5 h-5 text-edeq-green" />
                <span>Oficinas de Atención Presencial y Horarios por Municipio</span>
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {(['Todas', 'Centro', 'Norte y Occidente', 'Cordillera'] as const).map((zone) => (
                  <button
                    key={zone}
                    type="button"
                    onClick={() => setSelectedZone(zone)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedZone === zone
                        ? 'bg-edeq-green text-white'
                        : 'bg-surface-canvas text-ink-secondary hover:text-edeq-green'
                    }`}
                  >
                    {zone}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3.5">
              {filteredOffices.map((office) => (
                <div
                  key={office.id}
                  className="rounded-2xl border border-ink-primary/10 bg-surface-canvas/70 hover:bg-white p-5 transition-all shadow-2xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-edeq-forest text-white">
                          {office.municipality}
                        </span>
                        {office.continuousShift && (
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-edeq-green-soft text-edeq-green">
                            Jornada continua
                          </span>
                        )}
                        {office.accessible && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-edeq-navy bg-edeq-blue-soft px-2 py-0.5 rounded-md">
                            <Accessibility className="w-3.5 h-3.5" />
                            <span>Acceso preferencial y lengua de señas virtual</span>
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-bold text-ink-primary mt-2">
                        {office.officeName}
                      </h4>
                      <p className="text-xs text-ink-secondary flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-edeq-orange-warm shrink-0" />
                        <span>{office.address}</span>
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-3.5 border-t border-ink-primary/8 text-xs">
                    <div className="space-y-1">
                      <span className="font-semibold text-ink-muted block">Horario entre semana</span>
                      <span className="font-medium text-ink-primary block">{office.weekdayHours}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-semibold text-ink-muted block">Atención sábados</span>
                      <span className="font-medium text-edeq-blue block">{office.saturdayHours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {office.servicesOffered.map((srv) => (
                      <span
                        key={srv}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-white border border-ink-primary/10 text-ink-secondary"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tarjeta lateral: Agendar Turno Presencial sin filas */}
          <div className="lg:col-span-4 bg-edeq-forest text-white rounded-2xl p-6 shadow-xl space-y-5 lg:sticky lg:top-28">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-edeq-lime">
                <CalendarCheck className="w-4 h-4" />
                <span>Atención Programada sin Filas</span>
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Agenda tu Turno Presencial
              </h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Reserva un turno prioritario en cualquiera de nuestras oficinas comerciales para
                ser atendido a la hora exacta.
              </p>
            </div>

            <form onSubmit={handleBookTurn} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-white/85 mb-1">
                  Sede de atención
                </label>
                <select
                  value={selectedOfficeId}
                  onChange={(e) => {
                    setSelectedOfficeId(e.target.value)
                    setTurnConfirmation(null)
                  }}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-edeq-lime"
                >
                  {OFFICE_LOCATIONS.map((office) => (
                    <option
                      key={office.id}
                      value={office.id}
                      className="text-ink-primary bg-white"
                    >
                      {office.municipality} — {office.officeName.split('·')[0]}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/85 mb-1">
                  Trámite a realizar
                </label>
                <select
                  value={procedureType}
                  onChange={(e) => {
                    setProcedureType(e.target.value)
                    setTurnConfirmation(null)
                  }}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-edeq-lime"
                >
                  {[
                    'Facturación y acuerdo de pago',
                    'Radicación de PQRSD',
                    'Nueva conexión o proyecto RETIE',
                    'Asesoría Solar / Movilidad EcoCarga',
                    'Cambio de titularidad del contrato',
                  ].map((proc) => (
                    <option key={proc} value={proc} className="text-ink-primary bg-white">
                      {proc}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/85 mb-1">
                  Nombre del usuario
                </label>
                <input
                  type="text"
                  required
                  value={visitorName}
                  onChange={(e) => {
                    setVisitorName(e.target.value)
                    setTurnConfirmation(null)
                  }}
                  placeholder="Ej. Camila Restrepo"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-edeq-lime"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-edeq-orange hover:bg-edeq-orange-warm text-edeq-forest font-bold text-sm transition-colors cursor-pointer"
              >
                Confirmar Turno Digital
              </button>
            </form>

            {turnConfirmation && (
              <div className="p-3.5 rounded-xl bg-white/12 border border-edeq-lime/40 text-xs space-y-1">
                <p className="font-bold text-edeq-lime flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Turno Agendado Exitosamente</span>
                </p>
                <p className="text-white/90">{turnConfirmation}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
