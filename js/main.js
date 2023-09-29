document.addEventListener("DOMContentLoaded", function() {
const baseURL = "../images/";
const next = document.querySelector(".next");
const prev = document.querySelector(".previous");
const slide = frame.querySelectorAll(".slide");
const images = ["food1.jpg", "food2.jpg", "food3.jpg", "food4.jpg"];
let index = 0;

slides.forEach((slide) => {
    slide.classList.add("hide");
});

slides[0].classList.remove("hide")

next.addEventListener("click", function(e) {
    e.preventDefault();
    slides[index].classList.add('hide');
    index = (index + 1) % images.length;
    slides[index].classList.remove('hide');
});

prev.addEventListener('click', function(e) {
    e.preventDefault();
    slide[index].classList.add('hide');
    index = (index - 1 + images.length) % images.length;
    slide[index].classList.remove('hide');
});