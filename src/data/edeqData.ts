export interface SampleInvoice {
  nic: string
  subscriber: string
  municipality: string
  stratumOrSector: string
  period: string
  consumptionKwh: number
  averageKwh: number
  amountCop: number
  dueDate: string
  status: 'Pendiente de pago' | 'Al día' | 'Próximo a vencer'
}

export interface ServiceItem {
  id: string
  category: 'hogares' | 'empresas' | 'nuevas-energias'
  badge: string
  title: string
  shortDescription: string
  fullDescription: string
  accentTone: 'green' | 'blue' | 'orange'
  iconName: 'zap' | 'sun' | 'car' | 'wrench' | 'lightbulb' | 'shield'
  slaTime: string
  tariffNote: string
  highlights: string[]
  requirements: string[]
}

export interface DigitalChannel {
  id: string
  name: string
  contactValue: string
  schedule: string
  availabilityBadge: string
  tone: 'green' | 'blue' | 'orange'
  iconName: 'phone-alert' | 'message' | 'globe' | 'headset'
  description: string
}

export interface OfficeLocation {
  id: string
  municipality: string
  zone: 'Centro' | 'Cordillera' | 'Norte y Occidente'
  officeName: string
  address: string
  weekdayHours: string
  saturdayHours: string
  continuousShift: boolean
  servicesOffered: string[]
  accessible: boolean
}

export interface MaintenanceEvent {
  id: string
  municipality: string
  zoneType: 'Urbana' | 'Rural'
  sector: string
  date: string
  timeWindow: string
  workType: string
  circuitCode: string
}

export interface NewsArticle {
  id: string
  category: 'Transición Energética' | 'Sostenibilidad' | 'Infraestructura' | 'Comunidad'
  accentTone: 'green' | 'blue' | 'orange'
  date: string
  readTime: string
  title: string
  summary: string
  imageUrl: string
  imageAlt: string
  location: string
  bodyParagraphs: string[]
  keyFigures: { label: string; value: string }[]
}

export const HERO_IMAGE = {
  url: 'https://images.unsplash.com/photo-1789009413779-99c4a0ddaedf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb2xvbWJpYSUyMGdyZWVuJTIwbW91bnRhaW5zJTIwbGFuZHNjYXBlJTIwY29mZmVlJTIwcmVnaW9ufGVufDF8fHx8MTc5NDg1OTQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  alt: 'Montañas verdes y palmas de cera entre neblina andina en el paisaje cafetero',
}

export const ENVIRONMENT_IMAGES = {
  watershed: {
    url: 'https://images.unsplash.com/photo-1706240952223-af0390af978c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx0cm9waWNhbCUyMGZvcmVzdCUyMGJpb2RpdmVyc2l0eSUyMGNvbnNlcnZhdGlvbiUyMHdhdGVyJTIwcml2ZXJ8ZW58MXx8fHwxNzk0ODU5NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Río cristalino rodeado de bosque húmedo tropical protegido en cuenca alta',
  },
  solarMountains: {
    url: 'https://images.unsplash.com/photo-1677137264629-5dab16c48d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGNsZWFuJTIwZW5lcmd5JTIwbW91bnRhaW5zfGVufDF8fHx8MTc5NDg1OTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Parque solar fotovoltaico comunitario con cordillera verde al fondo',
  },
}

