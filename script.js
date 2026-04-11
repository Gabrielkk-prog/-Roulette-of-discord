const roleta = document.getElementById("roleta");
const resultado = document.getElementById("resultado");
const girarBtn = document.getElementById("girar");

const opcoes = ["2024", "2025", "2026", "2027", "2028"];

function desenharRoleta() {
  const total = opcoes.length;
  const angulo = 360 / total;

  let gradiente = "conic-gradient(";

  opcoes.forEach((_, i) => {
    gradiente += `
      hsl(${270 + i * 10}, 80%, 50%) ${i * angulo}deg ${(i + 1) * angulo}deg,
    `;
  });

  roleta.style.background = gradiente.slice(0, -1) + ")";
}

desenharRoleta();

girarBtn.addEventListener("click", () => {
  const index = Math.floor(Math.random() * opcoes.length);
  const angulo = 360 * 6 + (index * (360 / opcoes.length));

  roleta.style.transform = `rotate(${angulo}deg)`;

  setTimeout(() => {
    resultado.textContent = "Resultado: " + opcoes[index];
  }, 4000);
});