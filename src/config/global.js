export default {
  global: {
    componenteFormativo: 'Política de Gobierno Digital',
    descripcionCurso:
      'El gobierno ha avanzado a pasos agigantados en la tecnología, en la ciencia y muchas otras áreas del conocimiento. La Tecnología de la información y de la comunicación (TIC), está presente y es necesaria en todos los ámbitos de la vida diaria de un ciudadano; las Entidades públicas requieren funcionar como centros de solución para el ciudadano en el trabajo, la salud, en las relaciones sociales, en el ambiente organizacional, en los procesos educativos, en la búsqueda de la información, en la estructura de los conocimientos y en los intereses y motivaciones de las personas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      } /*
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: false,
      },*/,
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El Estado y la sociedad: actores fundamentales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Génesis y expansión de los gobiernos electrónicos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Creación del Gobierno electrónico ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Paradigmas que influenciaron la creación del Gobierno electrónico',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Gobierno electrónico y sociedad de la información',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Modelos de gobierno electrónico',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Modelo fluctuante de gobierno electrónico',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Gobierno electrónico en Colombia',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principios de Gobierno Digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'De gobierno en línea a gobierno digital',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Breve reseña del Modelo Integrado de Planeación y Gestión MIPG',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '¿Cómo funciona MIPG?',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Lección 4 Política de Gobierno Digital como parte del MIPG',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Política de gobierno digital como parte del MIPG',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Política de gobierno digital como parte del MIPG',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: ' Momentos de la Política de Gobierno Digital',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Qué es la Política de gobierno digital?',
            hash: 't_2_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.9',
            titulo: 'Propósitos de la Política de gobierno digital',
            hash: 't_2_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.10',
            titulo: 'Elementos de la Política Gobierno Digital',
            hash: 't_2_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.11',
            titulo: 'Principios de gobierno digital',
            hash: 't_2_11',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.12',
            titulo: 'Quiénes ejecutan la política',
            hash: 't_2_12',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.13',
            titulo: 'Planear la política',
            hash: 't_2_13',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.14',
            titulo:
              'Ejecutar la política Lineamientos TIC para el estado y TIC para la sociedad',
            hash: 't_2_14',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.15',
            titulo:
              'Ejecutar la política - lineamientos de los elementos habilitadores',
            hash: 't_2_15',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.16',
            titulo:
              'Ejecutar la política - Apoyo para la implementación de la política',
            hash: 't_2_16',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.17',
            titulo:
              'Ejecutar la política - Apoyo para la implementación de la política',
            hash: 't_2_17',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.18',
            titulo: 'Medir la política - seguimiento por parte de MinTIC',
            hash: 't_2_18',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.19',
            titulo: 'Medir la política - seguimiento por parte de MinTIC',
            hash: 't_2_19',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.20',
            titulo: 'Marco legal relacionado',
            hash: 't_2_20',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Recomendaciones para los Planes de Desarrollo Territorial 2020 - 2023',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Actividades Realizadas con DNP Kit de Planeación Territorial',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Indicadores de transformación digital sectorial y territorial',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Implementar los Habilitadores de la Política de Gobierno Digital GD',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Apoyo técnico para lineamientos de Planes de Desarrollo Guías',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Actividades Realizadas con DNP Kit de Planeación Territorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'De gobierno en línea a gobierno digital',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Los servicios ciudadanos digitales como Política del Gobierno para habilitar la transformación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Indicadores transformación digital sectorial y territorial',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo:
              'Los 3 (tres) pasos del éxito en el Marco de la Transformación Digital para el Estado Colombiano',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Daniel Fernando Portilla Arciniegas',
        cargo: 'Experto temático',
        centro: 'MINTIC',
      },
      {
        nombre: 'José Ricardo Aponte Oviedo',
        cargo: 'Experto temático',
        centro: 'MINTIC',
      },
      {
        nombre: 'Sergio Arturo Medina Castillo',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Vilma Lucia Perilla M',
        cargo: 'Revisora y evaluadora metodológica',
        centro: 'Centro de Gestión Industrial',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: [
          'Eulises Orduz',
          'Oscar Ivan Uribe Ortiz',
          'Luis Gabriel Urueta Alvarez',
        ],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Atzori, L, Iera, A. y Morabito, G, (2017, marzo 1) Comprensión de Internet de las cosas: definición, potencialidades y papel social de un paradigma en rápida evolución pag. 122-140. ',
      link:
        'https://www.sciencedirect.com/science/article/abs/pii/S1570870516303316',
    },
    {
      referencia:
        'BBC NEWS. (2014, marzo 10). El peligro de usar wi-fi en lugares públicos.',
      link:
        'https://www.bbc.com/mundo/noticias/2014/03/140310_wifi_internet_hotspots_rg',
    },
    {
      referencia:
        'Decreto 620 de 2020. [Presidencia de la Republica]. Por el cual se subroga el título 17 de la parte 2 del libro 2 del Decreto 1078 de 2015, para reglamentarse parcialmente los artículos 53, 54, 60, 61 Y 64 de la Ley 1437 de 2011, los literales e, j y literal a del parágrafo 2 del artículo 45 de la Ley 1753 de 2015, el numeral 3 del artículo 147 de la Ley 1955 de 2019, y el artículo 9 del Decreto 2106 de 2019, estableciendo los lineamientos generales en el uso y operación de los servicios ciudadanos digitales". 2 de mayo de 2020.',
    },
    {
      referencia:
        'Gobierno electrónico. ¿Estado, ciudadanía y democracia en Internet, Julie Massal, Carlos Germán Sandoval, Revista Análisis político nº 68, Bogotá, enero-abril, 2010: págs. 3-25?',
    },
    {
      referencia:
        'Ley 1341 de 2009. [Congreso de la Republica]. Por la cual se definen principios y conceptos sobre la sociedad de la información y la organización de las Tecnologías de la Información y las Comunicaciones –TIC–, se crea la Agencia Nacional de Espectro y se dictan otras disposiciones. Julio 30 de 2009',
    },
    {
      referencia:
        'Manual de Gobierno digital. Implementación de la Política de Gobierno Digital Decreto 1008 de 2018 (Compilado en el Decreto 1078 de 2015, capítulo 1, título 9, parte 2, libro 2).',
    },
    {
      referencia:
        'Marco de la Transformación Digital para el Estado Colombiano. MinTIC, (Julio 2020).',
    },
  ],
  glosario: [
    {
      termino: 'Servicios ciudadanos digitales',
      significado:
        'es el conjunto de soluciones y procesos transversales que brindan al Estado capacidades y eficiencias para su transformación digital, para lograr una adecuada interacción del ciudadano con el Estado, garantizando el derecho a la utilización de medios electrónicos ante la administración pública.',
    },
    {
      termino: 'Servicios ciudadanos digitales base',
      significado:
        'son los considerados como servicios de interoperabilidad, autenticación digital y carpeta ciudadana digital.',
    },
    {
      termino: 'Servicios ciudadanos digitales especiales',
      significado:
        'son aquellos que brindan soluciones que por sus características realizan nuevas ofertas de valor y son adicionales a los servicios ciudadanos digitales base, o bien, corresponden a innovaciones que realizan los prestadores de servicio a partir de la integración a los servicios ciudadanos digitales base, esto bajo un esquema coordinado por el articulador.',
    },
    {
      termino: 'Servicio de intercambio de información',
      significado:
        'recurso tecnológico que mediante el uso de un conjunto de protocolos y estándares permite el intercambio de información. “Es una representación lógica de una actividad de negocio repetible que tiene un resultado específico (por ejemplo, verificar el crédito del cliente, proporcionar datos del clima, consolidar informes de perforación) y que tiene las siguientes características: Autocontenido, puede estar compuesto por otros servicios y es una “caja negra” para los consumidores del servicio”',
    },
    {
      termino: 'Trámite',
      significado:
        'conjunto o serie de pasos o acciones reguladas por el Estado, que deben efectuar los usuarios para adquirir un derecho o cumplir con una obligación prevista o autorizada por la ley. El trámite se inicia cuando ese particular activa el aparato público a través de una petición o solicitud expresa y termina (como trámite) cuando la administración pública se pronuncia sobre éste, aceptando o denegando la solicitud.',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
}
