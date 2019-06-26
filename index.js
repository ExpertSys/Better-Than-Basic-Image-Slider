let slideIndex = 1;
let i;
let myTimeout;
let playing = true;

let dots = document.getElementsByClassName("slide-inactive");
let currentSlide = (n) => showSlides(slideIndex = n);

let showSlides = () => {
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length){
        slideIndex = 1;
    }
    [...slides].forEach((slide) => {
        slide.style.display = "none"
    })
    for (i = 0; i < dots.length; i++) {
        reAssign();
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " slide-active";
}

let slideAutomatic = () => {
    let slides = document.getElementsByClassName("mySlides");
    [...slides].forEach((slide) => {
        slide.style.display = "none"
      })
    for (i = 0; i < dots.length; i++) {
        reAssign();
    }
    slideIndex += 1;
    if (slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " slide-active"; 
}

let slideInterval = setInterval(slideAutomatic, 3000);

function playSlideshow() {
    playing = true;
    slideInterval = setInterval(slideAutomatic,3000);
}
function pauseSlideShow(){
    playing = false;
    clearInterval(slideInterval);
    setTimeout(playSlideshow, 4000);
}

let lastClick = 0;

document.addEventListener('click', ({ target }) => { 
    if( target.classList.contains('header-slide-btn')){
        let d = new Date();
        let t = d.getTime();
    if(t - lastClick < 4000) {
    } 
    else{
        if(playing){
            pauseSlideShow();
        } else{
            playSlideshow();
        }
    } 
    lastClick = t;
    }
});

function reAssign(){
    dots[i].className = dots[i].className.replace(" slide-active", "");
}

showSlides(slideIndex);
