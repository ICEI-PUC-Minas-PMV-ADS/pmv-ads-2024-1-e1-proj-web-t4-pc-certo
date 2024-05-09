//Escolha Principal de predefinição de perfil

const btncardElList = document.querySelectorAll('.btncard');

btncardElList.forEach(btnCardEl => {
    btnCardEl.addEventListener('click', () => {
        window.scroll({top: innerHeight, behavior: "smooth"});
        document.querySelector('.active')?.classList.remove('active');
        btnCardEl.classList.add('active');
    });
})

btncardElList[0].addEventListener('click', () => {
    document.getElementById('jogosOrc').style.display = "grid"
    document.getElementById('profissionalOrc').style.display = "none"
    document.getElementById('casualOrc').style.display = "none"
})

btncardElList[1].addEventListener('click', () => {
    document.getElementById('jogosOrc').style.display = "none"
    document.getElementById('profissionalOrc').style.display = "grid"
    document.getElementById('casualOrc').style.display = "none"
})

btncardElList[2].addEventListener('click', () => {
    document.getElementById('jogosOrc').style.display = "none"
    document.getElementById('profissionalOrc').style.display = "none"
    document.getElementById('casualOrc').style.display = "grid"
})

// Escolha das predefinições de orçamento
const btnOrcElList = document.querySelectorAll('.btnOrcamento');

btnOrcElList.forEach(btnOrcEl => {
    btnOrcEl.addEventListener('click', () => {
        document.querySelector('.ativo')?.classList.remove('ativo');
        btnOrcEl.classList.add('ativo');
    });
})