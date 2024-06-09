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

const usuarioString = localStorage.getItem("nomeCadastro");

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
  if (key.startsWith("POST_")) {
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

//EXIBIR NAS DIVS ULTIMOS POSTS
for (var l = 1; l < 6; l++) {
  if (maioresIDs.length >= l) {
    let Publication = document.getElementById("ultimoPub" + l);
    let Titulo = document.getElementById("ultimoPubTit" + l);
    let Autor = document.getElementById("ultimoPubAut" + l);
    let Respostas = document.getElementById("ultimoPubResp" + l);
    let Data = document.getElementById("ultimoPubData" + l);
    let Hora = document.getElementById("ultimoPubHora" + l);

    let objeto = maioresIDs[l - 1];

    if (objeto && objeto.hasOwnProperty("chave")) {
      let nomeDaChave = objeto.chave;

      for (var k = 0; k < localStorage.length; k++) {
        if (nomeDaChave === Object.keys(localStorage)[k]) {
          Publication.style.display = "flex";

          let chave = Object.keys(localStorage)[k];
          let valor = localStorage.getItem(chave);
          let objeto = JSON.parse(valor);

          Titulo.textContent = objeto.titulo;
          Autor.textContent = objeto.autor;
          Respostas.textContent = objeto.nRespostas;

          // DATA FORMATADA
          let dataDoObjeto = new Date(objeto.data);
          let dia = dataDoObjeto.getDate().toString().padStart(2, "0");
          let mes = (dataDoObjeto.getMonth() + 1).toString().padStart(2, "0");
          let ano = dataDoObjeto.getFullYear().toString().substr(-2);
          let hora = dataDoObjeto.getHours().toString().padStart(2, "0");
          let minuto = dataDoObjeto.getMinutes().toString().padStart(2, "0");
          let dataFormatada = dia + "/" + mes + "/" + ano;

          Data.textContent = dataFormatada + " ";
          Hora.textContent = " " + hora + ":" + minuto;
        }
      }
    }
  }
}

//REDIRECIONAMENTO
const buttons = document.querySelectorAll(".eachForum");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const id = this.id;
    window.location.href = `forumPages/exibirPosts.html?id=${id}`;
  });
});
