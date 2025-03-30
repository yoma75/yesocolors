
const figuras = [
  { nombre: "Yoshi", valor: "13.000 COP", codigo: "F1", tamaño: "7 x 11cm" },
  { nombre: "Corazón con Alas", valor: "12.600 COP", codigo: "F2", tamaño: "24 x 7cm" },
  { nombre: "Alas Pared", valor: "24.500 COP", codigo: "F3", tamaño: "43 x 11cm" },
  { nombre: "Cajita", valor: "7.500 COP", codigo: "F4", tamaño: "7 x 7cm" },
  { nombre: "Vaca", valor: "12.000 COP", codigo: "F5", tamaño: "8 x 9cm" },
  { nombre: "Alcancía Virgen", valor: "15.000 COP", codigo: "F6", tamaño: "15 x 24cm" },
  { nombre: "Escudo SantaFe", valor: "9.000 COP", codigo: "F7", tamaño: "11 x 13cm" },
  { nombre: "Escudo Nacional", valor: "9.000 COP", codigo: "F8", tamaño: "9 x 14cm" }
];

const gallery = document.getElementById("gallery");

figuras.forEach((figura, index) => {
  let thumbnails = "";
  for (let angle = 1; angle <= 3; angle++) {
    thumbnails += `<img src="./assets/img/figura${index + 1}_a${angle}.png" class="thumbnail" onclick="changeImage(${index}, '${angle}')">`;
  }

  let html = `
        <div class="col">
            <div class="seccion mb-3 p-3 border rounded shadow-sm text-center figure-container">
                <h4>${figura.nombre}</h4>
                <img id="mainImage${index}" src="./assets/img/figura${index + 1}_a1.png" class="main-image img-fluid rounded shadow" onclick="showModalImage(this.src)">
                <div class="mt-2">${thumbnails}</div>
                <p class="mt-2"><strong>Valor:</strong> ${figura.valor}</p>
                <p><strong>Código de Venta:</strong> ${figura.codigo}</p>
                <p><strong>Tamaño (ancho x alto): </strong> ${figura.tamaño}</p>
            </div>
        </div>`;
  gallery.innerHTML += html;
});

function changeImage(index, angle) {
  document.getElementById(`mainImage${index}`).src = `./assets/img/figura${index + 1}_a${angle}.png`;
}

function showModalImage(src) {
  document.getElementById("modalImage").src = src;
  var myModal = new bootstrap.Modal(document.getElementById("imageModal"));
  myModal.show();
}



// Formulario funcional 
const $form = document.querySelector('#form')

    $form.addEventListener('submit', handleSubmit)

    async function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)  /* this hace referencia al formulario */
      const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
          'Accept': 'application/json'
        }
      })
      if (response.ok) {
        this.reset()
        alert('Gracias por contactarme, te escribiré pronto')
      }
    }