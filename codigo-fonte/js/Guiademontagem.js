let next = document.querySelector('.nxt');
let previous = document.querySelector('.prev');
let slider = document.querySelector('.cardSlider');

next.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})

previous.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1 ])


})