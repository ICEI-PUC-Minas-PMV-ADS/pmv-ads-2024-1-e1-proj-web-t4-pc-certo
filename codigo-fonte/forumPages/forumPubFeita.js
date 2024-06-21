// SUMIR ICONES DO FORUM SE NAO TIVER LOGADO

usuarioString = localStorage.getItem("Login");

if (usuarioString !== null) {
  iconesForum.classList.remove("forumSlctOpt");
} else {
  iconesForum.style.display = "none";
}
///

//Minhas Publicações
document.getElementById("minhasPubs");

var nomeAutor = localStorage.getItem("nomeCadastro");

minhasPubs.onclick = function () {
  window.location.href = "meusPosts.html?id=" + nomeAutor;
};

//Ver Publicação

var url = window.location.href;
urlID = url.split("=");
idPub = urlID[1];

document.getElementById("verPubFeita").onclick = function () {
  window.location.href = "responderPost.html?id=" + idPub;
};

////MEUS POSTS

document.getElementById("meuPerfilPosts");

var nomeAutor = localStorage.getItem("nomeCadastro");

meuPerfilPosts.onclick = function () {
  window.location.href = "meusPosts.html?id=" + nomeAutor;
};

//PESQUISAR
document.getElementById("barraPesquisar");
var btPesquisa = document.getElementById("srch0");

btPesquisa.onclick = function () {
  if (barraPesquisar.value !== "") {
    window.location.href = "pesquisar.html?id=" + barraPesquisar.value;
  } else {
    alert("O campo de pesquisa está vazio!");
  }
};