export const SAMPLE_INVOICES: SampleInvoice[] = [
  {
    nic: '482910',
    subscriber: 'Hogar Familia Quintero Osorio',
    municipality: 'Armenia · Barrio Laureles Norte',
    stratumOrSector: 'Residencial · Estrato 3',
    period: 'Abril 2025',
    consumptionKwh: 148,
    averageKwh: 156,
    amountCop: 124850,
    dueDate: '28 de mayo de 2025',
    status: 'Próximo a vencer',
  },
  {
    nic: '739104',
    subscriber: 'Beneficiadero Cafetero La Esperanza S.A.S.',
    municipality: 'Filandia · Vereda El Mirador',
    stratumOrSector: 'Agroindustrial · Autogenerador Solar',
    period: 'Abril 2025',
    consumptionKwh: 890,
    averageKwh: 1120,
    amountCop: 682400,
    dueDate: '30 de mayo de 2025',
    status: 'Pendiente de pago',
  },
  {
    nic: '105832',
    subscriber: 'Panadería Artesanal El Parque',
    municipality: 'Calarcá · Zona Centro',
    stratumOrSector: 'Comercial Pequeño',
    period: 'Abril 2025',
    consumptionKwh: 412,
    averageKwh: 405,
    amountCop: 358900,
    dueDate: '19 de mayo de 2025',
    status: 'Al día',
  },
]

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: 'suministro-energia',
    category: 'hogares',
    badge: 'Servicio Esencial Regulado',
    title: 'Distribución y Comercialización de Energía Eléctrica',
    shortDescription:
      'Suministro continuo para más de 215.000 hogares, comercios y predios rurales en 12 municipios con monitoreo inteligente de red.',
    fullDescription:
      'Garantizamos la prestación regulada del servicio público domiciliario de energía eléctrica en media y baja tensión, integrando telemedición avanzada (AMI), reconectadores automatizados en circuitos rurales y atención técnica permanente.',
    accentTone: 'green',
    iconName: 'zap',
    slaTime: 'Conexión en 3 a 5 días hábiles',
    tariffNote: 'Tarifa regulada CREG · Subsidios estratos 1, 2 y 3 aplicados automáticamente',
    highlights: [
      'Cobertura urbana del 99.8 % y electrificación rural del 98.6 %',
      'Factura digital interactiva con histórico de consumo de 6 meses',
      'Monitoreo SCADA 24/7 desde el Centro de Control Regional',
    ],
    requirements: [
      'Documento de identidad del propietario o poseedor del inmueble',
      'Certificado de tradición o documento que acredite tenencia (menor a 90 días)',
      'Declaración de cumplimiento RETIE firmada por técnico matriculado',
    ],
  },
  {
    id: 'autogeneracion-solar',
    category: 'nuevas-energias',
    badge: 'Transición Energética',
    title: 'Soluciones Solares Fotovoltaicas y Autogeneración',
    shortDescription:
      'Diseño, instalación y conexión bidireccional de sistemas solares en techos residenciales, fincas cafeteras y plantas productivas.',
    fullDescription:
      'Acompañamos a familias, hoteles rurales y empresas en la generación de su propia energía limpia mediante paneles fotovoltaicos de alta eficiencia, permitiendo inyectar excedentes a la red de EDEQ con compensación en la factura mensual.',
    accentTone: 'orange',
    iconName: 'sun',
    slaTime: 'Estudio de viabilidad sin costo en 4 días hábiles',
    tariffNote: 'Financiación directa en la factura de energía hasta 72 cuotas',
    highlights: [
      'Medidor bidireccional inteligente para compensación de excedentes',
      'Reducción estimada entre el 35 % y el 80 % en el costo mensual de energía',
      'Trámite integral de conexión AGPE ante el operador de red',
    ],
    requirements: [
      'Estar a paz y salvo con el servicio de energía eléctrica (NIC activo)',
      'Disponibilidad de cubierta o superficie libre de sombras mín. de 18 m²',
      'Últimas tres facturas de consumo para dimensionamiento energético',
    ],
  },
  {
    id: 'movilidad-electrica',
    category: 'nuevas-energias',
    badge: 'Red EcoCarga',
    title: 'Movilidad Eléctrica y Estaciones EcoCarga',
    shortDescription:
      'Red regional de carga pública rápida y semi-rápida en corredores turísticos, además de cargadores domiciliarios certificados.',
    fullDescription:
      'Impulsamos el transporte cero emisiones en el paisaje cultural cafetero mediante estaciones públicas interoperables e instalación llave en mano de puntos de recarga interna para conjuntos residenciales, flotas logísticas y hoteles.',
    accentTone: 'blue',
    iconName: 'car',
    slaTime: 'Visita técnica domiciliaria en 48 horas',
    tariffNote: 'Tarifa preferencial con tarjeta EcoCarga vinculada a tu cuenta EDEQ',
    highlights: [
      '9 estaciones públicas activas en Armenia, Salento, Filandia, Calarcá y La Tebaida',
      'Conectores Tipo 1, Tipo 2 y CCS1 de carga rápida en corriente continua',
      'Independización de medidor exclusivo para movilidad eléctrica',
    ],
    requirements: [
      'Solicitud de disponibilidad de carga para el parqueadero privado o común',
      'Autorización de administración en caso de propiedad horizontal',
      'Ficha técnica del cargador vehicular homologado',
    ],
  },
  {
    id: 'conexiones-proyectos',
    category: 'empresas',
    badge: 'Ingeniería y Red',
    title: 'Nuevas Conexiones, Aumento de Carga y Proyectos',
    shortDescription:
      'Factibilidad técnica, aprobación de diseños eléctricos, legalización de acometidas y expansión para constructores e industria.',
    fullDescription:
      'Ventanilla técnica especializada para constructores, urbanizadores, agroindustria y nuevos usuarios que requieren punto de conexión, independización de cuentas, traslado de redes o incremento de capacidad instalada.',
    accentTone: 'blue',
    iconName: 'wrench',
    slaTime: 'Factibilidad de punto de conexión en 7 días hábiles',
    tariffNote: 'Trámite de estudio técnico preliminar 100 % gratuito y sin intermediarios',
    highlights: [
      'Radicación digital de planos y memorias de cálculo por portal técnico',
      'Inspección de puesta en servicio coordinada con agenda programada',
      'Asesoría normativa RETIE y RETILAP para proyectos urbanísticos',
    ],
    requirements: [
      'Formulario técnico de solicitud de factibilidad diligenciado',
      'Localización georreferenciada del predio y carga total proyectada (kVA)',
      'Licencia de construcción vigente cuando aplique para obras nuevas',
    ],
  },
  {
    id: 'eficiencia-alumbrado',
    category: 'empresas',
    badge: 'Gestión Eficiente',
    title: 'Eficiencia Energética y Modernización Lumínica',
    shortDescription:
      'Diagnósticos energéticos, compensación de energía reactiva, climatización eficiente e iluminación LED arquitectónica y pública.',
    fullDescription:
      'Optimizamos el desempeño eléctrico de comercios, hospitales, instituciones educativas y municipios aliados mediante auditorías de calidad de potencia, bancos de condensadores y reconversión tecnológica a luminarias LED telegestionadas.',
    accentTone: 'green',
    iconName: 'lightbulb',
    slaTime: 'Diagnóstico energético inicial en 5 días hábiles',
    tariffNote: 'Modelos ESCO por desempeño o inversión diferida empresarial',
    highlights: [
      'Eliminación de penalidades por energía reactiva inductiva o capacitiva',
      'Monitoreo horario de curvas de demanda y factor de carga',
      'Mantenimiento preventivo de subestaciones privadas en media tensión',
    ],
    requirements: [
      'RUT y cámara de comercio vigente de la razón social solicitante',
      'Autorización para lectura de perfil de carga del medidor principal',
      'Designación de responsable de mantenimiento o planta física',
    ],
  },
  {
    id: 'energia-social-prepago',
    category: 'hogares',
    badge: 'Inclusión Social',
    title: 'Energía a tu Medida y Financiación Social',
    shortDescription:
      'Modalidad de energía prepago sin cargos por reconexión, acuerdos flexibles de pago y programa de recambio de neveras eficientes.',
    fullDescription:
      'Diseñado para acompañar la economía de los hogares urbanos y campesinos con control diario del presupuesto energético: recargas desde $5.000 COP en puntos cercanos sin intereses ni cobros por reconexión, junto al programa CrediHogar Eficiente.',
    accentTone: 'orange',
    iconName: 'shield',
    slaTime: 'Activación en 48 horas tras validación',
    tariffNote: 'Recargas desde $5.000 COP · Cero cobro por corte o reconexión',
    highlights: [
      'Alertas tempranas en el celular cuando quedan menos de 10 kWh disponibles',
      'Abono solidario gradual en caso de deuda previa acumulada',
      'Programa de sustitución de electrodomésticos antiguos de alto consumo',
    ],
    requirements: [
      'Cédula de ciudadanía del titular o usuario residente del hogar',
      'Número de Identificación del Contrato (NIC) del inmueble',
      'Número de teléfono móvil para recepción de pines de recarga',
    ],
  },
]

