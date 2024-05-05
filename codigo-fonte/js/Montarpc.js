// const cardEL = document.querySelector('.card');
//
// cardEL.addEventListener('click', () => {
//    cardEL.classList.add('active');
// });

const cardElList = document.querySelectorAll('.card');

cardElList.forEach(cardEL => {
    cardEL.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        cardEL.classList.add('active');
    });
})

