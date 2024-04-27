document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    fetchCategories();
});

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error.message);
    }
}

async function fetchCategories() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        const categories = await response.json();
        const categoryDropdown = document.getElementById('newCategory');
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryDropdown.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching categories:', error.message);
    }
}

function displayProducts(products) {
    const productList = document.getElementById('newProductList');
    if (!productList) {
        console.error('New Product list element not found');
        return;
    }
    productList.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('new-product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
        `;
        productList.appendChild(productItem);
    });
}

async function filterProducts() {
    const category = document.getElementById('newCategory').value;
    let url = 'https://fakestoreapi.com/products';
    if (category !== 'all') {
        url += `/category/${category}`;
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch filtered products');
        }
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error filtering products:', error.message);
    }
}

async function searchProducts() {
    const searchTerm = document.getElementById('newSearch').value.toLowerCase();
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Failed to fetch products for searching');
        }
        const products = await response.json();
        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm));
        displayProducts(filteredProducts);
    } catch (error) {
        console.error('Error searching products:', error.message);
    }
}

async function sortProducts() {
    const sortBy = document.getElementById('newSort').value;
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Failed to fetch products for sorting');
        }
        let products = await response.json();
        if (sortBy === 'asc') {
            products.sort((a, b) => a.price - b.price);
        } else {
            products.sort((a, b) => b.price - a.price);
        }
        displayProducts(products);
    } catch (error) {
        console.error('Error sorting products:', error.message);
    }
}
