// Alterna automaticamente o modo claro/escuro baseado nas preferências do sistema
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const html = document.documentElement;

function setTheme() {
  html.classList.toggle("dark", prefersDark.matches);
  html.classList.toggle("light", !prefersDark.matches);
}

prefersDark.addEventListener("change", setTheme);
setTheme();
