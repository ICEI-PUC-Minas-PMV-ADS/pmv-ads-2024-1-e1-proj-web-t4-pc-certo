//VER SE TA LOGADO;
const usuarioString = localStorage.getItem("Login");

if (!usuarioString) {
  alert(
    "É necessário estar logado para ver suas publicações! Faça login ou realize um cadastro"
  );
  window.location.href = "../Forum.html";
}

// SUMIR ICONES DO FORUM SE NAO TIVER LOGADO

if (usuarioString !== null) {
  iconesForum.classList.remove("forumSlctOpt");
} else {
  iconesForum.style.display = "none";
}
///

// FILTRAR EM MEUS POSTS
var url = window.location.href;
var partesDoUrl = url.split("=");
var usuarioPosts = decodeURIComponent(partesDoUrl[1]);

var temPosts = document.getElementById("exibicaoPosts");
var naoTemPosts = document.getElementById("naoTemPosts");

var isTherePosts = 0;

for (var i = 0; i < localStorage.length; i++) {
  var chave = localStorage.key(i);
  var valor = localStorage.getItem(chave);

  if (valor.startsWith("{") && valor.endsWith("}") && !chave.includes("RESP")) {
    var objeto = JSON.parse(valor);

    if (objeto.hasOwnProperty("autor") && objeto.autor.includes(usuarioPosts)) {
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

  var cadaPostClick = document.createElement("div");
  cadaPostClick.id = "cadaPostClick";
  cadaPostClick.textContent = dados.nClicks + " Acessos";
  cadaPostTopDiv.appendChild(cadaPostClick);

  var cadaPostResp = document.createElement("div");
  cadaPostResp.id = "cadaPostResp";
  cadaPostResp.textContent = dados.nRespostas + " Resp.";
  cadaPostTopDiv.appendChild(cadaPostResp);

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
