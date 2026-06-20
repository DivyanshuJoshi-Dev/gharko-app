const products=[
{name:'Rice 5kg',price:'₹350'},
{name:'Potato Chips',price:'₹40'},
{name:'Shampoo',price:'₹199'},
{name:'Laundry Detergent',price:'₹299'}
];

const container=document.getElementById('products');
products.forEach(p=>{
 const div=document.createElement('div');
 div.className='product';
 div.innerHTML=`<h3>${p.name}</h3><p>${p.price}</p><button>Add to Cart</button>`;
 container.appendChild(div);
});

document.getElementById('themeToggle').onclick=()=>{
 document.body.classList.toggle('dark');
};
