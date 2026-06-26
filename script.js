// =========================
// Product Database
// =========================

const categories = {
    grocery: [
        {
            name: "Basmati Rice",
            price: 120,
            image: "https://via.placeholder.com/300"
        },
        {
            name: "Wheat Flour",
            price: 60,
            image: "https://via.placeholder.com/300"
        },
        {
            name: "Cooking Oil",
            price: 180,
            image: "https://via.placeholder.com/300"
        }
    ],

    snacks: [
        {
            name: "Potato Chips",
            price: 30,
            image: "https://via.placeholder.com/300"
        },
        {
            name: "Coca Cola",
            price: 40,
            image: "https://via.placeholder.com/300"
        },
        {
            name: "Orange Juice",
            price: 80,
            image: "https://via.placeholder.com/300"
        }
    ],

    beauty: [
        {
            name: "Shampoo",
            price: 199,
            image: "https://via.placeholder.com/300"
        },
        {
            name: "Soap",
            price: 50,
            image: "https://via.placeholder.com/300"
        },
        {
            name: "Face Wash",
            price: 140,
            image: "https://via.placeholder.com/300"
        }
    ],

    household: [
        {
            name: "Detergent",
            price: 250,
            image: "https://via.placeholder.com/300"
        },
        {
            name: "Floor Cleaner",
            price: 180,
            image: "https://via.placeholder.com/300"
        },
        {
            name: "Tissue Paper",
            price: 90,
            image: "https://via.placeholder.com/300"
        }
    ]
};

// =========================
// Featured Products
// =========================

const featuredProducts = [
    categories.grocery[0],
    categories.snacks[0],
    categories.beauty[0],
    categories.household[0]
];

// =========================
// Elements
// =========================

const productContainer =
document.getElementById("products");

const categoryProducts =
document.getElementById("categoryProducts");

const categoryView =
document.getElementById("categoryView");

const categoryTitle =
document.getElementById("categoryTitle");

const cartItems =
document.getElementById("cartItems");

const cartCount =
document.getElementById("cartCount");

const cartTotal =
document.getElementById("cartTotal");

// =========================
// Cart
// =========================

let cart =
JSON.parse(localStorage.getItem("gharkoCart")) || [];

// =========================
// Save Cart
// =========================

function saveCart() {

    localStorage.setItem(
        "gharkoCart",
        JSON.stringify(cart)
    );

}

// =========================
// Add To Cart
// =========================

function addToCart(product) {

    cart.push(product);

    saveCart();

    updateCart();

}

// =========================
// Product Card
// =========================

function createProductCard(product) {

    const card =
    document.createElement("div");

    card.className = "product";

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button>Add to Cart</button>
    `;

    card.querySelector("button")
    .addEventListener("click", () => {

        addToCart(product);

    });

    return card;

}

// =========================
// Featured Products
// =========================

function renderFeaturedProducts() {

    productContainer.innerHTML = "";

    featuredProducts.forEach(product => {

        productContainer.appendChild(
            createProductCard(product)
        );

    });

}

// =========================
// Category Display
// =========================

function showCategory(category) {

    categoryView.style.display = "block";

    categoryProducts.innerHTML = "";

    categoryTitle.textContent =
        category.charAt(0).toUpperCase() +
        category.slice(1);

    categories[category].forEach(product => {

        categoryProducts.appendChild(
            createProductCard(product)
        );

    });

}

// =========================
// Update Cart
// =========================

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

    }

    cart.forEach(item => {

        total += item.price;

        const div =
        document.createElement("div");

        div.innerHTML = `
            <p>
                ${item.name}
                - ₹${item.price}
            </p>
        `;

        cartItems.appendChild(div);

    });

    cartCount.textContent =
        cart.length;

    cartTotal.textContent =
        total;

    const fullTotal =
    document.getElementById("totalPrice");

    if(fullTotal){
        fullTotal.textContent = total;
    }

}

// =========================
// Category Click Events
// =========================

document
.querySelectorAll(".category-card")
.forEach(card => {

    card.addEventListener("click", () => {

        const category =
        card.dataset.category;

        showCategory(category);

    });

});

// =========================
// Back Button
// =========================

document
.getElementById("backBtn")
.addEventListener("click", () => {

    categoryView.style.display =
    "none";

});

// =========================
// Search
// =========================

document
.getElementById("search")
.addEventListener("input", (e) => {

    const search =
    e.target.value.toLowerCase();

    productContainer.innerHTML = "";

    const results = [];

    Object.values(categories)
    .forEach(category => {

        category.forEach(product => {

            if (
                product.name
                .toLowerCase()
                .includes(search)
            ) {

                results.push(product);

            }

        });

    });

    if (search === "") {

        renderFeaturedProducts();

        return;

    }

    results.forEach(product => {

        productContainer.appendChild(
            createProductCard(product)
        );

    });

});

// =========================
// Dark Mode
// =========================

document
.getElementById("themeToggle")
.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

// =========================
// Checkout
// =========================

document
.getElementById("checkoutBtn")
.addEventListener("click", () => {

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }

    alert(
        "Checkout system coming soon!"
    );

});

// =========================
// Startup
// =========================

renderFeaturedProducts();
updateCart();
