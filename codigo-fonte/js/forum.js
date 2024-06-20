// DOCUMENT GET

document.getElementById("novoTpc");
document.getElementById("popUp");
document.getElementById("btFechar");
document.getElementById("textoPub");
document.getElementById("titPub");
document.getElementById("enviarPub");
document.getElementById("h2");
document.getElementById("txtCurto");
document.getElementById("temaTpc");
document.getElementById("opcInval");
document.getElementById("Participe");
document.getElementById("Publique");

// RETIRAR VALOR DO LOCAL STORAGE E CONVERTER COM JSON

const usuarioString = localStorage.getItem("Login");

// DISPLAY DIFERENTE NA TELA INICIAL DEPENDENDO DO LOGIN
if (usuarioString !== null) {
  Participe.style.display = "none";
  Publique.style.display = "flex";
} else {
  Participe.style.display = "flex";
  Publique.style.display = "none";
}
///

// SELECAO DE TIPO DE FORUM E FILTRO
var forums = [
  allForums,
  componentes,
  buyForums,
  softForums,
  hardForums,
  prfcForums,
  etcForums,
];

forums.forEach(function (forumX) {
  forumX.onclick = function () {
    slctForum(forumX);
    filtroForum(forumX);
  };
});

function slctForum(selectedForum) {
  forums.forEach(function (forumX) {
    forumX.classList.remove("forumSlctOpt1");
    forumX.classList.add("forumSlctOpt");
  });

  selectedForum.classList.remove("forumSlctOpt");
  selectedForum.classList.add("forumSlctOpt1");
}

function filtroForum(selectedForum) {
  var forumId = selectedForum.id;
  var forumPrefix = forumId.slice(0, -6);
  var allForums = document.querySelectorAll(".eachForum");

  allForums.forEach(function (forum) {
    forum.style.display = "none";
  });

  if (selectedForum.id == "allForums") {
    allForums.forEach(function (forum) {
      forum.style.display = "flex";
    });
  }

  var filteredForums = document.querySelectorAll("[id^='" + forumPrefix + "']");
  filteredForums.forEach(function (forum) {
    forum.style.display = "flex";
  });
}

// SUMIR ICONES DO FORUM SE NAO TIVER LOGADO
if (usuarioString !== null) {
  iconesForum.classList.remove("forumSlctOpt");
} else {
  iconesForum.style.display = "none";
}
///

/// TOP 5 RECENTES POSTS
var allKeys = Object.keys(localStorage);
var maioresIDs = [];

allKeys.forEach(function (key) {
  if (key.startsWith("POST_") && !key.includes("RESP")) {
    var id = parseInt(key.split("_")[2]);

    if (maioresIDs.length < 5 || id > maioresIDs[4].id) {
      maioresIDs.push({ id: id, chave: key });

      maioresIDs.sort(function (a, b) {
        return b.id - a.id;
      });

      if (maioresIDs.length > 5) {
        maioresIDs.pop();
      }
    }
  }
});

for (var l = 1; l < 6; l++) {
  if (maioresIDs.length >= l) {
    let Publication = document.getElementById("ultimoPub" + l);
    let Titulo = document.getElementById("ultimoPubTit" + l);
    let Autor = document.getElementById("ultimoPubAut" + l);
    let Respostas = document.getElementById("ultimoPubResp" + l);
    let Data = document.getElementById("ultimoPubData" + l);
    let Hora = document.getElementById("ultimoPubHora" + l);
    let idPost = document.getElementById("lastPostsId" + l);

    let objeto = maioresIDs[l - 1];

    if (objeto && objeto.hasOwnProperty("chave")) {
      let nomeDaChave = objeto.chave;

      for (var k = 0; k < localStorage.length; k++) {
        if (nomeDaChave === Object.keys(localStorage)[k]) {
          Publication.style.display = "flex";

          let chave = Object.keys(localStorage)[k];
          let valor = localStorage.getItem(chave);
          let objeto = JSON.parse(valor);

          idPost.textContent = objeto.id;
          Titulo.textContent = objeto.titulo;
          Autor.textContent = objeto.autor;
          Respostas.textContent = objeto.nRespostas + " Respostas";

          //DATA

          let data_hora_objeto = new Date(objeto.data);

          // FORMATAR DATA
          let data_formatada = data_hora_objeto.toLocaleDateString("pt-BR");
          let hora_formatada = data_hora_objeto.toLocaleTimeString("pt-BR");

          Data.textContent = data_formatada + " às " + hora_formatada;
        }
      }
    }
  }
}

