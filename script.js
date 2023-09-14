// ГАЛЕРЕЯ

document.querySelectorAll(".gallery-image img").forEach(img => {
    img.onclick = () => {
        document.querySelector(".gallery-popup").style.display = "block";
        document.querySelector(".gallery-popup img").src = img.getAttribute("src");
    }
});

document.querySelector(".gallery-popup span").onclick = () => {
    document.querySelector(".gallery-popup").style.display = "none";
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
