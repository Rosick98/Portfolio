$(document).ready(function() {
    function animateArrows() {
        $('.scrollDivider .arrow').animate({ top: '20px' }, 800)
                                 .animate({ top: '0px' }, 800, animateArrows);
    }

    // Initialize the animation by setting the position relative
    $('.scrollDivider .arrow').css('position', 'relative');
    
    // Start the arrow animation
    animateArrows();
});

$(document).ready(function() {
    const projectItems = document.querySelectorAll('.project-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once the item is shown
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the item is visible

    projectItems.forEach(item => {
        observer.observe(item);
    });
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

