var componentesBoolean = false;
const componentes = JSON.parse(localStorage.getItem("componentesSelecionados"));
const aviso = document.querySelector(".avisoResumo");

do {
  if (componentes.Processador == null) {
    aviso.style.display = "flex";
  } else {
    aviso.style.display = "none";
    componentesBoolean = true;
  }
} while ((componentesBoolean = false));

console.log(componentesBoolean);

var orcamentoTotal = localStorage.getItem("orcamentoTotal");
var orcTotal = document.getElementById("orcTotal");
var totalParcial = parseFloat(localStorage.getItem("totalParcial"));
var parcialTotal = document.getElementById("parcialTotal");

orcTotal.textContent = orcamentoTotal;

const formatarValor = (preco) => {
  return preco.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const precoFormatado = formatarValor(totalParcial);
const cpuFormatar = formatarValor(componentes.Processador.preco);
const placaMaeFormatar = formatarValor(componentes.PlacaMae.preco);
const ramFormatar = formatarValor(componentes.RAM.preco);
const gpuFormatar = formatarValor(componentes.GPU.preco);
const armazenamentoFormatar = formatarValor(componentes.Armazenamento.preco);
const fonteFormatar = formatarValor(componentes.PSU.preco);
const gabineteFormatar = formatarValor(componentes.Gabinete.preco);
const coolerFormatar = formatarValor(componentes.Refrigeração.preco);

parcialTotal.textContent = "R$" + precoFormatado;

document.querySelectorAll("#alterarbotoes").forEach(function (element) {
  element.addEventListener("click", function () {
    window.location.href = "/codigo-fonte/EscolhaDeComponentes.html";
  });
});

document
  .getElementById("comprarbotaoproc")
  .addEventListener("click", function () {
    window.location.href = componentes.Processador.info;
  });

document
  .getElementById("comprarbotaoplac")
  .addEventListener("click", function () {
    window.location.href = componentes.PlacaMae.info;
  });
document
  .getElementById("comprarbotaomem")
  .addEventListener("click", function () {
    window.location.href = componentes.RAM.info;
  });
document
  .getElementById("comprarbotaovideo")
  .addEventListener("click", function () {
    window.location.href = componentes.GPU.info;
  });
document
  .getElementById("comprarbotaoarmaz")
  .addEventListener("click", function () {
    window.location.href = componentes.Armazenamento.info;
  });
document
  .getElementById("comprarbotaofont")
  .addEventListener("click", function () {
    window.location.href = componentes.PSU.info;
  });
document
  .getElementById("comprarbotaogabi")
  .addEventListener("click", function () {
    window.location.href = componentes.Gabinete.info;
  });
document
  .getElementById("comprarbotaocooler")
  .addEventListener("click", function () {
    window.location.href = componentes.Refrigeração.info;
  });

var CPUmodelo = document.querySelector(".cpuModelo");
var CPUpreco = document.querySelector(".cpuPreco");

const CPUimg = document.createElement("img");
CPUimg.src = componentes.Processador.imagem;
CPUmodelo.appendChild(CPUimg);

const CPUmodeloTexto = document.createElement("p");
CPUmodeloTexto.textContent = componentes.Processador.modelo;
CPUmodelo.appendChild(CPUmodeloTexto);

const CPUmodeloPreco = document.createElement("p");
CPUmodeloPreco.textContent = "R$" + cpuFormatar;
CPUpreco.appendChild(CPUmodeloPreco);

var placaMae = document.querySelector(".placaMaeModelo");
var placaMaePreco = document.querySelector(".placaMaePreco");

const placaMaeIMG = document.createElement("img");
placaMaeIMG.src = componentes.PlacaMae.imagem;
placaMae.appendChild(placaMaeIMG);

const placaMaeModelo = document.createElement("p");
placaMaeModelo.textContent = componentes.PlacaMae.modelo;
placaMae.appendChild(placaMaeModelo);

const placaMaeModeloPreco = document.createElement("p");
placaMaePreco.textContent = "R$" + placaMaeFormatar;
placaMaePreco.appendChild(placaMaeModeloPreco);

var ram = document.querySelector(".ramModelo");
var ramPreco = document.querySelector(".ramPreco");

const ramIMG = document.createElement("img");
ramIMG.src = componentes.RAM.imagem;
ram.appendChild(ramIMG);

const ramModelo = document.createElement("p");
ramModelo.textContent = componentes.RAM.modelo;
ram.appendChild(ramModelo);

const ramModeloPreco = document.createElement("p");
ramPreco.textContent = "R$" + ramFormatar;
ramPreco.appendChild(ramModeloPreco);

var gpu = document.querySelector(".gpuModelo");
var gpuPreco = document.querySelector(".gpuPreco");

const gpuIMG = document.createElement("img");
gpuIMG.src = componentes.GPU.imagem;
gpu.appendChild(gpuIMG);

const gpuModelo = document.createElement("p");
gpuModelo.textContent = componentes.GPU.modelo;
gpu.appendChild(gpuModelo);

const gpuModeloPreco = document.createElement("p");
gpuPreco.textContent = "R$" + gpuFormatar;
gpuPreco.appendChild(gpuModeloPreco);

var armazenamento = document.querySelector(".armazenamentoModelo");
var armazenamentoPreco = document.querySelector(".armazenamentoPreco");

const armazenamentoIMG = document.createElement("img");
armazenamentoIMG.src = componentes.Armazenamento.imagem;
armazenamento.appendChild(armazenamentoIMG);

const armazenamentoModelo = document.createElement("p");
armazenamentoModelo.textContent = componentes.Armazenamento.modelo;
armazenamento.appendChild(armazenamentoModelo);

const armazenamentoModeloPreco = document.createElement("p");
armazenamentoPreco.textContent = "R$" + armazenamentoFormatar;
armazenamentoPreco.appendChild(armazenamentoModeloPreco);

var fonte = document.querySelector(".fonteModelo");
var fontePreco = document.querySelector(".fontePreco");

const fonteIMG = document.createElement("img");
fonteIMG.src = componentes.PSU.imagem;
fonte.appendChild(fonteIMG);

const fonteModelo = document.createElement("p");
fonteModelo.textContent = componentes.PSU.modelo;
fonte.appendChild(fonteModelo);

const fonteModeloPreco = document.createElement("p");
fontePreco.textContent = "R$" + fonteFormatar;
fontePreco.appendChild(fonteModeloPreco);

var gabinete = document.querySelector(".gabineteModelo");
var gabinetePreco = document.querySelector(".gabinetePreco");

const gabineteIMG = document.createElement("img");
gabineteIMG.src = componentes.Gabinete.imagem;
gabinete.appendChild(gabineteIMG);

const gabineteModelo = document.createElement("p");
gabineteModelo.textContent = componentes.Gabinete.modelo;
gabinete.appendChild(gabineteModelo);

const gabineteModeloPreco = document.createElement("p");
gabinetePreco.textContent = "R$" + gabineteFormatar;
gabinetePreco.appendChild(gabineteModeloPreco);

var cooler = document.querySelector(".coolerModelo");
var coolerPreco = document.querySelector(".coolerPreco");

const coolerIMG = document.createElement("img");
coolerIMG.src = componentes.Refrigeração.imagem;
cooler.appendChild(coolerIMG);

const coolerModelo = document.createElement("p");
coolerModelo.textContent = componentes.Refrigeração.modelo;
cooler.appendChild(coolerModelo);

const coolerModeloPreco = document.createElement("p");
coolerPreco.textContent = "R$" + coolerFormatar;
coolerPreco.appendChild(coolerModeloPreco);
