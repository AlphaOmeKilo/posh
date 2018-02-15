posh.home = posh.home || {};

posh.home.init = function() {
  console.log("home init");
  
  function changeName() {
    $('.home-intro-name').mouseenter(function() {
      $('.home-intro-name').text("Posh 🎩");
    });
    
    $('.home-intro-name').mouseleave(function() {
      $('.home-intro-name').text("Alex");
    });
  };
  
  function changeExpertise() {
    var expertise = ["websites", "apps", "solutions"];
    var i = 1;
    setInterval(function() {
      if (i >= expertise.length ) {
        i = 0;
      }
      $('.home-intro-expertise').text(expertise[i]);
      i++;
    }, 2000);
  };
  
  function showProjectDetails() {
    $('.site-link').mouseenter(function() {
        $(this).siblings('.project-details').children().addClass('active');
    });
    
    $('.site-link').mouseleave(function() {
      $(this).siblings('.project-details').children().removeClass('active');
    });
    
    $('.project-details-arrow').on('click tap', function() {
      if ($(this).siblings('.project-name').hasClass('active')) {
        $(this).siblings('.project-name').removeClass('active');
        $(this).removeClass('active');
      } else {
        $(this).siblings('.project-name').addClass('active');
        $(this).addClass('active');
      }
    });
  }
  
//  var activatedScroll = false;
//  
//  $(window).on('scroll', function() {
//    
//    if ($(window).scrollTop() > 100 ) {
//      if (!activatedScroll) {
//        console.log('auto scrolling');
//        $('html,body').animate({scrollTop: $("#home-projects").offset().top},1000);
//        activatedScroll = true;
//      }
//    }
//    
//    console.log($(window).scrollTop());
//
//    if ($(window).scrollTop() < 100 ) {
//      $('.home-projects').css({ top: '100vh' });
//      activatedScroll = false;
//    }
//  });

  changeName();
  changeExpertise();
  showProjectDetails();
}
