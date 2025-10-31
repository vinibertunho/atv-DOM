// Alternância e seleção de tema com escolha de cor
const botaoTema = document.getElementById("tema-btn");
const body = document.body;
const temaSelect = document.createElement("select");
temaSelect.id = "tema-select";
temaSelect.innerHTML = `
  <option value="light">Claro 🌙</option>
  <option value="dark">Escuro ☀️</option>
  <option value="blue">Azul 🔵</option>
  <option value="purple">Roxo 🟣</option>
  <option value="green">Verde 🟢</option>
  <option value="red">Vermelho 🔴</option>
`;
botaoTema.after(temaSelect);

// Função para aplicar tema
function aplicarTema(tema) {
  body.className = ""; // Limpa classes anteriores
  switch (tema) {
    case "dark":
      body.classList.add("dark-mode");
      botaoTema.textContent = "☀️";
      break;
    case "blue":
      body.classList.add("blue-mode");
      botaoTema.textContent = "🔵";
      break;
      case "purple":
      body.classList.add("purple-mode");
      botaoTema.textContent = "🟣";
      break;
    case "red":
      body.classList.add("red-mode");
      botaoTema.textContent = "🔴";
      break;
    default:
      body.classList.add("light-mode");
      botaoTema.textContent = "🌙";
      break;
  }
  localStorage.setItem("tema", tema);
}

// Alternância rápida entre claro/escuro
botaoTema.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    aplicarTema("light");
    temaSelect.value = "light";
  } else {
    aplicarTema("dark");
    temaSelect.value = "dark";
  }
});

// Seleção de tema por cor
temaSelect.addEventListener("change", (e) => {
  aplicarTema(e.target.value);
});

// Carrega tema salvo
const temaSalvo = localStorage.getItem("tema") || "light";
aplicarTema(temaSalvo);
temaSelect.value = temaSalvo;

// Atualiza o ano automaticamente no rodapé
const anoSpan = document.getElementById("ano");
anoSpan.textContent = new Date().getFullYear();
