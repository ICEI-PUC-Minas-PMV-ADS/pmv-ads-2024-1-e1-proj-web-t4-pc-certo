let componentes = {};
let componenteAtual = "Processador";
let componenteSelecionado = {};
let precoTotal = 0

async function carregarDataComponentes() {
    const resposta = await fetch('/codigo-fonte/js/JSON/Componentes.json');
    componentes = await resposta.json();
    carregarComponentes(componenteAtual);
}

function carregarComponentes(tipo) {
    const container = document.querySelector('#containerComp')
    container.innerHTML = ''

    componentes[tipo].forEach((componente) => {

        // CRIACAO DE HTML COM JSON
        const opcao = document.createElement('div')

        opcao.classList.add('opcaoComponente')
        const formatarValor = (preco) => {
            return componente.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        };

        componente.preco = formatarValor(componente.preco);

        opcao.innerHTML = `
            <div class="nomePreco">
                <h2 class="nome">${componente.modelo}</h2>
                <h2 class="preco">R$${componente.preco}</h2>
            </div>
            <div class="imgComponente"><img class="imagemComponente" src="${componente.imagem}">
            </div>
            <div class="alertas">
                <div class="alertaDesempenho" style="background-color: rgb(255, 214, 0);">${componente.desempenho}
                </div>
                <button class="maisInfo">
                    <a href="${componente.info}" target="_blank" class="maisInfoLink">Mais Info</a>
                </button>
                <button class="addComponente">+</button>
            </div>
        `;


        // DINAMICA NA DIV OPCAO AO SELECIONAR O +
        opcao.querySelector('.addComponente').addEventListener('click', () => {
            document.querySelectorAll('.opcaoComponente').forEach(opc => { opc.classList.remove('opcaoSelecionada'); });
            opcao.classList.add('opcaoSelecionada');

            componenteSelecionado[tipo] = componente;

            // Atualizar o preço total
            attValorTotal(componente.preco);
        });
        container.appendChild(opcao);

        function lvlDesempenho() {
            const alerta = opcao.querySelector(".alertaDesempenho")

            if (componente.desempenho == "Alto Desempenho") {
                alerta.style.backgroundColor = "#308041"
                alerta.style.color = "white"
            }
            else if (componente.desempenho == "Medio Desempenho") {
                alerta.style.backgroundColor = "#FFD600"
            }
            else if (componente.desempenho == "Baixo Desempenho") {
                alerta.style.backgroundColor = "#840000"
                alerta.style.color = "white"
            }

        }
        lvlDesempenho()

        function orcTotal() {
            let orcTot = localStorage.getItem('orcamentoTotal')
            document.getElementById('orcTotal').textContent = orcTot
        }
        orcTotal()


    })
}

// Atualizar o preço total
function attValorTotal(preco) {
    const numericPrice = parseFloat(preco.replace('R$', '').replace('.', '').replace(',', '.'));
    precoTotal += numericPrice;

    // Salvar o total no localStorage
    localStorage.setItem('Total Parcial', precoTotal);

    // Atualizar o campo "Total Parcial" na interface
    document.getElementById('parcialTotal').innerText = `R$ ${precoTotal.toFixed(2)}`;
}

// Recuperar o valor total do localStorage ao carregar a página
function carregarValorTotal() {
    const ValorTotalSalvo = localStorage.getItem('precoTotal');
    if (ValorTotalSalvo) {
        precoTotal = parseFloat(ValorTotalSalvo);
        document.getElementById('parcialTotal').innerText = `R$ ${precoTotal.toFixed(2)}`;
    }
}

document.getElementById('avancar').addEventListener('click', () => {

    if (!componenteSelecionado[componenteAtual]) {
        alert("Por favor, selecione uma opção antes de avançar.");
        return;
    }
    if (componenteAtual === 'Processador') {
        componenteAtual = 'Placa-mae';
        document.getElementById('resumoTit').innerText = 'Placa-Mãe';
        document.getElementById('resumoDesc').innerText = 'É como o centro de controle do computador, onde todas as outras partes se conectam para trabalharem juntas. Escolher uma boa placa-mãe é importante porque ela determina quais componentes você pode usar e a capacidade de atualizar seu PC no futuro.';
        carregarComponentes(componenteAtual);
    }
    else if (componenteAtual === 'Placa-mae') {
        componenteAtual = 'RAM';
        document.getElementById('resumoTit').innerText = 'Memória RAM';
        document.getElementById('resumoDesc').innerText = 'É como a mesa de trabalho do computador, onde ele coloca as coisas que está usando no momento. Ter bastante RAM é importante para que seu computador possa fazer muitas coisas ao mesmo tempo sem ficar lento.';
        carregarComponentes(componenteAtual);
    }
    else if (componenteAtual === 'RAM') {
        componenteAtual = 'GPU';
        document.getElementById('resumoTit').innerText = 'Placa de Vídeo (GPU)';
        document.getElementById('resumoDesc').innerText = 'É como um artista que desenha as imagens e gráficos que você vê na tela. Escolher uma boa placa de vídeo é importante se você planeja jogar jogos, editar vídeos ou fazer qualquer coisa que envolva gráficos detalhados.';
        carregarComponentes(componenteAtual);
    }
    else if (componenteAtual === 'GPU') {
        componenteAtual = 'Armazenamento';
        document.getElementById('resumoTit').innerText = 'Unidade de Armazenamento (HDD ou SSD)';
        document.getElementById('resumoDesc').innerText = 'É como uma biblioteca onde o computador guarda todos os seus programas, documentos, fotos e outros arquivos. Escolher entre um HDD (mais barato e com mais espaço) e um SSD (mais rápido) é importante dependendo se você quer mais velocidade ou mais armazenamento.';
        carregarComponentes(componenteAtual);
    }
    else if (componenteAtual === 'Armazenamento') {
        componenteAtual = 'PSU';
        document.getElementById('resumoTit').innerText = 'Fonte de Alimentação (PSU)';
        document.getElementById('resumoDesc').innerText = 'É como a bateria do computador, que pega energia da tomada e distribui para todas as partes do computador. Escolher uma fonte de alimentação confiável e de boa qualidade é importante para garantir que todos os componentes recebam energia suficiente e para evitar problemas elétricos.';
        carregarComponentes(componenteAtual);
    }

    else if (componenteAtual === 'PSU') {
        componenteAtual = 'Gabinete';
        document.getElementById('resumoTit').innerText = 'Gabinete';
        document.getElementById('resumoDesc').innerText = 'É a caixa que segura e protege todas as peças do computador, mantendo tudo organizado e seguro. Escolher um bom gabinete é importante para garantir que todas as peças cabem bem, que haja boa ventilação e que seja fácil de montar e manter.';
        carregarComponentes(componenteAtual);
    }

    else if (componenteAtual === 'Gabinete') {
        componenteAtual = 'Refrigeração';
        document.getElementById('resumoTit').innerText = 'Cooler de CPU';
        document.getElementById('resumoDesc').innerText = 'É como um ventilador que mantém o cérebro do computador fresco para ele não esquentar demais. Escolher um bom cooler é importante para manter seu processador funcionando bem e evitar danos por superaquecimento.';
        carregarComponentes(componenteAtual);
    }
    else {
        // Aqui você pode salvar os dados ou continuar para outros componentes
        alert('Seleção final:', selectedComponent);
    }
})

carregarDataComponentes()
carregarValorTotal()
