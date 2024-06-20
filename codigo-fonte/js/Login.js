// variaveis
var erroremail = document.getElementById("errorEmail");
var redborder = document.querySelectorAll("#email, #senha");
var inputs = document.querySelectorAll("input");
var emailInserido = document.getElementById("email");
var senhaInserida = document.getElementById("senha");
var botaologin = document.getElementById("botao");
var passwordIcons = document.querySelector(".passwordIcon");
var login = false;
var eyeIconBoolean = false;

// validar emails cadastrados
botaologin.addEventListener("click", function validarEmail() {
  if (
    localStorage.getItem("emailCadastro") == emailInserido.value &&
    localStorage.getItem("senhaCadastro") == senhaInserida.value
  ) {
    console.log("o email é valido");
    document.querySelector(".Entrar").style.display = "none";
    document.querySelector(".semLoginTexto").style.display = "none";
    document.querySelector(".centralizarCheck").style.display = "flex";
    setTimeout(() => {
      var login = true;
      localStorage.setItem("Login", login);
      window.location.href = "../codigo-fonte/Forum.html";
    }, 2000);
  } else {
    erroremail.style.display = "block";
    redborder.forEach(function (element) {
      element.style.border = "2px solid #e63636";
    });
  }
});
//remover erro
inputs.forEach(function (input) {
  input.addEventListener("click", function () {
    erroremail.style.display = "none";
    redborder.forEach(function (element) {
      element.style.border = "0px";
    });
  });
});

function passwordIcon() {
  if (eyeIconBoolean == false) {
    passwordIcons.src = "img/eyeIcon.png";
    senhaInserida.type = "text";
  } else {
    passwordIcons.src = "img/closedEyeIcon.png";
    senhaInserida.type = "password";
  }
  eyeIconBoolean = !eyeIconBoolean;
}
