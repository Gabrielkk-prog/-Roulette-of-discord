const roleta = document.getElementById("roleta");
const resultado = document.getElementById("resultado");
const girarBtn = document.getElementById("girar");
const listaOpcoes = document.getElementById("lista-opcoes");

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

function desenharRoleta() {
  const total = opcoes.length;
  const angulo = 360 / total;

  let gradiente = "conic-gradient(";

  opcoes.forEach((_, i) => {
    gradiente += `hsl(${270 + i * 40}, 80%, 50%) ${i * angulo}deg ${(i + 1) * angulo}deg, `;
  });

  roleta.style.background = gradiente.slice(0, -2) + ")";
}

function renderizarLista() {
  listaOpcoes.innerHTML = "";
  opcoes.forEach((nome) => {
    const item = document.createElement("li");
    item.textContent = nome;
    listaOpcoes.appendChild(item);
  });
}

function limparAtivo() {
  listaOpcoes.querySelectorAll("li").forEach((item) => {
    item.classList.remove("active");
  });
}

desenharRoleta();
renderizarLista();

girarBtn.addEventListener("click", () => {
  const index = Math.floor(Math.random() * opcoes.length);
  const angulo = 360 * 6 + index * (360 / opcoes.length);

  limparAtivo();
  roleta.style.transform = `rotate(${angulo}deg)`;

  setTimeout(() => {
    resultado.textContent = "Resultado: " + opcoes[index];
    const itens = listaOpcoes.querySelectorAll("li");
    if (itens[index]) itens[index].classList.add("active");
  }, 4000);
});
