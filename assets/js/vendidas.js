// Lista de figuras vendidas
const figurasVendidas = [
  { nombre: "Papagayo", valor: "39.000 COP", imagen: "./assets/img/imgVendidas/vendida1.png" },
  { nombre: "Portalápiz Yoshi", valor: "13.600 COP", imagen: "./assets/img/imgVendidas/vendida2.png" },
  { nombre: "Niña Virgen Guadalupe", valor: "57.500 COP", imagen: "./assets/img/imgVendidas/vendida3.png" },
  { nombre: "Alitas de mesa", valor: "14.900 COP", imagen: "./assets/img/imgVendidas/vendida4.png" },
  { nombre: "Cajita", valor: "7.500 COP", imagen: "./assets/img/imgVendidas/vendida5.png" },
  { nombre: "Perrito", valor: "6.300 COP", imagen: "./assets/img/imgVendidas/vendida6.png" },
  { nombre: "Joyero", valor: "15.000 COP", imagen: "./assets/img/imgVendidas/vendida7.png" },
  { nombre: "Florero", valor: "15.0000 COP", imagen: "./assets/img/imgVendidas/vendida8.png" },
  { nombre: "Minion Portalápiz", valor: "8.000 COP", imagen: "./assets/img/imgVendidas/vendida9.png" },
  { nombre: "Portalapices", valor: "9.500 COP", imagen: "./assets/img/imgVendidas/vendida10.png" },
  { nombre: "Osita", valor: "8.000 COP", imagen: "./assets/img/imgVendidas/vendida11.png" }
];

const galleryVendidas = document.getElementById("gallery-vendidas");

figurasVendidas.forEach((figura) => {
  let html = `
    <div class="col">
      <div class="seccion mb-3 p-3 border rounded shadow-sm text-center h-100">
        <h5>${figura.nombre}</h5>
        <img src="${figura.imagen}" class="img-fluid rounded shadow">
        <p class="mt-2"><strong>Valor:</strong> ${figura.valor}</p>
      </div>
    </div>`;
  galleryVendidas.innerHTML += html;
});
