// Variáveis
let componentes = {};
let componenteAtual = "Processador";
let componenteSelecionado = JSON.parse(localStorage.getItem('componentesSelecionados')) || {};
let precoParcial = parseFloat(localStorage.getItem('totalParcial')) || 0;
let precoTemporario = 0;
const ordemComponentes = ['Processador', 'PlacaMae', 'RAM', 'GPU', 'Armazenamento', 'PSU', 'Gabinete', 'Refrigeração'];


// Funcao do btn Avancar
document.getElementById('avancar').addEventListener('click', () => {
    if (!componenteSelecionado[componenteAtual]) {
        alert("Por favor, selecione uma opção antes de avançar.");
        return;
    }

    precoParcial += precoTemporario;
    localStorage.setItem('totalParcial', precoParcial);
    salvarComponentesSelecionados();
    atualizarTotalParcial();

    document.getElementById('buscainput').value = ''

    precoTemporario = 0

    const indexAtual = ordemComponentes.indexOf(componenteAtual);
    if (indexAtual < ordemComponentes.length - 1) {
        componenteAtual = ordemComponentes[indexAtual + 1];
        carregarComponentes(componenteAtual);
        atualizarResumo(componenteAtual);
    } else {
        window.location.href = 'ResumoDeComponentes.html';
    }
});

// Funcao do btn Voltar
document.getElementById('voltar').addEventListener('click', () => {
    const indexAtual = ordemComponentes.indexOf(componenteAtual);
    if (indexAtual == 0) {
        location.href = 'Montarpc.html'
    }

    else if (indexAtual > 0) {
        componenteAtual = ordemComponentes[indexAtual - 1];
        document.getElementById('buscainput').value = ''
        removerComponenteSelecionado(componenteAtual);
        carregarComponentes(componenteAtual);
        atualizarResumo(componenteAtual);
        atualizarTotalParcial();

    }

});

// Ao estar em processador remove localstorage para recomecar montagem
if (componenteAtual === 'Processador') {
    localStorage.removeItem('componentesSelecionados');
    localStorage.removeItem('totalParcial');
    componenteSelecionado = {};
    precoParcial = 0;
    precoTemporario = 0;
    atualizarTotalParcial();
}


carregarDataComponentes();
atualizarTotalParcial();
atualizarResumo(componenteAtual);


// Fetch JSON
async function carregarDataComponentes() {
    const resposta = await fetch('../codigo-fonte/js/JSON/Componentes.json');
    componentes = await resposta.json();
    carregarComponentes(componenteAtual);
}

