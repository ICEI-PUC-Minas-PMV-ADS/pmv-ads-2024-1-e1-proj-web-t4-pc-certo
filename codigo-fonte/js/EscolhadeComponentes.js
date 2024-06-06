// RESETA O TOTALPARCIL AO RECOMEÇAR
localStorage.setItem('totalParcial', 0)

// VARIAVEIS
let componentes = {};
let componenteAtual = "Processador";
let componenteSelecionado = {};
let precoParcial = parseFloat(localStorage.getItem('totalParcial')) || 0;
let precoTemporario = 0;

// ATUALIZA O TOTAL PARCIAL DA TELA
function atualizarTotalParcial() {
    const TotalParcial = document.getElementById('parcialTotal');
    TotalParcial.innerHTML = `R$${precoParcial}`;
}

// SALVA COMPONENTES NO LOCAL STORAGE
function salvarComponentesSelecionados() {
    localStorage.setItem('componentesSelecionados', JSON.stringify(componenteSelecionado));
}

// CARREGAR JSON
async function carregarDataComponentes() {
    const resposta = await fetch('/codigo-fonte/js/JSON/Componentes.json');
    componentes = await resposta.json();
    carregarComponentes(componenteAtual);
}
// PEGAR O TIPO DE COMPONENTE ESPECIFICO NO JSON
function carregarComponentes(tipo) {
    const container = document.querySelector('#containerComp')
    container.innerHTML = ''

    // CRIACAO DE HTML COM JSON
    componentes[tipo].forEach((componente) => {
        const opcao = document.createElement('div')
        opcao.classList.add('opcaoComponente')

        // FORMATANDO VALOR PARA BRL
        const formatarValor = (preco) => {
            return componente.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        };

        const precoFormatado = formatarValor(componente.preco);

        // CRIACAO DAS OPCOES COM JSON
        opcao.innerHTML = `
            <div class="nomePreco">
                <h2 class="nome">${componente.modelo}</h2>
                <h2 class="preco">R$${precoFormatado}</h2>
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


        // DINAMICA NA DIV OPCAO AO SER SELECIONADA
        opcao.querySelector('.addComponente').addEventListener('click', () => {
            document.querySelectorAll('.opcaoComponente').forEach(opc => { opc.classList.remove('opcaoSelecionada'); });
            opcao.classList.add('opcaoSelecionada');

            componenteSelecionado[tipo] = componente;

            // ALTERANDO O VALOR TOTAL PARCIAL AO CLICAR NA OPCAO
            precoTemporario = parseFloat(componente.preco);
            const TotalParcial = document.getElementById('parcialTotal');
            TotalParcial.innerHTML = `R$${(precoParcial + precoTemporario)}`;

            salvarComponentesSelecionados();
        });
        container.appendChild(opcao);

        // CALC DESEMPENHO MUDANDO COR
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

        // ORC TOTAL ESCOLHIDO NA PAG MONTAR PC
        function orcTotal() {
            let orcTot = localStorage.getItem('orcamentoTotal')
            document.getElementById('orcTotal').textContent = orcTot
        }
        orcTotal()
    })
}
// MUDAR COMPONENTES AO CLICAR EM AVANCAR
document.getElementById('avancar').addEventListener('click', () => {
    if (!componenteSelecionado[componenteAtual]) {
        alert("Por favor, selecione uma opção antes de avançar.");
        return;
    }
    // ATT VALOR PARCIAL NO LOCAL STORAGE
    precoParcial += precoTemporario;
    localStorage.setItem('totalParcial', precoParcial);
    salvarComponentesSelecionados();
    atualizarTotalParcial();
    

    // TROCANDO COMPONENTES VISIVEIS
    switch (componenteAtual) {
        case 'Processador':
            componenteAtual = 'Placa-mae';
            break;
        case 'Placa-mae':
            componenteAtual = 'RAM';
            break;
        case 'RAM':
            componenteAtual = 'GPU';
            break;
        case 'GPU':
            componenteAtual = 'Armazenamento';
            break;
        case 'Armazenamento':
            componenteAtual = 'PSU';
            break;
        case 'PSU':
            componenteAtual = 'Gabinete';
            break;
        case 'Gabinete':
            componenteAtual = 'Refrigeração';
            break;
        case 'Refrigeração':
            window.location.href='ResumoDeComponentes.html';
            return
    }

    carregarComponentes(componenteAtual);

    // RESUMO COMPONENTES
    const resumos = {
        'Placa-mae': ['Placa-Mãe', 'É como o centro de controle do computador, onde todas as outras partes se conectam para trabalharem juntas. Escolher uma boa placa-mãe é importante porque ela determina quais componentes você pode usar e a capacidade de atualizar seu PC no futuro.'],
        'RAM': ['Memória RAM', 'É como a mesa de trabalho do computador, onde ele coloca as coisas que está usando no momento. Ter bastante RAM é importante para que seu computador possa fazer muitas coisas ao mesmo tempo sem ficar lento.'],
        'GPU': ['Placa de Vídeo (GPU)', 'É como um artista que desenha as imagens e gráficos que você vê na tela. Escolher uma boa placa de vídeo é importante se você planeja jogar jogos, editar vídeos ou fazer qualquer coisa que envolva gráficos detalhados.'],
        'Armazenamento': ['Armazenamento', 'É como uma biblioteca onde o computador guarda todos os seus programas, documentos, fotos e outros arquivos. Escolher entre um HDD (mais barato e com mais espaço) e um SSD (mais rápido) é importante dependendo se você quer mais velocidade ou mais armazenamento.'],
        'PSU': ['Fonte de Alimentação (PSU)', 'É como a bateria do computador, que pega energia da tomada e distribui para todas as partes do computador. Escolher uma fonte de alimentação confiável e de boa qualidade é importante para garantir que todos os componentes recebam energia suficiente e para evitar problemas elétricos.'],
        'Gabinete': ['Gabinete', 'É a caixa que segura e protege todas as peças do computador, mantendo tudo organizado e seguro. Escolher um bom gabinete é importante para garantir que todas as peças cabem bem, que haja boa ventilação e que seja fácil de montar e manter.'],
        'Refrigeração': ['Cooler de CPU', 'É como um ventilador que mantém o cérebro do computador fresco para ele não esquentar demais. Escolher um bom cooler é importante para manter seu processador funcionando bem e evitar danos por superaquecimento.']
    };
    
    // FORMATANDO O RESUMO PARA EXIBIR CORRETAMENTE
    const [titulo, descricao] = resumos[componenteAtual] || [];
    if (titulo && descricao) {
        document.getElementById('resumoTit').innerText = titulo;
        document.getElementById('resumoDesc').innerText = descricao;
    }


})

carregarDataComponentes()
atualizarTotalParcial()