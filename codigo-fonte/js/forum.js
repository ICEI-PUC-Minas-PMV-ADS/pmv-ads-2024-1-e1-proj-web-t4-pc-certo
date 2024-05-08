//ABRIR POP UP NOVO TOPICO

document.getElementById("novoTpc").addEventListener("click", function () {
    document.getElementById("pop-up").style.display = "block";
});

// FECHAR POP UP

document.getElementById("botaoFechar").addEventListener("click", function() {
    document.getElementById("pop-up").style.display = "none";
  });

//FECHAR AO CLICAR FORA

document.addEventListener("click", function(event) {
    var popUp = document.getElementById("pop-up");
    if (event.target === popUp) {
        document.getElementById("pop-up").style.display = "none";
    }
});

// PUBLICAR

  document.getElementById("botaoFechar").addEventListener('click', function() {
    document.getElementById("pop-up").style.display ="none";
  });

