const roleta = document.getElementById("roleta");
const girarBtn = document.getElementById("girar");
const resultado = document.getElementById("resultado");
const entrada = document.getElementById("entrada");
const salvarBtn = document.getElementById("salvar");

let opcoes = JSON.parse(localStorage.getItem("opcoes")) || [
  "Estudar",
  "Treinar",
  "Descansar",
  "Programar",
  "Ler",
  "Focar"
];

entrada.value = opcoes.join(", ");

function gerarCores(qtd) {
  const cores = [];
  for (let i = 0; i < qtd; i++) {
    cores.push(`hsl(${(360 / qtd) * i}, 80%, 60%)`);
  }
  return cores;
}

function desenharRoleta() {
  const cores = gerarCores(opcoes.length);
  const angulo = 360 / opcoes.length;

  let gradiente = "conic-gradient(";

  opcoes.forEach((_, i) => {
    gradiente += `${cores[i]} ${i * angulo}deg ${(i + 1) * angulo}deg,`;
  });

  roleta.style.background = gradiente.slice(0, -1) + ")";
}

desenharRoleta();

salvarBtn.addEventListener("click", () => {
  opcoes = entrada.value.split(",").map(o => o.trim()).filter(o => o);
  localStorage.setItem("opcoes", JSON.stringify(opcoes));
  desenharRoleta();
});

girarBtn.addEventListener("click", () => {
  const index = Math.floor(Math.random() * opcoes.length);
  const angulo = 360 * 5 + (index * (360 / opcoes.length));

  roleta.style.transform = `rotate(${angulo}deg)`;

  setTimeout(() => {
    resultado.textContent = "Resultado: " + opcoes[index];
  }, 3000);
});