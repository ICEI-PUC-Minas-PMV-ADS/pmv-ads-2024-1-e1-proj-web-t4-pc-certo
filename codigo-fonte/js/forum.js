//ABRIR POP UP NOVO TOPICO

document.getElementById("novoTpc").addEventListener("click", function () {
    document.getElementById("pop-up").style.display = "flex";
});

// FECHAR POP UP

document.getElementById("botaoFechar").addEventListener("click", function() {
    document.getElementById("pop-up").style.display = "none";
  })

  // FECHAR AO CLICAR FORA

  document.getElementById("botaoFechar").addEventListener("click", function() {
    document.getElementById("pop-up").style.display = "none";
  })


// PUBLICAR

// ARRAY DE ARMAZEM DOS TOPICOS

let topicos = [];

function publicarTopico() {

    let titulo = document.getElementById("postTitle").value;
    let conteudo = document.getElementById("textoPub").value;

    // VERIFICAR CAMPOS PREENCHIDOS

    if (titulo.trim() !== '' && conteudo.trim() !== '') {

        // CRIAR OBJETO

        let topico = {
            titulo: titulo,
            conteudo: conteudo
        };

        // ADICIONAR TOPICO AO ARRAY

        topicos.push(topico);

        // LIMPAR CAMBOS DO FORMULARIO

        document.getElementById("postTitle").value = '';
        document.getElementById("textoPub").value = '';

        // FECHAR JANELA
        
        document.getElementById("pop-up").style.display = "none";      

        // ATUALIZAR EXIBIÇÃO

        exibirTopicos();
    } else {
        alert("Por favor, preencha todos os campos antes de enviar.");
    }
}

// EXIBIR TOPICOS

function exibirTopicos() {
  let contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = '';

  // JUNTAR ITENS DOS TOPICOS DO ARRAY AO HTML

  topicos.forEach(function(topico) {
      let topicoDiv = document.createElement("div");
      topicoDiv.classList.add("topico"); 


      let tituloElement = document.createElement("h2");
      tituloElement.textContent = topico.titulo;

      let conteudoElement = document.createElement("p");
      conteudoElement.textContent = topico.conteudo;

      topicoDiv.appendChild(tituloElement);
      topicoDiv.appendChild(conteudoElement);

      contentDiv.appendChild(topicoDiv);
  });
}

// ENVIAR PUBLICAÇAÕ COM EVENT LISTENET

document.getElementById("enviarPub").addEventListener("click", publicarTopico);
