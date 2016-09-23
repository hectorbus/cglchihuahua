var App = angular.module('App',[]);

App.controller('main-controller', ['$scope', function($scope) {

  $scope.date = new Date();


  $(document).ready(function(){

    var imgSrc = "img/thumbs/";
    var height;

    function mainArt(){
      windowWidht = $('#Home').width();
      height = $('#Home').height();
      if (windowWidht > 435) {
        $(".mainArtContainer img").attr('src', imgSrc + "cumbre-thumb6.jpg");
      }else {
        $(".mainArtContainer img").attr('src', imgSrc + "cumbre-thumb-m.png");
      }
    }
    mainArt();
    $( window ).resize(function() {
      mainArt();
    });

    $(window).scroll(function scrollTop(){ //Nav fade in, fade out
      if ($(this).scrollTop() > height-5) {
        $('#mainNav').fadeIn();
      } else {
        $('#mainNav').fadeOut();
      }
    });

  })


  $("nav a").click(function(event) {
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
          scrollTop: $($(this).attr('href')).offset().top - 100
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
                nombre: "TRAVIS BRADBERRY",
                quienEs: "Autor de libros de mayor venta, Co-Fundador de TalentSmart",
                descripcion: "El Dr. Travis Bradberry es el coautor galardonado del libro #1 en ventas Inteligencia Emocional 2.0 y cofundador de TalentSmart, una empresa consultora que sirve a más del 75% de las empresas Fortune 500. Bradberry es un experto de renombre mundial en el área de la inteligencia emocional y conferencista que ayuda a empresas y personas a entender lo que es la inteligencia emocional, y sobre todo, cómo usarla para mejorar su liderazgo.",
                img: "img/profiles/travisBradberry.png",
                color: "#E1AF43",
                class: "col-lg-3"
            },
            {
                no: 3,
                nombre: "JOSSY CHACKO",
                quienEs: "Fundador y Presidente, Empart Inc.",
                descripcion: "Jossy Chacko lidera un ministerio global para despertar una transformación integral en las comunidades entre los pueblos no alcanzados y necesitados de Asia. Tienen la meta de ver 100,000 comunidades transformadas para el 2030 a través de plantar iglesias y van por buen camino para lograrlo, plantando un promedio de 11 iglesias por día durante el 2015. Está dirigiendo a un equipo de más de 6,500 personas en siete países. Jossy usa sus dones como comunicador para desafiar a los líderes empresariales y espirituales para que capten una visión más grande de parte de Dios.",
                img: "img/profiles/jossyChacko.png",
                color: "#DB5338",
                class: "col-lg-3"
            },
            {
                no: 4,
                nombre: "CHRIS MCCHESNEY",
                quienEs: "Autor de libros de mayor venta, Ejecutivo en Franklin Covey",
                descripcion: "Chris McChesney es un autor exitoso del libro Las 4 Disciplinas de la Ejecución que estuvo en la lista de ventas #1 del Wall Street Journal. McChesney es el Líder Global de la Práctica de Ejecución en Franklin Covey y es conocido por sus conferencias dinámicas y cautivantes. Ha sido consultor con muchas de las mejores marcas del mundo y aprovecha su experiencia práctica para llevar a los líderes desde las salas de juntas a las líneas del frente de las organizaciones a mejorar la ejecución de las ideas más importantes.",
                img: "img/profiles/chrisMcchesney.png",
                color: "#1796DB",
                class: "col-lg-3"
            },
            {
                no: 5,
                nombre: "JOHN C. MAXWELL",
                quienEs: "Experto en Liderazgo, Autor de libros de mayor venta y Coach",
                descripcion: "John C. Maxwell es autor exitoso de la lista #1 del New York Times, coach y conferencista. Fue identificado como el líder empresarial #1 por American Management Association y el experto de liderazgo más influyente del mundo por la revista Inc. en el 2014. Sus organizaciones – The John Maxwell Company, The John Maxwell Team y Equip – han capacitado a más de 6 millones de líderes en las naciones. Su libro más reciente se titula Vivir Intencionalmente: Escoja una Vida Relevante.",
                img: "img/profiles/johnMaxwell.png",
                color: "#eea60a",
                class: "col-lg-3"
            },
            {
                no: 6,
                nombre: "HENRY CLOUD",
                quienEs: "Psicólogo Clínico, Autor y Consultor de Liderazgo",
                descripcion: "El Doctor Henry Cloud es un psicólogo clínico con amplia experiencia en la vida privada, como asesor de dirección y en medios de comunicación. Presenta concecptos que pueden ampliar su capacidad para asesorar y manejar a las personas que integran su equipo de forma precisa. Es el autor o coautor de diecinueve libros incluyendo el Libro titulado Limites en el matrimonio.",
                img: "img/profiles/henryCloud.png",
                color: "#6F2745",
                class: "col-lg-15"
            },
            {
                no: 7,
                nombre: "SHAUNA NIEQUIST",
                quienEs: "Autora de Libros",
                descripcion: "Shauna Niequist es el autor de Cold Tangerines, Bittersweet, Bread & Wine, y Savor. Su próximo libro, Present Over Perfect, se dará a conocer el 9 de agosto de 2016. Ella está casada con Aaron Niequist, y viven en Chicago con sus hijos, Henry y Mac. Hija de Bill Hybels, pastor principal de Willow Creek Community Church. Shauna es un ratón de biblioteca, un beachbum, y una recolectora apasionada de las personas, especialmente alrededor de la mesa.",
                img: "img/profiles/shaunaNiequist.png",
                color: "#DB5338",
                class: "col-lg-3"
            },
            {
                no: 8,
                nombre: "DANIELLE STRICKLAND",
                quienEs: "Oficial en el Ejército de Salvación, Defensora y Autora",
                descripcion: "Originaria de Canadá, Danielle Strickland actualmente sirve en la ciudad de Los Ángeles como la Secretaria de Justicia Social para el Territorio Oeste del Ejercito de Salvación. Ha servido a los marginados por más de veinte años y también es embajadora para Stop The Traffik, un esfuerzo global contra la trata de personas. Es autora de varios libros incluyendo A Beautiful Mess. Strickland es una comunicadora excepcional que inspira a los oyentes a hacer a un lado sus expectativas limitadas y alinearse con la versión de Dios para sus vidas.",
                img: "img/profiles/danielleStrickland.png",
                color: "#18b093",
                class: "col-lg-3"
            },
            {
                no: 9,
                nombre: "WILFREDO DE JESÚS",
                quienEs: "Pastor Principal, New Life Covenant Church, Líder Comunitario y Autor",
                descripcion: "Bajo el liderazgo de Wilfredo de Jesús, New Life ha crecido desde 120 personas a más de 17,000 a través de plantar Iglesias y más de 130 ministerios que alcanzan a los más relegados; los pobres, indigentes, prostitutas, drogadictos y pandilleros. Fue nombrado por la revista TIME como una de las personas más influyentes del 2013. De Jesús es el autor del libro En la Brecha, y uno de los oradores favoritos de la Cumbre después de su conferencia desafiante e inspiradora en el 2014.",
                img: "img/profiles/wilfredoJesus.png",
                color: "#343434",
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
    {
      nombre: "GRUPOS",
      icon_url:"img/icons/icon_register_group.png",
      needed: "Compra 9 Boletos y obten 1 Gratis",
      precio: 550,
      ex: "c/u"
    },
  ]
}]);