export const DIGITAL_CHANNELS: DigitalChannel[] = [
  {
    id: 'linea-115',
    name: 'Línea de Emergencias y Daños 115',
    contactValue: 'Marca 115 · 01 8000 915 115',
    schedule: 'Todos los días · 24 horas (24/7)',
    availabilityBadge: 'Activo 24/7 sin costo',
    tone: 'orange',
    iconName: 'phone-alert',
    description:
      'Reporte inmediato de interrupciones del servicio, cables caídos, postes averiados, fluctuaciones de voltaje o riesgo eléctrico en vía pública.',
  },
  {
    id: 'asistente-lumina',
    name: 'WhatsApp y Asistente Virtual "Lumina"',
    contactValue: '+57 (316) 440 8890',
    schedule: 'Autogestión 24/7 · Asesor: Lun a Sáb 6:30 a. m. – 8:00 p. m.',
    availabilityBadge: 'Respuesta < 2 min',
    tone: 'green',
    iconName: 'message',
    description:
      'Descarga duplicado de factura, consulta saldo por NIC, genera pines de Energía Prepago, reporta daños con ubicación GPS y chatea con un asesor.',
  },
  {
    id: 'oficina-virtual',
    name: 'Oficina Virtual y Pagos en Línea PSE',
    contactValue: 'www.edeq.com.co',
    schedule: 'Disponible las 24 horas, los 365 días del año',
    availabilityBadge: 'Trámites en línea',
    tone: 'blue',
    iconName: 'globe',
    description:
      'Pago seguro por PSE y botones bancarios, radicación y seguimiento de PQRSD, certificados de paz y salvo y agendamiento de turnos presenciales.',
  },
  {
    id: 'linea-administrativa',
    name: 'Línea de Atención Comercial y PQRSD',
    contactValue: '(606) 749 2200',
    schedule: 'Lun a Vie: 7:30 a. m. – 5:30 p. m. · Sáb: 8:00 a. m. – 12:30 p. m.',
    availabilityBadge: 'Jornada continua',
    tone: 'blue',
    iconName: 'headset',
    description:
      'Orientación personalizada sobre facturación, acuerdos de pago, actualización de datos, tarifas reguladas y estado de solicitudes técnicas.',
  },
]

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'armenia-principal',
    municipality: 'Armenia',
    zone: 'Centro',
    officeName: 'Sede Principal · Edificio Administrativo EDEQ',
    address: 'Carrera 16 # 14-30, Piso 1 · Centro, Armenia',
    weekdayHours: 'Lunes a Viernes: 7:30 a. m. – 4:30 p. m. (Jornada continua)',
    saturdayHours: 'Sábados: 8:00 a. m. – 12:00 m.',
    continuousShift: true,
    servicesOffered: ['Facturación y PQRSD', 'Ventanilla RETIE / Constructores', 'Kiosco PSE', 'Movilidad Eléctrica'],
    accessible: true,
  },
  {
    id: 'calarca-centro',
    municipality: 'Calarcá',
    zone: 'Centro',
    officeName: 'Oficina Comercial Calarcá',
    address: 'Calle 39 # 25-18, Local 102 · Sector Plaza Bolívar',
    weekdayHours: 'Lunes a Viernes: 7:30 a. m. – 12:00 m. y 1:30 p. m. – 4:30 p. m.',
    saturdayHours: 'Sábados: 8:00 a. m. – 11:30 a. m.',
    continuousShift: false,
    servicesOffered: ['Atención comercial', 'Acuerdos de pago', 'Duplicados y recargas prepago'],
    accessible: true,
  },
  {
    id: 'montenegro-quimbaya',
    municipality: 'Montenegro',
    zone: 'Norte y Occidente',
    officeName: 'Punto Regional Montenegro y Corredor Cafetero',
    address: 'Carrera 6 # 15-30, Edificio Los Guaduales',
    weekdayHours: 'Lunes a Viernes: 8:00 a. m. – 12:30 p. m. y 2:00 p. m. – 5:00 p. m.',
    saturdayHours: 'Cerrado (Kiosco digital activo 24h en fachada)',
    continuousShift: false,
    servicesOffered: ['PQRSD', 'Nuevas conexiones rurales', 'Energía Prepago'],
    accessible: true,
  },
  {
    id: 'circasia-filandia',
    municipality: 'Circasia · Filandia · Salento',
    zone: 'Norte y Occidente',
    officeName: 'Sede Norte Circasia + Unidad Móvil "EDEQ en Tu Vereda"',
    address: 'Calle 7 # 14-22 Circasia · Ruta móvil Jue–Sáb en Filandia y Salento',
    weekdayHours: 'Lunes a Viernes: 8:00 a. m. – 12:00 m. y 1:30 p. m. – 4:30 p. m.',
    saturdayHours: 'Unidad Móvil en plaza principal: 8:30 a. m. – 2:30 p. m.',
    continuousShift: false,
    servicesOffered: ['Asesoría solar agroindustrial', 'Trámites comerciales', 'Educación comunitaria'],
    accessible: true,
  },
  {
    id: 'cordillera-pijao',
    municipality: 'Pijao · Córdoba · Buenavista · Génova',
    zone: 'Cordillera',
    officeName: 'Puntos Aliados de Atención Cordillera Sur',
    address: 'Oficinas de Atención Municipal · Parques principales',
    weekdayHours: 'Martes a Viernes: 8:00 a. m. – 12:30 p. m. y 1:30 p. m. – 4:00 p. m.',
    saturdayHours: 'Sábados de mercado campesino: 8:00 a. m. – 1:00 p. m.',
    continuousShift: false,
    servicesOffered: ['Atención rural prioritaria', 'Reporte técnico de veredas', 'Financiación social'],
    accessible: true,
  },
]

