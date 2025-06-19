const contenedor = document.getElementById("contenedor-horario");
usuarios = JSON.parse(localStorage.getItem("usuarios"));ç

const body = document.getElementById("tbody");
const fila = document.createElement("tr");
usuarios.forEach((usuario) => {
  const th = document.createElement("th");
  th.textContent = usuario;
  fila.appendChild(th);
});

body.appendChild(fila);
