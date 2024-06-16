var url = window.location.href;
var partesDoUrl = url.split("_");

var temaHTML = partesDoUrl[1];

var temaLegi = "";

if (temaHTML == "Regras") {
  temaLegi = " Regras do Fórum";
}

if (temaHTML == "ERROS") {
  temaLegi = " Erros e Soluções de Problemas";
}

if (temaHTML == "UPGRADE") {
  temaLegi = " Upgrade e Troca de Peças";
}

if (temaHTML == "MOUSETECLADO") {
  temaLegi = " Mouse, Teclado e Mousepads";
}

if (temaHTML == "SUGESTOESMONTAGEM") {
  temaLegi = " Sugestões de Montagem";
}

if (temaHTML == "COMPRASONLINE") {
  temaLegi = " Sugestões de Compras Online";
}

if (temaHTML == "COMPRASLOCAIS") {
  temaLegi = " Sugestões de Compras Online";
}

if (temaHTML == "MONITORES") {
  temaLegi = " Monitores";
}

if (temaHTML == "AUDIO") {
  temaLegi = " Headsets, Microfones e Áudio";
}

if (temaHTML == "OUTROS") {
  temaLegi = " Outros Periféricos E Dispositivos";
}

if (temaHTML == "DICAS") {
  temaLegi = " Dicas de Programas de Monitoração";
}

////

if (temaHTML == "PLACADEVIDEO") {
  temaLegi = " Placas de Vídeo";
}

if (temaHTML == "PROCESSADORES") {
  temaLegi = " Processadores";
}

if (temaHTML == "PLACAMAE") {
  temaLegi = " Placas-Mãe";
}

if (temaHTML == "FONTES") {
  temaLegi = " Fontes e energia";
}

if (temaHTML == "MEMORIARAM") {
  temaLegi = " Memória RAM";
}

if (temaHTML == "ARMAZENAMENTO") {
  temaLegi = " SSD's, HDD's e Armazenamento";
}

if (temaHTML == "GABINETES") {
  temaLegi = " Gabinetes e Casemod";
}

if (temaHTML == "OUTROS") {
  temaLegi = " Peças de Refrigeração";
}

if (temaHTML == "DICAS") {
  temaLegi = " Cabos e Outras Peças";
}

temaPostJanelas = document.getElementById("temaPostJanela");

temaPostJanela.textContent = temaLegi;

temaPostJanelas.onclick = function () {
  var pagTema = "";

  if (temaHTML == "Regras") {
    pagTema = "../forumPages/exibirPosts.html?id=etcForums_Regras";
  }

  if (temaHTML == "ERROS") {
    pagTema = "../forumPages/exibirPosts.html?id=softForums_ERROS";
  }

  if (temaHTML == "UPGRADE") {
    pagTema = "../forumPages/exibirPosts.html?id=hardForums_UPGRADE";
  }

  if (temaHTML == "MOUSETECLADO") {
    pagTema = "../forumPages/exibirPosts.html?id=prfcForums_MOUSETECLADO";
  }

  if (temaHTML == "SUGESTOESMONTAGEM") {
    pagTema = "../forumPages/exibirPosts.html?id=hardForums_SUGESTOESMONTAGEM";
  }

  if (temaHTML == "COMPRASONLINE") {
    pagTema = "../forumPages/exibirPosts.html?id=buyForums_COMPRASONLINE";
  }

  if (temaHTML == "COMPRASLOCAIS") {
    pagTema = "../forumPages/exibirPosts.html?id=buyForums_COMPRASLOCAIS";
  }

  if (temaHTML == "MONITORES") {
    pagTema = "../forumPages/exibirPosts.html?id=prfcForums_MONITORES";
  }

  if (temaHTML == "AUDIO") {
    pagTema = "../forumPages/exibirPosts.html?id=prfcForums_AUDIO";
  }

  if (temaHTML == "OUTROS") {
    pagTema = "../forumPages/exibirPosts.html?id=prfcForums_OUTROS";
  }

  if (temaHTML == "DICAS") {
    pagTema = "../forumPages/exibirPosts.html?id=softForums_DICAS";
  }

  if (temaHTML == "PLACAMAE") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_PLACAMAE";
  }

  if (temaHTML == "PROCESSADORES") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_PROCESSADORES";
  }

  if (temaHTML == "PLACAMAE") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_PLACAMAE";
  }

  if (temaHTML == "FONTES") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_FONTES";
  }

  if (temaHTML == "MEMORIARAM") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_MEMORIARAM";
  }

  if (temaHTML == "ARMAZENAMENTO") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_ARMAZENAMENTO";
  }

  if (temaHTML == "GABINETES") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_GABINETES";
  }

  if (temaHTML == "OUTROS") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_OUTROS";
  }

  if (temaHTML == "DICAS") {
    pagTema = "../forumPages/exibirPosts.html?id=componentes_DICAS";
  }

  window.location.href = pagTema;
};

var divisaoUrl = url.split("=");

var idPostJanela = document.getElementById("idPostJanela");
idPostJanela.textContent = "#" + divisaoUrl[1];

//Meus posts ICONE

document.getElementById("meuPerfilPosts");

var nomeAutor = localStorage.getItem("nomeCadastro");

meuPerfilPosts.onclick = function () {
  window.location.href = "meusPosts.html?id=" + nomeAutor;
};
