var App = angular.module('App',[]);

App.controller('main-controller', ['$scope', function($scope) {

  $scope.date = new Date();

  var height = $('#Home').height();
  var windowHeight = $(window).height();

  // $( window ).resize(function() {
  //   height = $('#Home').height();
  //   windowHeight = $(window).height();
  // });

  $(window).scroll(function scrollTop(){
    if ($(this).scrollTop() > height-5) {
      $('#mainNav').fadeIn();
    } else {
      $('#mainNav').fadeOut();
    }
  });

   $("a").click(function(event) {
     event.preventDefault();
     $('html,body').animate( {
       scrollTop: $(this.hash).offset().top - 49
     } , 1000);
   });

  $(document).ready(function(){
    $(document).click(function(){
      if ($('html').hasClass("remodal-is-locked")) {
        var video = $(".video iframe").attr("src");
        $(".video iframe").attr("src","");
        $(".video iframe").attr("src",video);
      }
    });
  });

  $(document).ready(function(){
    var bar1 = new ProgressBar.Line("#progress_trabajo-en-equipo", {
      easing: 'easeInOut',
      duration: 1500,
      color: '#231f20',
      trailColor: '#57585a',
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          transform: null
        },
        autoStyleContainer: false
      },
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });

    var bar2 = new ProgressBar.Line("#progress_beneficiencia", {
      easing: 'easeInOut',
      duration: 1500,
      color: '#231f20',
      trailColor: '#57585a',
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          transform: null
        },
        autoStyleContainer: false
      },
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });

    var bar3 = new ProgressBar.Line("#progress_importancia", {
      easing: 'easeInOut',
      duration: 1500,
      color: '#231f20',
      trailColor: '#57585a',
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          transform: null
        },
        autoStyleContainer: false
      },
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });

    var bar4 = new ProgressBar.Line("#progress_mejores-lideres", {
      easing: 'easeInOut',
      duration: 1500,
      color: '#231f20',
      trailColor: '#57585a',
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          transform: null
        },
        autoStyleContainer: false
      },
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });

    bar1.animate(0.83);
    bar2.animate(0.61);
    bar3.animate(0.87);
    bar4.animate(0.81);
  });

  $(document).ready(function ($) {
    $('.nav a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })

    $('a.scroll').on('click', function (e) { //Scroll down a informacion
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top - 260
      }, 1000);
      e.preventDefault();
    });
  });
  $scope.conferencistas = [
            {
                no: 1,
                nombre: "BILL HYBELS",
                quienEs: "Fundador y Pastor Principal de la Iglesia Comunitaria Willow Creek",
                descripcion: "Bill Hybels es el pastor principal de Willow Creek Community Church, una iglesia de más de 25,000 personas que celebró su 40 aniversario en el 2015. Él fundó La Cumbre Global de Liderazgo con el compromiso de desarrollar y asesorar a líderes en todo el mundo. Actualmente, la Cumbre impacta a líderes en 125 países. Hybels es el autor exitoso de más de 20 libros y su nuevo curso de liderazgo en video titulado Liderando Desde Aquí Hasta Allá: 5 Destrezas Esenciales que saldrá en septiembre del 2016.",
                img: "img/profiles/billHybels.png",
                color: "#1489d0",
                class: "col-lg-15"
            },
            {
                no: 2,
                nombre: "MELINDA GATES",
                quienEs: "Co-Presidenta de la Fundación Bill & Melinda Gates",
                descripcion: "Como copresidenta de la fundación, Melinda Gates da forma y aprueba las estrategias, revisa los resultados y establece la dirección general de la organización. Su trabajo la ha llevado ha enfocarse en fortalecer a mujeres y jovencitas para lograr mejorías en la salud y prosperidad de las familias, comunidades y sociedades. Cuando entró a Microsoft en 1987, ella ayudó a desarrollar muchos de los productos de multimedia de la compañía. En 1996, Melinda salió de Microsoft para enfocarse en su trabajo filantrópico y su familia.",
                img: "img/profiles/melindaGates.png",
                color: "#c3971a",
                class: "col-lg-15"
            },
            {
                no: 3,
                nombre: "ALAN MULALLY",
                quienEs: "Presidente y Director Ejecutivo, The Ford Motor Company (2006-2014)",
                descripcion: "Alan Mulally dirigió la transformación de Ford para convertirla en una de las compañías automotrices más destacadas del mundo y la marca #1 en Estados Unidos, regresándola a la rentabilidad y cambiando la forma en que opera la organización. Antes de trabajar en Ford, sirvió como vicepresidente ejecutivo de The Boeing Company. Mulally fue nombrado como el #3 en la lista de “los mejores líderes del mundo” de la revista Fortune y una de “las personas más influyentes del mundo” de la revista TIME.",
                img: "img/profiles/alanMulally.png",
                color: "#ec3b33",
                class: "col-lg-15"
            },
            {
                no: 4,
                nombre: "T.D. JAKES",
                quienEs: "Fundador y Pastor Principal, The Potter’s House",
                descripcion: "T. D. Jakes es un visionario, pensador provocativo y emprendedor que sirve como pastor principal de The Potter’s House, una organización global humanitaria y congregación de 30,000 miembros. Fue nombrado el “mejor predicador de Estados Unidos” por la revista TIME y su alcance y presencia incluye cine, televisión, radio y libros incluyendo el best seller del New York Times Destino y la película Milagros del Cielo con la actriz Jennifer Garner.",
                img: "img/profiles/tdJakes.png",
                color: "#11b29a",
                class: "col-lg-15"
            },
            {
                no: 5,
                nombre: "HORST SCHULZE",
                quienEs: "Director Ejecutivo, Capella Hotel Group, Presidente Fundador, The Ritz-Carlton Group",
                descripcion: "La visión de Horst Schulze ha ayudado a transformar los estándares de excelencia en las industrias de la hospitalidad y servicio. Bajo su liderazgo, el Ritz-Carlton Group recibió el premio prestigioso Malcolm Baldrige National Quality Award en dos ocasiones; el único grupo hotelero que ha ganado tal premio aún por sólo un año. En el 2015, Schulze compartió una sesión práctica e inspiradora durante la Cumbre y regresa este año para hablar de cómo podemos edificar organizaciones que valoran la eficiencia.",
                img: "img/profiles/horstSchulze.png",
                color: "#11373c",
                class: "col-lg-15"
            },
            {
                no: 6,
                nombre: "TRAVIS BRADBERRY",
                quienEs: "Autor de libros de mayor venta, Co-Fundador de TalentSmart",
                descripcion: "El Dr. Travis Bradberry es el coautor galardonado del libro #1 en ventas Inteligencia Emocional 2.0 y cofundador de TalentSmart, una empresa consultora que sirve a más del 75% de las empresas Fortune 500. Bradberry es un experto de renombre mundial en el área de la inteligencia emocional y conferencista que ayuda a empresas y personas a entender lo que es la inteligencia emocional, y sobre todo, cómo usarla para mejorar su liderazgo.",
                img: "img/profiles/travisBradberry.png",
                color: "#eca731",
                class: "col-lg-3"
            },
            {
                no: 7,
                nombre: "ERIN MEYER",
                quienEs: "Profesora del INSEAD, Autora y Consultora",
                descripcion: "Erin Meyer es profesora en INSEAD en Francia, una de las facultades de negocios más destacadas del mundo. Su libro reciente, The Culture Map, se enfoca en cómo los líderes globales de mayor éxito pueden navegar por la complejidad de diferencias culturales en el ambiente multicultural. En el 2015, Meyer ganó el premio “On the Radar” de Thinkers50, que es dado a los mejores pensadores de la nueva generación que tienen el potencial de moldear el futuro de los negocios y el pensamiento empresarial.",
                img: "img/profiles/erinMeyer.png",
                color: "#17b39a",
                class: "col-lg-3"
            },
            {
                no: 8,
                nombre: "WILFREDO DE JESÚS",
                quienEs: "Pastor Principal, New Life Covenant Church, Líder Comunitario y Autor",
                descripcion: "Bajo el liderazgo de Wilfredo de Jesús, New Life ha crecido desde 120 personas a más de 17,000 a través de plantar Iglesias y más de 130 ministerios que alcanzan a los más relegados; los pobres, indigentes, prostitutas, drogadictos y pandilleros. Fue nombrado por la revista TIME como una de las personas más influyentes del 2013. De Jesús es el autor del libro En la Brecha, y uno de los oradores favoritos de la Cumbre después de su conferencia desafiante e inspiradora en el 2014.",
                img: "img/profiles/wilfredoJesus.png",
                color: "#343434",
                class: "col-lg-3"
            },
            {
                no: 9,
                nombre: "PATRICK LENCIONI",
                quienEs: "Autor de libros de mayor venta, Fundador de The Table Group",
                descripcion: "Patrick Lencioni es el autor de 10 libros de negocios que han vendido 5 millones de ejemplares incluyendo Las Cinco Disfunciones de un Equipo. El periódico The Wall Street Journal lo nombró uno de los conferencistas más solicitados en Estados Unidos y es consultor de asuntos relacionados con un liderazgo sano y la salud organizacional. Es uno de los oradores favoritos de la Cumbre. Su próximo libro titulado, El Colaborador Ideal habla de tres virtudes esenciales que aceleran el trabajo en equipo y predicen el éxito de los equipos.",
                img: "img/profiles/patricLencioni.png",
                color: "#cc4e13",
                class: "col-lg-3"
            },
            {
                no: 10,
                nombre: "CHRIS MCCHESNEY",
                quienEs: "Autor de libros de mayor venta, Ejecutivo en Franklin Covey",
                descripcion: "Chris McChesney es un autor exitoso del libro Las 4 Disciplinas de la Ejecución que estuvo en la lista de ventas #1 del Wall Street Journal. McChesney es el Líder Global de la Práctica de Ejecución en Franklin Covey y es conocido por sus conferencias dinámicas y cautivantes. Ha sido consultor con muchas de las mejores marcas del mundo y aprovecha su experiencia práctica para llevar a los líderes desde las salas de juntas a las líneas del frente de las organizaciones a mejorar la ejecución de las ideas más importantes.",
                img: "img/profiles/chrisMcchesney.png",
                color: "#1388c7",
                class: "col-lg-3"
            },
            {
                no: 11,
                nombre: "DANIELLE STRICKLAND",
                quienEs: "Oficial en el Ejército de Salvación, Defensora y Autora",
                descripcion: "Originaria de Canadá, Danielle Strickland actualmente sirve en la ciudad de Los Ángeles como la Secretaria de Justicia Social para el Territorio Oeste del Ejercito de Salvación. Ha servido a los marginados por más de veinte años y también es embajadora para Stop The Traffik, un esfuerzo global contra la trata de personas. Es autora de varios libros incluyendo A Beautiful Mess. Strickland es una comunicadora excepcional que inspira a los oyentes a hacer a un lado sus expectativas limitadas y alinearse con la versión de Dios para sus vidas.",
                img: "img/profiles/danielleStrickland.png",
                color: "#18b093",
                class: "col-lg-3"
            },
            {
                no: 12,
                nombre: "JOSSY CHACKO",
                quienEs: "Fundador y Presidente, Empart Inc.",
                descripcion: "Jossy Chacko lidera un ministerio global para despertar una transformación integral en las comunidades entre los pueblos no alcanzados y necesitados de Asia. Tienen la meta de ver 100,000 comunidades transformadas para el 2030 a través de plantar iglesias y van por buen camino para lograrlo, plantando un promedio de 11 iglesias por día durante el 2015. Está dirigiendo a un equipo de más de 6,500 personas en siete países. Jossy usa sus dones como comunicador para desafiar a los líderes empresariales y espirituales para que capten una visión más grande de parte de Dios.",
                img: "img/profiles/jossyChacko.png",
                color: "#d14e12",
                class: "col-lg-3"
            },
            {
                no: 13,
                nombre: "JOHN C. MAXWELL",
                quienEs: "Experto en Liderazgo, Autor de libros de mayor venta y Coach",
                descripcion: "John C. Maxwell es autor exitoso de la lista #1 del New York Times, coach y conferencista. Fue identificado como el líder empresarial #1 por American Management Association y el experto de liderazgo más influyente del mundo por la revista Inc. en el 2014. Sus organizaciones – The John Maxwell Company, The John Maxwell Team y Equip – han capacitado a más de 6 millones de líderes en las naciones. Su libro más reciente se titula Vivir Intencionalmente: Escoja una Vida Relevante.",
                img: "img/profiles/johnMaxwell.png",
                color: "#eea60a",
                class: "col-lg-3"
            },

        ];
  $scope.informacionIcons = [
    {
      icon_url: "img/icons/icon_travel_locations.png",
      nombre:"UBICACION & FECHAS",
      id: "ubicacionFecha"
    },
    {
      icon_url: "img/icons/icon_travel_agenda.png",
      nombre:"AGENDA",
      id: "agenda"
    },
    {
      icon_url: "img/icons/icon_travel_pricing.png",
      nombre:"PRECIOS",
      id: "precios"
    },
    {
      icon_url: "img/icons/icon_travel_registration.png",
      nombre:"REGISTRO",
      id: "registro"
    },
  ]
  $scope.informacionPrecios = [
    {
      nombre: "INDIVIDUAL",
      icon_url:"img/icons/icon_register.png",
      needed: "1 Persona",
      precio: 550
    },
    // {
    //   nombre: "GRUPOS",
    //   icon_url:"img/icons/icon_register_group.png",
    //   needed: "+ 10 Personas",
    //   precio: 500,
    //   ex: "c/u"
    // },
    // {
    //   nombre: "ESTUDIANTES",
    //   icon_url:"img/icons/icon_register.png",
    //   needed: "Con credencial",
    //   precio: 450
    // },
  ]
}]);
