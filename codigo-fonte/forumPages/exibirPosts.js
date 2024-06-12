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

if (temaHTML == "Regras") {
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

  var xDiv = document.createElement("div");
  xDiv.textContent = "x";
  xDiv.id = "cadaPostX";
  cadaPostTopDiv.appendChild(xDiv);

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
