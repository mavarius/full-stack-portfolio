$(document).ready(function() {

	// Nav Controls
	$('#navBtn').click(function() {
		$(this).toggleClass('open');
    $('#navBar').toggleClass('open')
	});

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

	// Header Shrink
	var shrinkHeader = 100;

  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
				$('#headerBlock').addClass('shrink');
				$('.logoSlot').html('<img class="logo" src="./images/dcLogoWhite.svg" alt="logo">');
      } else {
				$('#headerBlock').removeClass('shrink');
				$('.logoSlot').html('<img class="logo" src="./images/dcLogo.svg" alt="logo">');
      }
  });

	function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});

// sass --watch scss:css
// python -m SimpleHTTPServer
