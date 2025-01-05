const images = [
    "./src/images/image-product-1.jpg",
    "./src/images/image-product-2.jpg",
    "./src/images/image-product-3.jpg",
    "./src/images/image-product-4.jpg"
];

let currentIndex = 0;

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

// FIM DA EXIBIÇÃO E CARROSEL DE IMAGENS //

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

// FIM SELETOR DE QUANTIDADES //

const cart = document.getElementById('cart');
const emptyCart = document.querySelector('.empty-cart');

function displayEmptyCart() {
    if (emptyCart.style.display === 'block') {
        emptyCart.style.display = 'none';
    } else {
        emptyCart.style.display = 'block';
    }
};

cart.addEventListener('click', () => {
    if (cartQuantity > 0) {
        displayProductCart();
    } else {
        displayEmptyCart();
    }
});

// FIM DA EXIBIÇÃO DO CARRINHO VAZIO //

const btnAddToCart = document.querySelector('.btn-add-to-cart');
const productCounterInCart = document.querySelector('.number-of-products-in-the-cart');

let cartQuantity = 0;

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

// FIM DO ADICIONAR PRODUTO //

const cartWithProducts = document.querySelector('.cart-with-item');
const quantityOfProducts = document.querySelector('.amount');

let howManyProducts = 0;

function addProductsToCart() {
    if (cartQuantity > 0) {
        howManyProducts += counterValue;
        quantityOfProducts.textContent = howManyProducts;
    }
};

function displayProductCart() {
    if (cartWithProducts.style.display === 'block') {
        cartWithProducts.style.display = 'none';
    } else {
        cartWithProducts.style.display = 'block';
    }
};

// FIM DA EXIBIÇÃO DO CARRINHO COM PRODUTO //

const totalValue = document.querySelector('.total-value');

let unitPrice = 125;

function calculateProductPrice() {
    if (cartQuantity > 0) {
        const totalPrice = unitPrice * cartQuantity;
        totalValue.textContent = `$${totalPrice}.00`;
    }
};

// FIM DA MUDANÇA DE PREÇO CONFORME A QUANTIDADE //

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

// FIM DA FUNCIONALIDADE DE LIMPAR O CARRINHO //

const navList = document.querySelector('.navigation-items');
const burguerMenuIcon = document.getElementById('burguer');

function burguerMenu() {
    navList.style.display = 'block';
};

burguerMenuIcon.addEventListener('click', () => {
    burguerMenu();
});

// FIM DA FUNCIONALIDADE DE MOSTRAR MENU NO RESPONSIVO //

const closeMenuIcon = document.querySelector('.close-menu-icon');

function hideBurguerMenu() {
    navList.style.display = 'none';
};

closeMenuIcon.addEventListener('click', () => {
    hideBurguerMenu();
});