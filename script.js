let cart = [];

// Function to add an ebook to the cart
function addToCart(ebookId) {
  const ebook = ebooks.find(book => book.id === ebookId);
  if (ebook) {
    cart.push(ebook);
    alert(`${ebook.title} added to cart!`);
    updateCartCount();
  }
}

// Function to update the cart count in the UI
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

// Function to render the cart page
function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  if (cartContainer) {
    cartContainer.innerHTML = '';
    cart.forEach((ebook, index) => {
      const cartItem = document.createElement('div');
      cartItem.className = 'bg-white p-4 rounded-lg shadow-md mb-4';
      cartItem.innerHTML = `
        <h3 class="text-lg font-semibold">${ebook.title}</h3>
        <p class="text-gray-600">${ebook.author}</p>
        <p class="text-gray-800 font-bold mt-2">$${ebook.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${index})" class="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Remove</button>
      `;
      cartContainer.appendChild(cartItem);
    });
  }
}

// Function to remove an ebook from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
  updateCartCount();
}

// Function to calculate the total price of the cart
function calculateTotal() {
  return cart.reduce((total, ebook) => total + ebook.price, 0).toFixed(2);
}

// Function to render the checkout page
function renderCheckout() {
  const totalPrice = document.getElementById('total-price');
  if (totalPrice) {
    totalPrice.textContent = `$${calculateTotal()}`;
  }
}

// Initialize cart functionality when the page loads
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('cart.html')) {
    renderCart();
  } else if (window.location.pathname.includes('checkout.html')) {
    renderCheckout();
  }
  updateCartCount();
});
