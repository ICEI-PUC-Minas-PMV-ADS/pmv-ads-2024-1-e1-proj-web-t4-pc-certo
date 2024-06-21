// SUMIR ICONES DO FORUM SE NAO TIVER LOGADO

usuarioString = localStorage.getItem("Login");

if (usuarioString !== null) {
  iconesForum.classList.remove("forumSlctOpt");
} else {
  iconesForum.style.display = "none";
}
///

var url = window.location.href;
var partesDoUrl = url.split("_");
var temaHTML = partesDoUrl[1];
var temPosts = document.getElementById("exibicaoPosts");
var naoTemPosts = document.getElementById("naoTemPosts");
var bcTema = document.getElementById("bcTema");

var isTherePosts = 0;

for (var i = 0; i < localStorage.length; i++) {
  var chave = localStorage.key(i);
  var valor = localStorage.getItem(chave);

  if (valor.startsWith("{") && valor.endsWith("}")) {
    var objeto = JSON.parse(valor);

    if (objeto.hasOwnProperty("tema") && objeto.tema === temaHTML) {
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

var postsIn = document.getElementById("postsIn");
var temaLegi = "";

if (temaHTML == "REGRAS") {
  temaLegi = " Regras do Fórum";
}

if (temaHTML == "ERROS") {
  temaLegi = " Erros e Soluções de Problemas";
}

if (temaHTML == "UPGRADE") {
  temaLegi = " Upgrade e Troca de Peças";
}

if (temaHTML == "MOUSETECLADO") {
  temaLegi = " Mouse, Teclado e Mousepads";
}

if (temaHTML == "SUGESTOESMONTAGEM") {
  temaLegi = " Sugestões de Montagem";
}

if (temaHTML == "COMPRASONLINE") {
  temaLegi = " Sugestões de Compras Online";
}

if (temaHTML == "COMPRASLOCAIS") {
  temaLegi = " Sugestões de Compras Locais";
}

if (temaHTML == "MONITORES") {
  temaLegi = " Monitores";
}

if (temaHTML == "AUDIO") {
  temaLegi = " Headsets, Microfones e Áudio";
}

if (temaHTML == "OUTROS") {
  temaLegi = " Outros Periféricos E Dispositivos";
}

if (temaHTML == "DICAS") {
  temaLegi = " Dicas de Programas de Monitoração";
}

////

if (temaHTML == "PLACADEVIDEO") {
  temaLegi = " Placas de Vídeo";
}

if (temaHTML == "PROCESSADORES") {
  temaLegi = " Processadores";
}

if (temaHTML == "PLACAMAE") {
  temaLegi = " Placas-Mãe";
}

if (temaHTML == "FONTES") {
  temaLegi = " Fontes e energia";
}

if (temaHTML == "MEMORIARAM") {
  temaLegi = " Memória RAM";
}

if (temaHTML == "ARMAZENAMENTO") {
  temaLegi = " SSD's, HDD's e Armazenamento";
}

if (temaHTML == "GABINETES") {
  temaLegi = " Gabinetes e Casemod";
}

if (temaHTML == "OUTROS") {
  temaLegi = " Peças de Refrigeração";
}

if (temaHTML == "DICAS") {
  temaLegi = " Cabos e Outras Peças";
}

postsIn.textContent = temaLegi;
bcTema.textContent = temaLegi;

// CRIA DIVS:

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

//MEUS POSTS

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
