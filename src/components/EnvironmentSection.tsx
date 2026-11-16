import { useState } from 'react'
import {
  Leaf,
  Trees,
  Droplets,
  Recycle,
  Sliders,
  Sparkles,
} from 'lucide-react'
import { ENVIRONMENT_IMAGES, ENVIRONMENTAL_PILLARS } from '../data/edeqData'

export function EnvironmentSection() {
  const [monthlyKwh, setMonthlyKwh] = useState(155)

  // Matriz limpia EDEQ (~0.11 kg CO2/kWh) vs promedio termico (~0.46 kg CO2/kWh)
  const cleanCo2Kg = Math.round(monthlyKwh * 0.11)
  const avoidedCo2Kg = Math.round(monthlyKwh * 0.35)
  const equivalentTrees = Math.max(1, Math.round((avoidedCo2Kg * 12) / 22))

  const efficiencyTip =
    monthlyKwh <= 130
      ? 'Excelente desempeño: tu consumo está por debajo del promedio residencial regional (156 kWh/mes).'
      : monthlyKwh <= 240
        ? 'Consumo moderado: verificar empaques de la nevera e iluminación LED puede reducir hasta un 14 % tu factura.'
        : 'Consumo elevado: considera evaluar calentadores eficientes o autogeneración solar residencial en techo.'

  return (
    <section
      id="medio-ambiente"
      className="py-20 bg-edeq-forest text-white relative overflow-hidden scroll-mt-20"
    >
      {/* Acentos atmosfericos con los tonos del logo */}
      <div
        className="absolute top-0 right-0 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #78BE20 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #007FC4 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Cabecera + Composicion visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/10 text-edeq-lime border border-white/15">
              <Leaf className="w-4 h-4" />
              <span>Compromiso con el Medio Ambiente y la Vida</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white">
              Cuidamos las cuencas, la biodiversidad y el paisaje que nos da energía
            </h2>

            <p className="text-white/80 text-base leading-relaxed">
              Para EDEQ la sostenibilidad no es un anexo, sino el eje de nuestra operación técnica.
              Adaptamos nuestras redes eléctricas al bosque andino para proteger la fauna silvestre,
              restauramos nacimientos de agua junto a comunidades cafeteras e impulsamos la
              descarbonización regional.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/8 border border-white/12 rounded-xl p-3.5">
                <Droplets className="w-5 h-5 text-edeq-cyan mb-1.5" />
                <p className="font-display text-xl font-extrabold text-white">14 cuencas</p>
                <p className="text-xs text-white/70">en monitoreo y restauración hídrica</p>
              </div>
              <div className="bg-white/8 border border-white/12 rounded-xl p-3.5">
                <Trees className="w-5 h-5 text-edeq-lime mb-1.5" />
                <p className="font-display text-xl font-extrabold text-white">68 pasos</p>
                <p className="text-xs text-white/70">aéreos seguros para fauna arbórea</p>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white/8 border border-white/12 rounded-xl p-3.5">
                <Recycle className="w-5 h-5 text-edeq-orange mb-1.5" />
                <p className="font-display text-xl font-extrabold text-white">ISO 14001</p>
                <p className="text-xs text-white/70">gestión integral certificada</p>
              </div>
            </div>
          </div>

          {/* Collage fotografico territorial */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-stretch">
            <div className="col-span-7 relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 min-h-[280px]">
              <img
                src={ENVIRONMENT_IMAGES.watershed.url}
                alt={ENVIRONMENT_IMAGES.watershed.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-edeq-forest/90 via-transparent to-transparent" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-edeq-cyan block">
                  Programa Agua para el Futuro
                </span>
                <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                  Conservación de bosques ribereños en el alto río Quindío
                </p>
              </div>
            </div>

            <div className="col-span-5 flex flex-col gap-4">
              <div className="relative flex-1 rounded-2xl overflow-hidden shadow-xl border border-white/15 min-h-[165px]">
                <img
                  src={ENVIRONMENT_IMAGES.solarMountains.url}
                  alt={ENVIRONMENT_IMAGES.solarMountains.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-edeq-forest/85 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white">
                  Granjas solares agroecológicas
                </p>
              </div>

              <div className="rounded-2xl bg-edeq-pine border border-edeq-lime/30 p-4 space-y-1">
                <span className="text-xs font-semibold text-edeq-lime block">
                  Meta Carbono Neutro 2030
                </span>
                <p className="font-display text-2xl font-extrabold text-white">-38 %</p>
                <p className="text-[11px] text-white/75 leading-snug">
                  reducción acumulada en huella operativa gracias a flota eléctrica propia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pilares ambientales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENVIRONMENTAL_PILLARS.map((pillar) => {
            const accentColor =
              pillar.tone === 'green'
                ? 'text-edeq-lime border-edeq-lime/30'
                : pillar.tone === 'blue'
                  ? 'text-edeq-cyan border-edeq-cyan/30'
                  : 'text-edeq-orange border-edeq-orange/30'
            return (
              <div
                key={pillar.id}
                className="rounded-2xl bg-white/7 backdrop-blur-xs border border-white/12 p-6 space-y-3 hover:bg-white/10 transition-colors"
              >
                <div className={`pb-3 border-b ${accentColor}`}>
                  <span className="font-display text-3xl font-extrabold block tabular-nums">
                    {pillar.metric}
                  </span>
                  <span className="text-xs text-white/75 font-medium">{pillar.metricLabel}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-sm text-white/78 leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}
        </div>

        {/* Calculadora interactiva de impacto ambiental del hogar */}
        <div className="rounded-2xl bg-white text-ink-primary p-6 sm:p-8 shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-edeq-green bg-edeq-green-soft px-3 py-1 rounded-full">
                <Sliders className="w-3.5 h-3.5" />
                <span>Calculadora de Huella Energética</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-ink-primary">
                Calcula el impacto positivo de tu energía limpia
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Desliza tu consumo mensual estimado (kWh) para conocer cuántas emisiones se evitan
                gracias a nuestra matriz renovable regional frente a una generación térmica tradicional.
              </p>

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="kwh-slider" className="font-semibold text-ink-primary">
                    Consumo mensual de tu hogar o local:
                  </label>
                  <span className="font-mono text-base font-bold text-edeq-green bg-edeq-green-soft px-3 py-0.5 rounded-lg tabular-nums">
                    {monthlyKwh} kWh / mes
                  </span>
                </div>
                <input
                  id="kwh-slider"
                  type="range"
                  min={60}
                  max={500}
                  step={5}
                  value={monthlyKwh}
                  onChange={(e) => setMonthlyKwh(Number(e.target.value))}
                  className="w-full accent-edeq-green h-2 bg-surface-muted rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-ink-muted">
                  <span>60 kWh (Hogar pequeño)</span>
                  <span>156 kWh (Promedio)</span>
                  <span>500 kWh (Comercio)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="rounded-xl bg-edeq-green-soft/70 border border-edeq-green/20 p-4">
                  <span className="text-xs font-semibold text-ink-secondary block">
                    CO2 evitado / mes
                  </span>
                  <span className="font-display text-2xl font-extrabold text-edeq-green mt-1 block tabular-nums">
                    {avoidedCo2Kg} kg
                  </span>
                  <span className="text-[11px] text-ink-muted">frente a red térmica</span>
                </div>

                <div className="rounded-xl bg-edeq-blue-soft/70 border border-edeq-blue/20 p-4">
                  <span className="text-xs font-semibold text-ink-secondary block">
                    Huella neta estimada
                  </span>
                  <span className="font-display text-2xl font-extrabold text-edeq-navy mt-1 block tabular-nums">
                    {cleanCo2Kg} kg
                  </span>
                  <span className="text-[11px] text-ink-muted">matriz 98,2 % limpia</span>
                </div>

                <div className="rounded-xl bg-edeq-orange-soft/80 border border-edeq-orange/25 p-4">
                  <span className="text-xs font-semibold text-ink-secondary block">
                    Equivalencia anual
                  </span>
                  <span className="font-display text-2xl font-extrabold text-edeq-amber-deep mt-1 block tabular-nums">
                    {equivalentTrees} árboles
                  </span>
                  <span className="text-[11px] text-ink-muted">nativos capturando CO2</span>
                </div>
              </div>

              <div className="rounded-xl bg-surface-canvas border border-ink-primary/8 p-3.5 flex items-start gap-2.5 text-xs text-ink-secondary">
                <Sparkles className="w-4 h-4 text-edeq-orange shrink-0 mt-0.5" />
                <span>{efficiencyTip}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
