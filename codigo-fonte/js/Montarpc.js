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
    document.getElementById('Orcamento').style.display = "flex"
    document.getElementById('jogosOrc').style.display = "grid";
    document.getElementById('profissionalOrc').style.display = "none";
    document.getElementById('casualOrc').style.display = "none";
    document.getElementById('PriceMin').style.display = "none";
    document.getElementById('PriceMed').style.display = "none";
    document.getElementById('PriceMax').style.display = "none";
})

btncardElList[1].addEventListener('click', () => {
    document.getElementById('Orcamento').style.display = "flex"
    document.getElementById('jogosOrc').style.display = "none";
    document.getElementById('profissionalOrc').style.display = "grid";
    document.getElementById('casualOrc').style.display = "none";
    document.getElementById('PriceMin').style.display = "none";
    document.getElementById('PriceMed').style.display = "none";
    document.getElementById('PriceMax').style.display = "none";
})

btncardElList[2].addEventListener('click', () => {
    document.getElementById('Orcamento').style.display = "flex"
    document.getElementById('jogosOrc').style.display = "none";
    document.getElementById('profissionalOrc').style.display = "none";
    document.getElementById('casualOrc').style.display = "grid";
    document.getElementById('PriceMin').style.display = "none";
    document.getElementById('PriceMed').style.display = "none";
    document.getElementById('PriceMax').style.display = "none";
})

// Escolha das predefinições de orçamento
const btnOrcamentoElList = document.querySelectorAll('.btnOrcamento');

btnOrcamentoElList.forEach(btnOrcamentoEl => {
    btnOrcamentoEl.addEventListener('click', () => {
        document.querySelector('.ativo')?.classList.remove('ativo');
        btnOrcamentoEl.classList.add('ativo');
    });
})
// caso a escolha seja jogos
btnOrcamentoElList[0].addEventListener('click', () => {
    document.getElementById('PriceMin').style.display = "flex";
    document.getElementById('PriceMed').style.display = "none";
    document.getElementById('PriceMax').style.display = "none";
})

btnOrcamentoElList[1].addEventListener('click', () => {
    document.getElementById('PriceMin').style.display = "none";
    document.getElementById('PriceMed').style.display = "flex";
    document.getElementById('PriceMax').style.display = "none";
})

btnOrcamentoElList[2].addEventListener('click', () => {
    document.getElementById('PriceMin').style.display = "none";
    document.getElementById('PriceMed').style.display = "none";
    document.getElementById('PriceMax').style.display = "flex";
})
// caso a escolha seja profissional
btnOrcamentoElList[3].addEventListener('click', () => {
    document.getElementById('PriceMin').style.display = "flex";
    document.getElementById('PriceMed').style.display = "none";
    document.getElementById('PriceMax').style.display = "none";
})

btnOrcamentoElList[4].addEventListener('click', () => {
    document.getElementById('PriceMin').style.display = "none";
    document.getElementById('PriceMed').style.display = "flex";
    document.getElementById('PriceMax').style.display = "none";
})

btnOrcamentoElList[5].addEventListener('click', () => {
    document.getElementById('PriceMin').style.display = "none";
    document.getElementById('PriceMed').style.display = "none";
    document.getElementById('PriceMax').style.display = "flex";
})
// caso a escolha seja casual
btnOrcamentoElList[6].addEventListener('click', () => {
    document.getElementById('PriceMin').style.display = "flex";
    document.getElementById('PriceMed').style.display = "none";
    document.getElementById('PriceMax').style.display = "none";
})

btnOrcamentoElList[7].addEventListener('click', () => {
    document.getElementById('PriceMin').style.display = "none";
    document.getElementById('PriceMed').style.display = "flex";
    document.getElementById('PriceMax').style.display = "none";
})

btnOrcamentoElList[8].addEventListener('click', () => {
    document.getElementById('PriceMin').style.display = "none";
    document.getElementById('PriceMed').style.display = "none";
    document.getElementById('PriceMax').style.display = "flex";
})

// Botão de preço
const btnPriceElList = document.querySelectorAll('.btnPrice');

btnPriceElList.forEach(btnPriceEl => {
    btnPriceEl.addEventListener('click', () => {
        document.querySelector('.ativado')?.classList.remove('ativado');
        btnPriceEl.classList.add('ativado');
    });
})