//Escolha Principal de predefinição de perfil
btnCardElList = document.querySelectorAll('.btnCard')
btnOrcElList = document.querySelectorAll('.btnOrc')
btnReiniciarEl = document.querySelector('#reiniciar')
btnAvancarEl = document.querySelector('#avancar')
btnValorLimiteElList = document.querySelectorAll('.btnValorLimite')


btnCardElList.forEach(btnCardEl => {
    btnCardEl.addEventListener('click', () => {
        document.getElementById('passo2').style.display = "flex"
    })
})

//Escolha Principal de predefinição de perfil

btnCardElList[0].addEventListener('click', () => {
    jogos.style.backgroundColor = "#41AE4F"
    profissional.style.display = "none"
    casual.style.display = "none"
    jogosOrc.style.display = "grid"
    funcoes.style.display = "flex"
    reiniciar.style.display = "flex"
})
btnCardElList[1].addEventListener('click', () => {
    jogos.style.display = "none"
    profissional.style.backgroundColor = "#41AE4F"
    casual.style.display = "none"
    profissionalOrc.style.display = "grid"
    funcoes.style.display = "flex"
    reiniciar.style.display = "flex"
})
btnCardElList[2].addEventListener('click', () => {
    jogos.style.display = "none"
    profissional.style.display = "none"
    casual.style.backgroundColor = "#41AE4F"
    casualOrc.style.display = "grid"
    funcoes.style.display = "flex"
    reiniciar.style.display = "flex"
})

// botão de escolha de orçamento base

btnOrcElList.forEach(btnOrcEl => {
    btnOrcEl.addEventListener('click', () => {
        passo3.style.display = "grid"
    })
})

//  Orçamento de Jogos
btnOrcElList[0].addEventListener('click', () => {
    btnOrc0.style.backgroundColor = "#41AE4F"
    btnOrc1.style.display = "none"
    btnOrc2.style.display = "none"
    valorLimiteBaixo.style.display = "grid"
})

btnOrcElList[1].addEventListener('click', () => {
    btnOrc1.style.backgroundColor = "#41AE4F"
    btnOrc0.style.display = "none"
    btnOrc2.style.display = "none"
    valorLimiteMedio.style.display = "grid"
})

btnOrcElList[2].addEventListener('click', () => {
    btnOrc2.style.backgroundColor = "#41AE4F"
    btnOrc1.style.display = "none"
    btnOrc0.style.display = "none"
    valorLimiteAlto.style.display = "grid"
})

// Orçamento de profissional
btnOrcElList[3].addEventListener('click', () => {
    btnOrc3.style.backgroundColor = "#41AE4F"
    btnOrc4.style.display = "none"
    btnOrc5.style.display = "none"
    valorLimiteBaixo.style.display = "grid"
})

btnOrcElList[4].addEventListener('click', () => {
    btnOrc4.style.backgroundColor = "#41AE4F"
    btnOrc3.style.display = "none"
    btnOrc5.style.display = "none"
    valorLimiteMedio.style.display = "grid"
})

btnOrcElList[5].addEventListener('click', () => {
    btnOrc5.style.backgroundColor = "#41AE4F"
    btnOrc4.style.display = "none"
    btnOrc3.style.display = "none"
    valorLimiteAlto.style.display = "grid"
})

// Orçamento de Casual
btnOrcElList[6].addEventListener('click', () => {
    btnOrc6.style.backgroundColor = "#41AE4F"
    btnOrc7.style.display = "none"
    btnOrc8.style.display = "none"
    valorLimiteBaixo.style.display = "grid"
})

btnOrcElList[7].addEventListener('click', () => {
    btnOrc7.style.backgroundColor = "#41AE4F"
    btnOrc6.style.display = "none"
    btnOrc8.style.display = "none"
    valorLimiteMedio.style.display = "grid"
})

btnOrcElList[8].addEventListener('click', () => {
    btnOrc8.style.backgroundColor = "#41AE4F"
    btnOrc7.style.display = "none"
    btnOrc6.style.display = "none"
    valorLimiteAlto.style.display = "grid"
})