export const ENVIRONMENTAL_PILLARS = [
  {
    id: 'corredores-fauna',
    metric: '1.480 km',
    metricLabel: 'de red ecológica protegida',
    title: 'Protección de Fauna Silvestre y Pasos Aéreos',
    description:
      'Instalamos cable ecológico semiaislado, dispositivos anticolisión para aves migratorias y puentes arbóreos seguros que protegen osos perezosos, monos aulladores y zarigüeyas en corredores boscosos.',
    tone: 'green' as const,
  },
  {
    id: 'cuencas-palma',
    metric: '+92.500',
    metricLabel: 'árboles nativos sembrados',
    title: 'Restauración de Cuencas y Palma de Cera',
    description:
      'En alianza con acueductos comunitarios y caficultores, restauramos riberas protectoras del río Quindío y viveros escolares dedicados a especies nativas altoandinas.',
    tone: 'blue' as const,
  },
  {
    id: 'economia-circular',
    metric: '95,4 %',
    metricLabel: 'de residuos valorizados',
    title: 'Economía Circular y Cero Aceites PCB',
    description:
      'Reaprovechamos herrajes metálicos, carretes de madera, porcelana eléctrica y transformadores libres de bifenilos policlorados bajo certificación ambiental ISO 14001.',
    tone: 'orange' as const,
  },
]

