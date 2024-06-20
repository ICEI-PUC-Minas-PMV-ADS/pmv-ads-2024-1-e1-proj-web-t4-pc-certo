var sideBtn = document.querySelector(".sidebaricon");
var togglenavbar = false;
var navbar = document.querySelector(".botoescabecalho");

sideBtn.addEventListener("click", function () {
  if (togglenavbar == false) {
    navbar.style.right = "0";
  } else {
    navbar.style.right = "100vw";
  }
  togglenavbar = !togglenavbar;
});

var guiademontagem = "Guiademontagem";
var lineBotao = document.querySelectorAll(".lineBotao");
if (window.location.pathname.match(guiademontagem)) {
  lineBotao[1].style.transform = "scalex(1)";
}

var forum = "Forum";
var lineBotao = document.querySelectorAll(".lineBotao");
if (window.location.pathname.match(forum)) {
  lineBotao[0].style.transform = "scalex(1)";
}

var montarpc = "Montarpc";
var lineBotao = document.querySelectorAll(".lineBotao");
if (window.location.pathname.match(montarpc)) {
  lineBotao[2].style.transform = "scalex(1)";
}

//mudar icone login

const temUsuario = localStorage.getItem("Login");

document.getElementById(btLogado);
document.getElementById(btDeslogado);

btLogado.style.display = "none";
btDeslogado.style.display = "flex";

if (temUsuario) {
  btLogado.style.display = "flex";
  btDeslogado.style.display = "none";
}
