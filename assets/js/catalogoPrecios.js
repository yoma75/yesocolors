// 1. Organizamos nuestras piedras en una lista (Array)
const catalogoPiedras = [
  // Sección de 3.000
  { id: "Pato", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra1.png" },
  { id: "Tiburon", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra2.png" },
  { id: "Ave", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra3.png" },
  { id: "Pollito 1", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra4.png" },
  { id: "Pollito 2", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra5.png" },
  { id: "Mariquita", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra6.png" },
  { id: "Pollito cascara", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra7.png" },
  { id: "AB azul", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra8.png" },
  { id: "AB amarillo 1", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra9.png" },
  { id: "Papa Noel 1", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra10.png" },
  { id: "Papa Noel 2", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra11.png" },
  { id: "Bob Esponja 1", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra12.png" },
  { id: "Bob Esponja 2", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra13.png" },
  { id: "Carita Nieve", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra14.png" },
  { id: "Fantasma Calabaza", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra15.png" },
  { id: "Nomo 1", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra16.png" },
  { id: "Carita Negra", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra17.png" },
  { id: "Honguito Bross", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra18.png" },
  { id: "Pac Man 1", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra19.png" },
  { id: "Niño Nieve", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra20.png" },
  { id: "Frank", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra21.png" },
  { id: "M y M rojo", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra22.png" },
  { id: "M y M verde", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra23.png" },
  { id: "Niño Pirata", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra24.png" },
  { id: "Carita Fantasma", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra25.png" },
  { id: "Carita corazon", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra26.png" },
  { id: "Patricio", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra43.png" },
  { id: "Papa Noel 4", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra44.png" },
  { id: "Pan Frances", precio: 3000, imagen: "./assets/img/imgCatalogo/piedra45.png" },
  
  // Sección de 4.000
  { id: "Auto azul", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra27.png" },
  { id: "Casa Halloween", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra28.png" },
  { id: "Brasier", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra29.png" },
  { id: "Papa Noel 3", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra30.png" },
  { id: "Monstruo de un ojo", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra31.png" },
  { id: "Hamburguesa", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra32.png" },
  { id: "AB Amarillo 2", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra33.png" },
  { id: "Angry Bird Red", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra34.png" },
  { id: "Niña Amor", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra35.png" },
  { id: "Pirata", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra36.png" },
  { id: "Sandalia", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra37.png" },
  { id: "Zombie Chic", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra38.png" },
  { id: "Dedo Humano", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra39.png" },
  { id: "Dedo de Bruja", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra40.png" },
  { id: "Nomo 2", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra41.png" },
  { id: "Dracula", precio: 4000, imagen: "./assets/img/imgCatalogo/piedra42.png" },

  // Sección de 4.700
  { id: "Promocion 1", precio: 4700, imagen: "./assets/img/imgCatalogo/piedra46.png" },
  { id: "Monstruo con lentes", precio: 4700, imagen: "./assets/img/imgCatalogo/piedra47.png" },
  { id: "Bob Esponja 3", precio: 4700, imagen: "./assets/img/imgCatalogo/piedra48.png" },
  { id: "Doctor", precio: 4700, imagen: "./assets/img/imgCatalogo/piedra49.png" },
  { id: "Faro Paisaje", precio: 4700, imagen: "./assets/img/imgCatalogo/piedra50.png" },
  { id: "Promocion 2", precio: 4700, imagen: "./assets/img/imgCatalogo/piedra51.png" },
  { id: "Sanduche", precio: 4700, imagen: "./assets/img/imgCatalogo/piedra52.png" },
];

// 2. Función para dibujar las piedras en su sección correspondiente
function cargarCatalogo() {
  catalogoPiedras.forEach((piedra) => {
    // Creamos el diseño de la tarjeta (el mismo que ya tenías)
    const cardHTML = `
        <div class="col">
          <div class="card h-100 shadow-sm border-0">
            <div class="img-container">
              <img src="${piedra.imagen}" class="card-img-custom p-2" alt="Piedra ${piedra.id}">
            </div>
            <div class="card-footer bg-white border-0 text-center">
              <small class="text-muted fw-bold">${piedra.id}</small>
            </div>
          </div>
        </div>
      `;

    // Decidimos en qué contenedor meterla según el precio
    if (piedra.precio === 3000) {
      document.getElementById("contenedor-3000").innerHTML += cardHTML;
    } else if (piedra.precio === 4000) {
      document.getElementById("contenedor-4000").innerHTML += cardHTML;
    } else if (piedra.precio >= 4700) {
      document.getElementById("contenedor-4700").innerHTML += cardHTML;
    }
  });
}

// Ejecutar la función al cargar la página
cargarCatalogo();
