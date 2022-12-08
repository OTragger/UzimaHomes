let parallax_objects = document.querySelectorAll(".parallaxes");
window.addEventListener("scroll", function() {
    var value = window.scrollY;
    parallax_objects.forEach(element => {
        element.style.bottom = value*0.4 + "px";
        console.log(element.style.bottom)
    });
});