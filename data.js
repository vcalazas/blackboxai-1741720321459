const ebooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    description: "A classic novel of the Jazz Age."
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    description: "A powerful story of racial injustice."
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 7.99,
    image: "https://via.placeholder.com/150",
    description: "A dystopian novel about totalitarianism."
  }
];

// Function to dynamically insert ebook cards into the HTML
function renderEbooks() {
  const ebookContainer = document.querySelector('.grid');
  ebooks.forEach(ebook => {
    const ebookCard = document.createElement('div');
    ebookCard.className = 'bg-white p-6 rounded-lg shadow-md';
    ebookCard.innerHTML = `
      <img src="${ebook.image}" alt="${ebook.title}" class="w-full h-48 object-cover mb-4 rounded">
      <h3 class="text-lg font-semibold">${ebook.title}</h3>
      <p class="text-gray-600">${ebook.author}</p>
      <p class="text-gray-800 font-bold mt-2">$${ebook.price.toFixed(2)}</p>
      <button onclick="addToCart(${ebook.id})" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
    `;
    ebookContainer.appendChild(ebookCard);
  });
}

// Call the function to render ebooks when the page loads
document.addEventListener('DOMContentLoaded', renderEbooks);