//EXIBIR NAS DIVS ULTIMOS POSTS
for (let i = 1; i < 6; i++) {
  let lastPosts = document.getElementById("ultimoPub" + i);
  let lastPostsBy = document.getElementById("ultimoPubAut" + i);
  let noLastPost = document.getElementById("noRecentPosts");

  if (lastPostsBy.textContent == "") {
    lastPosts.style.display = "none";
  } else {
    lastPosts.style.display = "flex";
    noLastPost.style.display = "none";
  }
}

//REDIRECIONAMENTO DOS TEMAS
const temaForumsBotoes = document.querySelectorAll(".eachForum");

temaForumsBotoes.forEach((button) => {
  button.onclick = function () {
    const temasId = this.id;
    window.location.href = `forumPages/exibirPosts.html?id=${temasId}`;
  };
});

//REDIRECIONAMENTO DOS POSTS
var forumPosts = document.querySelectorAll(".contForums > .contForums");

forumPosts.forEach(function (post) {
  post.addEventListener("click", function () {
    var postId = this.querySelector(".lastPostsIds").textContent;
    window.location.href = "forumPages/responderPost.html?id=" + postId;
  });
});

//MINHAS PUBS

document.getElementById("meuPerfilPosts");

var nomeAutor = localStorage.getItem("nomeCadastro");

meuPerfilPosts.onclick = function () {
  window.location.href = "forumPages/meusPosts.html?id=" + nomeAutor;
};

//CONTADORES DE MENSAGENS E DE THREADS
function realizarContagem(theme) {
  let postCount = 0;
  let messageCount = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("POST_" + theme) && !key.includes("RESP")) {
      postCount++;
      messageCount++;
    } else {
      if (key.startsWith("POST_" + theme) && key.includes("RESP")) {
        messageCount++;
      }
    }
  }
  return { postCount, messageCount };
}

// ATUALIZAR CONTADORES --
function updateCounters() {
  const forumDivs = document.querySelectorAll(".eachForum");

  forumDivs.forEach((forumDiv) => {
    const id = forumDiv.id;
    const theme = id.split("_")[1];

    const { postCount, messageCount } = realizarContagem(theme);

    // ATUALIZAR CONTADORES
    const tpcCounter = forumDiv.querySelector(".tpcCounter .CntrTit");
    const msgCounter = forumDiv.querySelector(".msgCounter .CntrTit");

    if (tpcCounter) {
      tpcCounter.textContent = postCount;
    }
    if (msgCounter) {
      msgCounter.textContent = messageCount;
    }
  });
}

updateCounters();

//PESQUISAR
document.getElementById("barraPesquisar");
var btPesquisa = document.getElementById("srch0");

btPesquisa.onclick = function () {
  if (barraPesquisar.value !== "") {
    window.location.href =
      "forumPages/pesquisar.html?id=" + barraPesquisar.value;
  } else {
    alert("O campo de pesquisa está vazio!");
  }
};

//5 PUBS MAIS VISTAS - LANÇAR

var items = [];

for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);

  if (key.includes("POST") && !key.includes("RESP")) {
    var item = JSON.parse(localStorage.getItem(key));
    if (item.nClicks !== 0) {
      items.push({ key: key, nClicks: item.nClicks });
    }
  }
}

items.sort((a, b) => b.nClicks - a.nClicks);

var topFiveKeys = items.slice(0, 5).map((item) => item.key);

localStorage.setItem("topFiveKeys", JSON.stringify(topFiveKeys));

var semAcessos = document.getElementById("semAcessos");
var maisAcessadas = document.getElementById("maisAcessadas");

