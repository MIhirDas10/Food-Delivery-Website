const productsArray = [
    {
        imgSrc: "./images/p1.jfif",
        title: "Gyro Sandwich",
        rating: 4.9,
        price: 15.00
    },
    {
        imgSrc: "./images/p2.jfif",
        title: "Enchilade",
        rating: 5.0,
        price: 25.50
    },
    {
        imgSrc: "./images/p3.jfif",
        title: "Green Beans",
        rating: 4.9,
        price: 12.00
    },
    {
        imgSrc: "./images/p4.jfif",
        title: "Pizza",
        rating: 5.0,
        price: 18.50
    },
    {
        imgSrc: "./images/p5.jfif",
        title: "Chicken Pot Pie",
        rating: 4.9,
        price: 25.00
    },
    {
        imgSrc: "./images/p6.jfif",
        title: "Green Salad",
        rating: 4.9,
        price: 15.00
    },
];

function handleShowMore() {
    const projectContainer = document.getElementById("more-products-container");

    productsArray.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("b-outside");

        productCard.innerHTML = `
            <div class="product-card">
                <img src="${product.imgSrc}" alt="${product.title}">
                <div class="b-full">
                    <div class="b1 flex-div">
                        <h3>${product.title}</h3>
                        <p class="rating">
                            <i class="fas fa-star"></i>
                            <span>${product.rating}</span>
                        </p>
                    </div>
                    <div class="b2 flex-div">
                        <button class="add-to-cart-btn">Add To Cart</button>
                        <p class="price"><span>$</span>${product.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `;
        projectContainer.appendChild(productCard);
    });
    document.getElementById("see-more-button").style.display = "none";
    document.getElementById("show-less-button").style.display = "inline-block";
}

function handleShowLess() {
    const projectContainer = document.getElementById("more-products-container");
    while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild);
    }
    document.getElementById("see-more-button").style.display = "inline-block";
    document.getElementById("show-less-button").style.display = "none";
}

function handleContact(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    const successContainer = document.getElementById("success_container");
    successContainer.innerHTML = '';
    const emailParagraph = document.createElement("p");
    emailParagraph.innerHTML = `Your Email: ${email}`;
    successContainer.appendChild(emailParagraph);
}