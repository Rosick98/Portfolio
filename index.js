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