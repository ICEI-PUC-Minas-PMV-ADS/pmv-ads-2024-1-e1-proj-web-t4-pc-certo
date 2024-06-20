// VARIÁVEIS
var form = document.querySelector(".form");
var obrigatorio = document.querySelectorAll(".obrigatorio");
var mensagemErro = document.querySelectorAll(".erro");
var email = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var checkbox = document.querySelector(".checkboxInput");
var cadastrar = document.querySelector(".Cadastrar");
var passwordIcons = document.querySelector(".passwordIcon");
var eyeIconBoolean = false;
var Npattern = /[0-9]/g;
var Upattern = /[a-z]/g;
var Lpattern = /[A-Z]/g;
var Epattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

// FUNÇÕES PARA MOSTRAR O ERRO
function erro(index) {
  mensagemErro[index].style.opacity = "1.0";
  obrigatorio[index].style.border = "2px solid #e63636";
}

function termosErro() {
  mensagemErro[4].style.opacity = "1.0";
}

// FUNÇÕES PARA TIRAR O ERRO
function removerErro(index) {
  mensagemErro[index].style.opacity = "0";
  obrigatorio[index].style.border = "";
}

function removerTermosErro() {
  mensagemErro[4].style.opacity = "0";
}

// FUNÇÕES PARA VALIDAR OS CAMPOS
function validarNome() {
  if (obrigatorio[0].value.length < 5 || obrigatorio[0].value.match(Epattern)) {
    erro(0);
    localStorage.removeItem("nomeCadastro");
  } else {
    removerErro(0);
    var nome = obrigatorio[0].value;
    localStorage.setItem("nomeCadastro", nome);
  }
}

function validarEmail() {
  if (!email.test(obrigatorio[1].value)) {
    erro(1);
    localStorage.removeItem("emailCadastro");
  } else {
    removerErro(1);
    let email = obrigatorio[1].value;
    localStorage.setItem("emailCadastro", email);
  }
}

function validarSenha() {
  if (
    obrigatorio[2].value.length < 8 ||
    !obrigatorio[2].value.match(Npattern) ||
    !obrigatorio[2].value.match(Upattern) ||
    !obrigatorio[2].value.match(Lpattern) ||
    !obrigatorio[2].value.match(Epattern)
  ) {
    erro(2);
    localStorage.removeItem("senhaCadastro");
  } else {
    removerErro(2);
    var senha = obrigatorio[2].value;
    localStorage.setItem("senhaCadastro", senha);
  }
}

function validarConfirmacao() {
  if (
    obrigatorio[3].value !== obrigatorio[2].value ||
    obrigatorio[3].value.length < 8
  ) {
    erro(3);
    localStorage.removeItem("confirmacaoCadastro");
  } else {
    removerErro(3);
    var confirmacao = obrigatorio[3].value;
    localStorage.setItem("confirmacaoCadastro", confirmacao);
  }
}

function validarTermos() {
  if (!checkbox.checked) {
    termosErro();
    localStorage.removeItem("termosCadastro");
  } else {
    removerTermosErro();
    localStorage.setItem("termosCadastro", "Aceitou os termos de uso");
  }
}

// VALIDAÇÃO DO CADASTRO
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validarNome();
  validarEmail();
  validarSenha();
  validarConfirmacao();
  validarTermos();
  var validado0 = localStorage.getItem("nomeCadastro");
  var validado1 = localStorage.getItem("emailCadastro");
  var validado2 = localStorage.getItem("senhaCadastro");
  var validado3 = localStorage.getItem("confirmacaoCadastro");
  var validado4 = localStorage.getItem("termosCadastro");
  if (validado0 && validado1 && validado2 && validado3 && validado4) {
    document.querySelector(".JanelaCadastro").style.display = "none";
    document.querySelector(".janelaSucesso").style.display = "flex";
    setTimeout(() => {
      document.querySelector(".checkGIF").style.display = "none";
      document.querySelector(".checkPNG").style.display = "flex";
    }, 2000);
    document.querySelector(".body").style.backdropFilter =
      "brightness(0.6) blur(20px)";
  }
});

function passwordIcon() {
  if (eyeIconBoolean == false) {
    passwordIcons.src = "img/eyeIcon.png";
    obrigatorio[2].type = "text";
    obrigatorio[3].type = "text";
  } else {
    passwordIcons.src = "img/closedEyeIcon.png";
    obrigatorio[2].type = "password";
    obrigatorio[3].type = "password";
  }
  eyeIconBoolean = !eyeIconBoolean;
}
