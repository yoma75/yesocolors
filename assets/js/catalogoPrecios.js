// ==========================================
// BASE DE DATOS DE PIEDRAS
// ==========================================
const piedras = [
  // BÁSICAS ($3.000)
  {
    nombre: "Pato",
    codigo: "SC-001",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra1.png",
  },
  {
    nombre: "Tiburon",
    codigo: "SC-002",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra2.png",
  },
  {
    nombre: "Ave",
    codigo: "SC-003",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra3.png",
  },
  {
    nombre: "Pollito 1",
    codigo: "SC-004",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra4.png",
  },
  {
    nombre: "Pollito 2",
    codigo: "SC-005",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra5.png",
  },
  {
    nombre: "Mariquita",
    codigo: "SC-006",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra6.png",
  },
  {
    nombre: "Pollito Cascara",
    codigo: "SC-007",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra7.png",
  },
  {
    nombre: "Angry Bird Blue",
    codigo: "SC-008",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra8.png",
  },
  {
    nombre: "Angry Bird Yellow",
    codigo: "SC-009",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra9.png",
  },
  {
    nombre: "Papa Noel 1",
    codigo: "SC-010",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra10.png",
  },
  {
    nombre: "Papa Noel 2",
    codigo: "SC-011",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra11.png",
  },
  {
    nombre: "Bob Esponja 1",
    codigo: "SC-012",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra12.png",
  },
  {
    nombre: "Bob Esponja 2",
    codigo: "SC-013",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra13.png",
  },
  {
    nombre: "Carita Nieve",
    codigo: "SC-014",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra14.png",
  },
  {
    nombre: "Fantasma Calabaza",
    codigo: "SC-015",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra15.png",
  },
  {
    nombre: "Nomo 1",
    codigo: "SC-016",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra16.png",
  },
  {
    nombre: "Carita Black",
    codigo: "SC-017",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra17.png",
  },
  {
    nombre: "Hongo Bross",
    codigo: "SC-018",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra18.png",
  },
  {
    nombre: "PacMan 1",
    codigo: "SC-019",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra19.png",
  },
  {
    nombre: "Niño Nieve",
    codigo: "SC-020",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra20.png",
  },
  {
    nombre: "Frank",
    codigo: "SC-021",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra21.png",
  },
  {
    nombre: "M y M Red",
    codigo: "SC-022",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra22.png",
  },
  {
    nombre: "M y M Green",
    codigo: "SC-023",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra23.png",
  },
  {
    nombre: "Niño Pirata",
    codigo: "SC-024",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra24.png",
  },
  {
    nombre: "Carita fantasma",
    codigo: "SC-025",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra25.png",
  },
  {
    nombre: "Emoji 1",
    codigo: "SC-026",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra26.png",
  },
  {
    nombre: "Patricio",
    codigo: "SC-043",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra43.png",
  },
  {
    nombre: "Papa Noel 5",
    codigo: "SC-044",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra44.png",
  },
  {
    nombre: "Pan Frances",
    codigo: "SC-045",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra45.png",
  },
  {
    nombre: "Faro",
    codigo: "SC-050",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra50.png",
  },
  {
    nombre: "Zombie Chic",
    codigo: "SC-038",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra38.png",
  },
  {
    nombre: "Dedo Humano",
    codigo: "SC-039",
    precio: 3000,
    categoria: "basicas",
    imagen: "./assets/img/imgCatalogo/piedra39.png",
  },

  // DETALLADAS ($4.000)
  {
    nombre: "Automovil",
    codigo: "SC-027",
    precio: 4000,
    categoria: "detalladas",
    imagen: "./assets/img/imgCatalogo/piedra27.png",
  },
  {
    nombre: "Casa Fantasma",
    codigo: "SC-028",
    precio: 4000,
    categoria: "detalladas",
    imagen: "./assets/img/imgCatalogo/piedra28.png",
  },
  {
    nombre: "Brasier",
    codigo: "SC-029",
    precio: 4000,
    categoria: "detalladas",
    imagen: "./assets/img/imgCatalogo/piedra29.png",
  },
  {
    nombre: "Papa Noel 4",
    codigo: "SC-030",
    precio: 4000,
    categoria: "detalladas",
    imagen: "./assets/img/imgCatalogo/piedra30.png",
  },
  {
    nombre: "Monster 1",
    codigo: "SC-031",
    precio: 4000,
    categoria: "detalladas",
    imagen: "./assets/img/imgCatalogo/piedra31.png",
  },
  {
    nombre: "Hamburguesa",
    codigo: "SC-032",
    precio: 4000,
    categoria: "detalladas",
    imagen: "./assets/img/imgCatalogo/piedra32.png",
  },
  {
    nombre: "AB Yellow",
    codigo: "SC-033",
    precio: 4000,
    categoria: "detalladas",
    imagen: "./assets/img/imgCatalogo/piedra33.png",
  },
  {
    nombre: "AB Red",
    codigo: "SC-034",
    precio: 4000,
    categoria: "detalladas",
    imagen: "./assets/img/imgCatalogo/piedra34.png",
  },
  {
    nombre: "Niña Corazones",
    codigo: "SC-035",
    precio: 4000,
    categoria: "detalladas",
    imagen: "./assets/img/imgCatalogo/piedra35.png",
  },
  {
    nombre: "Pirata",
    codigo: "SC-036",
    precio: 4000,
    categoria: "detalladas",
    imagen: "./assets/img/imgCatalogo/piedra36.png",
  },
  {
    nombre: "Sandalia",
    codigo: "SC-037",
    precio: 4000,
    categoria: "detalladas",
    imagen: "./assets/img/imgCatalogo/piedra37.png",
  },
  {
    nombre: "Dedo Bruja",
    codigo: "SC-040",
    precio: 4000,
    categoria: "detalladas",
    imagen: "./assets/img/imgCatalogo/piedra40.png",
  },
  {
    nombre: "Nomo 2",
    codigo: "SC-041",
    precio: 4000,
    categoria: "detalladas",
    imagen: "./assets/img/imgCatalogo/piedra41.png",
  },
  {
    nombre: "Vampiro",
    codigo: "SC-042",
    precio: 4000,
    categoria: "detalladas",
    imagen: "./assets/img/imgCatalogo/piedra42.png",
  },

  // PREMIUM ($4.900)
  {
    nombre: "Promo 1",
    codigo: "SC-046",
    precio: 4900,
    categoria: "premium",
    imagen: "./assets/img/imgCatalogo/piedra46.png",
  },
  {
    nombre: "Monster Glass",
    codigo: "SC-047",
    precio: 4900,
    categoria: "premium",
    imagen: "./assets/img/imgCatalogo/piedra47.png",
  },
  {
    nombre: "Bob Esponja 4",
    codigo: "SC-048",
    precio: 4900,
    categoria: "premium",
    imagen: "./assets/img/imgCatalogo/piedra48.png",
  },
  {
    nombre: "Doctor",
    codigo: "SC-049",
    precio: 4900,
    categoria: "premium",
    imagen: "./assets/img/imgCatalogo/piedra49.png",
  },
  {
    nombre: "Promo 2",
    codigo: "SC-051",
    precio: 4900,
    categoria: "premium",
    imagen: "./assets/img/imgCatalogo/piedra51.png",
  },
  {
    nombre: "Sandwich",
    codigo: "SC-052",
    precio: 4900,
    categoria: "premium",
    imagen: "./assets/img/imgCatalogo/piedra52.png",
  },
];

