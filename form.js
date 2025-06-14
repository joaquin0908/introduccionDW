document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valido = true;

    // Limpiar estilos previos
    inputs.forEach(input => input.style.border = "");

    // Validaciones
    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        valido = false;
      }
    });

    // Validar CUIT (solo números, lógica simple)
    const cuitInput = inputs[2];
    if (isNaN(cuitInput.value.trim()) || cuitInput.value.trim() === "") {
      cuitInput.style.border = "2px solid red";
      valido = false;
    }

    // Validar Email (lógica simple)
    const emailInput = inputs[3];
    if (
      !emailInput.value.includes("@") ||
      !emailInput.value.includes(".") ||
      emailInput.value.trim() === ""
    ) {
      emailInput.style.border = "2px solid red";
      valido = false;
    }

    // Validar Teléfono (solo números, lógica simple)
    const telInput = inputs[4];
    if (isNaN(telInput.value.trim()) || telInput.value.trim() === "") {
      telInput.style.border = "2px solid red";
      valido = false;
    }

    if (!valido) {
      alert("Por favor, corrige los campos marcados en rojo.");
      return;
    }

    alert("Formulario guardado (simulado).");
    form.reset();
  });

  const cancelarBtn = document.querySelector(".cancelar");
  cancelarBtn.addEventListener("click", () => {
    form.reset();
    inputs.forEach(input => input.style.border = "");
  });
});

window.addEventListener('DOMContentLoaded', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
});