// SUMIR ICONES DO FORUM SE NAO TIVER LOGADO

usuarioString = localStorage.getItem("Login");

if (usuarioString !== null) {
  iconesForum.classList.remove("forumSlctOpt");
} else {
  iconesForum.style.display = "none";
}
///

// SE NAO TIVER NADA 1/2
var temPosts = document.getElementById("exibicaoPosts");
var naoTemPosts = document.getElementById("naoTemPosts");

var isTherePosts = 0;
///

function carregaPost(entrada) {
  for (var i = 0; i < localStorage.length; i++) {
    var chave = localStorage.key(i);
    var itemLclStrg = localStorage.getItem(chave);

    if (chave.startsWith("POST_")) {
      var postJSON = JSON.parse(itemLclStrg);
      if (
        itemLclStrg.toLowerCase().includes(entrada.toLowerCase()) &&
        !chave.includes("RESP")
      ) {
        CriaPostDiv(postJSON);
        isTherePosts = 1;
      }
    }
  }
}

var url = window.location.href;
var urlDividida = url.split("=");
var pesquisaID = decodeURIComponent(urlDividida[1]);

carregaPost(pesquisaID);

//SE NAO TIVER NADA 2/2
naoTemPosts.style.display = "none";

if (isTherePosts == 0) {
  temPosts.style.display = "none";
  naoTemPosts.style.display = "inline-block";
}
///
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

// BREADCRUMB

var bcPesq = document.getElementById("pesquisarID");

bcPesq.textContent = "'" + pesquisaID + "'";

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

//POSTS EM:

let postsIn = document.getElementById("postsIn");
postsIn.textContent = "'" + pesquisaID + "'";
