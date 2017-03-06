$(document).ready(function() {

  /*  Hide-show mobile menu  */
  $("#menu_icon").click(function() {
      $("#nav_menu").toggleClass("show_menu");
  });

  /*  Internal linking smoothing  */
  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length) {
               $('html,body').animate({
                   scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
  });

  /*  Top logo mouse over/out toggle  */
  $("header .logo").mouseover(function() {
    $(this).attr("src","images/logo3.png");
  });

  $("header .logo").mouseout(function() {
    $(this).attr("src","images/logo1.png");
  });

  /*  Portfolio list mouse over/out toggle  */
  $(".list").mouseover(function() {
    if(!$(this).hasClass("open")) {
      $(this).find(".arrow").addClass("mouseOver");
    }
  });

  $(".list").mouseout(function() {
    $(this).find(".arrow").removeClass("mouseOver");
  });

  /*  Portfolio list mouse click toggle  */
  $(".list").click(function() {
    if($(this).hasClass("open")) {
      $(this).animate({height:"120px"}, 500).removeClass("open");
      $(this).find(".arrow").removeClass("rotateUp").addClass("rotateDown");
    }
    else {
      $(this).css("height", "auto");
      var autoHeight = $(this).height();
      $(this).css("height", "120px");
      $(this).animate({height:autoHeight}, 500).addClass("open");
      $(this).find(".arrow").removeClass("rotateDown").addClass("rotateUp").removeClass("mouseOver");
    }
  });

  /*  Portfolio arrow rotation toggle  */
  $(window).resize(function() {
      var windowSize = $(window).width();
      if (windowSize < 800) {
        $(".portfolio").find(".list").css("height", "auto").addClass("open").addClass("smallWidth");
        $(".portfolio").find(".arrow").removeClass("rotateDown").addClass("rotateUp");
      } else {
        if ($(".portfolio").find(".list").hasClass("smallWidth")) {
          $(".portfolio").find(".list").css("height", "120px").removeClass("open").removeClass("smallWidth");
          $(".portfolio").find(".arrow").removeClass("rotateUp").addClass("rotateDown");
        }
      }
  });

  /*  Display year  */
  var date = new Date();
  var year = date.getFullYear();
  document.getElementById("full_year").innerHTML = "© " + year;

});