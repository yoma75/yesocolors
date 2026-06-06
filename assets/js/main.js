window.addEventListener("scroll", () => {
  const navbar = document.getElementById("mainNav");
  if (window.scrollY > 80) {
    navbar.classList.add(
      "bg-white/80",
      "dark:bg-gray-900/80",
      "backdrop-blur-md",
      "shadow-md",
      "scrolled",
    );
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove(
      "bg-white/80",
      "dark:bg-gray-900/80",
      "backdrop-blur-md",
      "shadow-md",
      "scrolled",
    );
    navbar.classList.add("bg-transparent");
  }
});

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
mobileMenuBtn.addEventListener("click", () =>
  mobileMenu.classList.toggle("hidden"),
);
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
});

const figuras = [
  {
    nombre: "Cristo",
    valor: "25.300 COP",
    precio: 25300,
    codigo: "F1",
    tamaño: "17 x 31cm",
  },
  {
    nombre: "Vaca blanca",
    valor: "14.900 COP",
    precio: 14900,
    codigo: "F2",
    tamaño: "24 x 7cm",
  },
  {
    nombre: "Alas Pared",
    valor: "37.500 COP",
    precio: 37500,
    codigo: "F3",
    tamaño: "43 x 11cm",
  },
  {
    nombre: "Piedras Imantadas",
    valor: "2.500 - 3.500 - 4.500 c/u COP",
    precio: 2500,
    codigo: "F4",
    tamaño: "variado",
  },
  {
    nombre: "Vaca",
    valor: "14.900 COP",
    precio: 14900,
    codigo: "F5",
    tamaño: "8 x 9cm",
  },
  {
    nombre: "Espejitos",
    valor: "14.000 c/u",
    precio: 14000,
    codigo: "F6",
    tamaño: "7 x 8cm",
  },
  {
    nombre: "Escudo SantaFe",
    valor: "9.000 COP",
    precio: 9000,
    codigo: "F7",
    tamaño: "11 x 13cm",
  },
  {
    nombre: "Escudo Nacional",
    valor: "9.000 COP",
    precio: 9000,
    codigo: "F8",
    tamaño: "9 x 14cm",
  },
  {
    nombre: "Florero",
    valor: "14.300 COP",
    precio: 14300,
    codigo: "F9",
    tamaño: "10 x 19cm",
  },
  {
    nombre: "Alas-angel Candelabro",
    valor: "14.300 COP",
    precio: 14300,
    codigo: "F10",
    tamaño: "9 x 10cm",
  },
  {
    nombre: "OFERTA --> 4 unidades",
    valor: "21.000 COP",
    precio: 21000,
    codigo: "F11",
    tamaño: "5 x 5cm",
  },
  {
    nombre: "Maestro Roshi",
    valor: "28.000 COP",
    precio: 28000,
    codigo: "F12",
    tamaño: "17 x 18",
  },
  {
    nombre: "Buda",
    valor: "30.500 COP",
    precio: 30500,
    codigo: "F13",
    tamaño: "14 x 20cm",
  },
  {
    nombre: "Gato",
    valor: "27.500 COP",
    precio: 27500,
    codigo: "F14",
    tamaño: "23 x 12cm",
  },
  {
    nombre: "Cuadro Castillo",
    valor: "95.000 COP",
    precio: 95000,
    codigo: "F15",
    tamaño: "30 x 23cm",
  },
  {
    nombre: "Sagrado Corazón de Jesús",
    valor: "54.900 COP",
    precio: 54900,
    codigo: "F16",
    tamaño: "19 x 26cm",
  },
  {
    nombre: "Buda + Niños Budistas",
    valor: "44.000 COP",
    precio: 44000,
    codigo: "F17",
    tamaño: "Buda: 7 x 13cm y Niños: 4 x 5cm",
  },
  {
    nombre: "Marranito Winnie Pooh",
    valor: "6.500 COP",
    precio: 6500,
    codigo: "F18",
    tamaño: "4 x 5cm",
  },
  {
    nombre: "Marranito Deportivo",
    valor: "6.500 COP",
    precio: 6500,
    codigo: "F19",
    tamaño: "4 x 5cm",
  },
  {
    nombre: "Marranito Bellota",
    valor: "6.500 COP",
    precio: 6500,
    codigo: "F20",
    tamaño: "4 x 5cm",
  },
  {
    nombre: "Sagrada Familia",
    valor: "45.500 COP",
    precio: 45500,
    codigo: "F21",
    tamaño: "14 x 18",
  },
  {
    nombre: "Virgen de Guadalupe",
    valor: "42.500 COP",
    precio: 42500,
    codigo: "F22",
    tamaño: "11 x 22",
  },
  {
    nombre: "Piedras Imantadas",
    valor: "3.500 c/u y 4.500 c/u COP",
    precio: 3500,
    codigo: "Pd1",
    tamaño: "variado",
  },
  {
    nombre: "Corazones Imantados",
    valor: "3.000 y 4.500 c/u COP",
    precio: 3000,
    codigo: "F23",
    tamaño: "6 x 10",
  },
  {
    nombre: "Mafalda Portalapices",
    valor: "12.500 COP",
    precio: 12500,
    codigo: "F24",
    tamaño: "8 x 13cm",
  },
  {
    nombre: "Cajita matera",
    valor: "6.300 c/u COP",
    precio: 6300,
    codigo: "F25",
    tamaño: "6 x 4cm",
  },
  {
    nombre: "Niños Budistas",
    valor: "18.500 COP",
    precio: 18500,
    codigo: "F26",
    tamaño: "4 x 5cm",
  },
  {
    nombre: "Mano corazón",
    valor: "13.700 COP",
    precio: 13700,
    codigo: "F27",
    tamaño: "7 x 12",
  },
  {
    nombre: "Angry Bird Red",
    valor: "6.500 COP",
    precio: 6500,
    codigo: "F28",
    tamaño: "4 x 5cm",
  },
  {
    nombre: "Angry Bird King Pig",
    valor: "6.500 COP",
    precio: 6500,
    codigo: "F29",
    tamaño: "4 x 5cm",
  },
];

