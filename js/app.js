document
  .getElementById("btnThemeDark")
  .addEventListener("click", () => cambiarTema("dark"));
document
  .getElementById("btnThemeLight")
  .addEventListener("click", () => cambiarTema("light"));

function cambiarTema(color) {
  let body = document.querySelector("body");
  //let body = document.getElementsByTagName('body');
  body.setAttribute("data-bs-theme", color);
  //actualizar el icono
  color === "dark"
    ? (document.getElementById("iconTheme").className = "bi bi-moon-stars-fill")
    : (document.getElementById("iconTheme").className =
        "bi bi-brightness-high-fill");
}
