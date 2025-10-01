const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [{
        id: 1,
        title: "ALienWare",
        price: "120,000",
        colors: [{
                code: "black",
                img: "aw1.png",
            },
            {
                code: "darkblue",
                img: "aw1.png",
            },
        ],
    },
    {
        id: 2,
        title: "Hp Pavilion",
        price: "50,000",
        colors: [{
                code: "lightgray",
                img: "hpp.png",
            },
            {
                code: "green",
                img: "hpp.png",
            },
        ],
    },
    {
        id: 3,
        title: "Samsung Chromebook",
        price: "20,000",
        colors: [{
                code: "lightgray",
                img: "chr.png",
            },
            {
                code: "green",
                img: "chr.png",
            },
        ],
    },
    {
        id: 4,
        title: "Lenovo Ideapad",
        price: "50,000",
        colors: [{
                code: "black",
                img: "yoga.png",
            },
            {
                code: "lightgray",
                img: "yoga.png",
            },
        ],
    },
    {
        id: 5,
        title: "MS Surface Pro",
        price: "50,000",
        colors: [{
                code: "gray",
                img: "msp.png",
            },
            {
                code: "black",
                img: "msp.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        
        choosenProduct = products[index];

        
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "INR " + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});