const gallery = document.getElementById("gallery");

figuras.forEach((figura, index) => {
  let thumbnails = "";
  for (let angle = 1; angle <= 3; angle++) {
    thumbnails += `<img src="./assets/img/figura${index + 1}_a${angle}.png" class="thumbnail" onclick="changeImage(${index}, '${angle}')" alt="Ángulo ${angle}">`;
  }

  const html = `
    <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
      <div class="p-5 flex flex-col items-center flex-1">
        <h4 class="text-lg md:text-xl font-bold mb-4 text-center">${figura.nombre}</h4>
        <img id="mainImage${index}" src="./assets/img/figura${index + 1}_a1.png" class="main-image rounded-xl mb-6" onclick="showModalImage(this.src)" alt="${figura.nombre}">
        <div class="flex flex-row gap-3 justify-center mb-4">${thumbnails}</div>
        <div class="text-center space-y-2 text-sm flex-1">
          <p><strong>Valor:</strong> ${figura.valor}</p>
          <p><strong>Código:</strong> <span class="font-mono">${figura.codigo}</span></p>
          <p><strong>Tamaño:</strong> ${figura.tamaño}</p>
        </div>
      </div>
      <div class="px-5 pb-5 pt-2">
        <button onclick="addToCart('${figura.nombre}', '${figura.codigo}', ${figura.precio})" class="btn-comprar w-full py-3 text-white font-bold rounded-full shadow-md text-sm flex items-center justify-center gap-2">
          <i class="fas fa-shopping-bag"></i> Comprar
        </button>
      </div>
    </div>
  `;

  gallery.innerHTML += html;
});

function changeImage(index, angle) {
  document.getElementById(`mainImage${index}`).src =
    `./assets/img/figura${index + 1}_a${angle}.png`;
}

