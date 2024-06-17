var url = window.location.href;
var partesDoUrl = url.split("_");
var temaHTML = partesDoUrl[1];

for (var i = 0; i < localStorage.length; i++) {
  var chave = localStorage.key(i);
  var valor = localStorage.getItem(chave);

  if (valor.startsWith("{") && valor.endsWith("}")) {
    var objeto = JSON.parse(valor);

    if (objeto.hasOwnProperty("tema") && objeto.tema === temaHTML) {
      CriaPostDiv(objeto);
    }
  }
}

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