export const MAINTENANCE_SCHEDULE: MaintenanceEvent[] = [
  {
    id: 'mnt-01',
    municipality: 'Armenia',
    zoneType: 'Urbana',
    sector: 'Sector Avenida Centenario · Calles 8N a 14N',
    date: 'Miércoles 21 de mayo',
    timeWindow: '7:30 a. m. – 11:30 a. m.',
    workType: 'Instalación de cable ecológico y poda técnica preventiva',
    circuitCode: 'CIR-ARM-04',
  },
  {
    id: 'mnt-02',
    municipality: 'Salento',
    zoneType: 'Rural',
    sector: 'Veredas Boquía, Palestina y acceso Valle de Cocora',
    date: 'Jueves 22 de mayo',
    timeWindow: '8:00 a. m. – 1:00 p. m.',
    workType: 'Montaje de reconectadores telecontrolados ante temporada de lluvias',
    circuitCode: 'CIR-SAL-02',
  },
  {
    id: 'mnt-03',
    municipality: 'Calarcá',
    zoneType: 'Urbana',
    sector: 'Barrios Veracruz, Balcones de la Villa y Corredor Vial',
    date: 'Viernes 23 de mayo',
    timeWindow: '8:00 a. m. – 12:00 m.',
    workType: 'Modernización de transformador de distribución de bajo ruido',
    circuitCode: 'CIR-CAL-07',
  },
  {
    id: 'mnt-04',
    municipality: 'Filandia',
    zoneType: 'Rural',
    sector: 'Corregimiento La India y Vereda Cruces',
    date: 'Sábado 24 de mayo',
    timeWindow: '7:45 a. m. – 11:45 a. m.',
    workType: 'Instalación de pasos seguros de fauna silvestre en línea media tensión',
    circuitCode: 'CIR-FIL-01',
  },
]

