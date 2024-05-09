const form = document.querySelector('.form');
const obrigatorio = document.querySelectorAll('.obrigatorio');
const mensagemErro = document.querySelectorAll('.erro');
const email = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const checkbox = document.querySelector('.checkbox');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validarNome();
    validarEmail();
    validarSenha();
    validarConfirmacao();
    validarTermos();
})

function erro(index) {
    mensagemErro[index].style.opacity = '1.0';
    obrigatorio[index].style.border = '2px solid #e63636';
}

function removerErro(index) {
    mensagemErro[index].style.opacity = '0';
    obrigatorio[index].style.border = '';
}

function validarNome() {
    if(obrigatorio[0].value.length < 3){
        erro(0);
    }
    else {
        removerErro(0);
    }
}

function validarEmail() {
    if(!email.test(obrigatorio[1].value))
        erro(1);
    else {
        removerErro(1);
    }
}

function validarSenha() {
    if(obrigatorio[2].value.length < 8) {
        erro(2);
    }
    else {
        removerErro(2);
    }
}

function validarConfirmacao() {
    if(obrigatorio[3].value !== obrigatorio[2].value || obrigatorio[3].value.length < 8) {
        erro(3);
    }
    else {
        removerErro(3);
    }
}

function validarTermos() {
    if(checkbox.checked) {
        console.log('FOI');
    }
    else (
        console.log('marca aí paizao')
    )
}