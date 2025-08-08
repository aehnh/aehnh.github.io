function invertColor() {
    var element = document.body;

    element.classList.toggle("body-invert-color");

    var elements = document.getElementsByTagName("a");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("a-invert-color");
    }

    var elements = document.getElementsByTagName("b");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("b-invert-color");
    }

    var elements = document.getElementsByTagName("strong");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("strong-invert-color");
    }

    var elements = document.getElementsByClassName("icon");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("icon-invert-color");
    }

    var moon = document.getElementById('invert-color-moon');
    var moonDisplay = getComputedStyle(moon).display;
    moon.style.display = moonDisplay == "none" ? "inherit" : "none";

    var sun = document.getElementById('invert-color-sun');
    var sunDisplay = getComputedStyle(sun).display;
    sun.style.display = sunDisplay == "none" ? "inherit" : "none";
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    var moon = document.getElementById('invert-color-moon');
    moon.style.display = "inherit";
    
    var sun = document.getElementById('invert-color-sun');
    sun.style.display = "none";
}
