// Variáveis
let componentes = {};
let componenteAtual = "Processador";
let componenteSelecionado = JSON.parse(localStorage.getItem('componentesSelecionados')) || {};
let precoParcial = parseFloat(localStorage.getItem('totalParcial')) || 0;
let precoTemporario = 0;

const ordemComponentes = ['Processador','Placa-mae','RAM','GPU','Armazenamento','PSU','Gabinete','Refrigeração'];

// Atualizar resumo ao mudar de componente
function atualizarResumo(componenteAtual) {
    const resumos = {
        'Processador': ['Processador', 'O cérebro do computador, responsável por executar tarefas e processar dados.'],
        'Placa-mae': ['Placa-Mãe', 'É como o centro de controle do computador, onde todas as outras partes se conectam para trabalharem juntas. Escolher uma boa placa-mãe é importante porque ela determina quais componentes você pode usar e a capacidade de atualizar seu PC no futuro.'],
        'RAM': ['Memória RAM', 'É como a mesa de trabalho do computador, onde ele coloca as coisas que está usando no momento. Ter bastante RAM é importante para que seu computador possa fazer muitas coisas ao mesmo tempo sem ficar lento.'],
        'GPU': ['Placa de Vídeo (GPU)', 'É como um artista que desenha as imagens e gráficos que você vê na tela. Escolher uma boa placa de vídeo é importante se você planeja jogar jogos, editar vídeos ou fazer qualquer coisa que envolva gráficos detalhados.'],
        'Armazenamento': ['Armazenamento', 'É como uma biblioteca onde o computador guarda todos os seus programas, documentos, fotos e outros arquivos. Escolher entre um HDD (mais barato e com mais espaço) e um SSD (mais rápido) é importante dependendo se você quer mais velocidade ou mais armazenamento.'],
        'PSU': ['Fonte de Alimentação (PSU)', 'É como a bateria do computador, que pega energia da tomada e distribui para todas as partes do computador. Escolher uma fonte de alimentação confiável e de boa qualidade é importante para garantir que todos os componentes recebam energia suficiente e para evitar problemas elétricos.'],
        'Gabinete': ['Gabinete', 'É a caixa que segura e protege todas as peças do computador, mantendo tudo organizado e seguro. Escolher um bom gabinete é importante para garantir que todas as peças cabem bem, que haja boa ventilação e que seja fácil de montar e manter.'],
        'Refrigeração': ['Cooler de CPU', 'É como um ventilador que mantém o cérebro do computador fresco para ele não esquentar demais. Escolher um bom cooler é importante para manter seu processador funcionando bem e evitar danos por superaquecimento.']
    };

    const [titulo, descricao] = resumos[componenteAtual] || [];
    if (titulo && descricao) {
        document.getElementById('resumoTit').innerText = titulo;
        document.getElementById('resumoDesc').innerText = descricao;
    }
}

function atualizarTotalParcial() {
    const TotalParcial = document.getElementById('parcialTotal');
    TotalParcial.innerHTML = `R$${precoParcial.toFixed(2).replace('.', ',')}`;
}

// Função para salvar componentes selecionados no localStorage
function salvarComponentesSelecionados() {
    localStorage.setItem('componentesSelecionados', JSON.stringify(componenteSelecionado));
}

// Remover componente selecionado ao voltar
function removerComponenteSelecionado(tipo) {
    if (componenteSelecionado[tipo]) {
        precoParcial -= componenteSelecionado[tipo].preco;
        delete componenteSelecionado[tipo];
        localStorage.setItem('totalParcial', precoParcial);
        salvarComponentesSelecionados();
        atualizarTotalParcial();
    }
}

