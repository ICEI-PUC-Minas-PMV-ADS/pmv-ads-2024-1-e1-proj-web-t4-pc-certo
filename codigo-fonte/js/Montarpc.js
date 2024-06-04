// adicionando funções aos botões 

// ------- PASSO 1 ------------
const cards = document.querySelectorAll('.btnCard')

for (i = 0; i < cards.length; i++) {

    cards[i].onclick = function () {

        cards.forEach(card => {
            // Esconder todos os cards
            card.style.display = 'none';
        })

        // Mostrar o card clicado
        this.classList.add('cardAtivo')
        this.style.backgroundColor = '#41ae4f'
        this.style.display = 'grid'

        document.getElementById('passo2').style.display = 'flex'

        // Mostrar a div correspondente ao card clicado
        const targetId = this.getAttribute('data-target')
        const targetDiv = document.getElementById(targetId)
        targetDiv.style.display = 'flex'

        document.getElementById('reiniciar').style.display = 'flex'
    }
}

// ----------- PASSO 2 ---------------
const orcamentos = document.querySelectorAll('.btnOrc')

for (j = 0; j < orcamentos.length; j++) {

    orcamentos[j].onclick = function () {
        orcamentos.forEach(orcamento => {
            // Esconder todos os cards
            orcamento.style.display = 'none'
        })

        // Mostrar card escolhido
        this.classList.add('orcamentoAtivo')
        this.style.backgroundColor = '#41ae4f'
        this.style.display = 'flex'

        document.getElementById('passo3').style.display = 'flex'

        // Mostrar a div correspondente ao card clicado
        const targetId = this.getAttribute('data-target')
        const targetDiv = document.getElementById(targetId)
        targetDiv.style.display = 'grid'

        document.getElementById('avancar').style.display = 'flex'
    }
}

// ----------- PASSO 3 ---------

const valores = document.querySelectorAll('.btnValorLimite')

for (k = 0; k < valores.length; k++) {
    valores[k].onclick = function () {
        valores.forEach(valor => {
            if (valor.classList.contains('valorAtivo')) {
                valor.classList.remove('valorAtivo')
                valor.style.backgroundColor = '';
            }
        })
        this.classList.add('valorAtivo')
        this.style.backgroundColor = '#41ae4f'
    }
}

// Botão de reiniciar

btnReiniciarEl = document.querySelector('#reiniciar')
btnReiniciarEl.addEventListener('click', () => {
    window.location.reload()
})

// botão de avancar

btnAvancarEl = document.querySelector('#avancar')
btnAvancarEl.addEventListener('click', () => {
    location.href = "EscolhaDeComponentes.html"
})

