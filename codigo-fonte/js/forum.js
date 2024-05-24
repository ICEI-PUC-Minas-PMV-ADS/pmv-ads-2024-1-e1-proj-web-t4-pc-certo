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

    textoPub.value = "";
    titPub.value = "";
    
    enviarPub.onmouseenter = function () {
        enviarPub.style.backgroundColor= "";
        enviarPub.style.color= "";
}
    enviarPub.onmouseleave = function () {
        enviarPub.style.backgroundColor= "";
        enviarPub.style.color= "";
};
}

function fecharPU () {


    if (textoPub.value !== "" || titPub.value !== ""){
        const confirmar = confirm("Descartar anotações e sair?");
        if (!confirmar) {
            return;
        }
    }
    popUp.style.display= "none";

    

};

novoTpc.onclick = abrirPU;
btFechar.onclick = fecharPU;

// FUNÇÃO PUBLICAR

    //FUNCOES EXECUTADAS AO ABRIR
        //HOVER
        enviarPub.onmouseenter = function () {
            enviarPub.style.backgroundColor= "#gainsboro";
            enviarPub.style.color= "black";
}
        enviarPub.onmouseleave = function () {
            enviarPub.style.backgroundColor= "gainsboro";
            enviarPub.style.color= "black";
}
        //LIMPAR AREAS
        textoPub.value = "";
        titPub.value = "";


    //DESATIVA BOTAO DE PUBLICAR

function desativaPub () {
    enviarPub.style.cursor= "not-allowed"
    enviarPub.onclick= function () {alert("Preencha todos os campos antes de publicar!")}
        // HOVER PARA DESATIVO
    enviarPub.onmouseenter = function () {enviarPub.style.backgroundColor= "";}
    enviarPub.onmouseleave = function () {enviarPub.style.backgroundColor= "";}
};

    //ATIVA BOTAO DE PUBLICAR

function ativaPub () {
    enviarPub.style.cursor= "pointer";
    enviarPub.style.backgroundColor= "gainsboro";
    enviarPub.onclick= "";
    enviarPub.title= "Clique para fazer sua publicação!";
        //HOVER PARA ATIVO
    enviarPub.onmouseenter = function () {
        enviarPub.style.backgroundColor= "#41ae4f";
        enviarPub.style.color= "white";
    }
    enviarPub.onmouseleave = function () {
        enviarPub.style.backgroundColor= "gainsboro";
        enviarPub.style.color= "black";
    }
};

    //VERIFICA CAMPOS VAZIOS E PREENCHIDOS

function validaDados () {
    if (textoPub.value == "" || titPub.value == ""){
        desativaPub ();
    } else {
        ativaPub ();
   }
}

onkeyup = validaDados

    //COLETA DADOS