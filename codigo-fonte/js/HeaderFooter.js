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

//mudar icone login

const temUsuario = localStorage.getItem("nomeCadastro");

document.getElementById(btLogado);
document.getElementById(btDeslogado);

btLogado.style.display = "none";
btDeslogado.style.display = "flex";

if (temUsuario) {
  btLogado.style.display = "flex";
  btDeslogado.style.display = "none";
}
