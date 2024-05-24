// DOCUMENT GET

document.getElementById("novoTpc");
document.getElementById("popUp");
document.getElementById("btFechar");
document.getElementById("textoPub");
document.getElementById("titPub");
document.getElementById("enviarPub");
document.getElementById("h2");
document.getElementById("txtCurto");

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

        txtCurto.textContent = "*O texto está muito curto!"
        titCurto.textContent = "*O título está muito curto!"
};
}

function fecharPU () {


    if (textoPub.value !== "" || titPub.value !== ""){
        const confirmar = confirm("Descartar publicação e sair?");
        if (!confirmar) {
            return;
        }
    }
    popUp.style.display= "none";
};

novoTpc.onclick = abrirPU;
btFechar.onclick = fecharPU;

// FUNÇÃO DO BOTAO DE PUBLICAR

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
    enviarPub.onclick= function () {alert("Preencha adequadamente todos os campos antes de publicar!")}

        // HOVER PARA DESATIVO
    enviarPub.onmouseenter = function () {enviarPub.style.backgroundColor= "";}
    enviarPub.onmouseleave = function () {enviarPub.style.backgroundColor= "";}
};

    //ATIVA BOTAO DE PUBLICAR

function ativaPub () {
    enviarPub.style.cursor= "pointer";
    enviarPub.onclick= publicar;
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

    //VERIFICAÇÃO DE CAMPOS

        //CAMPOS VAZIOS
function validaDados () {
    if (textoPub.value == "" || titPub.value == ""){
        desativaPub ();
    } else {
    ativaPub ();
    }
           
        //TEXTO OU TITULO CURTOS

    let valorTxt = textoPub.value;
    let valorTit = titPub.value;

    function eTxtCurto () {
        txtCurto.textContent = "*O texto está muito curto!"
    }
    function eTxtLongo () {
        txtCurto.textContent = " "
    }

    function eTitCurto () {
        titCurto.textContent = "*O título está muito curto!"
    }
    function eTitLongo () {
        titCurto.textContent = " "
    }


    if(valorTxt.length < 10 && valorTxt.length !== ""){
        eTxtCurto ();
        desativaPub ();
    } else {
        eTxtLongo ();
    }

    if(valorTit.length < 5 && valorTit.length !== ""){
        eTitCurto ();
    } else {
        eTitLongo ();
    }

 }


textoPub.oninput= validaDados;
titPub.oninput= validaDados;

    // FUNCAO PUBLICAR DE FATO    

function publicar (){

        //ENVIAR DADOS AO LOCAL STORAGE E FECHAR

var Publicacao = {
    titulo: titPub.value,
    texto: textoPub.value
};

var nomeObjeto = "objeto_" + Date.now();

var PublicacaoString = JSON.stringify(Publicacao);

localStorage.setItem(nomeObjeto, PublicacaoString)

popUp.style.display= "none";

        // CRIAR NOVA ESTRUTURA

}


