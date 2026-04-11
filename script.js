const roleta = document.getElementById("roleta");
const botao = document.getElementById("girar");
const resultado = document.getElementById("resultado");

const opcoes = [
  "N8N",
  "Expo",
  "React",
  "Criar algo que nem existe com IA's",
  "Projeto Python",
  "Projeto com Arduino",
  "Projeto Python",
  "Projeto Python"
];

botao.addEventListener("click", () => {
  const index = Math.floor(Math.random() * opcoes.length);
  const angulo = 360 * 5 + index * (360 / opcoes.length);

  roleta.style.transform = `rotate(${angulo}deg)`;

  setTimeout(() => {
    resultado.textContent = "Resultado: " + opcoes[index];
  }, 2000);
});