// Renderizar piedras dinámicamente
function renderPiedras() {
  const containers = {
    basicas: document.getElementById("container-basicas"),
    detalladas: document.getElementById("container-detalladas"),
    premium: document.getElementById("container-premium"),
  };

  piedras.forEach((piedra) => {
    const card = document.createElement("div");
    card.className = `stone-card stone-item bg-white dark:bg-gray-800 rounded-3xl p-5 md:p-6 shadow-lg border-2 border-transparent cursor-pointer`;
    card.dataset.name = piedra.nombre;
    card.dataset.code = piedra.codigo;

    const hoverColor =
      piedra.precio === 3000
        ? "hover:border-pink-300 dark:hover:border-pink-600"
        : piedra.precio === 4000
          ? "hover:border-purple-300 dark:hover:border-purple-600"
          : "hover:border-amber-300 dark:hover:border-amber-600";
    card.classList.add(...hoverColor.split(" "));

    const btnGradient =
      piedra.precio === 3000
        ? "from-pink-500 to-purple-500"
        : piedra.precio === 4000
          ? "from-purple-500 to-blue-500"
          : "from-amber-500 to-pink-500";

    const filtroClass = piedra.filtro || "";

    card.innerHTML = `
      <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-4 mb-4 flex justify-center">
        <img src="${piedra.imagen}" class="w-32 h-32 object-contain bg-white rounded-xl ${filtroClass}" alt="${piedra.nombre}">
      </div>
      <h3 class="font-bold text-lg mb-1">${piedra.nombre}</h3>
      <p class="text-xs text-gray-500 dark:text-gray-400 mb-3 font-mono">Código: ${piedra.codigo}</p>
      <div class="flex items-center justify-between">
        <span class="text-xl md:text-2xl font-black gradient-colors">$ ${piedra.precio.toLocaleString("es-CO")}</span>
        <button onclick="addToCart('${piedra.nombre}', '${piedra.codigo}', ${piedra.precio})" class="px-4 py-2 bg-gradient-to-r ${btnGradient} text-white text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-md">
          Comprar
        </button>
      </div>
    `;

    if (containers[piedra.categoria]) {
      containers[piedra.categoria].appendChild(card);
    }
  });
}

