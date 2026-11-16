import {
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Mail,
} from 'lucide-react'
import { EdeqLogo } from './EdeqLogo'

export function Footer() {
  return (
    <footer className="bg-edeq-forest text-white">
      {/* Filete superior con las variantes cromaticas institucionales */}
      <div
        className="h-1.5 w-full"
        style={{
          background:
            'linear-gradient(90deg, #00853E 0%, #78BE20 35%, #007FC4 68%, #F39200 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Identidad corporativa */}
          <div className="lg:col-span-4 space-y-4">
            <EdeqLogo variant="inverted" />
            <p className="text-sm text-white/75 leading-relaxed">
              Empresa de Energía del Quindío S.A. E.S.P. — Filial del Grupo EPM. Prestamos el
              servicio público domiciliario de energía eléctrica impulsando el desarrollo sostenible,
              la transición energética y el bienestar de los quindianos.
            </p>

            {/* Leyenda discreta de identidad cromatica institucional */}
            <div className="pt-1 flex items-center gap-3 text-xs text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-edeq-lime" />
                Biodiversidad
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-edeq-cyan" />
                Agua y Red
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-edeq-orange" />
                Calidez Solar
              </span>
            </div>
          </div>

          {/* Enlaces institucionales */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-edeq-lime">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm text-white/78">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio y Autogestión
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Portafolio de Servicios
                </a>
              </li>
              <li>
                <a href="#canales-atencion" className="hover:text-white transition-colors">
                  Canales y Horarios
                </a>
              </li>
              <li>
                <a href="#medio-ambiente" className="hover:text-white transition-colors">
                  Gestión Ambiental
                </a>
              </li>
              <li>
                <a href="#mantenimientos" className="hover:text-white transition-colors">
                  Cortes Programados
                </a>
              </li>
              <li>
                <a href="#noticias" className="hover:text-white transition-colors">
                  Sala de Prensa
                </a>
              </li>
            </ul>
          </div>

          {/* Resumen rapido de contacto y horarios */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-edeq-cyan">
              Líneas y Sede Principal
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <PhoneCall className="w-4 h-4 text-edeq-orange shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Línea 115</strong> y 01 8000 915 115 (Daños 24/7)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-edeq-cyan shrink-0 mt-0.5" />
                <span>servicioalcliente@edeq.com.co</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-edeq-lime shrink-0 mt-0.5" />
                <span>Carrera 16 # 14-30, Armenia, Quindío · Sede Principal</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                <span>Lun – Vie: 7:30 a. m. a 4:30 p. m. · Sáb: 8:00 a. m. a 12:00 m.</span>
              </li>
            </ul>
          </div>

          {/* Marco regulatorio y certificaciones */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-edeq-orange">
              Transparencia y Regulación
            </h3>
            <div className="rounded-xl bg-white/8 border border-white/12 p-4 space-y-2.5 text-xs text-white/80">
              <p className="font-semibold text-white flex items-center gap-1.5">
                <Award className="w-4 h-4 text-edeq-lime shrink-0" />
                <span>Gestión Certificada ICONTEC</span>
              </p>
              <p className="leading-relaxed">
                NIT 890.000.144-5 · Entidad sujeta a inspección, vigilancia y control de la
                Superintendencia de Servicios Públicos Domiciliarios y regulación de la CREG.
                Certificaciones vigentes ISO 9001, ISO 14001 e ISO 45001.
              </p>
              <p className="inline-flex items-center gap-1.5 text-edeq-cyan font-medium pt-1">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Vigilado Superservicios</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>
            © 2025 EDEQ — Empresa de Energía del Quindío S.A. E.S.P. · Todos los derechos
            reservados.
          </p>
          <p>Grupo EPM · Línea de Ética y Transparencia 01 8000 522 955</p>
        </div>
      </div>
    </footer>
  )
}
