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
  { nombre: "Osita", valor: "8.000 COP", imagen: "./assets/img/imgVendidas/vendida11.png" },
  { nombre: "Niña Bailarina", valor: "14.400 COP", imagen: "./assets/img/imgVendidas/vendida12.png" },
  { nombre: "Candelabro Ala Angel", valor: "12.000 COP", imagen: "./assets/img/imgVendidas/vendida13.png" },
  { nombre: "Materitas", valor: "7.250 c/u COP", imagen: "./assets/img/imgVendidas/vendida14.png" },
  { nombre: "Piedras Imantadas Grupo A", valor: "3.500 c/u = 31.500 COP", imagen: "./assets/img/imgVendidas/vendida15.png" },
  { nombre: "Piedras Imantadas Grupo B", valor: "2.500 c/u = 45.000 COP", imagen: "./assets/img/imgVendidas/vendida16.png" },
  { nombre: "Piedras Imantadas Grupo C", valor: "11.500 COP", imagen: "./assets/img/imgVendidas/vendida17.png" },
  { nombre: "Florero Decorativo", valor: "18.500 COP", imagen: "./assets/img/imgVendidas/vendida18.png" }
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
