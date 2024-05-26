//Escolha Principal de predefinição de perfil
btnCardElList = document.querySelectorAll('.btnCard')
btnOrcElList = document.querySelectorAll('.btnOrc')
btnReiniciarEl = document.querySelector('.btnReiniciar')


btnCardElList.forEach(btnCardEl => {
    btnCardEl.addEventListener('click', () => {
        document.getElementById('passo2').style.display = "flex"
    })
})

btnCardElList[0].addEventListener('click', () => {
    jogos.style.backgroundColor = "#41AE4F"
    profissional.style.display = "none"
    casual.style.display = "none"
    jogosOrc.style.display = "grid"
    reiniciar.style.display = "flex"
})
btnCardElList[1].addEventListener('click', () => {
    jogos.style.display = "none"
    profissional.style.backgroundColor = "#41AE4F"
    casual.style.display = "none"
    profissionalOrc.style.display = "grid"
    reiniciar.style.display = "flex"
})
btnCardElList[2].addEventListener('click', () => {
    jogos.style.display = "none"
    profissional.style.display = "none"
    casual.style.backgroundColor = "#41AE4F"
    casualOrc.style.display = "grid"
    reiniciar.style.display = "flex"
})

btnReiniciarEl.addEventListener('click', () => {
    window.location.reload()
})

btnOrcElList[0].addEventListener('click', () => {
    btnOrc0.style.backgroundColor = "#41AE4F"
    btnOrc1.style.display = "none"
    btnOrc2.style.display = "none"
})

btnOrcElList[1].addEventListener('click', () => {
    btnOrc1.style.backgroundColor = "#41AE4F"
    btnOrc0.style.display = "none"
    btnOrc2.style.display = "none"
})

btnOrcElList[2].addEventListener('click', () => {
    btnOrc2.style.backgroundColor = "#41AE4F"
    btnOrc1.style.display = "none"
    btnOrc0.style.display = "none"
})

btnOrcElList[3].addEventListener('click', () => {
    btnOrc3.style.backgroundColor = "#41AE4F"
    btnOrc4.style.display = "none"
    btnOrc5.style.display = "none"
})

btnOrcElList[4].addEventListener('click', () => {
    btnOrc4.style.backgroundColor = "#41AE4F"
    btnOrc3.style.display = "none"
    btnOrc5.style.display = "none"
})

btnOrcElList[5].addEventListener('click', () => {
    btnOrc5.style.backgroundColor = "#41AE4F"
    btnOrc4.style.display = "none"
    btnOrc3.style.display = "none"
})

btnOrcElList[6].addEventListener('click', () => {
    btnOrc6.style.backgroundColor = "#41AE4F"
    btnOrc7.style.display = "none"
    btnOrc8.style.display = "none"
})

btnOrcElList[7].addEventListener('click', () => {
    btnOrc7.style.backgroundColor = "#41AE4F"
    btnOrc6.style.display = "none"
    btnOrc8.style.display = "none"
})

btnOrcElList[8].addEventListener('click', () => {
    btnOrc8.style.backgroundColor = "#41AE4F"
    btnOrc7.style.display = "none"
    btnOrc6.style.display = "none"
})