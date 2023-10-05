pontosFeitos = document.querySelector("#pontos-feitos");
var imported = document.createElement("script");
imported.src = "script.js";
document.head.appendChild(imported);

function tabelaFinal(saida) {
  pontosFeitos.innerHTML = numHumano;
}
tabelaFinal();