// Carrito y funcionalidad
let cart = [];

function addToCart(nombre, codigo, precio) {
  const exists = cart.find((item) => item.codigo === codigo);
  if (exists) {
    showToast(`"${nombre}" ya está en tu pedido`, "info");
    return;
  }
  cart.push({ nombre, codigo, precio });
  updateMessage();
  updateFloatingButton();
  showToast(`"${nombre}" añadido al pedido`, "success");
}

function updateFloatingButton() {
  const btn = document.getElementById("finishPurchaseBtn");
  const countSpan = document.getElementById("cartCount");
  if (cart.length > 0) {
    btn.classList.remove("hidden");
    countSpan.textContent = cart.length;
  } else {
    btn.classList.add("hidden");
  }
}

function scrollToForm() {
  // Cerrar menú desplegable
  const menu = document.getElementById("purchaseMenu");
  menu.classList.add("hidden");
  menu.classList.remove("flex");

  document.getElementById("formulario").scrollIntoView({ behavior: "smooth" });
}

function updateMessage() {
  const msgField = document.getElementById("mensaje");
  if (cart.length === 0) {
    msgField.value = "";
    return;
  }
  let msg = "Hola, me gustaría comprar las siguientes piedras:\n\n";
  let total = 0;
  cart.forEach((item, i) => {
    msg += `${i + 1}. ${item.nombre} (Código: ${item.codigo}) - $${item.precio.toLocaleString("es-CO")} COP\n`;
    total += item.precio;
  });
  msg += `\n💰 Valor total aproximado: $${total.toLocaleString("es-CO")} COP\n\nQuedo atento/a a la confirmación. ¡Gracias!`;
  msgField.value = msg;
}

// ✅ NUEVO: Menú desplegable del botón Terminar compra
function togglePurchaseMenu() {
  const menu = document.getElementById("purchaseMenu");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}

// ✅ NUEVO: Enviar pedido por WhatsApp
function sendToWhatsApp() {
  if (cart.length === 0) {
    showToast("Agrega productos al carrito primero", "info");
    return;
  }

  // ⚠️ CAMBIA ESTE NÚMERO POR EL TUYO (código país + número sin espacios)
  const telefono = "573118033646";

  let mensaje = "¡Hola! 👋 Me gustaría comprar las siguientes piedras:\n\n";
  let total = 0;

  cart.forEach((item, i) => {
    mensaje += `${i + 1}. ${item.nombre} (Código: ${item.codigo}) - $${item.precio.toLocaleString("es-CO")} COP\n`;
    total += item.precio;
  });

  mensaje += `\n💰 *Valor total aproximado: $${total.toLocaleString("es-CO")} COP*\n\nQuedo atento/a a la confirmación. ¡Gracias! `;

  // Codificar el mensaje para URL
  const mensajeCodificado = encodeURIComponent(mensaje);
  const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

  // Abrir WhatsApp en nueva pestaña
  window.open(urlWhatsApp, "_blank");

  // Cerrar menú y mostrar confirmación
  togglePurchaseMenu();
  showToast("¡Abriendo WhatsApp con tu pedido!", "success");

  // Limpiar carrito después de enviar
  cart = [];
  updateFloatingButton();
}

