const usuarioString = localStorage.getItem("nomeCadastro"); // DECLARA VAR USUARIO

if (!usuarioString) {
  alert("É necessario criar uma conta para fazer uma publicação!");
  window.location.href = "Forum.html";
}

titPub.focus(); //FOCA NO TITULO

//LIMPA O FORMULARO
textoPub.value = "";
titPub.value = "";
temaTpc.value = "NULO";
///

//
enviarPub.onclick = validaDados;

function validaDados() {
  if (
    temaTpc.mvalue !== "NULO" &&
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
temaTpc.onchange = eFormNormal;

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
  if (titPub.value.length >= 5) {
    titCurto.textContent = "";
    titPub.classList.remove("formErro");
    titPub.classList.add("formNormal");
  }
}

/*

  function TxtCurto() {
    txtCurto.textContent = "*O texto está muito curto!";
  }
  function TxtLongo() {
    txtCurto.textContent = "";
  }
  function TitCurto() {
    titCurto.textContent = "*O título está muito curto!";
  }
  function TitLongo() {
    titCurto.textContent = "";
  }
  function TemaNulo() {
    opcInval.textContent = "*Você deve selecionar alguma opção!";
  }
  function TemaCerto() {
    opcInval.textContent = "";
  }

 */

// FUNCAO PUBLICAR DE FATO
function publicar() {
  //ENVIAR DADOS AO LOCAL STORAGE E FECHAR
  var Publicacao = {
    titulo: titPub.value,
    texto: textoPub.value,
    tema: temaTpc.value,
    autor: usuarioString,
  };
  ///

  //CRIANDO NUMERO PARA CHAVE idPost
  var nPost = localStorage.length;
  nPost += 1;

  var idPost = "POST_" + temaTpc.value + "_" + nPost;

  var postString = JSON.stringify(Publicacao);

  localStorage.setItem(idPost, postString);

  window.location.href = "publicacaoFeita.html";
  ///
}

///// CRIADORA DE DIVS /////

for (let i = 0; i < localStorage.length; i++) {
  const chaveX = localStorage.key(i);

  if (chaveX.includes("POST_")) {
    var postStr = localStorage.getItem(chaveX);
    var postJSON = JSON.parse(postStr);

    function criaDiv(postJSON) {
      // CRIA DIV DO POST
      var divPrincipal = document.createElement("div");
      divPrincipal.className = "classe" + postJSON.tema;

      //CRIA DIV DO "TEMA DO POST"
      var divQualTema = document.createElement("div");
      divQualTema.className = "qualTema";
      divQualTema.innerText = "Tema do Tópico: ";

      //CRIA DIV DO TEMA DO POST
      var divTema = document.createElement("div");
      divTema.className = "tema";
      divTema.innerText = postJSON.tema;

      // CRIA DIV DO TITULO
      var divTitulo = document.createElement("div");
      divTitulo.className = "titulo";
      divTitulo.innerText = postJSON.titulo;

      // CRIA A DIV DO TEXTO
      var divTexto = document.createElement("div");
      divTexto.className = "texto";
      divTexto.innerText = postJSON.texto;

      // CRIA A DIV "PUBLICADO POR"
      var divBy = document.createElement("div");
      divBy.className = "feitoPor";
      divBy.innerText = "Publicado por: ";

      // CRIA A DIV DO AUTOR
      var divAutor = document.createElement("div");
      divAutor.className = "autor";
      divAutor.innerText = postJSON.autor;

      // COLOCA AS DIVS COMO FILHAS DA PRINCIPAL
      divPrincipal.appendChild(divTitulo);
      divPrincipal.appendChild(divQualTema);
      divPrincipal.appendChild(divTema);
      divPrincipal.appendChild(document.createElement("br"));
      divPrincipal.appendChild(divTexto);
      divPrincipal.appendChild(document.createElement("br"));
      divPrincipal.appendChild(divBy);
      divPrincipal.appendChild(divAutor);

      // ADICIONA A DIV PRINCIPAL NA DIV mainContent
    }
    criaDiv(postJSON);
  }
}

// SUMIR ICONES DO FORUM SE NAO TIVER LOGADO

if (usuarioString !== null) {
  iconesForum.classList.remove("forumSlctOpt");
} else {
  iconesForum.style.display = "none";
}
