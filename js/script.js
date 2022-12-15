let parallax_objects = document.querySelectorAll(".parallaxes");
window.addEventListener("scroll", function () {
    var value = window.scrollY;
    parallax_objects.forEach(element => {
        element.style.bottom = value * 0.4 + "px";
        console.log(element.style.bottom)
    });
});


$('#message_us').on('submit', function (e) {
    e.preventDefault();
    document.getElementById('submit-button').value = 'sending...';
    var form = $(this);
    $.ajax({
        url: "mailer.php",
        method: 'POST',
        data: form.serialize(),
        success: function (result) {
            //console.log(result);
            if (result == 'success'){
                $('.mss').append('<div class="alert alert-success alert-dismissible fade show" role="alert">Your message has been sent<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');  
            } else {
                $('.mss').append('<div class="alert alert-warning alert-dismissible fade show" role="alert">We could not send your message, please try again later<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
            }
            document.getElementById('submit-button').value = 'Email us';
            form.trigger("reset");
        }
    });

    // Prevents default submission of the form after clicking on the submit button. 
    return false;
});