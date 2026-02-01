const products = [
  { name: "Wireless Mouse", price: 499, rating: 4.5, category: "Electronics" },
  { name: "Keyboard", price: 899, rating: 4.3, category: "Electronics" },
  { name: "Headphones", price: 1299, rating: 4.6, category: "Electronics" },
  { name: "Smart Watch", price: 1999, rating: 4.4, category: "Electronics" },
  { name: "Bluetooth Speaker", price: 1599, rating: 4.5, category: "Electronics" },
  { name: "Power Bank", price: 999, rating: 4.2, category: "Electronics" },
  { name: "USB Cable", price: 199, rating: 4.1, category: "Electronics" },
  { name: "Laptop Stand", price: 1299, rating: 4.3, category: "Electronics" },
  { name: "Webcam", price: 1499, rating: 4.4, category: "Electronics" },
  { name: "Monitor Light", price: 899, rating: 4.2, category: "Electronics" },

  { name: "T-Shirt", price: 599, rating: 4.1, category: "Clothing" },
  { name: "Jeans", price: 1499, rating: 4.2, category: "Clothing" },
  { name: "Jacket", price: 1999, rating: 4.7, category: "Clothing" },
  { name: "Hoodie", price: 1299, rating: 4.3, category: "Clothing" },
  { name: "Sweater", price: 1199, rating: 4.4, category: "Clothing" },
  { name: "Shorts", price: 699, rating: 4.0, category: "Clothing" },
  { name: "Cap", price: 299, rating: 4.2, category: "Clothing" },
  { name: "Track Pants", price: 899, rating: 4.3, category: "Clothing" },
  { name: "Shirt", price: 999, rating: 4.4, category: "Clothing" },
  { name: "Jersey", price: 799, rating: 4.1, category: "Clothing" },

  { name: "JavaScript Book", price: 699, rating: 4.8, category: "Books" },
  { name: "Python Guide", price: 799, rating: 4.6, category: "Books" },
  { name: "Data Science Book", price: 999, rating: 4.5, category: "Books" },
  { name: "AI Basics", price: 899, rating: 4.4, category: "Books" },
  { name: "Web Design Book", price: 749, rating: 4.3, category: "Books" },
  { name: "Algorithms Book", price: 1099, rating: 4.7, category: "Books" },
  { name: "Machine Learning Guide", price: 1199, rating: 4.6, category: "Books" },
  { name: "Cyber Security Book", price: 999, rating: 4.5, category: "Books" },
  { name: "Cloud Computing Guide", price: 1099, rating: 4.4, category: "Books" },
  { name: "Networking Basics", price: 899, rating: 4.3, category: "Books" },

  { name: "Running Shoes", price: 2499, rating: 4.6, category: "Shoes" },
  { name: "Sneakers", price: 1999, rating: 4.3, category: "Shoes" },
  { name: "Sandals", price: 799, rating: 4.0, category: "Shoes" },
  { name: "Formal Shoes", price: 2999, rating: 4.7, category: "Shoes" },
  { name: "Sports Shoes", price: 2199, rating: 4.5, category: "Shoes" },
  { name: "Flip Flops", price: 399, rating: 4.1, category: "Shoes" },
  { name: "Loafers", price: 1899, rating: 4.4, category: "Shoes" },
  { name: "Boots", price: 2799, rating: 4.6, category: "Shoes" },
  { name: "Canvas Shoes", price: 1499, rating: 4.3, category: "Shoes" },
  { name: "Slippers", price: 299, rating: 4.0, category: "Shoes" }
];

function shuffleProducts(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayProducts(productList) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  if (productList.length === 0) {
    container.innerHTML = "<h2>No products found 😢</h2>";
    return;
  }

  productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <p class="rating">⭐ ${product.rating}</p>
      <p>${product.category}</p>
    `;

    container.appendChild(card);
  });
}

function applyFilterAndSort() {
  let updatedProducts = [...products];

  const searchText = document.getElementById("searchInput").value.toLowerCase();
  if (searchText !== "") {
    updatedProducts = updatedProducts.filter(p =>
      p.name.toLowerCase().includes(searchText)
    );
  }

  const selectedCategory = document.getElementById("categoryFilter").value;
  if (selectedCategory !== "all") {
    updatedProducts = updatedProducts.filter(p =>
      p.category === selectedCategory
    );
  }

  const sortValue = document.getElementById("sortOption").value;

  switch (sortValue) {
    case "price-asc": updatedProducts.sort((a,b)=>a.price-b.price); break;
    case "price-desc": updatedProducts.sort((a,b)=>b.price-a.price); break;
    case "name-asc": updatedProducts.sort((a,b)=>a.name.localeCompare(b.name)); break;
    case "name-desc": updatedProducts.sort((a,b)=>b.name.localeCompare(a.name)); break;
    case "rating-asc": updatedProducts.sort((a,b)=>a.rating-b.rating); break;
    case "rating-desc": updatedProducts.sort((a,b)=>b.rating-a.rating); break;
  }

  displayProducts(updatedProducts);
}

document.getElementById("searchInput").addEventListener("input", applyFilterAndSort);
document.getElementById("categoryFilter").addEventListener("change", applyFilterAndSort);
document.getElementById("sortOption").addEventListener("change", applyFilterAndSort);

shuffleProducts(products);   
displayProducts(products); 
