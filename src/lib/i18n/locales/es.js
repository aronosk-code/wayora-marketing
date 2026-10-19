export default {
  nav: {
    howItWorks: "Cómo funciona",
    pricing: "Precios",
    forCreators: "Para creadores",
    about: "Sobre nosotros",
    contact: "Contacto",
    getApp: "Descargar la app",
  },
  common: {
    getTheApp: "Descargar la app",
    seeHowItWorks: "Ver cómo funciona",
    startCreating: "Empezar a crear",
    comingSoon: "Próximamente",
    comingSoonTitle: "Wayora está en camino",
    comingSoonText:
      "La app todavía no está en las tiendas. Déjanoslo a nosotros: merecerá la pena la espera.",
    mostPopular: "Más popular",
    close: "Cerrar",
    trust: "Gratis para explorar · Funciona sin conexión · 7 idiomas",
    firstTourFree: "Tu primera ruta es gratis: todas sus historias.",
  },
  hero: {
    eyebrow: "Audioguías que se activan según dónde estás",
    title: "Cada camino tiene una historia. Deja que Wayora la cuente.",
    subtitle:
      "Wayora convierte tu trayecto en coche o a pie en una audioguía. Las historias empiezan en cuanto llegas: sin manos, con la vista al frente y sin buscar nada.",
  },
  knows: {
    title: "Sabe dónde estás, sin más",
    subtitle: "Sin buscar, sin tocar, sin pantallas. Wayora simplemente te sigue.",
    drive: {
      title: "Conduce, y te lo narra",
      text: "Las historias suenan solas al pasar por los lugares que importan.",
    },
    walk: {
      title: "Camina, y te guía",
      text: "Indicaciones paso a paso hacia rincones ocultos, con una historia en cada parada.",
    },
    eyes: {
      title: "Vista al frente, móvil guardado",
      text: "El GPS hace el trabajo. Tú solo mira por la ventana.",
    },
  },
  how: {
    title: "Cómo funciona",
    subtitle: "Tres pasos desde abrir la app hasta oír tu primera historia.",
    s1: { title: "Abre el mapa", text: "Ve todas las rutas a tu alrededor, en directo." },
    s2: { title: "Elige una ruta", text: "Desde un paseo de 20 minutos hasta una ruta de un día entero." },
    s3: { title: "Pulsa play", text: "Deja el móvil. Wayora se encarga del resto." },
  },
  why: {
    title: "Por qué Wayora",
    points: [
      "Historias activadas por GPS",
      "Funciona sin conexión",
      "Guías locales de verdad",
      "Coche y a pie en una ruta",
      "7 idiomas",
      "Pago justo para creadores",
    ],
  },
  tours: {
    title: "Rutas destacadas",
    subtitle: "Una muestra de lo que te espera cerca.",
    duration: "Duración",
    distance: "Distancia",
    rating: "Valoración",
  },
  creatorTeaser: {
    title: "Tu ciudad. Tus historias. Tus ingresos.",
    text: "Wayora paga a los creadores una parte cada vez que alguien escucha tu historia.",
    cta: "Empezar a crear",
  },
  pricing: {
    title: "Precios",
    subtitle: "Empieza gratis. Mejora cuando quieras más.",
    plans: [
      {
        name: "Gratis",
        price: "$0",
        period: "",
        tagline: "Tu primera ruta es gratis: todas sus historias.",
        features: ["Tu primera ruta gratis", "Mapas sin conexión", "7 idiomas"],
        popular: false,
      },
      {
        name: "Explorer",
        price: "$5.99",
        period: "/mes",
        tagline: "25 historias al mes.",
        features: ["25 historias al mes", "Todas las rutas cercanas", "Sin conexión", "7 idiomas"],
        popular: false,
      },
      {
        name: "Traveler",
        price: "$9.99",
        period: "/mes",
        tagline: "75 historias al mes y puedes crear y publicar tus propias rutas.",
        features: [
          "75 historias al mes",
          "Crea y publica tus propias rutas",
          "Todas las rutas cercanas",
          "Sin conexión",
          "Soporte prioritario",
        ],
        popular: true,
      },
      {
        name: "Unlimited",
        price: "$19.99",
        period: "/mes",
        tagline: "Todas las historias, todas las rutas.",
        features: [
          "Historias ilimitadas",
          "Crea y publica tus propias rutas",
          "Todas las rutas del mundo",
          "Sin conexión",
          "Soporte prioritario",
        ],
        popular: false,
      },
    ],
    compareTitle: "Compara los planes",
    rows: [
      { label: "Historias al mes", free: "Primera ruta gratis", explorer: "25", traveler: "75", unlimited: "Ilimitadas" },
      { label: "Crea tus propias rutas", free: "—", explorer: "—", traveler: "✓", unlimited: "✓" },
      { label: "Todas las rutas cercanas", free: "—", explorer: "✓", traveler: "✓", unlimited: "✓" },
      { label: "Mapas sin conexión", free: "✓", explorer: "✓", traveler: "✓", unlimited: "✓" },
      { label: "7 idiomas", free: "✓", explorer: "✓", traveler: "✓", unlimited: "✓" },
    ],
    payoutsTitle: "Cómo funcionan los pagos a creadores",
    payoutsText:
      "Los creadores reciben una parte de los ingresos de los planes, repartida según cuántas de sus historias se reproducen, más las propinas íntegras. Los pagos se abonan cada mes; los saldos inferiores a $20 se trasladan al mes siguiente.",
  },
  testimonials: {
    title: "Los viajeros lo adoran",
    items: [
      {
        quote:
          "Recorrimos toda la costa sur sin abrir un mapa ni una vez. Las historias llegaban justo cuando debían.",
        name: "Viajero de ejemplo",
        place: "Reikiavik",
      },
      {
        quote: "Caminé por una ciudad que creía conocer y la escuché por primera vez.",
        name: "Viajero de ejemplo",
        place: "Lisboa",
      },
      {
        quote: "La descarga sin conexión nos salvó en una carretera sin cobertura durante horas.",
        name: "Viajero de ejemplo",
        place: "Los Alpes",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cómo funcionan las historias?",
        a: "Tu primera ruta es gratis, con todas sus historias. Después recibes cada mes la asignación de historias de tu plan: Unlimited no tiene límite. Las repeticiones son gratis en el mismo mes y las historias no usadas no se acumulan.",
      },
      {
        q: "¿Tengo que planear algo antes de salir?",
        a: "No. Abre el mapa, elige una ruta y pulsa play. Wayora activa cada historia según tu ubicación cuando llegas.",
      },
      {
        q: "¿Funciona sin cobertura?",
        a: "Sí. Descarga una ruta antes de salir y se reproduce totalmente sin conexión, GPS incluido.",
      },
      {
        q: "¿Sirve para caminar y para conducir?",
        a: "Para ambos. Muchas rutas combinan el trayecto en coche con paseos cortos en las paradas.",
      },
      {
        q: "¿Qué idiomas hay disponibles?",
        a: "Inglés, islandés, español, portugués, alemán, francés y chino.",
      },
      {
        q: "¿Cómo cobran los creadores?",
        a: "Los creadores reciben una parte de los ingresos de los planes, repartida según cuántas de sus historias se reproducen, más las propinas íntegras. Los saldos inferiores a $20 se trasladan al mes siguiente.",
      },
    ],
  },
  finalCta: {
    title: "Tu próximo trayecto podría ser una ruta.",
    subtitle: "Wayora llega a iOS y Android. Te avisaremos en cuanto esté disponible.",
  },
  footer: {
    tagline: "Audioguías que se reproducen solas.",
    product: "Producto",
    company: "Empresa",
    legal: "Legal",
    language: "Idioma",
    rights: "Todos los derechos reservados.",
  },
  pages: {
    howTitle: "Cómo funciona",
    howIntro:
      "Wayora se encarga de la planificación para que tú puedas mirar. Aquí está todo el recorrido, desde que abres la app hasta la historia que suena al llegar.",
    feelTitle: "Qué se siente",
    feelText:
      "Colocas el móvil en el soporte, arrancas y la primera historia empieza cuando el pueblo queda atrás. Ninguna lista que desplazar, ningún botón que pulsar. La carretera marca el ritmo y Wayora lo sigue.",
    offlineTitle: "Sin conexión y GPS, explicado",
    offlineText:
      "Cada ruta se puede descargar antes de salir. El audio, el recorrido y los puntos de activación viven en tu móvil, así que un puerto de montaña sin cobertura suena exactamente igual que una calle de ciudad. El GPS funciona sin datos: Wayora solo escucha dónde estás.",
    creators: {
      eyebrow: "Para creadores",
      title: "Convierte lo que sabes en una ruta.",
      intro:
        "Conoces las historias que tu ciudad no cuenta. Grábalas, anótalas en los lugares reales y cobra cada vez que alguien escuche.",
      trust: "Gratis para crear · Funciona con tu móvil · Pago mensual",
      earnTitle: "Cómo ganas",
      earn: [
        {
          title: "Una parte de los ingresos de los planes, repartida por reproducciones.",
          text: "Cada pago de un plan aporta una parte a un fondo para creadores, que se reparte según las historias que los suscriptores reprodujeron realmente ese mes: cada historia reproducida cuenta. Cuanta más gente reproduzca las tuyas, mayor será tu parte.",
        },
        {
          title: "100% de tus propinas.",
          text: "Cuando un viajero quiere dar las gracias tras una ruta, esa propina es enteramente tuya. Sin comisión, sin reparto.",
        },
        {
          title: "Sin comisión por ruta.",
          text: "Nunca se te cobra por crear o vender una ruta. Tus historias generan ingresos mientras la gente escuche.",
        },
      ],
      stepsTitle: "Cómo funciona",
      steps: [
        {
          title: "Graba tus historias",
          text: "Habla con naturalidad, o escríbelas. Wayora ordena tus palabras y puede locutarlas por ti en siete idiomas.",
        },
        {
          title: "Anótalas en lugares reales",
          text: "Coloca cada historia en el mapa donde corresponde y define a qué distancia debe estar un viajero para oírla.",
        },
        {
          title: "Publica y gana",
          text: "Comparte tu ruta. Cada vez que alguien escucha una historia tuya, cuenta para tu parte del fondo.",
        },
      ],
      builtTitle: "Hecho para quien conoce un lugar",
      built: [
        "La grabación guiada convierte una nota de voz en una historia acabada",
        "Narración automática en siete idiomas, con la voz que elijas",
        "Herramientas de mapa para colocar paradas y ajustar la distancia de activación",
        "Datos en vivo sobre qué historias se escuchan",
        "Propinas directas de viajeros agradecidos",
      ],
      takesTitle: "Qué hace falta",
      takesText:
        "No necesitas ser profesional. Necesitas conocer un lugar y que te importe. Las mejores rutas son el conocimiento sincero de una persona sobre su propio rincón del mundo, contado sin adornos.",
      faqTitle: "Preguntas frecuentes",
      faq: [
        {
          q: "¿Cuándo cobro?",
          a: "Los pagos se liberan cada mes, una vez confirmado tu saldo. Los saldos inferiores a $20 se trasladan al mes siguiente.",
        },
        {
          q: "¿Necesito ser miembro para crear?",
          a: "Sí. Crear y publicar está incluido en Traveler y Unlimited.",
        },
        {
          q: "¿Y si nadie escucha?",
          a: "Ganas del fondo cuando tus historias se escuchan. Las que nadie escucha no generan nada ese mes.",
        },
        {
          q: "¿Puedo tener mi ruta en otras plataformas?",
          a: "Tus historias son tuyas. Wayora es donde se escuchan en el lugar.",
        },
      ],
    },
    aboutTitle: "Creamos Wayora para que viajar suene a historia, no a búsqueda.",
    aboutMission:
      "La mayoría de las apps de viaje te dan una lista y buena suerte. Nosotros queríamos lo contrario: que el propio lugar te cuente qué pasó aquí, en el momento que importa. Por eso Wayora escucha dónde estás y habla cuando llegas.",
    aboutGpsTitle: "Por qué audio activado por GPS",
    aboutGpsText:
      "Buscar cosas rompe el hechizo. Cuando la historia llega sola, la carretera sigue delante de ti y el lugar habla. Nada que buscar, nada que sostener.",
    aboutVoicesTitle: "Apoyar las voces locales",
    aboutVoicesText:
      "Los mejores guías son quienes viven allí. Wayora les paga directamente por las historias que graban, así las rutas que oyes nacen de conocimiento real y se quedan donde pertenecen.",
    contactTitle: "Cuéntanos",
    contactIntro: "¿Preguntas, ideas o una historia que merece contarse? Envíanos un mensaje y te responderemos.",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Mensaje",
    send: "Enviar mensaje",
    sending: "Enviando…",
    sentTitle: "Gracias, tu mensaje está en camino.",
    sentText: "Leemos todos los mensajes y responderemos lo antes posible.",
    sendAnother: "Enviar otro mensaje",
    help: "¿Buscas ayuda con la app?",
    privacyTitle: "Política de privacidad",
    termsTitle: "Términos del servicio",
    updated: "Última actualización: octubre de 2026",
    formError: "Algo salió mal. Inténtalo de nuevo.",
  },
};