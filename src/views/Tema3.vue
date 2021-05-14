<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero.title-number
        .h3 3
      .h3 Recomendaciones para los Planes de Desarrollo Territorial 2020 - 2023

    .titulo-segundo#t_3_1.mt-5
      .h4  3.1 Actividades Realizadas con DNP Kit de Planeación Territorial
    img.img-a.img-t.mt-5(src='@/assets/ilustraciones/img63.svg', alt='')

    .titulo-segundo#t_3_2.mt-5
      .h4  3.2 Indicadores de transformación digital sectorial y territorial  

    .row.justify-content-center.align-items-stretch.mt-5
      .col-5
        .tarjeta-Avatar
          img.tarjeta-Avatar-img(src='@/assets/ilustraciones/img64.svg' alt='AvatarTop')
          .tarjeta.card-color.p-4
            p Número de trámites y servicios digitalizados y transformados digitalmente en la entidad.

      .col-5
        .tarjeta-Avatar
          img.tarjeta-Avatar-img(src='@/assets/ilustraciones/img65.svg' alt='AvatarTop')
          .tarjeta.card-color.p-4
            p Portal web de la entidad y sus servicios integrados al portal único del estado colombiano gov.co.
    
    .row.justify-content-center.align-items-stretch.mt-5
      .col-5
        .tarjeta-Avatar
          img.tarjeta-Avatar-img(src='@/assets/ilustraciones/img66.svg' alt='AvatarTop')
          .tarjeta.card-color.p-4
            p Número de soluciones tecnológicas implementadas para mejorar la eficiencia interna de las entidades. (Sistemas de gestión documental, sistemas de nóminas, sistemas de gestión).

      .col-5
        .tarjeta-Avatar
          img.tarjeta-Avatar-img(src='@/assets/ilustraciones/img67.svg' alt='AvatarTop')
          .tarjeta.card-color.p-4
            p Modelo de territorios y ciudades inteligentes aplicado como diagnóstico para la definición de proyectos de alguna de las dimensiones del modelo: Calidad de vida, Hábitat, Desarrollo Económico, Gobernanza, Medio Ambiente, Personas.
    
    .row.justify-content-center.align-items-center.mt-5
      .col-5
        img.img-a.img-t(src='@/assets/ilustraciones/img68.svg', alt='')

            
      .col-5
        .tarjeta-Avatar
          img.tarjeta-Avatar-img(src='@/assets/ilustraciones/img69.svg' alt='AvatarTop')
          .tarjeta.card-color.p-4
            p Número de soluciones tecnológicas, aplicaciones web y móviles implementadas que hacen uso de datos abiertos de la entidad, publicados en el portal de datos del estado www.datos.gov.co para la toma de decisiones de la entidad, los ciudadanos y sociedad. (Sistemas de información geográficos, sistemas de información de salud, educación, agricultura, seguridad, etc…)

    .titulo-segundo#t_3_3.mt-5
      .h4  3.3 Implementar los Habilitadores de la Política de Gobierno Digital GD. 
    .p Implementar los propósitos de la Política de Gobierno Digital

    .row.justify-content-end.align-items-end.mt-5
      .col-9
        .list
          .list__item
              .list__item__bulletNumber.teme-2-number-6
                  span 1
          .list__txt            
            p #[b Habilitadores de arquitectura TI] 
            .p •  Desarrollar el Plan de transformación digital y un Plan Estratégico de TI–PETI.
            p.mt-2 •  Número de compras públicas haciendo uso de Acuerdos Marco de Precios.
            p.mt-2 •  Adoptar el IPv6 en las entidades, con base en la resolución 2710 de 2017.
            p.mt-2 •  Número de proyectos con un enfoque de Arquitectura empresarial.
        .hr-2.mt-4
        .list.mt-4
          .list__item
              .list__item__bulletNumber.teme-2-number-6
                  span 2
          .list__txt            
            p #[b Habilitador de seguridad digital] 
            .p •  Un Diagnóstico de seguridad y privacidad de la información implementado.
            p.mt-2 •  Una Guía para la administración del riesgo y el diseño de controles en entidades públicas implementada
        .hr-2.mt-4
        .list.mt-4
          .list__item
              .list__item__bulletNumber.teme-2-number-6
                  span 3
          .list__txt            
            p #[b Habilitador de servicios ciudadanos] 
            .p •  Un Diagnóstico de seguridad y privacidad de la información implementado.
            p.mt-2 •  Una Guía para la administración del riesgo y el diseño de controles en entidades públicas implementada  
        .hr-2.mt-4

      .col-2
        img.img-a.img-t(src='@/assets/ilustraciones/img70.svg', alt='')    
    .titulo-segundo#t_3_4.mt-5
      .h4  3.4 Apoyo técnico para lineamientos de Planes de Desarrollo Guías. 
    .p #[b Habilitador de servicios ciudadanos]
    .p También se dispone de una serie de guías e instructivos con los lineamientos precisos para apoyar a las entidades, los cuales están disponibles en los enlaces que hacen parte integral del documento.

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/O1pX3S2DODM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-end.align-items-end.mt-4
      .col-4
        a.anexo.mb-lg-0(href="https://portalterritorial.dnp.gov.co/kpt/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Fuente. Decreto 620 de 2020


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
