const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close');
const about = document.querySelector('.about');

about.addEventListener("click",()=>{
    popup.classList.add('active');
})

closePopup.addEventListener("click",()=>{
    popup.classList.remove('active');
})