let next = document.querySelector('.nxt');
let previous = document.querySelector('.prev');
let slider = document.querySelector('.cardSlider');

next.addEventListener('click', function () {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})

previous.addEventListener('click', function () {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1])


})

let nextpasso = document.querySelector('.nxtPassos');
let prevpasso = document.querySelector('.prevPassos');
let sliderpassos = document.querySelector('.sliderPassos');

nextpasso.addEventListener('click', function () {
    let passos = document.querySelectorAll('.passos');
    sliderpassos.appendChild(passos[0]);
})

prevpasso.addEventListener('click', function () {
    let passos = document.querySelectorAll('.passos');
    sliderpassos.prepend(passos[passos.length - 1])


})