// Evento do botão "Avançar"
document.getElementById('avancar').addEventListener('click', () => {
    if (!componenteSelecionado[componenteAtual]) {
        alert("Por favor, selecione uma opção antes de avançar.");
        return;
    }

    precoParcial += precoTemporario;
    localStorage.setItem('totalParcial', precoParcial);
    salvarComponentesSelecionados();
    atualizarTotalParcial();

    precoTemporario = 0; // Reset precoTemporario after advancing

    const indexAtual = ordemComponentes.indexOf(componenteAtual);
    if (indexAtual < ordemComponentes.length - 1) {
        componenteAtual = ordemComponentes[indexAtual + 1];
        carregarComponentes(componenteAtual);
        atualizarResumo(componenteAtual);
    } else {
        window.location.href = 'ResumoDeComponentes.html';
    }
});

// Evento do botão "Voltar"
document.getElementById('voltar').addEventListener('click', () => {
    const indexAtual = ordemComponentes.indexOf(componenteAtual);
    if (indexAtual > 0) {
        componenteAtual = ordemComponentes[indexAtual - 1];
        removerComponenteSelecionado(componenteAtual);
        carregarComponentes(componenteAtual);
        atualizarResumo(componenteAtual);
        atualizarTotalParcial();
        if (componenteAtual === 'Processador') {
            localStorage.removeItem('componentesSelecionados');
            localStorage.removeItem('totalParcial');
            componenteSelecionado = {};
            precoParcial = 0;
            precoTemporario = 0;
            atualizarTotalParcial();
        }
    }
});

async function carregarDataComponentes() {
    const resposta = await fetch('/codigo-fonte/js/JSON/Componentes.json');
    componentes = await resposta.json();
    carregarComponentes(componenteAtual);
}

function carregarComponentes(tipo) {
    const container = document.querySelector('#containerComp');
    container.innerHTML = '';

    componentes[tipo].forEach((componente) => {
        const opcao = document.createElement('div');
        opcao.classList.add('opcaoComponente');

        const formatarValor = (preco) => {
            return preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        };

        const precoFormatado = formatarValor(componente.preco);

        opcao.innerHTML = `
            <div class="nomePreco">
                <h2 class="nome">${componente.modelo}</h2>
                <h2 class="preco">R$${precoFormatado}</h2>
            </div>
            <div class="imgComponente"><img class="imagemComponente" src="${componente.imagem}">
            </div>
            <div class="alertas">
                <div class="alertaDesempenho" style="background-color: rgb(255, 214, 0);">${componente.desempenho}</div>
                <button class="maisInfo">
                    <a href="${componente.info}" target="_blank" class="maisInfoLink">Mais Info</a>
                </button>
                <button class="addComponente">+</button>
            </div>
        `;

        // Adicionar o evento de clique para selecionar o componente
        opcao.querySelector('.addComponente').addEventListener('click', () => {
            document.querySelectorAll('.opcaoComponente').forEach(opc => { opc.classList.remove('opcaoSelecionada'); });
            opcao.classList.add('opcaoSelecionada');

            componenteSelecionado[tipo] = componente;
            precoTemporario = parseFloat(componente.preco);
            const TotalParcial = document.getElementById('parcialTotal');
            TotalParcial.innerHTML = `R$${(precoParcial + precoTemporario).toFixed(2).replace('.', ',')}`;

            salvarComponentesSelecionados();
        });

        container.appendChild(opcao);

        function lvlDesempenho() {
            const alerta = opcao.querySelector(".alertaDesempenho");
            if (componente.desempenho === "Alto Desempenho") {
                alerta.style.backgroundColor = "#308041";
                alerta.style.color = "white";
            } else if (componente.desempenho === "Medio Desempenho") {
                alerta.style.backgroundColor = "#FFD600";
            } else if (componente.desempenho === "Baixo Desempenho") {
                alerta.style.backgroundColor = "#840000";
                alerta.style.color = "white";
            }
        }
        lvlDesempenho();

        function orcTotal() {
            let orcTot = localStorage.getItem('orcamentoTotal');
            document.getElementById('orcTotal').textContent = orcTot;
        }
        orcTotal();
    });
}

carregarDataComponentes();
atualizarTotalParcial();
atualizarResumo(componenteAtual); // Chama a função para atualizar o resumo no carregamento inicial
