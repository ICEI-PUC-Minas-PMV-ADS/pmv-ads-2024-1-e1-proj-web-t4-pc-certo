// FILTRAR EM MEUS POSTS

var url = window.location.href;
var partesDoUrl = url.split("=");
var usuarioPosts = partesDoUrl[1];

var temPosts = document.getElementById("exibicaoPosts");
var naoTemPosts = document.getElementById("naoTemPosts");

var isTherePosts = 0;

for (var i = 0; i < localStorage.length; i++) {
  var chave = localStorage.key(i);
  var valor = localStorage.getItem(chave);

  if (valor.startsWith("{") && valor.endsWith("}")) {
    var objeto = JSON.parse(valor);

    if (objeto.hasOwnProperty("autor") && objeto.autor === usuarioPosts) {
      CriaPostDiv(objeto);
      isTherePosts = 1;
    }
  }
}

naoTemPosts.style.display = "none";

if (isTherePosts == 0) {
  temPosts.style.display = "none";
  naoTemPosts.style.display = "inline-block";
}

//cria divs
function CriaPostDiv(dados) {
  var cadaPostDiv = document.createElement("div");
  cadaPostDiv.classList.add("cadaPost");

  var cadaPostTopDiv = document.createElement("div");
  cadaPostTopDiv.classList.add("cadaPostTop");

  var cadaPostTitDiv = document.createElement("div");
  cadaPostTitDiv.id = "cadaPostTit";
  cadaPostTitDiv.textContent = dados.titulo;
  cadaPostTopDiv.appendChild(cadaPostTitDiv);

  var cadaPostId = document.createElement("div");
  cadaPostId.id = "cadaPostIds";
  cadaPostId.textContent = dados.id;
  cadaPostTopDiv.appendChild(cadaPostId);

  cadaPostDiv.appendChild(cadaPostTopDiv);

  var cadaPostTxtDiv = document.createElement("div");
  cadaPostTxtDiv.id = "cadaPostTxt";
  cadaPostTxtDiv.textContent = dados.texto;
  cadaPostDiv.appendChild(cadaPostTxtDiv);

  var cadaPostAutDiv = document.createElement("div");
  cadaPostAutDiv.id = "cadaPostAut";
  cadaPostAutDiv.textContent = dados.autor;
  cadaPostDiv.appendChild(cadaPostAutDiv);

  //// DATA COM HORA
  var dataJSON = dados.data;

  var data = new Date(dataJSON);

  var dataComHora = data.toLocaleString();

  var cadaPostDataDiv = document.createElement("div");
  cadaPostDataDiv.id = "cadaPostData";
  cadaPostDataDiv.textContent = dataComHora;
  cadaPostDiv.appendChild(cadaPostDataDiv);

  var exibicaoPostsDiv = document.getElementById("exibicaoPosts");

  exibicaoPostsDiv.appendChild(cadaPostDiv);
}

//REDIRECIONAR PARA POSTS

var forumPosts = document.querySelectorAll(".cadaPostTop");

forumPosts.forEach(function (post) {
  post.addEventListener("click", function () {
    var postId = this.querySelector("#cadaPostIds").textContent;
    window.location.href = "responderPost.html?id=" + postId;
  });
});

//Meus posts ICONE

document.getElementById("meuPerfilPosts");

var nomeAutor = localStorage.getItem("nomeCadastro");

meuPerfilPosts.onclick = function () {
  window.location.href = "meusPosts.html?id=" + nomeAutor;
};
