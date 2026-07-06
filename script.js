let products = [];

const productContainer = document.getElementById("products");
const search = document.getElementById("search");

// Load products from products.json
fetch("products.json")
  .then(response => response.json())
  .then(data => {
    products = data;
    displayProducts(products);
  });

function displayProducts(list) {
  productContainer.innerHTML = "";

  list.forEach(product => {
    productContainer.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <a href="${product.link}" target="_blank">🛍️ View Product</a>
      </div>
    `;
  });
}

search.addEventListener("input", () => {
  const keyword = search.value.toLowerCase();

  const filtered = products.filter(product =>
    product.title.toLowerCase().includes(keyword) ||
    product.category.toLowerCase().includes(keyword)
  );

  displayProducts(filtered);
});

function filterProducts(category) {
  if (category === "All") {
    displayProducts(products);
    return;
  }

  const filtered = products.filter(product =>
    product.category === category
  );

  displayProducts(filtered);
}
  
