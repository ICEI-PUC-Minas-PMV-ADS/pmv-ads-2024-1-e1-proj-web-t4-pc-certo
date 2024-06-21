usuarioString = localStorage.getItem("Login");
var facaLogin = document.getElementById("facaLogin");
var respPost = document.getElementById("responderPost");

if (!usuarioString) {
  facaLogin.style.display = "flex";
  respPost.style.display = "none";
} else {
  facaLogin.style.display = "none";
  respPost.style.display = "flex";
}

// SUMIR ICONES DO FORUM SE NAO TIVER LOGADO
if (usuarioString !== null) {
  iconesForum.classList.remove("forumSlctOpt");
} else {
  iconesForum.style.display = "none";
}
///

//BREADCRUMB REDIRECIONAR

var url = window.location.href;
var partesDoUrl = url.split("_");

var temaHTML = partesDoUrl[1];

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

temaPostJanelas = document.getElementById("temaPostJanela");

temaPostJanela.textContent = temaLegi;

temaPostJanelas.onclick = function () {
  var pagTema = "";

  if (temaHTML == "REGRAS") {
    pagTema = "../forumPages/exibirPosts.html?id=etcForums_REGRAS";
  }

  if (temaHTML == "ERROS") {
    pagTema = "../forumPages/exibirPosts.html?id=softForums_ERROS";
  }

  if (temaHTML == "UPGRADE") {
    pagTema = "../forumPages/exibirPosts.html?id=hardForums_UPGRADE";
  }

  if (temaHTML == "MOUSETECLADO") {
    pagTema = "../forumPages/exibirPosts.html?id=prfcForums_MOUSETECLADO";
  }

  if (temaHTML == "SUGESTOESMONTAGEM") {
    pagTema = "../forumPages/exibirPosts.html?id=hardForums_SUGESTOESMONTAGEM";
  }

  if (temaHTML == "COMPRASONLINE") {
    pagTema = "../forumPages/exibirPosts.html?id=buyForums_COMPRASONLINE";
  }

  if (temaHTML == "COMPRASLOCAIS") {
    pagTema = "../forumPages/exibirPosts.html?id=buyForums_COMPRASLOCAIS";
  }

  if (temaHTML == "MONITORES") {
    pagTema = "../forumPages/exibirPosts.html?id=prfcForums_MONITORES";
  }

  if (temaHTML == "AUDIO") {
    pagTema = "../forumPages/exibirPosts.html?id=prfcForums_AUDIO";
  }

  if (temaHTML == "OUTROS") {
    pagTema = "../forumPages/exibirPosts.html?id=prfcForums_OUTROS";
  }

  if (temaHTML == "DICAS") {
    pagTema = "../forumPages/exibirPosts.html?id=softForums_DICAS";
  }

  if (temaHTML == "PLACADEVIDEO") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_PLACADEVIDEO";
  }

  if (temaHTML == "PROCESSADORES") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_PROCESSADORES";
  }

  if (temaHTML == "PLACAMAE") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_PLACAMAE";
  }

  if (temaHTML == "FONTES") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_FONTES";
  }

  if (temaHTML == "MEMORIARAM") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_MEMORIARAM";
  }

  if (temaHTML == "ARMAZENAMENTO") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_ARMAZENAMENTO";
  }

  if (temaHTML == "GABINETES") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_GABINETES";
  }

  if (temaHTML == "OUTROS") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_OUTROS";
  }

  if (temaHTML == "DICAS") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_DICAS";
  }

  window.location.href = pagTema;
};

var divisaoUrl = url.split("=");

//LOOP PARA AUMENTAR nClicks
for (let i = 0; i < localStorage.length; i++) {
  let chaveLC = localStorage.key(i);
  let postLC = localStorage.getItem(chaveLC);
  console.log("tentando com " + chaveLC);
  if (chaveLC == divisaoUrl[1]) {
    let postLCJSON = JSON.parse(postLC);
    postLCJSON.nClicks += 1;

    localStorage.setItem(divisaoUrl[1], JSON.stringify(postLCJSON));
  }
}
///

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

//RENDERIZAR POST PRINCIPAL DA PÁGINA - PEGA POST

var urlEq = url.split("=");
var postId = urlEq[1];

for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i) == postId) {
    var chave = localStorage.key(i);
    let objeto = localStorage.getItem(chave);
    gerarPost(objeto);
  }
}

//GERAR POST PRINCIPAL

document.getElementById("postPrincipal");
document.getElementById("postRespostas");

