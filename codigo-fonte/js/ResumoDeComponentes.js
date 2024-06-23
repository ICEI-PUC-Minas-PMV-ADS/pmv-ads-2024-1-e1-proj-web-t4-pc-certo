const componentes = JSON.parse(localStorage.getItem("componentesSelecionados"));
const botoes = document.querySelectorAll(".botoes");
const erro = document.querySelector(".erroResumo");
const avisoResumo = document.querySelector(".avisoResumo");
const cpuAviso = document.querySelector(".cpuAviso");
const placaMaeAviso = document.querySelector(".placaMaeAviso");
const ramAviso = document.querySelector(".ramAviso");
const gpuAviso = document.querySelector(".gpuAviso");
const armazenamentoAviso = document.querySelector(".armazenamentoAviso");
const fonteAviso = document.querySelector(".fonteAviso");
const gabineteAviso = document.querySelector(".gabineteAviso");
const coolerAviso = document.querySelector(".coolerAviso");
const botaoAviso = document.querySelectorAll(".botaoAviso");
const botaoResumoAvisoDIV = document.querySelector(".botaoResumoAvisoDIV");
const cpuModelo = document.querySelector(".cpuModelo");
const placaMaeModelo = document.querySelector(".placaMaeModelo");
const ramModelo = document.querySelector(".ramModelo");
const gpuModelo = document.querySelector(".gpuModelo");
const armazenamentoModelo = document.querySelector(".armazenamentoModelo");
const fonteModelo = document.querySelector(".fonteModelo");
const gabineteModelo = document.querySelector(".gabineteModelo");
const coolerModelo = document.querySelector(".coolerModelo");
const cpuElementos = document.querySelector(".cpuElementos");
const placaMaeElementos = document.querySelector(".placaMaeElementos");
const ramElementos = document.querySelector(".ramElementos");
const gpuElementos = document.querySelector(".gpuElementos");
const armazenamentoElementos = document.querySelector(
  ".armazenamentoElementos"
);
const fonteElementos = document.querySelector(".fonteElementos");
const gabineteElementos = document.querySelector(".gabineteElementos");
const coolerElementos = document.querySelector(".coolerElementos");

if (componentes !== null) {
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
  parcialTotal.textContent = "R$" + precoFormatado;

  document.querySelectorAll("#alterarbotoes").forEach(function (element) {
    element.addEventListener("click", function () {
      window.location.href = "../codigo-fonte/EscolhaDeComponentes.html";
    });
  });

  botaoAviso.forEach(function (elemento) {
    elemento.addEventListener("click", function () {
      window.location.href = "../codigo-fonte/EscolhaDeComponentes.html";
    });
  });

  document.querySelector(".cpu").style.display = "flex";
  document.querySelector(".placaMae").style.display = "flex";
  document.querySelector(".ram").style.display = "flex";
  document.querySelector(".gpu").style.display = "flex";
  document.querySelector(".armazenamento").style.display = "flex";
  document.querySelector(".fonte").style.display = "flex";
  document.querySelector(".gabinete").style.display = "flex";
  document.querySelector(".cooler").style.display = "flex";
  document.querySelector(".orcamentoTotal").style.display = "flex";
  avisoResumo.style.display = "none";

  if (componentes.Processador !== undefined) {
    const cpuFormatar = formatarValor(componentes.Processador.preco);
    document
      .getElementById("comprarbotaoproc")
      .addEventListener("click", function () {
        window.open(componentes.Processador.buy);
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
  } else {
    cpuAviso.style.display = "flex";
    cpuModelo.style.display = "none";
    botoes[0].style.display = "none";
    cpuElementos.style.justifyContent = "center";
  }

  if (componentes.PlacaMae !== undefined) {
    const placaMaeFormatar = formatarValor(componentes.PlacaMae.preco);
    document
      .getElementById("comprarbotaoplac")
      .addEventListener("click", function () {
        window.open(componentes.PlacaMae.buy);
      });
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
  } else {
    placaMaeAviso.style.display = "flex";
    placaMaeModelo.style.display = "none";
    botoes[1].style.display = "none";
    placaMaeElementos.style.justifyContent = "center";
  }

  if (componentes.RAM !== undefined) {
    const ramFormatar = formatarValor(componentes.RAM.preco);
    document
      .getElementById("comprarbotaomem")
      .addEventListener("click", function () {
        window.open(componentes.RAM.buy);
      });
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
  } else {
    ramAviso.style.display = "flex";
    ramModelo.style.display = "none";
    botoes[2].style.display = "none";
    ramElementos.style.justifyContent = "center";
  }

  if (componentes.GPU !== undefined) {
    const gpuFormatar = formatarValor(componentes.GPU.preco);
    document
      .getElementById("comprarbotaovideo")
      .addEventListener("click", function () {
        window.open(componentes.GPU.buy);
      });
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
  } else {
    gpuAviso.style.display = "flex";
    gpuModelo.style.display = "none";
    botoes[3].style.display = "none";
    gpuElementos.style.justifyContent = "center";
  }

  if (componentes.Armazenamento !== undefined) {
    const armazenamentoFormatar = formatarValor(
      componentes.Armazenamento.preco
    );
    document
      .getElementById("comprarbotaoarmaz")
      .addEventListener("click", function () {
        window.open(componentes.Armazenamento.buy);
      });
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
  } else {
    armazenamentoAviso.style.display = "flex";
    armazenamentoModelo.style.display = "none";
    botoes[4].style.display = "none";
    armazenamentoElementos.style.justifyContent = "center";
  }

  if (componentes.PSU !== undefined) {
    const fonteFormatar = formatarValor(componentes.PSU.preco);
    document
      .getElementById("comprarbotaofont")
      .addEventListener("click", function () {
        window.open(componentes.PSU.buy);

      });
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
  } else {
    fonteAviso.style.display = "flex";
    fonteModelo.style.display = "none";
    botoes[5].style.display = "none";
    fonteElementos.style.justifyContent = "center";
  }

  if (componentes.Gabinete !== undefined) {
    const gabineteFormatar = formatarValor(componentes.Gabinete.preco);
    document
      .getElementById("comprarbotaogabi")
      .addEventListener("click", function () {
        window.open(componentes.Gabinete.buy);
      });
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
  } else {
    gabineteAviso.style.display = "flex";
    gabineteModelo.style.display = "none";
    botoes[6].style.display = "none";
    gabineteElementos.style.justifyContent = "center";
  }

  if (componentes.Refrigeração !== undefined) {
    const coolerFormatar = formatarValor(componentes.Refrigeração.preco);
    document
      .getElementById("comprarbotaocooler")
      .addEventListener("click", function () {
        window.open(componentes.Refrigeração.buy);
      });
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
  } else {
    coolerAviso.style.display = "flex";
    coolerModelo.style.display = "none";
    botoes[7].style.display = "none";
    coolerElementos.style.justifyContent = "center";
  }
} else {
  erro.style.display = "flex";
  botaoResumoAvisoDIV.style.display = "flex";
  document.querySelector(".cpu").style.display = "none";
  document.querySelector(".placaMae").style.display = "none";
  document.querySelector(".ram").style.display = "none";
  document.querySelector(".gpu").style.display = "none";
  document.querySelector(".armazenamento").style.display = "none";
  document.querySelector(".fonte").style.display = "none";
  document.querySelector(".gabinete").style.display = "none";
  document.querySelector(".cooler").style.display = "none";
  document.querySelector(".orcamentoTotal").style.display = "none";
  document.querySelector(".centralizarOrcamento").style.display = "none";
}
