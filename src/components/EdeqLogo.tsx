interface EdeqLogoProps {
  variant?: 'default' | 'inverted'
  showTagline?: boolean
  className?: string
}

/**
 * Isotipo y logotipo institucional para EDEQ — Empresa de Energía del Quindío S.A. E.S.P.
 * Emplea las tres variantes cromaticas caracteristicas del emblema:
 * verde esmeralda/brote (#00853E / #78BE20), azul hidro-ceruleo (#007FC4)
 * y naranja ambar solar (#F39200).
 */
export function EdeqLogo({
  variant = 'default',
  showTagline = true,
  className = '',
}: EdeqLogoProps) {
  const isInverted = variant === 'inverted'

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-sm ring-1 ring-black/5 shrink-0">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="edeqGreenArc" x1="6" y1="36" x2="36" y2="8" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00853E" />
              <stop offset="100%" stopColor="#78BE20" />
            </linearGradient>
            <linearGradient id="edeqBlueWave" x1="8" y1="26" x2="42" y2="38" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0A3D62" />
              <stop offset="55%" stopColor="#007FC4" />
              <stop offset="100%" stopColor="#29A9E1" />
            </linearGradient>
            <linearGradient id="edeqOrangeSpark" x1="20" y1="10" x2="41" y2="26" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F39200" />
              <stop offset="100%" stopColor="#E87722" />
            </linearGradient>
          </defs>

          {/* Arco botanico superior-izquierdo (cordillera y biodiversidad) */}
          <path
            d="M10 31.5C7.2 23.2 11.4 13.2 20.4 9.6C25.8 7.5 31.8 8.4 35.8 11.6C30.4 11.2 24.4 13.4 20.5 18.2C16.7 22.8 15.5 28.4 16.4 33.4C13.8 33.6 11.4 32.9 10 31.5Z"
            fill="url(#edeqGreenArc)"
          />

          {/* Destello solar ambar-mandarina (energia vital) */}
          <path
            d="M23.2 18.8C26.7 14.5 33.2 13.5 38.4 16.8C40.6 18.2 42 20.5 42.4 23.1C38.4 20.7 33.1 20.6 28.6 23.2C25.9 24.7 23.9 26.9 22.8 29.4C21.2 25.9 21.1 21.5 23.2 18.8Z"
            fill="url(#edeqOrangeSpark)"
          />

          {/* Onda hidrica azul ceruleo (cuencas y continuidad del servicio) */}
          <path
            d="M11.8 35.2C16.5 37.2 22.4 36.1 27.6 32.2C32.2 28.7 36.9 27.4 41.2 28.5C39.2 35.3 32.5 40.2 24.7 40.2C19.2 40.2 14.5 38.2 11.8 35.2Z"
            fill="url(#edeqBlueWave)"
          />

          {/* Nucleo luminoso central */}
          <circle cx="26.5" cy="24.5" r="2.6" fill="#F39200" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-display text-2xl font-extrabold tracking-tight ${
              isInverted ? 'text-white' : 'text-edeq-forest'
            }`}
          >
            EDEQ
          </span>
          <span
            className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${
              isInverted
                ? 'bg-white/12 text-edeq-lime'
                : 'bg-edeq-green-soft text-edeq-green'
            }`}
          >
            S.A. E.S.P.
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[11px] font-medium mt-0.5 tracking-tight ${
              isInverted ? 'text-white/75' : 'text-ink-secondary'
            }`}
          >
            Empresa de Energía del Quindío · Grupo EPM
          </span>
        )}
      </div>
    </div>
  )
}
