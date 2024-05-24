// DOCUMENT GET

document.getElementById("novoTpc");
document.getElementById("popUp");
document.getElementById("btFechar");
document.getElementById("textoPub");
document.getElementById("titPub");
document.getElementById("enviarPub");
document.getElementById("h2");

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

    //FUNCOES EXECUTADAS AO ABRIR

enviarPub.onmouseenter = function () {enviarPub.style.backgroundColor= "#gainsboro";}
enviarPub.onmouseleave = function () {enviarPub.style.backgroundColor= "gainsboro";}


    //DESATIVA BOTAO DE PUBLICAR

        

function desativaPub () {
    enviarPub.style.cursor= "not-allowed"
    enviarPub.onclick= function () {alert("Preencha todos os campos antes de publicar!")}

    enviarPub.onmouseenter = function () {enviarPub.style.backgroundColor= "";}
    enviarPub.onmouseleave = function () {enviarPub.style.backgroundColor= "";}
};

    // HOVER PARA DESATIVO



    //ATIVA BOTAO DE PUBLICAR

function ativaPub () {
    enviarPub.style.cursor= "pointer";
    enviarPub.style.backgroundColor= "gainsboro";
    enviarPub.onclick= fecharPU;
    enviarPub.title= "Clique para fazer sua publicação!";

    enviarPub.onmouseenter = function () {enviarPub.style.backgroundColor= "#41ae4f";}
    enviarPub.onmouseleave = function () {enviarPub.style.backgroundColor= "gainsboro";}
};

    //HOVER PARA ATIVO



    //VERIFICA CAMPOS VAZIOS E PREENCHIDOS

function validaDados () {
    if (textoPub.value == "" || titPub.value == ""){
        desativaPub ();
    } else {
        ativaPub ();
   }
}

onkeyup = validaDados;

    // COLETA DADOS
