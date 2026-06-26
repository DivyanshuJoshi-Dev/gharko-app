const products = [
{
name:"Basmati Rice",
price:120,
image:"https://via.placeholder.com/300"
},
{
name:"Potato Chips",
price:30,
image:"https://via.placeholder.com/300"
},
{
name:"Shampoo",
price:199,
image:"https://via.placeholder.com/300"
},
{
name:"Detergent",
price:250,
image:"https://via.placeholder.com/300"
}
];

const productContainer =
document.getElementById("products");

const cartItems =
document.getElementById("cartItems");

let cart = [];

function renderProducts(items){

productContainer.innerHTML="";

items.forEach(product=>{

const card=document.createElement("div");

card.className="product";

card.innerHTML=`
<img src="${product.image}">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button>Add to Cart</button>
`;

card.querySelector("button")
.addEventListener("click",()=>{

cart.push(product);

updateCart();

});

productContainer.appendChild(card);

});

}

function updateCart(){

cartItems.innerHTML="";

let total=0;

cart.forEach(item=>{

total+=item.price;

const div=document.createElement("div");

div.innerHTML=`
<p>${item.name} - ₹${item.price}</p>
`;

cartItems.appendChild(div);

});

document.getElementById("totalPrice")
.textContent=total;

document.getElementById("cartCount")
.textContent=cart.length;

}

renderProducts(products);

document
.getElementById("search")
.addEventListener("input",(e)=>{

const value=e.target.value.toLowerCase();

const filtered=products.filter(product=>
product.name.toLowerCase().includes(value)
);

renderProducts(filtered);

});

document
.getElementById("themeToggle")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

document
.getElementById("checkoutBtn")
.addEventListener("click",()=>{

alert("Checkout system coming soon!");

});
