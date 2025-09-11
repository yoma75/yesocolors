
const figuras = [
  { nombre: "Joyero", valor: "15.000 COP", codigo: "F1", tamaño: "10 x 6cm" },
  { nombre: "Vaca blanca", valor: "15.600 COP", codigo: "F2", tamaño: "24 x 7cm" },
  { nombre: "Alas Pared", valor: "37.500 COP", codigo: "F3", tamaño: "43 x 11cm" },
  { nombre: "Florero", valor: "18.500 COP", codigo: "F4", tamaño: "6 x 10cm" },
  { nombre: "Vaca", valor: "15.600 COP", codigo: "F5", tamaño: "8 x 9cm" },
  { nombre: "Espejitos", valor: "14.000 c/u", codigo: "F6", tamaño: "7 x 8cm" },
  { nombre: "Escudo SantaFe", valor: "9.000 COP", codigo: "F7", tamaño: "11 x 13cm" },
  { nombre: "Escudo Nacional", valor: "9.000 COP", codigo: "F8", tamaño: "9 x 14cm" },
  { nombre: "Florero", valor: "15.000 COP", codigo: "F9", tamaño: "10 x 19cm" },
  { nombre: "Alas-angel Candelabro", valor: "15.000 COP", codigo: "F10", tamaño: "9 x 10cm" },
  { nombre: "Materitas", valor: "7.250 c/u COP", codigo: "F11", tamaño: "5 x 5cm" },
  { nombre: "Mano Candelabro", valor: "15.000 COP", codigo: "F12", tamaño: "8 x 13cm" },
  { nombre: "Buda", valor: "26.300 COP", codigo: "F13", tamaño: "14 x 20cm" },
  { nombre: "Gato", valor: "19.500 COP", codigo: "F14", tamaño: "23 x 12cm" },
  { nombre: "Cuadro Castillo", valor: "95.000 COP", codigo: "F15", tamaño: "30 x 23cm" },
  { nombre: "Sagrado Corazón de Jesús", valor: "54.900 COP", codigo: "F16", tamaño: "19 x 26cm" },
  { nombre: "Florero", valor: "15.000 COP", codigo: "F17", tamaño: "8 x 10cm" },
  { nombre: "Marranito Winnie Pooh", valor: "8.900 COP", codigo: "F18", tamaño: "4 x 5cm" },
  { nombre: "Marranito Deportivo", valor: "8.900 COP", codigo: "F19", tamaño: "4 x 5cm" },
  { nombre: "Marranito Bellota", valor: "8.900 COP", codigo: "F20", tamaño: "4 x 5cm" },
  { nombre: "Ositos", valor: "12.500 c/u COP", codigo: "F21", tamaño: "5 x 6cm" },
  { nombre: "Minión Portalápiz", valor: "8.300 COP", codigo: "F22", tamaño: "4 x 10cm" }
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