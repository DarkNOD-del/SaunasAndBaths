// ГАЛЕРЕЯ
document.querySelectorAll(".gallery-image img").forEach(img => {
    img.onclick = () => {
        document.querySelector(".phone-button").style.display = "none";
        document.querySelector(".gallery-popup").style.opacity = 1;
        document.querySelector(".gallery-popup").style.pointerEvents = "all";
        document.querySelector(".gallery-popup img").src = img.getAttribute("src");
    }
});

document.querySelector(".gallery-popup span").onclick = () => {
    document.querySelector(".phone-button").style.display = "block";
    document.querySelector(".gallery-popup").style.opacity = 0;
    document.querySelector(".gallery-popup").style.pointerEvents = "none";
}



// Навигация по сайту
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors){
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute("href");
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}



// Бургер меню
function burgerClick(x) {
    x.classList.toggle("change");

    if (document.getElementById("burger-overlay").style.height == "100%")
    {
        document.getElementById("burger-overlay").style.height = "0%";
        document.querySelector("body").style.overflow = "auto"
    }
    else {
        document.getElementById("burger-overlay").style.height = "100%";
        document.querySelector("body").style.overflow = "hidden"
    }
}

const burger_btns = document.querySelectorAll('.burger-menu-btn');

for (let burger_btn of burger_btns){
    burger_btn.addEventListener("click", function(event) {
        document.querySelector(".burger-menu").classList.toggle("change");
        document.getElementById("burger-overlay").style.height = "0%";
        document.querySelector("body").style.overflow = "auto"
    });
}



// Анимация при скроле
wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
})
wow.init();