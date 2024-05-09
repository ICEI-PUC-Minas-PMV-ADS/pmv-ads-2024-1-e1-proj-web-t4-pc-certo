const form = document.getElementById('form');
const obrigatorio = document.querySelectorAll('.obrigatorio');
const mensagemErro = document.getElementById('.erroNomeEmail .erroSenhaConfirmacao')
function erro(index) {
    mensagemErro[index].style.display = flex;
}

function validarNome() {
    if(obrigatorio[0].value.length < 3){
        erro(0);
    }
    else {
        console.log('ta certin paizao')
    }
}