// DOCUMENT GET

document.getElementById("novoTpc");
document.getElementById("popUp");
document.getElementById("btFechar");
document.getElementById("textoPub");
document.getElementById("titPub");
document.getElementById("enviarPub");

// FUNÇÃO ABRIR E FECHAR POP UP NOVO TOPICO

function abrirPU () {
    popUp.style.display= "flex";
    titPub.focus();
};

function fecharPU () {
    popUp.style.display= "none";
};

novoTpc.onclick = abrirPU;
btFechar.onclick = fecharPU;

// FUNÇÃO PUBLICAR

    // VERIFICA CAMPOS VAZIOS

var desativaPub = true

function validaDados () {
   if (textoPub.value == "" || titPub.value == ""){
    desativaPub = true;
   } else {
    desativaPub = false;
   }
   function desativaPub
}

onkeyup = validaDados;

    // COLETA DADOS

    