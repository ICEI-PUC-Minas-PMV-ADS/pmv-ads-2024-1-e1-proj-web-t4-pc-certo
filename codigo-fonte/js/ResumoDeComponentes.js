const componentes = JSON.parse(localStorage.getItem('componentesSelecionados'));


document.querySelectorAll('#alterarbotoes').forEach(function (element) {
    element.addEventListener('click', function () {
        window.location.href = '/codigo-fonte/EscolhaDeComponentes.html'

    })
});

document.getElementById("comprarbotaoproc").addEventListener("click",function(){
    window.location.href = (componentes.Processador.info)
})

document.getElementById("comprarbotaoplac").addEventListener("click",function(){
    window.location.href = componentes.PlacaMae.info
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
var CPUmodelo = document.querySelector('.cpuModelo');
var CPUpreco = document.querySelector('.cpuPreco');

const CPUimg = document.createElement('img');
CPUimg.src = componentes.Processador.imagem;
CPUmodelo.appendChild(CPUimg);

const CPUmodeloTexto = document.createElement('p');
CPUmodeloTexto.textContent = componentes.Processador.modelo;
CPUmodelo.appendChild(CPUmodeloTexto);

const CPUmodeloPreco = document.createElement('p');
CPUmodeloPreco.textContent = "R$" + componentes.Processador.preco;
CPUpreco.appendChild(CPUmodeloPreco);


var placaMae = document.querySelector('.placaMaeModelo');
var placaMaePreco = document.querySelector('.placaMaePreco');

const placaMaeIMG = document.createElement('img');
placaMaeIMG.src = componentes.PlacaMae.imagem;
placaMae.appendChild(placaMaeIMG);

const placaMaeModelo = document.createElement('p');
placaMaeModelo.textContent = componentes.PlacaMae.modelo;
placaMae.appendChild(placaMaeModelo);

const placaMaeModeloPreco = document.createElement('p');
placaMaePreco.textContent = "R$" + componentes.PlacaMae.preco;
placaMaePreco.appendChild(placaMaeModeloPreco);


var ram = document.querySelector('.ramModelo');
var ramPreco = document.querySelector('.ramPreco');

const ramIMG = document.createElement('img');
ramIMG.src = componentes.RAM.imagem;
ram.appendChild(ramIMG);

const ramModelo = document.createElement('p');
ramModelo.textContent = componentes.RAM.modelo;
ram.appendChild(ramModelo);

const ramModeloPreco = document.createElement('p');
ramPreco.textContent = "R$" + componentes.RAM.preco;
ramPreco.appendChild(ramModeloPreco);


var gpu = document.querySelector('.gpuModelo');
var gpuPreco = document.querySelector('.gpuPreco');

const gpuIMG = document.createElement('img');
gpuIMG.src = componentes.GPU.imagem;
gpu.appendChild(gpuIMG);

const gpuModelo = document.createElement('p');
gpuModelo.textContent = componentes.GPU.modelo;
gpu.appendChild(gpuModelo);

const gpuModeloPreco = document.createElement('p');
gpuPreco.textContent = "R$" + componentes.GPU.preco;
gpuPreco.appendChild(gpuModeloPreco);


var armazenamento = document.querySelector('.armazenamentoModelo');
var armazenamentoPreco = document.querySelector('.armazenamentoPreco');

const armazenamentoIMG = document.createElement('img');
armazenamentoIMG.src = componentes.Armazenamento.imagem;
armazenamento.appendChild(armazenamentoIMG);

const armazenamentoModelo = document.createElement('p');
armazenamentoModelo.textContent = componentes.Armazenamento.modelo;
armazenamento.appendChild(armazenamentoModelo);

const armazenamentoModeloPreco = document.createElement('p');
armazenamentoPreco.textContent = "R$" + componentes.Armazenamento.preco;
armazenamentoPreco.appendChild(armazenamentoModeloPreco);


var fonte = document.querySelector('.fonteModelo');
var fontePreco = document.querySelector('.fontePreco');

const fonteIMG = document.createElement('img');
fonteIMG.src = componentes.PSU.imagem;
fonte.appendChild(fonteIMG);

const fonteModelo = document.createElement('p');
fonteModelo.textContent = componentes.PSU.modelo;
fonte.appendChild(fonteModelo);

const fonteModeloPreco = document.createElement('p');
fontePreco.textContent = "R$" + componentes.PSU.preco;
fontePreco.appendChild(fonteModeloPreco);


var gabinete = document.querySelector('.gabineteModelo');
var gabinetePreco = document.querySelector('.gabinetePreco');

const gabineteIMG = document.createElement('img');
gabineteIMG.src = componentes.Gabinete.imagem;
gabinete.appendChild(gabineteIMG);

const gabineteModelo = document.createElement('p');
gabineteModelo.textContent = componentes.Gabinete.modelo;
gabinete.appendChild(gabineteModelo);

const gabineteModeloPreco = document.createElement('p');
gabinetePreco.textContent = "R$" + componentes.Gabinete.preco;
gabinetePreco.appendChild(gabineteModeloPreco);


var cooler = document.querySelector('.coolerModelo');
var coolerPreco = document.querySelector('.coolerPreco');

const coolerIMG = document.createElement('img');
coolerIMG.src = componentes.Refrigeração.imagem;
cooler.appendChild(coolerIMG);

const coolerModelo = document.createElement('p');
coolerModelo.textContent = componentes.Refrigeração.modelo;
cooler.appendChild(coolerModelo);

const coolerModeloPreco = document.createElement('p');
coolerPreco.textContent = "R$" + componentes.Refrigeração.preco;
coolerPreco.appendChild(coolerModeloPreco);
