// window.addEventListener("load", function(){
//       const loader = document.querySelector(".loader");
//       loader.className += " h";
//     });

$(window).on("load",function(){
     $(".loader").fadeOut("slow");
});


$('#location').append('.pac-container');
    /* slide logo*/
    $(window).load(function() {
      $("body").addClass("playing");
    });

    /*fade blogs*/
    $(document).ready(function() {
      $('.btn1, .categories').fadeIn(2000)
    });

    /*slide down login content*/
    $(document).ready(function() {
      $('#login-trigger').click(function() {
        $(this).next('#login-content').slideToggle();
        $(this).toggleClass('active');
      })
    });
    /*signup*/
    $(document).ready(function() {
      $("#signup").click(function() {
        $("#login-content").hide();
      });
    });
    $(document).ready(function() {
      $("#signup").click(function() {
        $("#signup-content").show();
      });
    });
    $(document).ready(function() {
      $("#back").click(function() {
        $("#signup-content").hide();
      });
    });
    $(document).ready(function() {
      $("#back").click(function() {
        $("#login-content").show();
      });
    });
    /* modal signup*/
    $(document).ready(function() {
      $("#myLogin #signup").on('click', function() {
        $('#myLogin').modal('hide');
      });
    });
    $(document).ready(function() {
      $("#myLogin #signup").on('click', function() {
        $('#mySignup').modal('show');
      });
    });
    $(document).ready(function() {
      $("#mySignup #back").on('click', function() {
        $('#mySignup').modal('hide');
      });
    });
    $(document).ready(function() {
      $("#mySignup #back").on('click', function() {
        $('#myLogin').modal('show');
      });
    });