if (items.length == 0) {
  semAcessos.style.display = "flex";
} else {
  semAcessos.style.display = "none";

  for (var i = 0; i < topFiveKeys.length; i++) {
    var itemKey = topFiveKeys[i];

    for (var j = 0; j < localStorage.length; j++) {
      var chaveLC = localStorage.key(j);

      if (chaveLC == itemKey) {
        var itemLC = localStorage.getItem(chaveLC);
        var itemLCJSON = JSON.parse(itemLC);

        var sideBarPub = document.createElement("div");
        sideBarPub.className = "sideBarPub";
        sideBarPub.id = itemLCJSON.id;

        var imgPerfil = document.createElement("img");
        imgPerfil.src = "img/ProfileIcon.png";
        imgPerfil.alt = "";
        imgPerfil.className = "sideBarPubPic";

        var pubTxt = document.createElement("div");
        pubTxt.className = "sideBarPubTxt";

        var tituloPub = document.createElement("div");
        tituloPub.textContent = itemLCJSON.titulo;

        var autorPub = document.createElement("div");
        autorPub.className = "ultimoPubAut";
        autorPub.textContent = itemLCJSON.autor;

        var numeroAcessos = document.createElement("div");
        numeroAcessos.className = "ultimoPubResp";
        numeroAcessos.textContent = itemLCJSON.nClicks + " Acessos";

        var data_hora_objeto = new Date(itemLCJSON.data);
        var data_formatada = data_hora_objeto.toLocaleDateString("pt-BR");
        var hora_formatada = data_hora_objeto.toLocaleTimeString("pt-BR");

        var dataPub = document.createElement("div");
        dataPub.className = "tempoDesdePub";
        dataPub.textContent = data_formatada + " às " + hora_formatada;

        var respostasPub = document.createElement("div");
        respostasPub.className = "ultimoPubResp";
        respostasPub.textContent = itemLCJSON.nRespostas + " Respostas";

        pubTxt.appendChild(tituloPub);
        pubTxt.appendChild(autorPub);
        pubTxt.appendChild(dataPub);
        pubTxt.appendChild(respostasPub);
        pubTxt.appendChild(numeroAcessos);

        sideBarPub.appendChild(imgPerfil);
        sideBarPub.appendChild(pubTxt);

        maisAcessadas.appendChild(sideBarPub);
        break;
      }
    }
  }
}

//

//5 PUBS MAIS RESPONDIDAS - LANÇAR

var items2 = [];

for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);

  if (key.includes("POST") && !key.includes("RESP")) {
    var item = JSON.parse(localStorage.getItem(key));
    if (item.nRespostas !== 0) {
      items2.push({ key: key, nRespostas: item.nRespostas });
    }
  }
}

items2.sort((a, b) => b.nRespostas - a.nRespostas);

var topFiveKeys2 = items2.slice(0, 5).map((item) => item.key);

localStorage.setItem("topFiveKeys2", JSON.stringify(topFiveKeys2));

var semAcessos2 = document.getElementById("semAcessos2");
var maisAcessadas2 = document.getElementById("maisAcessadas2");

if (items2.length == 0) {
  semAcessos2.style.display = "flex";
} else {
  semAcessos2.style.display = "none";

  for (var i = 0; i < topFiveKeys2.length; i++) {
    var itemKey = topFiveKeys2[i];

    for (var j = 0; j < localStorage.length; j++) {
      var chaveLC = localStorage.key(j);

      if (chaveLC == itemKey) {
        var itemLC = localStorage.getItem(chaveLC);
        var itemLCJSON = JSON.parse(itemLC);

        var sideBarPub = document.createElement("div");
        sideBarPub.className = "sideBarPub";
        sideBarPub.id = itemLCJSON.id;

        var imgPerfil = document.createElement("img");
        imgPerfil.src = "img/ProfileIcon.png";
        imgPerfil.alt = "";
        imgPerfil.className = "sideBarPubPic";

        var pubTxt = document.createElement("div");
        pubTxt.className = "sideBarPubTxt";

        var tituloPub = document.createElement("div");
        tituloPub.textContent = itemLCJSON.titulo;

        var autorPub = document.createElement("div");
        autorPub.className = "ultimoPubAut";
        autorPub.textContent = itemLCJSON.autor;

        var numeroAcessos = document.createElement("div");
        numeroAcessos.className = "ultimoPubResp";
        numeroAcessos.textContent = itemLCJSON.nClicks + " Acessos";

        var data_hora_objeto = new Date(itemLCJSON.data);
        var data_formatada = data_hora_objeto.toLocaleDateString("pt-BR");
        var hora_formatada = data_hora_objeto.toLocaleTimeString("pt-BR");

        var dataPub = document.createElement("div");
        dataPub.className = "tempoDesdePub";
        dataPub.textContent = data_formatada + " às " + hora_formatada;

        var respostasPub = document.createElement("div");
        respostasPub.className = "ultimoPubResp";
        respostasPub.textContent = itemLCJSON.nRespostas + " Respostas";

        pubTxt.appendChild(tituloPub);
        pubTxt.appendChild(autorPub);
        pubTxt.appendChild(dataPub);
        pubTxt.appendChild(respostasPub);
        pubTxt.appendChild(numeroAcessos);

        sideBarPub.appendChild(imgPerfil);
        sideBarPub.appendChild(pubTxt);

        maisAcessadas2.appendChild(sideBarPub);
        break;
      }
    }
  }
}

//REDIRECIONAMENTO DOS POSTS

let divs = document.querySelectorAll('div[id*="POST_"]');

divs.forEach(function (div) {
  div.addEventListener("click", function () {
    let id = this.id;
    window.location.href = "forumPages/responderPost.html?id=" + id;
  });
});

//JS CARREGADO AVISOB
console.log("JS Carregado!");
