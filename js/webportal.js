$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("#main_header").addClass("active1");
        $(".nav-link").addClass('active2');
        $(".login-register").addClass('active2');
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#main_header").removeClass("active1");
       $(".nav-link").removeClass('active2');
       $(".login-register").removeClass('active2');
    }
});

$(window).on("scroll", function() {
    if($(window).scrollTop() > 450) {
        $(".aa").addClass("fadeInRight");
       
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".aa").addClass("fadeInRight");
    }
});
// optional
$('#blogCarousel').carousel({
    interval: 5000
});