const form = document.getElementById("myForm");
const modal = document.getElementById("modalFooter");
const span = document.getElementsByClassName("close")[0];
const nombreModal = document.getElementById("nombreModal");
const emailModal = document.getElementById("emailModal");
const comentarioModal = document.getElementById("comentarioModal");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validación básica
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const comentario = document.getElementById("comentario").value;

  if (!nombre || !email) {
    alert("Por favor, completa los campos de nombre y correo electrónico.");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  // Mostrar el modal y llenar los datos
  modal.style.display = "block";
  nombreModal.textContent = nombre;
  emailModal.textContent = email;
  comentarioModal.textContent = comentario;

  // Reiniciar el formulario
  form.reset();
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Cerrar el modal
span.onclick = function () {
  modal.style.display = "none";
};
