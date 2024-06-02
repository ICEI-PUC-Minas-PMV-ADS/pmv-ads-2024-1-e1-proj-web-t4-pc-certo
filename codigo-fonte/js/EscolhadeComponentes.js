carregar()


// FUNCAO QUE CHAMA OS PROCESSADORES JSON PARA O HTML
function carregar() {
    fetch('/codigo-fonte/js/JSON/Processadores.json')
        .then(Response => Response.json())
        .then(Processadores => {
            const container = document.querySelector('#containerComp')
            Processadores.map(Processador => {
                // DIV DO CARD
                const opcao = document.createElement('div')
                opcao.classList.add('opcaoComponente')

                // NOME E PRECO
                const nomePreco = document.createElement('div')
                nomePreco.classList.add('nomePreco')

                const nome = document.createElement('h2')
                nome.textContent = Processador.modelo
                nome.classList.add('nome')

                const preco = document.createElement('h2')
                preco.textContent = Processador.preco
                preco.classList.add('preco')

                // IMAGEM
                const imgdiv = document.createElement('div')
                imgdiv.classList.add('imgComponente')

                const img = document.createElement('img')
                img.classList.add('imagemComponente')
                img.src = Processador.imagem

                // ALERTAS INFO e ADD
                const alertas = document.createElement('div');
                alertas.classList.add('alertas')

                const alertDesempenho = document.createElement('div')
                alertDesempenho.classList.add('alertaDesempenho')
                alertDesempenho.textContent = Processador.desempenho

                const maisInfo = document.createElement('button')
                maisInfo.classList.add('maisInfo')

                const maisInfoLink = document.createElement('a')
                maisInfoLink.href = Processador.info
                maisInfoLink.textContent = 'Mais Info'
                maisInfoLink.target = '_blank'
                maisInfoLink.classList.add('maisInfoLink')

                const add = document.createElement('button')
                add.classList.add('addComponente')
                add.textContent = "+"

                // AJUSTANDO HIERARQUIA DOS ELEMENTOS CRIADOS ACIMA
                nomePreco.appendChild(nome)
                nomePreco.appendChild(preco)

                imgdiv.appendChild(img)

                alertas.appendChild(alertDesempenho)
                alertas.appendChild(maisInfo)
                maisInfo.appendChild(maisInfoLink)
                alertas.appendChild(add)

                opcao.appendChild(nomePreco)
                opcao.appendChild(imgdiv)
                opcao.appendChild(alertas)

                container.appendChild(opcao)


                // CHAMANDO FUNCOES
                lvlDesempenho()

                // FUNCAO DE AO CLICAR SELECIONAR EM VERDE A OPCAO E DESSELECIONAR O RESTANTE
                add.onclick = function () {
                    let opcoes = document.querySelectorAll('.opcaoComponente')

                    opcoes.forEach(opcao => {
                        if (opcao.classList.contains('opcaoSelecionada')) {
                            opcao.classList.remove('opcaoSelecionada');
                            opcao.style.backgroundColor = '';
                        }
                    })

                    this.parentElement.parentElement.classList.add('opcaoSelecionada');
                    this.parentElement.parentElement.style.backgroundColor = '#41ae4f';

                    // VARIAVEL TOTAL PARCIAL
                    TotalParcial = document.getElementById('parcialTotal')
                    TotalParcial.textContent = Processador.preco
                }
                // FUNCAO P/ DEFINIR COR AO DESEMPENHO
                function lvlDesempenho() {
                    if (Processador.desempenho == "Alto Desempenho") {
                        alertDesempenho.style.backgroundColor = "#308041"
                        alertDesempenho.style.color = "white"
                    }
                    else if (Processador.desempenho == "Medio Desempenho") {
                        alertDesempenho.style.backgroundColor = "#FFD600"
                    }
                    else if (Processador.desempenho == "Baixo Desempenho") {
                        alertDesempenho.style.backgroundColor = "#840000"
                        alertDesempenho.style.color = "white"
                    }

                }


            })
        })

        .catch(error => console.error('Erro ao carregar os Processadores:', error));
}