// ✅ NUEVO: Cerrar menú al hacer clic fuera
document.addEventListener("click", (e) => {
  const menu = document.getElementById("purchaseMenu");
  const btn = document.getElementById("finishPurchaseBtn");
  if (menu && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
  }
});

// Formulario con Formspree
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      showToast(
        `¡Gracias ${nombre} ${apellido}! Tu mensaje ha sido enviado.`,
        "success",
      );
      form.reset();
      cart = [];
      updateFloatingButton();
    } else {
      showToast("Hubo un error al enviar. Intenta de nuevo.", "info");
    }
  } catch (error) {
    showToast("Error de conexión. Intenta de nuevo.", "info");
  }
});

function showToast(message, type) {
  const toast = document.createElement("div");
  const bgColor =
    type === "success"
      ? "from-green-500 to-emerald-500"
      : "from-blue-500 to-purple-500";
  toast.className = `fixed top-6 right-6 z-50 bg-gradient-to-r ${bgColor} text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 fade-in`;
  toast.innerHTML = `<i class="fas ${type === "success" ? "fa-check-circle" : "fa-info-circle"}"></i><span class="text-sm font-medium">${message}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Búsqueda
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  if (query.length < 2) {
    searchResults.classList.add("hidden");
    return;
  }
  const filtered = piedras.filter(
    (p) =>
      p.nombre.toLowerCase().includes(query) ||
      p.codigo.toLowerCase().includes(query),
  );

  if (filtered.length === 0) {
    searchResults.classList.remove("hidden");
    searchResults.innerHTML =
      '<p class="col-span-full text-center text-gray-500 py-4">No se encontraron piedras</p>';
    return;
  }
  searchResults.classList.remove("hidden");
  searchResults.innerHTML = filtered
    .map(
      (p) => `
        <div class="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-2xl flex items-center justify-between gap-3">
          <div>
            <div class="font-bold text-sm">${p.nombre}</div>
            <div class="text-xs text-gray-500 dark:text-gray-300 font-mono">${p.codigo}</div>
            <div class="text-sm font-black gradient-colors">$ ${p.precio.toLocaleString("es-CO")}</div>
          </div>
          <button onclick="addToCart('${p.nombre}', '${p.codigo}', ${p.precio})" class="px-3 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold rounded-full hover:scale-105 transition-transform shadow-md flex-shrink-0">Comprar</button>
        </div>
      `,
    )
    .join("");
});

// Tema oscuro/claro
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const htmlEl = document.documentElement;

if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  htmlEl.classList.add("dark");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}
themeToggle.addEventListener("click", () => {
  htmlEl.classList.toggle("dark");
  if (htmlEl.classList.contains("dark")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});

// Menú móvil
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
mobileMenuBtn.addEventListener("click", () =>
  mobileMenu.classList.toggle("hidden"),
);
mobileMenu
  .querySelectorAll("a")
  .forEach((link) =>
    link.addEventListener("click", () => mobileMenu.classList.add("hidden")),
  );

// Nav fijo con cambio de fondo al hacer scroll
const mainNav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    mainNav.classList.add(
      "bg-white/80",
      "dark:bg-gray-900/80",
      "backdrop-blur-md",
      "shadow-md",
      "scrolled",
    );
    mainNav.classList.remove("bg-transparent");
  } else {
    mainNav.classList.remove(
      "bg-white/80",
      "dark:bg-gray-900/80",
      "backdrop-blur-md",
      "shadow-md",
      "scrolled",
    );
    mainNav.classList.add("bg-transparent");
  }
});

// Animación al scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("fade-in");
    });
  },
  { threshold: 0.1 },
);

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  renderPiedras();
  document
    .querySelectorAll(".stone-card")
    .forEach((card) => observer.observe(card));
});

const telefono = "573118033646"; // ← CAMBIA ESTO POR TU NÚMERO REAL
