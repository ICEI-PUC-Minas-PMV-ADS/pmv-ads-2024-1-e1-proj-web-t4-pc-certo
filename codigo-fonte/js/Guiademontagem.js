const passos = [...document.querySelectorAll('.passos')];
const preCard = [...document.querySelectorAll('.preCard')];
const nxtCard = [...document.querySelectorAll('.nxtCard')];

passos.forEach((item, i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width;

    nxtCard[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    preCard[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})