// Transformar JSON em cards HTML ++ funcoes
function carregarComponentes(tipo) {

    // log para teste -- descartavel
    console.log(`Carregando componentes para tipo: ${tipo}`);

    const container = document.querySelector('#containerComp');
    container.innerHTML = '';

    // Cada elemento de um "tipo":

    function criaDiv(componente) {
        const opcao = document.createElement('div');
        opcao.classList.add('opcaoComponente');

        // Formatar float p/ brl
        const formatarValor = (preco) => {
            return preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        };

        opcao.innerHTML = `
    <div class="nomePreco">
        <h2 class="nome">${componente.modelo}</h2>
        <h2 class="preco">R$${formatarValor(componente.preco)}</h2>
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

        // Ao clicar no "+" do card do componente:
        opcao.querySelector('.addComponente').addEventListener('click', () => {
            // remove a classe "opcaoSelecionada" de todos elem
            document.querySelectorAll('.opcaoComponente').forEach(opc => {
                opc.classList.remove('opcaoSelecionada');
                // Restaura o texto do botão para "+" e remove a imagem
                opc.querySelector('.addComponente').textContent = '+';
                opc.querySelector('.addComponente').style.backgroundColor = "#308041"
                
                if (opc.querySelector('.checkmark-icon')) {
                    opc.querySelector('.checkmark-icon').remove();
                }

                
            });

            // add "opcaoSelecionada" ao elem clicado
            opcao.classList.add('opcaoSelecionada');
            componenteSelecionado[tipo] = componente;
            precoTemporario = parseFloat(componente.preco);

            const TotalParcial = document.getElementById('parcialTotal');
            TotalParcial.innerHTML = `R$${(precoParcial + precoTemporario).toFixed(2).replace('.', ',')}`;

            // Substitui o botão "+" pelo ícone de imagem após o clique
            const addComponenteButton = opcao.querySelector('.addComponente');
            const imgIcon = document.createElement('img');
            imgIcon.src = '../codigo-fonte/img/checkGIF.gif';
            imgIcon.alt = 'CheckIcon';
            imgIcon.id = 'check'
            addComponenteButton.textContent = ''; // Limpa o conteúdo atual do botão
            addComponenteButton.appendChild(imgIcon); // Adiciona a imagem como filho do botão
            addComponenteButton.style.backgroundColor = "#0a4212"
            setTimeout(() => {
                imgIcon.src = '../codigo-fonte/img/checkGIF.gif';
                imgIcon.src = '../codigo-fonte/img/checkPNG.png';
            }, 1500);

            // Salva o componente no local storage
            salvarComponentesSelecionados();

        });
        // Atribui os cards como filhos do container
        container.appendChild(opcao);

        // Funcao para definir cor dependendo do desempenho
        function lvlDesempenho() {
            const alerta = opcao.querySelector(".alertaDesempenho");
            if (componente.desempenho === "Alto Desempenho") {
                alerta.style.backgroundColor = "#0a4212";
                alerta.style.color = "white";
            } else if (componente.desempenho === "Custo-Benefício") {
                alerta.style.backgroundColor = "#FFD600";
            } else if (componente.desempenho === "Baixa Performance") {
                alerta.style.backgroundColor = "#840000";
                alerta.style.color = "white";
            }
        }
        lvlDesempenho();
        // Puxar orcamento do LocalStorage
        function orcTotal() {
            let orcTot = localStorage.getItem('orcamentoTotal');
            document.getElementById('orcTotal').textContent = orcTot;
        }
        orcTotal();
    }

    function filtrarComponentesPorCompatibilidade(componentes) {
        const compEscolhidos = JSON.parse(localStorage.getItem("componentesSelecionados"));
        switch (tipo) {
            case "Processador":
                return componentes[tipo];
                break;
            case "PlacaMae":
                let socket = compEscolhidos.Processador.socket;
                return componentes.PlacaMae.filter(mb => mb.socket === socket);
                break;
            case "RAM":
                let tipoRam = compEscolhidos.PlacaMae.ram;
                return componentes.RAM.filter(ddr => ddr.tipo === tipoRam);
                break;
            case "GPU":
                let vdIntegrado = compEscolhidos.Processador.videoIntegrado;
                if (vdIntegrado === "não") {
                    return componentes.GPU.filter(precisa => precisa.sugPSU !== "integrado");
                } else {
                    return componentes.GPU.filter(precisa => precisa.sugPSU);
                }
                break;
            case "Armazenamento":
                return componentes[tipo];
                break;
            case "PSU":
                let gpuPower = compEscolhidos.GPU.sugPSU;
                if (gpuPower === "integrado") {
                    return componentes.PSU.filter(pot => pot.potencia);
                } else {
                    return componentes.PSU.filter(pot => pot.potencia >= gpuPower);
                }
                break;
            case "Gabinete":
                return componentes[tipo];
                break;
            case "Refrigeração":
                return componentes[tipo];
                break;
            default:
                return [];
        }
    }

    function filtrarComponentesPorBusca(componentes, busca) {
        const buscaUpper = busca.toUpperCase();
        return componentes.filter(componente => componente.modelo.toUpperCase().includes(buscaUpper));
    }

    function mostrarComponentes() {
        container.innerHTML = '';
        const inputBusca = document.getElementById('buscainput').value;
        let componentesFiltrados = filtrarComponentesPorCompatibilidade(componentes);

        if (inputBusca) {
            componentesFiltrados = filtrarComponentesPorBusca(componentesFiltrados, inputBusca);
        }

        // Filtro por ordem crescente e decrescente
        const ordem = document.getElementById('ordenar').value;

        if (ordem === 'Sugestão: PC Certo') {
        }
        else if (ordem === 'crescente') {
            componentesFiltrados.sort((a, b) => a.preco - b.preco);
        } else if (ordem === 'decrescente') {
            componentesFiltrados.sort((a, b) => b.preco - a.preco);
        }

        componentesFiltrados.forEach(componente => criaDiv(componente));
    }

    mostrarComponentes();

    document.getElementById('buscainput').addEventListener('input', mostrarComponentes);
    document.querySelector('.limpaBusca').addEventListener('click', () => {
        document.getElementById('buscainput').value = '';
        mostrarComponentes();
    });
    document.getElementById('ordenar').addEventListener('change', mostrarComponentes);
}

// Atualizar resumo ao mudar de componente
function atualizarResumo(componenteAtual) {
    // Titulo de resumo e desc do resumo de componentes
    const resumos = {
        'Processador': ['Processador', 'É como o cérebro do computador, que pensa e realiza todas as tarefas. Escolher um processador rápido e eficiente é importante para garantir que seu computador possa realizar muitas tarefas de forma rápida e suave.', 'img/pagGuia-CPU.png'],
        'PlacaMae': ['Placa-Mãe', 'É como o centro de controle do computador, onde todas as outras partes se conectam para trabalharem juntas. Escolher uma boa placa-mãe é importante porque ela determina quais componentes você pode usar e a capacidade de atualizar seu PC no futuro.', 'img/pagGuia-MB.jpg'],
        'RAM': ['Memória RAM', 'É como a mesa de trabalho do computador, onde ele coloca as coisas que está usando no momento. Ter bastante RAM é importante para que seu computador possa fazer muitas coisas ao mesmo tempo sem ficar lento.', 'img/pagGuia-MemoriaRAM.png'],
        'GPU': ['Placa de Vídeo (GPU)', 'É como um artista que desenha as imagens e gráficos que você vê na tela. Escolher uma boa placa de vídeo é importante se você planeja jogar jogos, editar vídeos ou fazer qualquer coisa que envolva gráficos detalhados.', 'img/pagGuia-GPU.png'],
        'Armazenamento': ['Armazenamento', 'É como uma biblioteca onde o computador guarda todos os seus programas, documentos, fotos e outros arquivos. Escolher entre um HDD (mais barato e com mais espaço) e um SSD (mais rápido) é importante dependendo se você quer mais velocidade ou mais armazenamento.', 'img/pagGuia-Armazenamento.jpg'],
        'PSU': ['Fonte de Alimentação (PSU)', 'É como a bateria do computador, que pega energia da tomada e distribui para todas as partes do computador. Escolher uma fonte de alimentação confiável e de boa qualidade é importante para garantir que todos os componentes recebam energia suficiente e para evitar problemas elétricos.', 'img/pagGuia-PSU.png'],
        'Gabinete': ['Gabinete', 'É a caixa que segura e protege todas as peças do computador, mantendo tudo organizado e seguro. Escolher um bom gabinete é importante para garantir que todas as peças cabem bem, que haja boa ventilação e que seja fácil de montar e manter.', 'img/pagGuia-Gabinete.jpg'],
        'Refrigeração': ['Cooler de CPU', 'É como um ventilador que mantém o cérebro do computador fresco para ele não esquentar demais. Escolher um bom cooler é importante para manter seu processador funcionando bem e evitar danos por superaquecimento.', 'img/pagGuia-Cooler.png']
    };
    // Mudando o resumo de acordo com o ComponenteAtual
    const [titulo, descricao, imagem] = resumos[componenteAtual] || [];
    if (titulo && descricao && imagem) {
        document.getElementById('resumoTit').innerText = titulo;
        document.getElementById('resumoDesc').innerText = descricao;
        document.getElementById('resumoImg').src = imagem
    }
}

// Calculo de atualização do Orçamento - Feedback ao exceder e outro ao passar 10% do valor total
function atualizarOrcamentoCard() {
    let orcamentoTotalString = localStorage.getItem('orcamentoTotal');
    // Remove "R$" e "," para converter em número
    let orcamentoTotal = parseFloat(orcamentoTotalString.replace('R$', '').replace('.', '').replace(',', '.')) || 0;
    const margem = orcamentoTotal * 0.10;
    const cardOrcamento = document.querySelector('#orcTotal');

    if (precoParcial <= orcamentoTotal) {
        cardOrcamento.parentElement.style.backgroundColor = '#308041';
    } else if (precoParcial <= orcamentoTotal + margem) {
        cardOrcamento.parentElement.style.backgroundColor = '#FFD600';
        cardOrcamento.parentElement.style.color = 'black';
    } else {
        cardOrcamento.parentElement.style.backgroundColor = '#840000';
        cardOrcamento.parentElement.style.color = 'white';
        alert('O valor parcial excede o orçamento! Volte para selecionar suas peças novamente ou continue assim mesmo.');
    }

}

// Funcao para atualizar Total Parcial 
function atualizarTotalParcial() {
    const TotalParcial = document.getElementById('parcialTotal');
    TotalParcial.innerHTML = `R$${precoParcial.toFixed(2).replace('.', ',')}`;
    atualizarOrcamentoCard()
}

// Salvar componentes selecionados no localStorage
function salvarComponentesSelecionados() {
    localStorage.setItem('componentesSelecionados', JSON.stringify(componenteSelecionado));
}

// Remover componente e preco dele ao voltar a peca anterior
function removerComponenteSelecionado(tipo) {
    if (componenteSelecionado[tipo]) {
        precoParcial -= componenteSelecionado[tipo].preco;
        delete componenteSelecionado[tipo];
        localStorage.setItem('totalParcial', precoParcial);
        salvarComponentesSelecionados();
        atualizarTotalParcial();
    }
}