function gerarPost(objeto) {
  let objetoJSON = JSON.parse(objeto);

  let divTitulo = document.createElement("div");
  divTitulo.textContent = objetoJSON.titulo;
  divTitulo.className = "tit";

  let divTxt = document.createElement("div");
  divTxt.textContent = objetoJSON.texto;
  divTxt.className = "txt";

  let divAut = document.createElement("div");
  divAut.textContent = objetoJSON.autor;
  divAut.className = "aut";

  //DATA

  let divData = document.createElement("div");

  let data_hora_objeto = new Date(objetoJSON.data);

  // FORMATAR DATA
  let data_formatada = data_hora_objeto.toLocaleDateString("pt-BR");
  let hora_formatada = data_hora_objeto.toLocaleTimeString("pt-BR");

  divData.textContent = data_formatada + " às " + hora_formatada;
  divData.className = "dat";

  postPrincipal.appendChild(divTitulo);
  postPrincipal.appendChild(divTxt);
  postPrincipal.appendChild(divAut);
  postPrincipal.appendChild(divData);
}

//RENDERIZAR RESPOSTAS DA PÁGINA
let respostas = [];

for (let i = 0; i < localStorage.length; i++) {
  let respostaLocal = localStorage.key(i);

  if (respostaLocal.startsWith(postId + "_RESP_")) {
    let objeto = localStorage.getItem(respostaLocal);

    let keySplit = respostaLocal.split("_");
    let nResp = keySplit[4];

    respostas.push([nResp, objeto]);
  }
}

//ORGANIZA OS PARES EM ORDEM CRESCENTE
respostas.sort(function (a, b) {
  return a[0] - b[0];
});

//SOLICTA GERAR RESPOSTA EM ORDEM

for (let i = 0; i < respostas.length; i++) {
  let par = respostas[i];
  let segundoItem = par[1];

  gerarResp(segundoItem);
}

//GERA RESPOSTA

function gerarResp(objeto) {
  let objetoJSON = JSON.parse(objeto);

  let divTxt = document.createElement("div");
  divTxt.textContent = objetoJSON.texto;
  divTxt.className = "txt";

  let divAut = document.createElement("div");
  divAut.textContent = objetoJSON.autor;
  divAut.className = "aut";

  //DATA

  let divData = document.createElement("div");

  let data_hora_objeto = new Date(objetoJSON.data);

  let data_formatada = data_hora_objeto.toLocaleDateString("pt-BR");
  let hora_formatada = data_hora_objeto.toLocaleTimeString("pt-BR");

  divData.textContent = data_formatada + " às " + hora_formatada;
  divData.className = "dat";

  let newResp = document.createElement("div");
  newResp.className = "cadaResp";

  newResp.appendChild(divTxt);
  newResp.appendChild(divAut);
  newResp.appendChild(divData);

  postRespostas.appendChild(newResp);
}

// BOTAO DE ENVIAR

const enviarResposta = document.getElementById("enviarResposta");

var numeroResp = 0;

enviarResposta.onclick = function () {
  if (document.getElementById("responderPub").value.length > 9) {
    //SOMA +1 RESPOSTA NO POST ORIGINAL
    let objeto = localStorage.getItem(postId);
    let objetoJSON = JSON.parse(objeto);

    objetoJSON.nRespostas += 1;

    objeto = JSON.stringify(objetoJSON);

    localStorage.setItem(postId, objeto);

    //ENVIA RESPOSTA

    let idResp = postId + "_RESP_" + numeroResp;

    let objetoResp = {
      texto: document.getElementById("responderPub").value,
      autor: localStorage.getItem("nomeCadastro"),
      data: new Date(),
      id: idResp,
    };

    var respString = JSON.stringify(objetoResp);

    localStorage.setItem(idResp, respString);

    //DA REFRESH NA PAGINA

    window.location.reload();
  } else {
    let respMin = document.getElementById("respMin");
    let textArea = document.getElementById("responderPub");

    respMin.style.opacity = "1";
    textArea.className = "textareaErro";

    responderPub.oninput = function () {
      if (textArea.value.length > 9) {
        respMin.style.opacity = "0";
        textArea.className = "";
      } else {
        respMin.style.opacity = "1";
        textArea.className = "textareaErro";
      }
    };
  }
};

//AUMENTA CONTADOR DE RESPOSTAS DO POST ORIGINAL

for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i).startsWith(postId)) {
    numeroResp += 1;
  }
}

// SE NAO TIVER RESPOSTAS

if (numeroResp > 1) {
  var noRep = document.getElementById("noRep");

  noRep.style.display = "none";
}
