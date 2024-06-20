const usuarioString = localStorage.getItem("nomeCadastro"); // DECLARA VAR USUARIO
const login = localStorage.getItem("Login"); // VERIFICAÇÃO DE LOGIN

var tpcEm = document.getElementById("novoTpcEm"); // VAR NOVO TOPICO "EM X"

if (!login) {
  alert("É necessario estar logado para fazer uma publicação!");
  window.location.href = "../Forum.html";
}

titPub.focus(); //FOCA NO TITULO

//LIMPA O FORMULARO
textoPub.value = "";
titPub.value = "";
temaTpc.value = "NULO";
///

//VALIDA DADOS ANTES DE PUBLICAR
enviarPub.onclick = validaDados;

function validaDados() {
  if (
    temaTpc.value !== "NULO" &&
    textoPub.value.length >= 20 &&
    titPub.value.length >= 7
  ) {
    publicar();
  } else {
    if (temaTpc.value == "NULO") {
      opcInval.textContent = "*Você deve selecionar alguma opção!";
      temaTpc.classList.remove("formNormal");
      temaTpc.classList.add("formErro");
    }
    if (textoPub.value.length < 20) {
      txtCurto.textContent = "*O texto está muito curto!";
      textoPub.classList.remove("formNormal");
      textoPub.classList.add("formErro");
    }
    if (titPub.value.length < 5) {
      titCurto.textContent = "*O título está muito curto!";
      titPub.classList.remove("formNormal");
      titPub.classList.add("formErro");
    }
  }
}

textoPub.oninput = eFormNormal;
titPub.oninput = eFormNormal;

temaTpc.onchange = function () {
  eFormNormal();
  mostraNovoTpcEm();
};
///

//ESTETICA PARA QUANDO DADOS NAO FORAM VALIDADOS
function mostraNovoTpcEm() {
  if (temaTpc.value !== "NULO") {
    tpcEm.textContent = "em #" + temaTpc.value;
  } else {
    tpcEm.textContent = "";
  }
}

function eFormNormal() {
  if (temaTpc.value !== "NULO") {
    opcInval.textContent = "";
    temaTpc.classList.remove("formErro");
    temaTpc.classList.add("formNormal");
  }
  if (textoPub.value.length >= 20) {
    txtCurto.textContent = "";
    textoPub.classList.remove("formErro");
    textoPub.classList.add("formNormal");
  }
  if (titPub.value.length >= 7) {
    titCurto.textContent = "";
    titPub.classList.remove("formErro");
    titPub.classList.add("formNormal");
  }
}
///

// FUNCAO PUBLICAR DE FATO
function publicar() {
  let dataPost = new Date();
  clickCounter = 0;
  repCounter = 0;

  //CRIAR ID UNICO

  var nPost = localStorage.length;
  nPost += 1;

  var idPost = "POST_" + temaTpc.value + "_" + nPost;

  //ENVIAR DADOS AO LOCAL STORAGE E FECHAR
  var Publicacao = {
    titulo: titPub.value,
    texto: textoPub.value,
    tema: temaTpc.value,
    autor: usuarioString,
    data: dataPost,
    nClicks: clickCounter,
    nRespostas: repCounter,
    id: idPost,
  };
  ///

  var postString = JSON.stringify(Publicacao);

  localStorage.setItem(idPost, postString);

  window.location.href = "forumPubFeita.html?id=" + idPost;
  ///
}

// SUMIR ICONES DO FORUM SE NAO TIVER LOGADO

if (usuarioString !== null) {
  iconesForum.classList.remove("forumSlctOpt");
} else {
  iconesForum.style.display = "none";
}

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
