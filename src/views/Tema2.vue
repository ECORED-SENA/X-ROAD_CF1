<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero.title-number
        .h3 2
      .h3 Principios de Gobierno Digital
    .titulo-segundo#t_2_1.mt-5
      .h4 2.1 De gobierno en línea a gobierno digital    

    .row.justify-content-center.align-items-top.mt-5
      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/img22.svg', alt='') 

      .col-12.col-md-8
          TabsB.color-primario
            .py-4.py-md-5(titulo="Decreto 1078 de 2015" :icono="require('@/assets/ilustraciones/img23.svg')")
              .row
                .col-12.number-3.text-white.p-4
                  p Decreto 1078 de 2015

                  .p “Decreto Único Reglamentario del sector TIC”, Capítulo 1, título 9, parte 2, libro 2).

                  .p Como guía del sector.             

            .py-4.py-md-5.img-a(titulo="Decreto 1008 de 2018" :icono="require('@/assets/ilustraciones/img24.svg')")
              .row
                .col-12.number-3.text-white.p-4
                  p Decreto 1008 de 2018

                  .p Política de gobierno digital

                  .p Pone en marcha la transformación del Estado colombiano.
              
            .py-4.py-md-5(titulo="MIPG" :icono="require('@/assets/ilustraciones/img24.svg')")
              .row
                .col-12.number-3.text-white.p-4
                  p MIPG

                  .p Gestión para el Resultado con Valores.

                  .p Como parte integral del Modelo Integrado de Planeación y gestión MIPG.
    
    .titulo-segundo#t_2_2.mt-5
      .h4 2.2 Breve reseña del Modelo Integrado de Planeación y Gestión MIPG
    p 
      a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=62866" target="_blank").link-color El Decreto 1083 de 2015
      |, Decreto único del Sector Función Pública, modificado por el 
      a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=83433" target="_blank").link-color  Decreto 1499 de 2017
      |, establece el Modelo Integrado de Planeación y Gestión - MIPG, el cual surge de la integración de los Sistemas de Desarrollo Administrativo y de Gestión de la Calidad en un solo Sistema de Gestión, y de la articulación de este con el Sistema de Control Interno.

    .p El MIPG opera a través de un conjunto de 7 dimensiones que agrupan las políticas de gestión y desempeño institucional, implementadas de manera articulada e intercomunicada, permitirán que el MIPG funcione:
    
    img.mt-5.img-t.img-a(src='@/assets/ilustraciones/img25.svg', alt='') 

    .p-r.mt-3.text-center Fuente: 
      a(href="https://www.funcionpublica.gov.co/documents/28587410/34112007/Manual+Operativo+MIPG.pdf/ce5461b4-97b7-be3b-b243-781bbd1575f3" target="_blank").link-color Modelo Integrado de Planeación y Gestión
      |, Función Pública.

    .row.justify-content-center.align-items-top.mt-5
      .col-1
        img(src='@/assets/ilustraciones/img26.svg', alt='') 
      .col-11
        p #[b 1a. Dimensión - Talento humano]
        .p MIPG concibe al talento humano como el activo más importante con el que cuentan las entidades y como el gran factor de éxito que les facilita la gestión y el logro de sus objetivos y resultados. El talento humano, es decir, todas las personas que laboran en la administración pública, en el marco de los valores del servicio público, contribuyen con su trabajo, dedicación y esfuerzo al cumplimiento de la misión estatal, a garantizar los derechos y a responder las demandas de los ciudadanos.

    .row.justify-content-center.align-items-top.mt-4
      .col-1
        img(src='@/assets/ilustraciones/img27.svg', alt='') 
      .col-11
        p #[b 2a. Dimensión - Direccionamiento estratégico]
        .p MIPG tiene como condición que las entidades tengan claro el horizonte a corto y mediano plazo que le permita definir la ruta estratégica que guiará su gestión institucional, con miras a satisfacer las necesidades de sus grupos de valor, así como fortalecer su confianza y legitimidad.

        .p En torno a la satisfacción de las necesidades ciudadanas, las entidades focalizan sus procesos y el uso de sus recursos.

    .row.justify-content-center.align-items-top.mt-4
      .col-1
        img(src='@/assets/ilustraciones/img28.svg', alt='') 
      .col-11
        p #[b 3a. Dimensión - Gestión con valores para resultados]
        .p MIPG facilita que la gestión de las entidades esté orientada hacia el logro de resultados en el marco de la integridad. Para esto, pone en marcha los cursos de acción o trayectorias de implementación definidas en la dimensión de Direccionamiento Estratégico y Planeación y contando con el talento humano disponible en la entidad. 

    .row.justify-content-center.align-items-top.mt-4
      .col-1
        img(src='@/assets/ilustraciones/img29.svg', alt='') 
      .col-11
        p #[b 4a. Dimensión - Evaluación de resultados]
        .p Para MIPG es importante que las entidades conozcan de manera permanente los avances en su gestión y los logros de los resultados y metas propuestas, en los tiempos y recursos previstos y si generan los efectos deseados para la sociedad; de igual manera, esto le permite introducir mejoras en la gestión. 

    .row.justify-content-center.align-items-top.mt-4
      .col-1
        img(src='@/assets/ilustraciones/img30.svg', alt='') 
      .col-11
        p #[b 5a. Dimensión - Información y comunicación]
        .p MIPG define la Información y Comunicación como una dimensión articuladora de las demás, puesto que permite a las entidades vincularse con su entorno y facilitar la ejecución de sus operaciones a través de todo el ciclo de gestión. 

    .row.justify-content-center.align-items-top.mt-4
      .col-1
        img(src='@/assets/ilustraciones/img31.svg', alt='') 
      .col-11
        p #[b 6a. Dimensión - Gestión del conocimiento]
        .p La gestión del conocimiento y la innovación fortalece de forma transversal a las demás dimensiones del MIPG en tanto busca que las entidades públicas analicen las formas en las que genera, captura, evalúa y distribuye el conocimiento, de manera que estas puedan aprender de sí mismas y de su entorno, con el objetivo de mejorar su gestión. 

    .row.justify-content-center.align-items-top.mt-4
      .col-1
        img(src='@/assets/ilustraciones/img32.svg', alt='') 
      .col-11
        p #[b 7a. Dimensión - Control Interno]
        .p MIPG promueve el mejoramiento continuo de las entidades, razón por la cual éstas deben establecer acciones, métodos y procedimientos de control y de gestión del riesgo, así como mecanismos para la prevención y evaluación de éste.

        .p El Control Interno es la clave para asegurar razonablemente que las demás dimensiones de MIPG cumplan su propósito. 

    .titulo-segundo#t_2_3.mt-5
      .h4 2.3 ¿Cómo funciona MIPG?
    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="1- ¿Qué es MIPG?")
            .col-12
              p El Modelo Integrado de Planeación y Gestión MIPG es una herramienta que simplifica e integra los sistemas de desarrollo administrativo y gestión de la calidad y los articula con el sistema de control interno, para hacer los procesos dentro de la entidad más sencillos y eficientes.
              .p Es nuestra misión como entidad identificar las oportunidades de mejora y enfocar nuestro trabajo en satisfacer las necesidades, problemas y garantizar los derecho de todos.

          div(titulo="2- ¿Cómo funciona?")
            p MIPG opera a través de la puesta en marcha de siete (7) dimensiones. Cada diemensión opera de manera articulada e intercomunicada, en ellas se agrupan las políticas de gestión y desempeño institucional por área que permiten que se implemente el modelo de manera adecuada y fácil.
            img.mt-4(src='@/assets/ilustraciones/img34.svg', alt='')

          div(titulo="3- ¿Qué esperamos?")
            p Resultados de la buena implementación:

            .p #[b Mayor confianza:] Seguridad en lo que hace la entidad.
            p #[b Cambio cultural:] Mayor aprobación.
            p #[b Eficiencia:] Cumplir adecuadamente las funciones.

          div(titulo="4- Generar resultados")
            p Generar resultados que atiendan los planes de desarrollo y resuelvan las necesidades y problemas de los ciudadanos, con integridad y calidad en el servicio para generar valor público.

          div(titulo="5- Valor público")
            p Resultados observables y medibles que el estado debe alcanzar para dar respuesta a las necesidades o demandas sociales.

      .col-12.col-md-5
        img.img-t.img-a(src='@/assets/ilustraciones/img33.svg', alt='') 

    .titulo-segundo#t_2_4.mt-5
      .h4 2.4 Lección 4 Política de Gobierno Digital como parte del MIPG 

    p Aplica para Entidades que conforman la Administración Pública en los términos del Artículo 39 de la  
      a(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0489_1998.html" target="_blank").link-color Ley 489 de 1998 
      | y los particulares que cumplen funciones administrativas. 

    .p La implementación de la Política de Gobierno Digital en las Ramas Legislativa y Judicial, en los órganos de control, en los autónomos e independientes y demás organismos del Estado, se realizará bajo un esquema de coordinación y colaboración armónica en aplicación de los principios señalados en los artículos 113 y 209 de la Constitución Política (Art. 2.2.9.1.1.2. - 
      a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77888" target="_blank").link-color Decreto 1078 de 2015
      |)

    .row.justify-content-center.align-items-stretch.mt-5
      .col-4
        .tarjeta-Avatar
          img(src='@/assets/ilustraciones/img35.svg' alt='AvatarTop')
          .tarjeta.card-color.p-4
            .h6.text-center Relación Estado - ciudadano
            .p • Transparencia, acceso a la información pública y lucha contra la corrupción.
            p.mt-2 • Servicio al ciudadano.
            p.mt-2 • Racionalización de trámites.
            p.mt-2 • Participación ciudadana en la gestión.
            p.mt-2 • Gobierno digital: TIC para la sociedad
      .col-4
        .tarjeta-Avatar
          img(src='@/assets/ilustraciones/img36.svg' alt='AvatarTop')
          .tarjeta.card-color.p-4
            .h6.text-center De la ventanilla hacia adentro
            .p •  Fortalecimiento organizacional y simplificación de procesos.
            p.mt-2 •  Ejecución presupuestal y eficiencia del gasto público.
            p.mt-2 •  Gobierno digital: TIC para el estado.
            p.mt-2 •  Seguridad digital.
            p.mt-2 •  Defensa jurídica.
            p.mt-2 •  Mejor normativa

    .titulo-segundo#t_2_5.mt-5
      .h4 2.5 Política de gobierno digital como parte del MIPG
    .row.justify-content-center.align-items-center.mt-5
      .col-8
        img(src='@/assets/ilustraciones/img37.svg', alt='') 
        .p #[b Objetivo]

        .p Uso y aprovechamiento de las TIC para mejorar la provisión de servicios digitales, el desarrollo de procesos internos eficientes, la toma de decisiones basadas en datos, el empoderamiento de los ciudadanos y el impulso en el desarrollo de territorios y ciudades inteligentes, logrados a partir de la consolidación de un Estado y ciudadanos competitivos, proactivos, e innovadores, que generan valor público en un entorno de confianza digital.

    .titulo-segundo#t_2_6.mt-5
      .h4 2.6 Política de gobierno digital como parte del MIPG 
    img.mt-5(src='@/assets/ilustraciones/img38.svg', alt='') 

    .titulo-segundo#t_2_7.mt-5
      .h4 2.7 Momentos de la Política de Gobierno Digital 
    .p El 
      a(href="https://estrategia.gobiernoenlinea.gov.co/623/articles-81473_recurso_1.pdf" target="_blank").link-color Manual de Gobierno Digital 
      | desarrolló el proceso de implementación de la política a través de cuatro grandes momentos: 1. Conocer la política; 2. Planear la política; 3. Ejecutar la política; y 4. Medir la política, los cuales incorporan las acciones que permitirán desarrollar la política en las entidades públicas de nivel nacional y territorial, como se ilustra a continuación:
    .row.justify-content-center.align-items-center.mt-5
      .col-3.d-none.d-lg-block 
        img(src='@/assets/ilustraciones/img39.svg', alt='')

      .col-7
        .hr-dot.my-3
        .h6.p-teme-2-color-1 1- Conociendo la política 
        .p •  Evaluación
        p •  ¿Qué es gobierno digital?
        p •  Propósitos
        p •  Elementos
        p •  Actores
        .hr-dot.my-3

        .h6.p-teme-2-color-2 2- Planeando la política
        .p •  ¿Como planear la política en la entidad?
        .hr-dot.my-3

        .h6.p-teme-2-color-3 3- Ejecutando la política
        .p •  TIC para el estado y TIC para la sociedad.
        p •  Habilitadores transversales.
        p •   Apoyo a la implementación.
        .hr-dot.my-3

        .h6.p-teme-2-color-4 4- Midiendo la política
        .p •  Seguimiento y evaluación en la entidad.
        p •  Seguimiento y Evaluación MinTIC.
        .hr-dot.my-3   
      
    .titulo-segundo#t_2_8.mt-5
      .h4 2.8 ¿Qué es la Política de gobierno digital? 
    .row.justify-content-center.align-items-center.mt-5
      .col-5
        img(src='@/assets/ilustraciones/img40.svg', alt='')
      .col-7
        p Gobierno Digital es la política pública liderada por el Ministerio de Tecnologías de la Información y las Comunicaciones - MinTIC, que tiene como objetivo “Promover el uso y aprovechamiento de las tecnologías de la información y las comunicaciones para consolidar un Estado y ciudadanos competitivos, proactivos, e innovadores, que generen valor público en un entorno de confianza digital”. 

        .p #[b Conociendo la política]   
        ol.lista-ol--cuadro.mt-4
          li 
            .lista-ol--cuadro__vineta.number-3
              span 1
            | Estado
          li 
            .lista-ol--cuadro__vineta.number-3
              span 2
            | Actores de la sociedad
          li 
            .lista-ol--cuadro__vineta.number-3
              span 3
            | Valor público     

    .titulo-segundo#t_2_9.mt-5
      .h4 2.9 Propósitos de la Política de gobierno digital 

    .row.justify-content-center.align-items-center.mt-5
      .col-9
        img.img-t.img-a(src='@/assets/ilustraciones/img41.svg', alt='') 
    .row.justify-content-center.align-items-center.mt-5
      .col-8       
        .list
          .list__item
              .list__item__bulletNumber.teme-2-number-1
                  span 1
          .list__txt            
            p Impulsar el desarrollo de territorios y ciudades inteligentes para la solución de retos y problemáticas sociales, a través del aprovechamiento de Tecnologías de la Información y las Comunicaciones.
        .list.mt-4
          .list__item
              .list__item__bulletNumber.teme-2-number-2
                  span 2
          .list__txt            
            p Empoderar a los ciudadanos a través de la consolidación de un Estado Abierto.

        .list.mt-4
          .list__item
              .list__item__bulletNumber.teme-2-number-3
                  span 3
          .list__txt            
            p Habilitar y mejorar la provisión de Servicios Digitales de confianza y calidad.
  

        .list.mt-4
          .list__item
              .list__item__bulletNumber.teme-2-number-4
                  span 4
          .list__txt            
            p Lograr procesos internos seguros y eficientes a través del fortalecimiento de las capacidades de gestión de tecnologías de información.   

        .list.mt-4
          .list__item
              .list__item__bulletNumber.teme-2-number-5
                  span 5
          .list__txt            
            p Tomar decisiones basadas en datos a partir del aumento en el uso y aprovechamiento de la información.                                

    .titulo-segundo#t_2_10.mt-5
      .h4 2.10 Elementos de la Política Gobierno Digital

    .row.justify-content-center.align-items-top.mt-5
      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/img42.svg', alt='') 

      .col-12.col-md-8
          TabsB.color-primario
            .py-4.py-md-5(titulo="Dos Componentes" :icono="require('@/assets/ilustraciones/img43.svg')")
              .row
                .col-12.number-3.text-white.p-4
                  p Dos Componentes
                  .p •  TIC para el estado

                  .p •  TIC para la sociedad         

            .py-4.py-md-5.img-a(titulo="Tres habilitadores transversales" :icono="require('@/assets/ilustraciones/img44.svg')")
              .row
                .col-12.number-3.text-white.p-4
                  p Tres Habilitadores Transversales
                  .p •  Seguridad de la información

                  .p •  Arquitectura

                  .p •  Servicios ciudadanos digitales
              
            .py-4.py-md-5(titulo="Cinco propósitos" :icono="require('@/assets/ilustraciones/img45.svg')")
              .row
                .col-12.number-3.text-white.p-4
                  p Cinco Propósitos

                  .p •  Servicios digitales de confianza y calidad.
                  .p •  Procesos internos seguros y eficientes.
                  .p •  Decisiones basadas en datos.
                  .p •  Empoderamiento ciudadano a través de un estado abierto.
                  .p •  Territorios y ciudades inteligentes a través de las TIC.
    .titulo-segundo#t_2_11.mt-5
      .h4 2.11 Principios de gobierno digital 
    .row.justify-content-center.align-items-center.mt-5    
      .col-12.col-md-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="1- Innovación")
            .col-12
              p En virtud de este principio el Estado y los ciudadanos deben propender por la generación de valor público a través de la introducción de soluciones novedosas que hagan uso de TIC, para resolver problemáticas o necesidades identificadas.

          div(titulo="2- Competitividad")
            p Según este principio el Estado y los ciudadanos deben contar con capacidades y cualidades idóneas para actuar de manera ágil y coordinada, optimizar la gestión pública y permitir la comunicación permanente a través del uso y aprovechamiento de las TIC.

          div(titulo="3- Seguridad de información")
            p Este principio busca crear condiciones de uso confiable en el entorno digital, mediante un enfoque basado en la gestión de riesgos, preservando la confidencialidad, integridad y disponibilidad de la información de las entidades del Estado, y de los servicios que prestan al ciudadano.

          div(titulo="4- Proactividad")
            p Busca que el Estado y los ciudadanos trabajen de manera conjunta en el diseño de políticas, normas, proyectos y servicios, para tomar decisiones informadas que se anticipen a los acontecimientos, mitiguen riesgos y atiendan a las necesidades específicas de los usuarios, buscando el restablecimiento de los lazos de confianza a través del uso y aprovechamiento de las TIC.

      .col-12.col-md-5
        img.img-t.img-a(src='@/assets/ilustraciones/img46.svg', alt='') 

    .titulo-segundo#t_2_12.mt-5
      .h4 2.12 Quiénes ejecutan la política 

    .row.justify-content-center.align-items-center.mt-5
      .col-9
        img.img-t.img-a(src='@/assets/ilustraciones/img41_1.svg', alt='') 
    .row.justify-content-center.align-items-center.mt-5
      .col-8       
        .list
          .list__item
              .list__item__bulletNumber.teme-2-number-1
                  span 1
          .list__txt            
            p #[b Responsable de la política] 
            p Líder de la política de Gobierno Digital: es el Ministerio de Tecnologías de la Información y las Comunicaciones.
        .list.mt-4
          .list__item
              .list__item__bulletNumber.teme-2-number-2
                  span 2
          .list__txt            
            p #[b Responsable de liderar la implementación de la política del gobierno digital] 
            p Es el director, jefe de oficina o coordinador de tecnologías y sistemas de la información y las comunicaciones o G-CIO (sigla en inglés de Government Chief Information Officer).

        .list.mt-4
          .list__item
              .list__item__bulletNumber.teme-2-number-3
                  span 3
          .list__txt            
            p #[b Responsable institucional de la política del gobierno digital] 
            p Es el representante legal de cada sujeto obligado y es el responsable de coordinar, hacer seguimiento y verificación de la implementación de la Política de Gobierno Digital.
  

        .list.mt-4
          .list__item
              .list__item__bulletNumber.teme-2-number-4
                  span 4
          .list__txt            
            p #[b Responsable de orientar la implementación de la política del gobierno digital]  
            p Es el Comité Institucional de Gestión y Desempeño, de que trata el artículo 2.2.22.3.8 del Decreto 1083 de 2015.

    .titulo-segundo#t_2_13.mt-5
      .h4 2.13  Planear la política

    .row.justify-content-center.align-items-stretch.mt-5
      .col-3
        .tarjeta-Avatar
          img(src='@/assets/ilustraciones/img48.svg' alt='AvatarTop')
          .tarjeta.card-color.p-4
            .h6.text-center Lineamientos de Planeación Estratégica
            .p • Entidades públicas de nivel nacional.
            .p • Entidades públicas de nivel territorial
      .col-3
        .tarjeta-Avatar
          img(src='@/assets/ilustraciones/img49.svg' alt='AvatarTop')
          .tarjeta.card-color.p-4
            .h6.text-center Articulación de la política
            .p • Alinear Gobierno Digital con la planeación estratégica de la entidad.
            .p • Revisar el estado de implementación de las políticas de gestión y desempeño institucional.

      .col-3
        .tarjeta-Avatar
          img(src='@/assets/ilustraciones/img50.svg' alt='AvatarTop')
          .tarjeta.card-color.p-4
            .h6.text-center Planeación de los habilitadores de la política
            .p • Revisar el estado de implementación del Marco de Referencia de Arquitectura Empresarial.
            .p • Revisar las condiciones de la entidad para la implementación de Servicios Ciudadanos Digitales (título 17, parte 2, libro 2 del DUR-TIC).

      .col-3
        .tarjeta-Avatar
          img(src='@/assets/ilustraciones/img51.svg' alt='AvatarTop')
          .tarjeta.card-color.p-4
            .h6.text-center Simplificación de la Interacción Digital entre los Ciudadanos y el Estado
            .p • Planes de Integración al Portal Único del Estado Colombiano 

    .titulo-segundo#t_2_14.mt-5
      .h4 2.14 Ejecutar la política Lineamientos TIC para el estado y TIC para la sociedad 

    .row.justify-content-center.align-items-stretch.mt-5
      .col-4
        img.img-t.img-a(src='@/assets/ilustraciones/img52.svg', alt='') 
      .col-8
        ol.lista-ol--cuadro.mt-4
          li 
            .lista-ol--cuadro__vineta.number-3
              span 1
            | Asegure la generación de valor para la entidad y los usuarios
          .row.justify-content-center.align-items-center
            .col-10
              p • Identifique el problema o necesidad y los actores relacionados con el proyecto.
              p • Identifique y analice información y datos proactivamente.
              p • Evalúe la aplicación de metodologías de innovación.
              p • Aplique directrices de inversión inteligente.

          li.mt-4 
            .lista-ol--cuadro__vineta.number-3
              span 2
            | Cuente con la participación de todos            
          .row.justify-content-center.align-items-center
            .col-10 
              p • Asegure el respaldo de la alta dirección.
              p • Genere integración y colaboración entre todas las áreas responsables.
              p • Busque colaboración con otras entidades.
              p • Identifique el líder del proyecto y cuente con equipos multidisciplinarios.
              p • Establezca alianzas entre diferentes actores.                

          li.mt-4 
            .lista-ol--cuadro__vineta.number-3
              span 3
            | Diseñe integralmente su producto
          .row.justify-content-center.align-items-center
            .col-10
              p • Estructure todo proyecto con un enfoque de arquitectura empresarial.
              p • Involucre a los usuarios en el diseño y ejecución del proyecto.
              p • Garantice que el proyecto sea ambientalmente sostenible.
              p • Incorpore los principios de diseño de servicios digitales. 

          li.mt-4 
            .lista-ol--cuadro__vineta.number-3
              span 4
            |  Gestione el proyecto de principio a fin
          .row.justify-content-center.align-items-center
            .col-10
              p • Defina y ejecute el ciclo de gestión del proyecto.
              p • Gestione la información como un producto o servicio de calidad.
              p • Desarrolle un esquema de seguimiento y evaluación.
              p • Desarrolle acciones de mejora continua.
              p • Estrategia de gestión de conocimiento, uso y aprobación.

    .titulo-segundo#t_2_15.mt-5
      .h4 2.15 Ejecutar la política - lineamientos de los elementos habilitadores              
    img.img-t.img-a.mt-5(src='@/assets/ilustraciones/img53.svg', alt='') 

    .titulo-segundo#t_2_16.mt-5
      .h4 2.16 Ejecutar la política - Apoyo para la implementación de la política 

    .row.justify-content-center.mt-5
        .col-11
            .card-media
                .card-media__body
                    figure.card__figure
                        img(src='@/assets/ilustraciones/img54.svg', alt='')   
                    p #[b Despliegue]  
                    .p • Socializar la evolución de la política de Gobierno Digital.
                    p • Apoyar la adopción e implementación general de las temáticas que conforman la Política.

    .row.justify-content-center
        .col-11
            .card-media
                .card-media__body
                    figure.card__figure
                        img(src='@/assets/ilustraciones/img55.svg', alt='')   
                    p #[b Centro de Innovación]  
                    .p • Acompañamientos directos utilizando métodos de innovación.
                    p • Apoya investigaciones aplicadas para resolver retos concretos. 

    .row.justify-content-center
        .col-11
            .card-media
                .card-media__body
                    figure.card__figure
                        img(src='@/assets/ilustraciones/img56.svg', alt='')   
                    p #[b Agencia Nacional Digital]  
                    .p La Agencia Nacional Digital es una entidad de participación pública y naturaleza privada, sin ánimo de lucro adscrita al MINTIC, que busca dinamizar la construcción de un Estado más eficiente, transparente y participativo, gracias al uso y aplicación de la ciencia y las tecnologías de la información: 
                    .p • Servicios Ciudadanos Digitales
                    p • Proyectos de Transformación Digital

    .row.justify-content-center
        .col-11
            .card-media
                .card-media__body
                    figure.card__figure
                        img(src='@/assets/ilustraciones/img57.svg', alt='')   
                    p #[b Fuerza de Tarea Digital]  
                    .p Equipo estratégico que fortalece y promueve el fortalecimiento de la comunicación digital de las entidades gubernamentales: 
                    .p • Estrategia de Redes Sociales y Sinergia de Gobierno.
                    p • Formación.
                    p • Monitoreo y análisis de comunicación digital.

    .row.justify-content-center
        .col-11
            .card-media
                .card-media__body
                    figure.card__figure
                        img(src='@/assets/ilustraciones/img58.svg', alt='')   
                    p #[b Portales de apoyo]  
                    .p • Mi Colombia Digital.
                    p • Portal de Datos Abiertos del Estado.
                    p • Portal de la política de Gobierno Digital
                    p • Portal de software público
                    p • Otros

    .titulo-segundo#t_2_17.mt-5
      .h4 2.17 Ejecutar la política - Apoyo para la implementación de la política 
    .row.justify-content-center.align-items-center.mt-5
      .col-4.d-none.d-lg-block 
        img(src='@/assets/ilustraciones/img39.svg', alt='')

      .col-7
        .hr-dot.my-3
        .h6.p-teme-2-color-1 1- Definir indicadores
        .p Medir y evaluar el avance del Plan de seguridad y privacidad de la información, el Plan Estratégico de Tecnología -PETI y la implementación de servicios ciudadanos digitales.
        .hr-dot.my-3

        .h6.p-teme-2-color-2 2- Realizar el autodiagnóstico General de la Política de Gobierno Digital
        .p A través de la herramienta dispuesta en el sitio web del Modelo Integrado de Planeación y Gestión. (DAFP, 2018)
        .hr-dot.my-3

        .h6.p-teme-2-color-3 3- Realizar el autodiagnóstico específico
        .p Realizar el autodiagnóstico específico en materia de seguridad y privacidad de la información, mediante la aplicación del instrumento de evaluación dispuesto en el sitio web del modelo. (MinTIC, s.f.)
        .hr-dot.my-3

        .h6.p-teme-2-color-4 4- Hacer el reporte oficial de la implementación de la política de Gobierno Digital
        .p A través del FURAG, en los tiempos determinados por el DAFP.
        .hr-dot.my-3  

    .titulo-segundo#t_2_18.mt-5
      .h4 2.18 Medir la política - seguimiento por parte de MinTIC 
    .tarjeta--container.row.mt-5
        
      .col-md.tarjeta.color-acento-botones.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/ilustraciones/img60.svg', alt='Texto que describa la imagen')
          
        .h3.text-center Indicadores de resultados
        p.text-center Tomado de la página 47, 48 y 49 del Manual de Gobierno digital. Implementación de la Política de Gobierno Digital Decreto 1008 de 2018 (Compilado en el Decreto 1078 de 2015, capítulo 1, título 9, parte 2, libro 2)

        a.mt-5.anexo(:href="obtenerLink('/downloads/DECRETO_620_DEL_2_DE_MAYO_DE_2020.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Documento con indicadores.


      .col-md.tarjeta.color-primario.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/ilustraciones/img61.svg', alt='Texto que describa la imagen')
          
        .h3.text-center Mediciones de calidad

        p.text-center A través del Sello de la Excelencia en Gobierno Digital, conforme a lo definido en el artículo 2.2.9.1.4.1 del DUR-TIC, se realizarán las mediciones de calidad de los productos y servicios digitales de las entidades públicas del Estado Colombiano       

    .titulo-segundo#t_2_19.mt-5
      .h4 2.19 Medir la política - seguimiento por parte de MinTIC
    .row.justify-content-end.align-items-center.mt-5
      .col-11
        .hr-2   
    .row.justify-content-center.align-items-center.mt-3
      .col-2
        p.p-teme-2-color-3 Servicios Base

      .col-10.hr-r
        .list
          .list__item
              .list__item__bulletNumber.teme-2-number-6
                  span 1
          .list__txt            
            p #[b Servicio de interoperabilidad] 
            .p.t-b Es el servicio que brinda las capacidades necesarias para garantizar el adecuado flujo de información e interacción entre los sistemas de información de las entidades, permitiendo el intercambio, la integración y la compartición de la información, con el propósito de facilitar el ejercicio de sus funciones constitucionales y legales, acorde con los lineamientos del marco de interoperabilidad.
            .hr-2.mt-4
        .list.mt-4
          .list__item
              .list__item__bulletNumber.teme-2-number-6
                  span 2
          .list__txt            
            p #[b Servicio de autenticación digital] 
            .p.t-b Es el procedimiento que, utilizando mecanismos de autenticación, permite verificar los atributos digitales de una persona cuando adelanten trámites y servicios a través de medios digitales. Además, en caso de requerirse, permite tener certeza sobre la persona que ha firmado un mensaje de datos, o la persona a la que se atribuya el mismo en los términos de la Ley 527 de 1999 y sus normas reglamentarias, o las normas que la modifiquen, deroguen o subroguen, y sin prejuicio de la autenticación notarial.
            .hr-2.mt-4
        .list.mt-4
          .list__item
              .list__item__bulletNumber.teme-2-number-6
                  span 3
          .list__txt            
            p #[b Servicio de carpeta ciudadana digital] 
            .p.t-b Es el servicio que le permite a los usuarios de servicios ciudadanos digitales acceder digitalmente de manera segura, confiable y actualizada al conjunto de sus datos, que tienen o custodian las entidades señaladas en el artículo 2.2.17.1.2. Adicionalmente, este servicio podrá entregar las comunicaciones o alertas que las entidades señaladas tienen para los usuarios, previa autorización de estos.
            .hr-2.mt-4

    .row.justify-content-center.align-items-center
      .col-2
        p.link-color Servicios Especiales   
      .col-10.hr-r-b
        .list.mt-4
          .list__item
              .list__item__bulletNumber.teme-2-number-3
                  span 4
          .list__txt            
            p #[b Servicio ciudadanos digitales especiales] 
            .p.t-b Son servicios que brindan soluciones que por sus características realizan nuevas ofertas de valor y son adicionales a los servicios ciudadanos digitales base, o bien, corresponden a innovaciones que realizan los prestadores de servicio a partir de la autorización dada por el titular de los datos y de la integración a los servicios ciudadanos digitales base, bajo un esquema coordinado por el Articulador.
    .row.justify-content-end.align-items-center.mt-3
      .col-11
        .hr-2 
    .row.justify-content-end.align-items-end
      .col-5
        a.anexo.mb-4.mb-lg-0(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=118337" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Fuente. Decreto 620 de 2020

    .titulo-segundo#t_2_20.mt-5
      .h4 2.20 Marco legal relacionado 
    .p #[b Gobierno digital]
    .p Resultados de desempeño institucional Nación - Rama Ejecutiva - vigencia 2019. 

    .row.justify-content-between.align-items-stretch.my-4
      .col-4.text-center.text-white.py-1.card-gobierno-1
        p Índice gobierno digital nación
        .h6 81.7 
      .col-4.text-center.text-white.py-1.card-gobierno-2
        p Número total de entidades
        .h6 147 
      .col-4.text-center.text-white.py-1.card-gobierno-3
        p Cobertura 
        .h6 100%
    .p #[b Marco legal relacionado]

    .row.justify-content-center.align-items-center.mt-4        
      .col-10  
        .row
          .col-lg-12
            .cajon.color-acento-contenido.p-4
              p Carta Iberoamericana de Derechos Humanos

              .p Alcance
              p Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones.      
    p.mt-5.text-center #[b Marco legal relacionado]

    .row.justify-content-center.align-items-center.mt-5 
      .col-3    
        img.img-a.img-t(src='@/assets/ilustraciones/img62.svg', alt='')
      .col-9  
        LineaTiempoC.color-primario.time-line-c.p-5.mt-5
          .row.justify-content-center.align-items-center(titulo="1999")
            .col-10
              p #[b Ley 527 de 1999]
              .p Alcance
              .p Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones.

          .row.justify-content-center.align-items-center(titulo="2000")
            .col-10
              p #[b Decreto 1747 de 2000]
              .p Alcance
              .p Por el cual se reglamenta parcialmente la Ley 527 de 1999, en lo relacionado con las entidades de certificación, los certificados y las firmas digitales.
          .row.justify-content-center.align-items-center(titulo="2000")
            .col-10
              p #[b Ley 594 de 2000]
              .p Alcance
              .p Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones.

          .row.justify-content-center.align-items-center(titulo="2011")
            .col-10
              p #[b Ley 1437 de 2011]
              .p Alcance
              .p Por la cual se expide el Código de Procedimiento Administrativo y de lo Contencioso Administrativo.
          .row.justify-content-center.align-items-center(titulo="2012")
            .col-10
              p #[b Ley Estatutaria 1581 de 2012]
              .p Alcance
              .p Por la cual se dictan disposiciones generales para la protección de datos personales.

          .row.justify-content-center.align-items-center(titulo="2014")
            .col-10
              p #[b Ley 1712 de 2014]
              .p Alcance
              .p Por medio de la cual se crea la Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional y se dictan otras disposiciones.
          .row.justify-content-center.align-items-center(titulo="2015")
            .col-10
              p #[b Decreto 1078 de 2015]
              .p Alcance
              .p Decreto Único Reglamentario del Sector de Tecnologías de la Información y las Comunicaciones

          .row.justify-content-center.align-items-center(titulo="2017")
            .col-10
              p #[b Decreto 1413 de 2017]
              .p Alcance
              .p Por el cual se adiciona el título 17 a la parte 2 del libro 2 del Decreto Único Reglamentario del sector de Tecnologías de la Información y las Comunicaciones, Decreto 1078 de 2015, para reglamentar parcialmente el capítulo IV del título III de la Ley 1437 de 2011 y el artículo 45 de la Ley 1753 de 2015 estableciendo lineamientos generales en el uso y operación de los servicios ciudadanos digitales.
          .row.justify-content-center.align-items-center(titulo="2018")
            .col-10
              p #[b Decreto 1008 de 2018]
              .p Alcance
              .p Política de gobierno digital

          .row.justify-content-center.align-items-center(titulo="2019")
            .col-10
              p #[b Artículo 147 de la Ley 1955 del 2019]
              .p Alcance
              .p Plan de desarrollo

          .row.justify-content-center.align-items-center(titulo="2020")
            .col-10
              p #[b Decreto 620 de 2020]
              .p Alcance
              .p Servicios ciudadanos digitales.

          .row.justify-content-center.align-items-center(titulo="2020")
            .col-10    
              p #[b Ley 2052 de 2020]
              .p Alcance
              .p Racionalización, digitalización, automatización, trámites en línea, revisión, compilación y formularios únicos.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
