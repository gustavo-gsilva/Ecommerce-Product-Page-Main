// ================================================
// VARIÁVEIS DE IMAGENS
// ================================================

const images = [
    "./src/images/image-product-1.jpg",
    "./src/images/image-product-2.jpg",
    "./src/images/image-product-3.jpg",
    "./src/images/image-product-4.jpg"
];

let currentIndex = 0;

// ================================================
// FUNÇÕES DE CARROSEL DE IMAGENS
// ================================================

function updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail-images');
    const modalThumbnails = document.querySelectorAll('.hidden-images .thumbnail-images');

    thumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.toggle('selected', i === currentIndex);
    });

    modalThumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.toggle('selected', i === currentIndex);
    });
};

function openModal(index) {
    currentIndex = index;

    document.querySelector('.hidden-images').style.display = 'block';
    document.getElementById('modal-image').src = images[currentIndex];

    updateThumbnails();
};

function closeModal() {
    document.querySelector('.hidden-images').style.display = 'none';

    const thumbnails = document.querySelectorAll('.thumbnail-images');
    thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('selected');
    });
};

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;

    document.getElementById('modal-image').src = images[currentIndex];

    updateThumbnails();
};

// ================================================
// VARIÁVEIS E FUNÇÕES DO SELETOR DE QUANTIDADE
// ================================================

const btnLess = document.getElementById('btn-less');
const btnMore = document.getElementById('btn-more');
const counter = document.getElementById('counter');

let counterValue = 0;

function updateCounter() {
    counter.textContent = counterValue;
};

btnLess.addEventListener('click', () => {
    if (counterValue > 0) {
        counterValue--;
    }

    updateCounter();
});

btnMore.addEventListener('click', () => {
    counterValue++;
    updateCounter();
});

// ================================================
// VARIÁVEIS E FUNÇÕES DO CARRINHO DE COMPRAS
// ================================================

const cart = document.getElementById('cart');
const emptyCart = document.querySelector('.empty-cart');

let cartQuantity = 0;
let howManyProducts = 0;

function displayEmptyCart() {
    emptyCart.style.display = (emptyCart.style.display === 'block') ? 'none' : 'block';
};

cart.addEventListener('click', () => {
    if (cartQuantity > 0) {
        displayProductCart();
    } else {
        displayEmptyCart();
    }
});

// ================================================
// FUNÇÕES DE ADICIONAR PRODUTOS AO CARRINHO
// ================================================

const btnAddToCart = document.querySelector('.div-button');
const productCounterInCart = document.querySelector('.number-of-products-in-the-cart');

function updateQuantity() {
    cartQuantity += counterValue;
    productCounterInCart.style.opacity = '1';
    productCounterInCart.textContent = cartQuantity;
};

btnAddToCart.addEventListener('click', () => {
    if (counterValue > 0) {
        updateQuantity();
    }

    addProductsToCart();
    calculateProductPrice();
});

// ================================================
// FUNÇÕES DE EXIBIÇÃO DE CARRINHO
// ================================================

const cartWithProducts = document.querySelector('.cart-with-item');
const quantityOfProducts = document.querySelector('.amount');
const totalValue = document.querySelector('.total-value');

let unitPrice = 125;

function addProductsToCart() {
    if (cartQuantity > 0) {
        howManyProducts += counterValue;
        quantityOfProducts.textContent = howManyProducts;
    }
};

function displayProductCart() {
    cartWithProducts.style.display = (cartWithProducts.style.display === 'block') ? 'none' : 'block';
};

function calculateProductPrice() {
    if (cartQuantity > 0) {
        const totalPrice = unitPrice * cartQuantity;
        totalValue.textContent = `$${totalPrice}.00`;
    }
};

// ================================================
// FUNÇÕES DE LIMPAR O CARRINHO
// ================================================

const bin = document.querySelector('.bin');

function cleanCart() {
    cartQuantity = 0;
    howManyProducts = 0;

    updateCounter();
    productCounterInCart.textContent = cartQuantity;
    quantityOfProducts.textContent = howManyProducts;

    productCounterInCart.style.opacity = 0;
    cartWithProducts.style.display = 'none';
};

bin.addEventListener('click', () => {
    cleanCart();
});

// ================================================
// FUNÇÕES DE EXIBIÇÃO DO MENU RESPONSIVO
// ================================================

const responsiveMenuIcon = document.getElementById('burguer');
const responsiveMenu = document.querySelector('.navigation-items');
const responsiveMenuCloseIcon = document.querySelector('.close-menu-icon');
const overlay = document.getElementById('overlay');

function showMenu() {
    responsiveMenu.style.display = 'block';

    if (responsiveMenu.style.display === 'block') {
        overlay.style.display = 'block';
    }
};

function closeMenu() {
    responsiveMenu.style.display = 'none';
    overlay.style.display = 'none';
};

responsiveMenuIcon.addEventListener('click', () => {
    showMenu();
});

responsiveMenuCloseIcon.addEventListener('click', () => {
    closeMenu();
});

// ================================================
// FUNÇÕES DO CARROSEL DE IMAGENS RESPONSIVO
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.querySelector('.left-arrow-responsive');
    const rightArrow = document.querySelector('.right-arrow-responsive');
    const mainImage = document.getElementById('main-image');

    const imagesResponsive = [
        './src/images/image-product-1.jpg',
        './src/images/image-product-2.jpg',
        './src/images/image-product-3.jpg',
        './src/images/image-product-4.jpg'
    ];

    let currentIndex = 0;

    function updateImage(index) {
        mainImage.src = imagesResponsive[index];
    }

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? imagesResponsive.length - 1 : currentIndex - 1;
        updateImage(currentIndex);
    });
    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === imagesResponsive.length - 1) ? 0 : currentIndex + 1;
        updateImage(currentIndex);
    });
});

// ================================================
// FIM DO CÓDIGO
// ================================================