function showModalImage(src) {
  document.getElementById("modalImage").src = src;
  document.getElementById("imageModal").classList.remove("hidden");
  document.getElementById("imageModal").classList.add("flex");
}

function closeModal() {
  document.getElementById("imageModal").classList.add("hidden");
  document.getElementById("imageModal").classList.remove("flex");
}

document.getElementById("imageModal").addEventListener("click", (e) => {
  if (e.target.id === "imageModal") closeModal();
});

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

function updateMessage() {
  const msgField = document.getElementById("mensaje");

  if (cart.length === 0) {
    msgField.value = "";
    return;
  }

  let msg = "Hola, me gustaría comprar las siguientes figuras de yeso:\n\n";
  let total = 0;

  cart.forEach((item, i) => {
    msg += `${i + 1}. ${item.nombre} (Código: ${item.codigo}) - $${item.precio.toLocaleString("es-CO")} COP\n`;
    total += item.precio;
  });

  msg += `\n💰 Valor total aproximado: $${total.toLocaleString("es-CO")} COP\n\nQuedo atento/a a la confirmación. ¡Gracias!`;
  msgField.value = msg;
}

function togglePurchaseMenu() {
  const menu = document.getElementById("purchaseMenu");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}

function scrollToForm() {
  const menu = document.getElementById("purchaseMenu");
  menu.classList.add("hidden");
  menu.classList.remove("flex");
  document.getElementById("formulario").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("click", (e) => {
  const menu = document.getElementById("purchaseMenu");
  const btn = document.getElementById("finishPurchaseBtn");

  if (menu && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
  }
});

function sendToWhatsApp() {
  if (cart.length === 0) {
    showToast("Agrega productos al carrito primero", "info");
    return;
  }

  const telefono = "573118033646"; // Reemplaza con tu número de WhatsApp en formato internacional sin signos

  let mensaje =
    "¡Hola! 👋 Me gustaría comprar las siguientes figuras de yeso:\n\n";
  let total = 0;

  cart.forEach((item, i) => {
    mensaje += `${i + 1}. ${item.nombre} (Código: ${item.codigo}) - $${item.precio.toLocaleString("es-CO")} COP\n`;
    total += item.precio;
  });

  mensaje += `\n💰 *Valor total aproximado: $${total.toLocaleString("es-CO")} COP*\n\nQuedo atento/a a la confirmación. ¡Gracias! 🙏`;

  const mensajeCodificado = encodeURIComponent(mensaje);
  const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

  window.open(urlWhatsApp, "_blank");

  togglePurchaseMenu();
  showToast("¡Abriendo WhatsApp con tu pedido!", "success");

  cart = [];
  updateFloatingButton();
}

document.getElementById("form").addEventListener("submit", async (e) => {
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
      : "from-rose-500 to-lavender";

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

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();

  if (query.length < 2) {
    searchResults.classList.add("hidden");
    return;
  }

  const filtered = figuras.filter(
    (f) =>
      f.nombre.toLowerCase().includes(query) ||
      f.codigo.toLowerCase().includes(query),
  );

  if (filtered.length === 0) {
    searchResults.classList.remove("hidden");
    searchResults.innerHTML =
      '<p class="col-span-full text-center text-gray-500 py-4">No se encontraron figuras</p>';
    return;
  }

  searchResults.classList.remove("hidden");
  searchResults.innerHTML = filtered
    .map(
      (f) => `
    <div class="bg-gradient-to-br from-rose-50 to-lavender-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-2xl flex items-center justify-between gap-3">
      <div>
        <div class="font-bold text-sm">${f.nombre}</div>
        <div class="text-xs text-gray-500 dark:text-gray-300 font-mono">${f.codigo}</div>
        <div class="text-sm font-black text-coral">$${f.precio.toLocaleString("es-CO")}</div>
      </div>
      <button onclick="addToCart('${f.nombre}', '${f.codigo}', ${f.precio})" class="btn-comprar px-3 py-2 text-white text-xs font-bold rounded-full shadow-md flex-shrink-0">Comprar</button>
    </div>
  `,
    )
    .join("");
});

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