export const NEWS_ITEMS: NewsArticle[] = [
  {
    id: 'granja-solar-comunitaria',
    category: 'Transición Energética',
    accentTone: 'green',
    date: '14 de mayo de 2025',
    readTime: '4 min de lectura',
    title: 'EDEQ inaugura su primera Granja Solar Comunitaria para 1.800 familias cafeteras del occidente',
    summary:
      'El nuevo parque fotovoltaico en La Tebaida aporta 3,2 MWp de energía limpia directamente a la red regional y evita la emisión anual de 1.450 toneladas de CO2.',
    imageUrl:
      'https://images.unsplash.com/photo-1677137264629-5dab16c48d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGNsZWFuJTIwZW5lcmd5JTIwbW91bnRhaW5zfGVufDF8fHx8MTc5NDg1OTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Paneles solares instalados sobre pradera verde frente a montañas',
    location: 'La Tebaida, Quindío',
    bodyParagraphs: [
      'Con más de 5.800 módulos fotovoltaicos bifaciales de última generación, EDEQ puso en operación comercial el Parque Solar Comunitario El Edén, diseñado para diversificar la matriz eléctrica departamental y respaldar la demanda en horas de máxima radiación.',
      'El proyecto incorpora un aula ambiental abierta para estudiantes universitarios e instituciones técnicas de la región, permitiendo monitorear en tiempo real las curvas de generación solar, temperatura de celdas e integración con la subestación local.',
      'Además de la generación energética, el terreno conserva corredores de polinizadores nativos bajo los paneles solares, demostrando la convivencia armónica entre infraestructura eléctrica y biodiversidad agroecológica.',
    ],
    keyFigures: [
      { label: 'Capacidad instalada', value: '3,2 MWp' },
      { label: 'Hogares equivalentes', value: '1.800' },
      { label: 'CO2 evitado al año', value: '1.450 t' },
    ],
  },
  {
    id: 'corredor-ecocarga-turistico',
    category: 'Sostenibilidad',
    accentTone: 'blue',
    date: '09 de mayo de 2025',
    readTime: '3 min de lectura',
    title: 'Corredor Verde EcoCarga suma tres nuevas electrolineras rápidas en municipios patrimonio',
    summary:
      'Visitantes y residentes ya cuentan con carga rápida en menos de 35 minutos en Filandia, Salento y Buenavista, conectando el turismo sostenible del eje andino.',
    imageUrl:
      'https://images.unsplash.com/photo-1763543007050-4dac73ffc67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMGdyZWVuJTIwbW9iaWxpdHl8ZW58MXx8fHwxNzk0ODU5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Vehículo eléctrico blanco conectado a una estación pública de carga',
    location: 'Filandia y Salento',
    bodyParagraphs: [
      'Con el propósito de consolidar al departamento como referente nacional en turismo descarbonizado, EDEQ habilitó tres estaciones de carga rápida de 60 kW ubicadas estratégicamente cerca de los parques principales y paradores viales.',
      'Cada estación es alimentada con energía certificada de origen renovable y permite el pago ágil mediante tarjeta EcoCarga o código QR desde cualquier billetera digital.',
    ],
    keyFigures: [
      { label: 'Estaciones activas', value: '9 puntos' },
      { label: 'Tiempo de carga 80 %', value: '32 min' },
      { label: 'Energía renovable', value: '100 %' },
    ],
  },
  {
    id: 'automatizacion-redes-cordillera',
    category: 'Infraestructura',
    accentTone: 'orange',
    date: '03 de mayo de 2025',
    readTime: '3 min de lectura',
    title: 'Plan Cordillera Confiable reduce en un 42 % los tiempos de restablecimiento en zonas rurales',
    summary:
      'Cuadrillas especializadas instalaron 38 equipos telecontrolados y sensores de falla que permiten aislar averías en segundos desde el Centro de Control.',
    imageUrl:
      'https://images.unsplash.com/photo-1597502310092-31cdaa35b46d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxlbGVjdHJpY2FsJTIwZW5naW5lZXIlMjBwb3dlciUyMGdyaWQlMjB0ZWNobmljaWFuJTIwc2FmZXR5fGVufDF8fHx8MTc5NDg1OTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Técnico electricista con casco y arnés realizando mantenimiento preventivo en red aérea',
    location: 'Pijao, Córdoba y Génova',
    bodyParagraphs: [
      'Gracias a la modernización de los circuitos rurales de alta montaña, ante la caída de una rama por vendaval el sistema aísla automáticamente solo el tramo afectado, manteniendo con energía al resto de las veredas vecinas.',
      'Las obras se ejecutaron aplicando protocolos de trabajo seguro en alturas y empleando cable recubierto ecológico para proteger tanto la continuidad del servicio como la vegetación circundante.',
    ],
    keyFigures: [
      { label: 'Equipos telecontrolados', value: '38 nuevos' },
      { label: 'Mejora en respuesta', value: '-42 % tiempo' },
      { label: 'Familias beneficiadas', value: '14.600' },
    ],
  },
  {
    id: 'escuelas-guardianes-energia',
    category: 'Comunidad',
    accentTone: 'green',
    date: '26 de abril de 2025',
    readTime: '2 min de lectura',
    title: 'Más de 3.400 niños rurales participan en el programa pedagógico "Guardianes de la Energía y el Agua"',
    summary:
      'Talleres lúdicos sobre uso seguro de la electricidad, ahorro doméstico y cuidado de nacimientos hídricos llegan a 45 sedes educativas veredales.',
    imageUrl:
      'https://images.unsplash.com/photo-1781900592382-fb901451afc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb2xvbWJpYSUyMGdyZWVuJTIwbW91bnRhaW5zJTIwbGFuZHNjYXBlJTIwY29mZmVlJTIwcmVnaW9ufGVufDF8fHx8MTc5NDg1OTQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Arquitectura tradicional colorida en municipio cafetero',
    location: '12 municipios del departamento',
    bodyParagraphs: [
      'El equipo de Gestión Social y Educación al Cliente de EDEQ recorre las instituciones educativas rurales entregando kits de experimentación solar básica y guías de prevención de accidentes eléctricos en el hogar.',
      'Cada escuela participante conforma su patrulla ambiental escolar y recibe iluminación interior LED eficiente instalada por voluntarios técnicos de la empresa.',
    ],
    keyFigures: [
      { label: 'Estudiantes formados', value: '3.400+' },
      { label: 'Sedes educativas', value: '45 rurales' },
      { label: 'Aulas modernizadas LED', value: '180' },
    ],
  },
]
