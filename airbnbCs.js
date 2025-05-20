if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Always scroll to top on page load
$(window).on('load', function() {
  $(window).scrollTop(0);
});
$(document).ready(function() {
  // Select all main sections and content blocks you want to animate
  var $fadeSections = $('.section, .ourProcess, .processIcons, .text, .title, .persona-image, .persona-info, blockquote, .theSolution, .solution-image, .features, .feature-image, .expedia, .tripAdvisor, .closing, .thankYou, .heroImage, .main-content, .sidebar, .site-footer');

  // Add the fade class to each
  $fadeSections.addClass('js-fade');

  function fadeInOnScroll() {
    $fadeSections.each(function() {
      var $el = $(this);
      if ($el.hasClass('js-fade-in')) return; // Already animated

      var windowBottom = $(window).scrollTop() + $(window).height();
      var elTop = $el.offset().top;
      var elHeight = $el.outerHeight();

      // Fade in when at least 30% of the element is visible
      if (windowBottom > elTop + elHeight * 0.3) {
        $el.addClass('js-fade-in');
        if ($el.hasClass('solution-image')) {
          $el.addClass('breathe-in');
        }
        if ($el.hasClass('feature-image')) {
          $el.addClass('shake');
        }
      }
    });
  }

  // Run on scroll and on page load
  $(window).on('scroll resize', fadeInOnScroll);
  fadeInOnScroll();
});


$('#closePopup, #overlay').on('click', function() {
        $('#popup').fadeOut();
        $('#overlay').fadeOut();
    });
$('#contactButton').on('click', function() {
    $('#contactPopup').fadeIn();
    $('#overlay').fadeIn();
});

$('#closeContactPopup, #overlay').on('click', function() {
    $('#contactPopup').fadeOut();
    $('#overlay').fadeOut();
});
$('#contactForm').on('submit', function(e) {
        e.preventDefault();
        var $form = $(this);
        $.ajax({
            url: $form.attr('action'),
            method: 'POST',
            data: $form.serialize(),
            dataType: 'json',
            success: function() {
                $form.html('<p style="color: #E5CDCD; font-size: 1.2em; text-align:center;">Thank you! Your message has been sent.</p>');
            },
            error: function() {
                $form.append('<p style="color: red; text-align:center;">There was an error. Please try again.</p>');
            }
        });
    });