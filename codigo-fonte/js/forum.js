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

//HOVER

enviarPub.onmouseenter = function () {
  enviarPub.style.backgroundColor = "#gainsboro";
  enviarPub.style.color = "black";
};
enviarPub.onmouseleave = function () {
  enviarPub.style.backgroundColor = "gainsboro";
  enviarPub.style.color = "black";
};

//DESATIVA BOTAO DE PUBLICAR

function desativaPub() {
  enviarPub.style.cursor = "not-allowed";
  enviarPub.onclick = function () {
    alert("Preencha adequadamente todos os campos antes de publicar!");
  };
  enviarPub.title =
    "Preencha adequadamente todos os campos para poder publicar";

  // HOVER PARA DESATIVO
  enviarPub.onmouseenter = function () {
    enviarPub.style.backgroundColor = "";
  };
  enviarPub.onmouseleave = function () {
    enviarPub.style.backgroundColor = "";
  };
}

//ATIVA BOTAO DE PUBLICAR

function ativaPub() {
  enviarPub.style.cursor = "pointer";
  enviarPub.onclick = publicar;
  enviarPub.title = "Clique para fazer sua publicação!";

  //HOVER PARA ATIVO
  enviarPub.onmouseenter = function () {
    enviarPub.style.backgroundColor = "#41ae4f";
    enviarPub.style.color = "white";
  };
  enviarPub.onmouseleave = function () {
    enviarPub.style.backgroundColor = "gainsboro";
    enviarPub.style.color = "black";
  };
}

//VERIFICAÇÃO DE CAMPOS

//CAMPOS VAZIOS
function validaDados() {
  if (textoPub.value == "" || titPub.value == "" || temaTpc.value == "NULO") {
    desativaPub();
  } else {
    ativaPub();
  }

  //MENSAGENS VERMELHAS DE TEXTO OU TITULO CURTOS

  let valorTxt = textoPub.value;
  let valorTit = titPub.value;

  function eTxtCurto() {
    txtCurto.textContent = "*O texto está muito curto!";
  }
  function eTxtLongo() {
    txtCurto.textContent = "";
  }

  function eTitCurto() {
    titCurto.textContent = "*O título está muito curto!";
  }
  function eTitLongo() {
    titCurto.textContent = "";
  }
  function eTemaNulo() {
    opcInval.textContent = "*Você deve selecionar alguma opção!";
  }
  function eTemaCerto() {
    opcInval.textContent = "";
  }

  if (valorTxt.length < 10 && valorTxt.length !== "") {
    eTxtCurto();
    desativaPub();
  } else {
    eTxtLongo();
  }

  if (valorTit.length < 5 && valorTit.length !== "") {
    eTitCurto();
    desativaPub();
  } else {
    eTitLongo();
  }

  if (temaTpc.value == "NULO") {
    eTemaNulo();
    desativaPub();
  } else {
    eTemaCerto();
  }
}

//RECONHECENDORES DE INPUT PARA EXECUTAR A VALIDAÇÃO

textoPub.oninput = validaDados;
titPub.oninput = validaDados;
temaTpc.onchange = validaDados;

// FUNCAO PUBLICAR DE FATO

function publicar() {
  //ENVIAR DADOS AO LOCAL STORAGE E FECHAR

  var Publicacao = {
    titulo: titPub.value,
    texto: textoPub.value,
    tema: temaTpc.value,
    autor: usuarioString,
  };

  //CRIANDO NUMERO PARA CHAVE idPost

  var nPost = localStorage.length;
  nPost += 1;

  var idPost = "POST_" + temaTpc.value + "_" + nPost;

  var postString = JSON.stringify(Publicacao);

  localStorage.setItem(idPost, postString);

  popUp.style.display = "none";

  // REFRESH NA PAGINA
  setTimeout(function () {
    location.reload();
  }, 100);
  ///
}

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

//EXIBIR NAS DIVS

for (var l = 1; l < 6; l++) {
  document.getElementById("ultimoPub" + l);
  var Titulo = document.getElementById("ultimoPubTit" + l);
  var Autor = document.getElementById("ultimoPubAut" + l);
  var Respostas = document.getElementById("ultimoPubResp" + l);
  var Data = document.getElementById("ultimoPubData" + l);
  var Hora = document.getElementById("ultimoPubHora" + l);

  var nomeDaChave = maioresIDs[l - 1].chave;

  for (var k = 0; k < localStorage.length; k++) {
    if (nomeDaChave === Object.keys(localStorage)[k]) {
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
