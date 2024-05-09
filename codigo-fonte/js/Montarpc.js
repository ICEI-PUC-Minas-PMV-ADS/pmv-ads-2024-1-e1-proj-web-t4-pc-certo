const cardElList = document.querySelectorAll('.card');

cardElList.forEach(cardEL => {
    cardEL.addEventListener('click', () => {
        window.scroll({top: innerHeight, behavior: "smooth"});
        document.querySelector('.active')?.classList.remove('active');
        cardEL.classList.add('active');
        document.getElementById('orcamento').style.display = "flex";
    });
})