// O valor que deseja investir
btnValorLimiteElList.forEach(btnValorLimiteEl => {
    btnValorLimiteEl.addEventListener('click', () => {
        avancar.style.display = "flex"
    })
})


// Baixo Orçamento
btnValorLimiteElList[0].addEventListener ('click', () => {
    btnValorLimite0.style.backgroundColor = "#41AE4F"
    btnValorLimite1.style.backgroundColor = "#2E2E2E"
})

btnValorLimiteElList[1].addEventListener ('click', () => {
    btnValorLimite1.style.backgroundColor = "#41AE4F"
    btnValorLimite0.style.backgroundColor = "#2E2E2E"
})

// Médio Orçamento
btnValorLimiteElList[2].addEventListener ('click', () => {
    btnValorLimite2.style.backgroundColor = "#41AE4F"
    btnValorLimite3.style.backgroundColor = "#2E2E2E"
    btnValorLimite4.style.backgroundColor = "#2E2E2E"
    btnValorLimite5.style.backgroundColor = "#2E2E2E"
})

btnValorLimiteElList[3].addEventListener ('click', () => {
    btnValorLimite3.style.backgroundColor = "#41AE4F"
    btnValorLimite4.style.backgroundColor = "#2E2E2E"
    btnValorLimite5.style.backgroundColor = "#2E2E2E"
    btnValorLimite2.style.backgroundColor = "#2E2E2E"
})

btnValorLimiteElList[4].addEventListener ('click', () => {
    btnValorLimite4.style.backgroundColor = "#41AE4F"
    btnValorLimite5.style.backgroundColor = "#2E2E2E"
    btnValorLimite2.style.backgroundColor = "#2E2E2E"
    btnValorLimite3.style.backgroundColor = "#2E2E2E"
})

btnValorLimiteElList[5].addEventListener ('click', () => {
    btnValorLimite5.style.backgroundColor = "#41AE4F"
    btnValorLimite2.style.backgroundColor = "#2E2E2E"
    btnValorLimite3.style.backgroundColor = "#2E2E2E"
    btnValorLimite4.style.backgroundColor = "#2E2E2E"
})

// Maior Orçamento
btnValorLimiteElList[6].addEventListener ('click', () => {
    btnValorLimite6.style.backgroundColor = "#41AE4F"
    btnValorLimite7.style.backgroundColor = "#2E2E2E"
    btnValorLimite8.style.backgroundColor = "#2E2E2E"
    btnValorLimite9.style.backgroundColor = "#2E2E2E"
})

btnValorLimiteElList[7].addEventListener ('click', () => {
    btnValorLimite7.style.backgroundColor = "#41AE4F"
    btnValorLimite8.style.backgroundColor = "#2E2E2E"
    btnValorLimite9.style.backgroundColor = "#2E2E2E"
    btnValorLimite6.style.backgroundColor = "#2E2E2E"
})

btnValorLimiteElList[8].addEventListener ('click', () => {
    btnValorLimite8.style.backgroundColor = "#41AE4F"
    btnValorLimite9.style.backgroundColor = "#2E2E2E"
    btnValorLimite6.style.backgroundColor = "#2E2E2E"
    btnValorLimite7.style.backgroundColor = "#2E2E2E"
})

btnValorLimiteElList[9].addEventListener ('click', () => {
    btnValorLimite9.style.backgroundColor = "#41AE4F"
    btnValorLimite6.style.backgroundColor = "#2E2E2E"
    btnValorLimite7.style.backgroundColor = "#2E2E2E"
    btnValorLimite8.style.backgroundColor = "#2E2E2E"
})

// botão de reiniciar 
btnReiniciarEl.addEventListener('click', () => {
    window.location.reload()
})

// botão de avancar
btnAvancarEl.addEventListener('click', () => {
    location.href = "EscolhaDeComponentes.html"
})