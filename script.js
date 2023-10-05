let botao1 = document.querySelector(".botao1");
let botao2 = document.querySelector(".botao2");
let botao3 = document.querySelector(".botao3");
let placar = document.querySelector("#placar");
let placarHumano = document.querySelector("#placar-humano");
let placarAlexa = document.querySelector("#placar-alexa");
let placarEmpate = document.querySelector("#placar-empate");
let escolhaAlexa = document.querySelector("#escolha-Alexa");
let numHumano = 0;
let numAlexa = 0;
let placaEmpate = 0;

/* crinado as arrowfunction com parametro
 estou indo nos botoes no HTML com o TARGET, estou verificando qual é o elemento 
e trazendo o nome que está no id */
botao1.addEventListener("click", (e) => {
  console.log(e.target.id);
  saida(e.target.id, placas());
});
botao2.addEventListener("click", (e) => {
  console.log(e.target.id);
  saida(e.target.id, placas());
});
botao3.addEventListener("click", (e) => {
  console.log(e.target.id);
  saida(e.target.id, placas());
});
// Gerando o elemento aleatorio da Alexa
const placas = () => {
  const palavra = ["Pedra", "Papel", "Tessoura"];
  const alexa = [Math.floor(Math.random() * palavra.length)];
  return palavra[alexa];
};

const saida = (humano, maquina) => {
  console.log("humano:" + humano + " maquina:" + maquina);

  if (humano === maquina.toLowerCase()) {
    escolhaAlexa.innerHTML = maquina;
    placar.innerHTML = "EMPATE";
    placaEmpate = placaEmpate + 1;
  } else if (
    (humano === "pedra" && maquina === "Tessoura") ||
    (humano === "tessoura" && maquina === "Papel") ||
    (humano === "papel" && maquina === "Pedra")
  ) {
    escolhaAlexa.innerHTML = maquina;
    placar.innerHTML = "VOCÊ GANHOU!";
    numHumano = numHumano + 1;
    // placarHumano.innerHTML = numHumano;
  } else {
    escolhaAlexa.innerHTML = maquina;
    placar.innerHTML = "ALEXA GANHOU!";
    numAlexa = numAlexa + 1;
    //placarAlexa.innerHTML = numAlexa;
  }
};
buttonResult = document.querySelector(".buttonResult");
pontuar = document.querySelector("#pontuar");
botoes = document.querySelector("#botoes");
alexaEscolha = document.querySelector("#alexaEscolha");

function resultfinal() {
  placarHumano.innerHTML = numHumano;
  placarAlexa.innerHTML = numAlexa;
  placarEmpate.innerHTML = placaEmpate;
  buttonResult.style.marginBottom = "50px";
  if (pontuar.style.display == "block") {
    pontuar.style.display = "none";
  } else {
    pontuar.style.display = "block";
  }
  botao1.style.display = "none";
  botao2.style.display = "none";
  botao3.style.display = "none";
  placar.style.display = "none";
  alexaEscolha.style.display = "none";

  document.getElementById("replay").addEventListener("click", () => {
    history.back();
  });
}
buttonResult.addEventListener("click", resultfinal);
