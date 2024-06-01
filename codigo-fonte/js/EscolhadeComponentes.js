// // Elementos que JSON vai alterar no HTML
// var modelo = document.querySelector('#Modelo')
// var preco = document.querySelector('#Preco')
// var imagem = null
// var alertaDesempenho = document.querySelector('.alertaDesempenho')
// var maisInfo = document.querySelector('.maisInfo')

// // Container que segura as opcoes
// var container = document.querySelector('#containerComp')


// function load() {
//     fetch('/codigo-fonte/js/Componentes.json')
//         .then(Response => Response.json())
//         .then(Componentes => {
//             const container = document.querySelector('#containerComp')
//             Componentes.map(Componente => {
//                 // DIV DO CARD
//                 const opcao = document.createElement('div')
//                 opcao.classList.add('opcaoComponente')

//                 // NOME E PRECO
//                 const nomePreco = document.createElement('div')
//                 nomePreco.classList.add('nomePreco')

//                 const nome = document.createElement('h2')
//                 nome.textContent = Componente.modelo
//                 const preco = document.createElement('h2')
//                 preco.textContent = Componente.preco
//                 // IMAGEM
//                 const imgdiv = document.createElement('div')
//                 imgdiv.classList.add('imgComponente')
//                 const img = document.createElement('img')
//                 img.classList.add('imagemComponente')
//                 img.src = Componente.imagem
//                 // ALERTAS E INFO
//                 const alertas = document.createElement('div');
//                 alertas.classList.add('alertas')
//                 const alertDesempenho = document.createElement('div')
//                 alertDesempenho.classList.add('alertaDesempenho')
//                 alertDesempenho.textContent = Componente.desempenho

//                 const maisInfo = document.createElement('button')
//                 maisInfo.classList.add('maisInfo')
//                 maisInfo.textContent = Componente.info
//             })
//         })
// }



function carregar(){
    fetch('/codigo-fonte/js/Componentes.json')
        .then(Response => Response.json())
        .then(Componentes => {
            const container = document.querySelector('#containerComp')
            Componentes.map(Componente => {
                // DIV DO CARD
                const opcao = document.createElement('div')
                opcao.classList.add('opcaoComponente')

                // NOME E PRECO
                const nomePreco = document.createElement('div')
                nomePreco.classList.add('nomePreco')

                const nome = document.createElement('h2')
                nome.textContent = Componente.modelo
                nome.classList.add('nome')

                const preco = document.createElement('h2')
                preco.textContent = Componente.preco
                preco.classList.add('preco')

                // IMAGEM
                const imgdiv = document.createElement('div')
                imgdiv.classList.add('imgComponente')

                const img = document.createElement('img')
                img.classList.add('imagemComponente')
                img.src = Componente.imagem

                // ALERTAS INFO e ADD
                const alertas = document.createElement('div');
                alertas.classList.add('alertas')

                const alertDesempenho = document.createElement('div')
                alertDesempenho.classList.add('alertaDesempenho')
                alertDesempenho.textContent = Componente.desempenho

                const maisInfo = document.createElement('button')
                maisInfo.classList.add('maisInfo')

                const maisInfoLink = document.createElement('a')
                maisInfoLink.href = Componente.info
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
            })
        })
        .catch(error => console.error('Erro ao carregar os componentes:', error));
}
carregar()
