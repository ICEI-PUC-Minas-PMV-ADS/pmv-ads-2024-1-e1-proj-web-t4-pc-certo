const componentes = JSON.parse(localStorage.getItem('componentesSelecionados'))

componentes.Processador.preco


document.querySelectorAll('#alterarbotoes').forEach(function (element) {
    element.addEventListener('click', function () {
        window.location.href = '/codigo-fonte/EscolhaDeComponentes.html'

    })
});

document.getElementById("comprarbotaoproc").addEventListener("click",function(){
    window.location.href = (componentes.Processador.info)
})

document.getElementById("comprarbotaoplac").addEventListener("click",function(){
    window.location.href = componentes.placa-mae.info
})
document.getElementById("comprarbotaomem").addEventListener("click",function(){
    window.location.href = componentes.RAM.info
})
document.getElementById("comprarbotaovideo").addEventListener("click",function(){
    window.location.href = componentes.GPU.info
})
document.getElementById("comprarbotaoarmaz").addEventListener("click",function(){
    window.location.href = componentes.Armazenamento.info
})
document.getElementById("comprarbotaofont").addEventListener("click",function(){
    window.location.href = componentes.PSU.info
})
document.getElementById("comprarbotaogabi").addEventListener("click",function(){
    window.location.href = componentes.Gabinete.info
})
document.getElementById("comprarbotaocooler").addEventListener("click",function(){
    window.location.href = componentes.Refrigeração.info
})


console.log(componentes.Processador.info)