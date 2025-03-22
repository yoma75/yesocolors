const figuras = [
  { nombre: "Yoshi", valor: "6.000 COP", codigo: "F1" },
  { nombre: "Corazón con Alas", valor: "9.000 COP", codigo: "F2" },
  { nombre: "Alas Grandes", valor: "19.000 COP", codigo: "F3" },
  { nombre: "Matera Cuadrada", valor: "5.500 COP", codigo: "F4" },
  { nombre: "Vaca", valor: "6.500 COP", codigo: "F5" },
  { nombre: "Alcancía Virgen", valor: "16.700 COP", codigo: "F6" },
  { nombre: "Florero", valor: "14.000 COP", codigo: "F7" },
  { nombre: "Escudo Nacional", valor: "6.000 COP", codigo: "F8" }
];

const gallery = document.getElementById("gallery");

figuras.forEach((figura, index) => {
  let thumbnails = "";
  for (let angle = 1; angle <= 3; angle++) {
    thumbnails += `<img src="./assets/img/figura${index + 1}_a${angle}.png" class="thumbnail" onclick="changeImage(${index}, '${angle}')">`;
  }

  let html = `
            <div class="col">
                <div class="seccion mb-3 p-3 border rounded shadow-sm text-center">
                    <h5>${figura.nombre}</h5>
                    <img id="mainImage${index}" src="./assets/img/figura${index + 1}_a1.png" class="main-image img-fluid rounded shadow" onclick="showModalImage(this.src)">
                    <div class="mt-2">${thumbnails}</div>
                    <p class="mt-2"><strong>Valor:</strong> ${figura.valor}</p>
                    <p><strong>Código de Venta:</strong> ${figura.codigo}</p>
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