var products = [
    { images: "Dashikis", desc: "Dashiki", price: 30.00, add: "Add to Cart" },
    { images: "Dashikis", desc: "Dashiki", price: 30.00, add: "Add to Cart" },
    { images: "Dashikis", desc: "Dashiki", price: 30.00, add: "Add to Cart" },
    { images: "Dashikis", desc: "Dashiki", price: 30.00, add: "Add to Cart" },
    { images: "Dashikis", desc: "Dashiki", price: 30.00, add: "Add to Cart" },
    { images: "Dashikis", desc: "Dashiki", price: 30.00, add: "Add to Cart" },
    { images: "Dashikis", desc: "Dashiki", price: 30.00, add: "Add to Cart" },
    { images: "Dashikis", desc: "Dashiki", price: 30.00, add: "Add to Cart" },
    { images: "Dashikis", desc: "Dashiki", price: 30.00, add: "Add to Cart" },
    { images: "Dashikis", desc: "Dashiki", price: 30.00, add: "Add to Cart" },
    { images: "Dashikis", desc: "Dashiki", price: 30.00, add: "Add to Cart" },
    { images: "Dashikis", desc: "Dashiki", price: 30.00, add: "Add to Cart" },
];

var single_card = "";
for (let i = 0; i < products.length; i++) {
    single_card += `
                <div class="product-box">
                    <img src="assets/images/${products[i].images}.jpg" alt="${products[i].images}" class="product-image">
                    <h3>${products[i].desc}</h3>
                    <p>$${products[i].price}</p>
                    <button>${products[i].add}</button>
                </div>
    `;

}

document.querySelector(".product-container").innerHTML = single_card;



