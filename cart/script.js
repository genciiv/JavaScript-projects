// Informacioni i produkteve (emri, foto, përshkrimi, kategoria)
const products = [
  {
    name: "Produkti 1",
    image: "produkti-1.jpg",
    description: "Pershkrimi për produktin 1",
    category: "Kategori 1",
  },
  {
    name: "Produkti 2",
    image: "produkti-2",
    description: "Pershkrimi për produktin 2",
    category: "Kategori 2",
  },
  {
    name: "Produkti 3",
    image: "produkt-3.jpg",
    description: "Pershkrimi për produktin 1",
    category: "Kategori 3",
  },
  {
    name: "Produkti 1",
    image: "produkti-1.jpg",
    description: "Pershkrimi për produktin 1",
    category: "Kategori 1",
  },
  {
    name: "Produkti 2",
    image: "produkti-2",
    description: "Pershkrimi për produktin 2",
    category: "Kategori 2",
  },
  {
    name: "Produkti 3",
    image: "produkt-3.jpg",
    description: "Pershkrimi për produktin 1",
    category: "Kategori 3",
  },
  {
    name: "Produkti 1",
    image: "produkti-1.jpg",
    description: "Pershkrimi për produktin 1",
    category: "Kategori 1",
  },
  {
    name: "Produkti 2",
    image: "produkti-2",
    description: "Pershkrimi për produktin 2",
    category: "Kategori 2",
  },
  {
    name: "Produkti 3",
    image: "produkt-3.jpg",
    description: "Pershkrimi për produktin 1",
    category: "Kategori 3",
  },
  {
    name: "Produkti 1",
    image: "produkti-1.jpg",
    description: "Pershkrimi për produktin 1",
    category: "Kategori 1",
  },
  {
    name: "Produkti 2",
    image: "produkti-2",
    description: "Pershkrimi për produktin 2",
    category: "Kategori 2",
  },
  {
    name: "Produkti 3",
    image: "produkt-3.jpg",
    description: "Pershkrimi për produktin 1",
    category: "Kategori 3",
  },
  {
    name: "Produkti 1",
    image: "produkti-1.jpg",
    description: "Pershkrimi për produktin 1",
    category: "Kategori 1",
  },
  {
    name: "Produkti 2",
    image: "produkti-2",
    description: "Pershkrimi për produktin 2",
    category: "Kategori 2",
  },
  {
    name: "Produkti 3",
    image: "produkt-3.jpg",
    description: "Pershkrimi për produktin 1",
    category: "Kategori 3",
  },
  {
    name: "Produkti 1",
    image: "produkti-1.jpg",
    description: "Pershkrimi për produktin 1",
    category: "Kategori 1",
  },

  // Shto produkte të tjerë këtu
];

// Funksioni për të krijuar kartat e produkteve në faqe
function displayProducts(products) {
  const productsContainer = document.getElementById("productsContainer");
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product");
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="max-width: 100%;">
        <div class="product-content">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <button class="add-to-cart-btn">Shto në shportë</button>
        </div>
      `;
    productsContainer.appendChild(card);
  });
}

// Shfaq të gjitha produktet në fillim
displayProducts(products);

// Funksioni për kërkimin e produkteve
document.getElementById("searchInput").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
});

// Event listener për shtimin në shportë
document
  .getElementById("productsContainer")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("add-to-cart-btn")) {
      const selectedProduct =
        event.target.parentElement.querySelector("h3").textContent;
      // Këtu mund të shtosh logjikën për të shtuar produktin në shportë
      alert(`Produkti "${selectedProduct}" u shtua në shportë!`);
    }
  });
