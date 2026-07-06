const products = [
  {
    title: "360° Cable Organizer",
    category: "Smart Tech",
    image: "https://via.placeholder.com/300x200?text=Cable+Organizer",
    description: "Keep your cables neat and organized.",
    link: "https://example.com"
  },
  {
    title: "Motion Sensor Light",
    category: "Home",
    image: "https://via.placeholder.com/300x200?text=Motion+Light",
    description: "Automatic rechargeable LED light.",
    link: "https://example.com"
  }
];

const productContainer = document.getElementById("products");
const search = document.getElementById("search");

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

displayProducts(products);

search.addEventListener("input", () => {
  const keyword = search.value.toLowerCase();

  const filtered = products.filter(product =>
    product.title.toLowerCase().includes(keyword) ||
    product.category.toLowerCase().includes(keyword)
  );

  displayProducts(filtered);
});
