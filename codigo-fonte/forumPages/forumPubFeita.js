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

//Meus posts ICONE

document.getElementById("meuPerfilPosts");

var nomeAutor = localStorage.getItem("nomeCadastro");

meuPerfilPosts.onclick = function () {
  window.location.href = "meusPosts.html?id=" + nomeAutor;
};
