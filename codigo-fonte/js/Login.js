console.log(localStorage.getItem("nomeCadastro"));
console.log(localStorage.getItem("emailCadastro"));
console.log(localStorage.getItem("senhaCadastro"));
console.log(localStorage.getItem("confirmacaoCadastro"));
// variaveis
var erroremail = document.getElementById("errorEmail");
var redborder = document.querySelectorAll('#email, #senha');
var inputs = document.querySelectorAll('input')
var emailInserido = document.getElementById("email");
var senhaInserida = document.getElementById('senha')
var botaologin = document.getElementById('botao');



// validar emails cadastrados
botaologin.addEventListener('click', function validarEmail() {
    if (localStorage.getItem("emailCadastro") == emailInserido && (localStorage.getItem("senhaCadastro")) == senhaInserida) { console.log('o email é valido') }

    else {
        console.log('email invalido');
        erroremail.style.display = "block";
        redborder.forEach(function (element) {
            element.style.border = "2px solid #e63636";
        });
    }

}
)
//remover erro
inputs.forEach(function(input){
    input.addEventListener('click', function(){
        erroremail.style.display = "none";
        redborder.forEach(function(element){
            element.style.border = "0px";
        })

    })
})
