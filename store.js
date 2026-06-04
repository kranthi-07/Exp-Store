const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close');
const about = document.querySelector('.about');

about.addEventListener("click", () => {
    popup.classList.add('active');
})

closePopup.addEventListener("click", () => {
    popup.classList.remove('active');
})


const loader = document.querySelector(".loader-overlay");

// Hide loader after page loads
window.addEventListener("load", () => {

    setTimeout(() => {
        loader.classList.add("hide");
    }, 500);

});

// Show loader before changing page
document.querySelectorAll(".page-link").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const url = this.href;

        loader.classList.remove("hide");

        setTimeout(() => {
            window.location.href = url;
        }, 500);

    });

});

// Fix browser back button cache
window.addEventListener("pageshow", () => {

    loader.classList.add("hide");

});





