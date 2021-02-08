$(window).on("load",function (){
   $(".preloader").fadeOut("slow");
});

$(document).ready(function () {
  // navbar shrink
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    }
    else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });
  // video popup
  const videoSrc = $('#player-1').attr("src")
  $(".video-play-btn, .video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src", "");
    }
    else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == '') {
        $("#player-1").attr("src", videoSrc);
      }
    }
  });

  //  features carsouel

  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });

  // app screenshot

  $(".screenshots-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });

  // testimonials

  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });

  // team 

  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });

//  scrool effect


  AOS.init();

    // animatin of contact

    
  anime.timeline({loop: true})
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true
});


  // page scrool

  $.scrollIt({
    topOffset: -50
  });

  // dark mode
  function toggleTheme(){
    if(localStorage.getItem("shala-theme") !== null){
      if(localStorage.getItem("shala-theme") === "dark"){
         $("body").addClass("dark");
      }
      else{
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }
  toggleTheme();

  $(".toggle-theme").on("click",function(){
    $("body").toggleClass("dark")
    if($("body").hasClass("dark")){
      localStorage.setItem("rivid-theme","dark");
    }
    else{
      localStorage.setItem("rivid-theme","light");
    }
    updateIcon();
  });
  function updateIcon(){
    if($("body").hasClass("dark")){
       $(".toggle-theme i").removeClass("fa-moon");
       $(".toggle-theme i").addClass("fa-sun");
    }
    else{
       $(".toggle-theme i").removeClass("fa-sun");
       $(".toggle-theme i").addClass("fa-moon");
    }
  }

});

