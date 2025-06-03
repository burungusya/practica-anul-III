// Sample product data
const products = [
    {
        id: 1,
        name: "Inel cu Diamant",
        price: "12.500 MDL",
        description: "Inel elegant cu diamant central și diamante secundare, realizat din aur alb 18k.",
        images: [
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 2,
        name: "Colier de Perle",
        price: "9.000 MDL",
        description: "Colier elegant din perle naturale, perfect pentru ocazii speciale.",
        images: [
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 3,
        name: "Bratară Pandantiv",
        price: "4.750 MDL",
        description: "Bratară delicată cu pandantiv, realizată din aur galben 14k.",
        images: [
            "https://images.unsplash.com/photo-1626122509259-ea8e0a136ada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amV3ZXJseXxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1626122509259-ea8e0a136ada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amV3ZXJseXxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1626122509259-ea8e0a136ada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amV3ZXJseXxlbnwwfHwwfHx8MA%3D%3D"
        ]
    },
    {
        id: 4,
        name: "Cercei cu Rubin",
        price: "6.000 MDL",
        description: "Cercei eleganti cu rubin natural și diamante, realizate din aur galben 14k.",
        images: [
            "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 5,
        name: "Lănțișor de Aur",
        price: "7.500 MDL",
        description: "Lănțișor delicat din aur galben 18k, cu lungime ajustabilă.",
        images: [
            "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 6,
        name: "Set Pandantiv și Cercei",
        price: "14.000 MDL",
        description: "Set elegant format din pandantiv și cercei cu perle și diamante.",
        images: [
            "https://safirelli.ro/wp-content/uploads/2024/12/57-01.webp",
            "https://safirelli.ro/wp-content/uploads/2024/12/57-01.webp",
            "https://safirelli.ro/wp-content/uploads/2024/12/57-01.webp"
        ]
    },
    {
        id: 7,
        name: "Inel cu Safir",
        price: "15.000 MDL",
        description: "Inel elegant cu safir albastru natural și diamante, realizat din aur alb 18k.",
        images: [
            "https://media.istockphoto.com/id/1171282201/photo/orange-saphir-ring.webp?a=1&b=1&s=612x612&w=0&k=20&c=0qODppSMpKb0emf5aK8X-n4yUWihJbqKudSLmCAwuuU=",
            "https://media.istockphoto.com/id/1171282201/photo/orange-saphir-ring.webp?a=1&b=1&s=612x612&w=0&k=20&c=0qODppSMpKb0emf5aK8X-n4yUWihJbqKudSLmCAwuuU=",
            "https://media.istockphoto.com/id/1171282201/photo/orange-saphir-ring.webp?a=1&b=1&s=612x612&w=0&k=20&c=0qODppSMpKb0emf5aK8X-n4yUWihJbqKudSLmCAwuuU="
        ]
    },
    {
        id: 8,
        name: "Colier cu Diamante",
        price: "18.000 MDL",
        description: "Colier luxos cu diamante de calitate superioară, realizat din aur alb 18k.",
        images: [
            "https://images.unsplash.com/photo-1719862056514-0cdacd9142b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVja2xhY2UlMjB3aXRoJTIwZGlhbW9uZHN8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1719862056514-0cdacd9142b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVja2xhY2UlMjB3aXRoJTIwZGlhbW9uZHN8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1719862056514-0cdacd9142b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVja2xhY2UlMjB3aXRoJTIwZGlhbW9uZHN8ZW58MHx8MHx8fDA%3D"
        ]
    },
    {
        id: 9,
        name: "Bratară cu Perle",
        price: "5.500 MDL",
        description: "Bratară delicată cu perle naturale și cristale Swarovski.",
        images: [
            "https://images.unsplash.com/photo-1704203355458-b36cb43eacf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVhcmwlMjBicmFjZWxldHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1704203355458-b36cb43eacf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVhcmwlMjBicmFjZWxldHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1704203355458-b36cb43eacf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVhcmwlMjBicmFjZWxldHxlbnwwfHwwfHx8MA%3D%3D"
        ]
    },
    {
        id: 10,
        name: "Cercei cu Diamante",
        price: "8.500 MDL",
        description: "Cercei eleganti cu diamante și aur alb 18k, perfecte pentru ocazii speciale.",
        images: [
            "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZCUyMGVhcnJpbmdzfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZCUyMGVhcnJpbmdzfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZCUyMGVhcnJpbmdzfGVufDB8fDB8fHww"
        ]
    },
    {
        id: 11,
        name: "Pandantiv cu Smarald",
        price: "16.000 MDL",
        description: "Pandantiv luxos cu smarald natural și diamante, realizat din aur galben 18k.",
        images: [
            "https://media.istockphoto.com/id/2077200763/photo/emerald-necklace.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZxStRhzPRU265d9BsjDovarytst0y1_K0PGI2zywTL4=",
            "https://media.istockphoto.com/id/2077200763/photo/emerald-necklace.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZxStRhzPRU265d9BsjDovarytst0y1_K0PGI2zywTL4=",
            "https://media.istockphoto.com/id/2077200763/photo/emerald-necklace.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZxStRhzPRU265d9BsjDovarytst0y1_K0PGI2zywTL4="
        ]
    },
    {
        id: 12,
        name: "Set Colier și Cercei",
        price: "22.000 MDL",
        description: "Set elegant format din colier și cercei cu perle și diamante.",
        images: [
            "https://plus.unsplash.com/premium_photo-1681276168422-ebd2d7e95340?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmVja2xhY2UlMjBhbmQlMjBFYXJyaW5ncyUyMFNldHxlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1681276168422-ebd2d7e95340?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmVja2xhY2UlMjBhbmQlMjBFYXJyaW5ncyUyMFNldHxlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1681276168422-ebd2d7e95340?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmVja2xhY2UlMjBhbmQlMjBFYXJyaW5ncyUyMFNldHxlbnwwfHwwfHx8MA%3D%3D"
        ]
    },
    {
        id: 13,
        name: "Inel cu Rubin",
        price: "13.500 MDL",
        description: "Inel elegant cu rubin natural și diamante, realizat din aur galben 18k.",
        images: [
            "https://media.istockphoto.com/id/1384536686/photo/beautiful-yellow-gold-ring-with-a-ruby-on-a-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=clDvDBorwUqvYXMlE92W69vm_-n1_cV1644EfKQtkVc=",
            "https://media.istockphoto.com/id/1384536686/photo/beautiful-yellow-gold-ring-with-a-ruby-on-a-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=clDvDBorwUqvYXMlE92W69vm_-n1_cV1644EfKQtkVc=",
            "https://media.istockphoto.com/id/1384536686/photo/beautiful-yellow-gold-ring-with-a-ruby-on-a-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=clDvDBorwUqvYXMlE92W69vm_-n1_cV1644EfKQtkVc="
        ]
    },
    {
        id: 14,
        name: "Colier cu Perle",
        price: "7.800 MDL",
        description: "Colier elegant cu perle naturale și cristale Swarovski.",
        images: [
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVhcmwlMjBOZWNrbGFjZXxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVhcmwlMjBOZWNrbGFjZXxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVhcmwlMjBOZWNrbGFjZXxlbnwwfHwwfHx8MA%3D%3D"
        ]
    },
    {
        id: 15,
        name: "Bratară cu Diamante",
        price: "9.500 MDL",
        description: "Bratară luxoasă cu diamante și aur alb 18k.",
        images: [
            "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlhbW9uZCUyMGJyYWNlbGV0fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlhbW9uZCUyMGJyYWNlbGV0fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlhbW9uZCUyMGJyYWNlbGV0fGVufDB8fDB8fHww"
        ]
    },
    {
        id: 16,
        name: "Cercei cu Perle",
        price: "5.200 MDL",
        description: "Cercei eleganti cu perle naturale și aur alb 14k.",
        images: [
            "https://images.unsplash.com/photo-1704957205218-d436eac4c607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVhcmwlMjBFYXJyaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1704957205218-d436eac4c607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVhcmwlMjBFYXJyaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1704957205218-d436eac4c607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVhcmwlMjBFYXJyaW5nc3xlbnwwfHwwfHx8MA%3D%3D"
        ]
    },
    {
        id: 17,
        name: "Pandantiv cu Diamant",
        price: "11.500 MDL",
        description: "Pandantiv elegant cu diamant central și diamante secundare.",
        images: [
            "https://images.unsplash.com/photo-1724937721228-f7bf3df2a4d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlhbW9uZCUyMFBlbmRhbnR8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1724937721228-f7bf3df2a4d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlhbW9uZCUyMFBlbmRhbnR8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1724937721228-f7bf3df2a4d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlhbW9uZCUyMFBlbmRhbnR8ZW58MHx8MHx8fDA%3D"
        ]
    },
    {
        id: 18,
        name: "Set Inel și Pandantiv",
        price: "19.500 MDL",
        description: "Set elegant format din inel și pandantiv cu diamante și aur alb 18k.",
        images: [
            "https://media.istockphoto.com/id/1216928523/photo/elegant-jewelry-set-of-white-gold-ring-necklace-and-earrings-with-diamonds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pq2ITRsgp_7pTDuxeqDKHdSKov6KC-1nWF8vVr0lQKU=",
            "https://media.istockphoto.com/id/1216928523/photo/elegant-jewelry-set-of-white-gold-ring-necklace-and-earrings-with-diamonds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pq2ITRsgp_7pTDuxeqDKHdSKov6KC-1nWF8vVr0lQKU=",
            "https://media.istockphoto.com/id/1216928523/photo/elegant-jewelry-set-of-white-gold-ring-necklace-and-earrings-with-diamonds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pq2ITRsgp_7pTDuxeqDKHdSKov6KC-1nWF8vVr0lQKU="
        ]
    }
];

// State management
let cart = [];
let wishlist = [];

// DOM Elements
const productsGrid = document.querySelector('.products-grid');
const modal = document.getElementById('product-modal');
const closeModal = document.querySelector('.close-modal');
const modalMainImage = document.getElementById('modal-main-image');
const modalProductName = document.getElementById('modal-product-name');
const modalProductPrice = document.getElementById('modal-product-price');
const modalProductDescription = document.getElementById('modal-product-description');
const wishlistCount = document.querySelector('.wishlist-count');
const cartCount = document.querySelector('.cart-count');

// Initialize the page
function init() {
    renderProducts();
    setupEventListeners();
    updateCounters();
}

// Render products in the grid
function renderProducts() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return; // Skip if we're not on the products page
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Adaugă în Coș</button>
                <button class="add-to-wishlist-btn" onclick="addToWishlist(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Close modal when clicking the close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Product card click event
    productsGrid.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        if (productCard && !e.target.closest('button')) {
            const productId = parseInt(productCard.dataset.id);
            openProductModal(productId);
        }
    });

    // Cart icon click event
    document.querySelector('.cart-icon').addEventListener('click', (e) => {
        e.preventDefault();
        openCartModal();
    });

    // Wishlist icon click event
    document.querySelector('.wishlist-icon').addEventListener('click', (e) => {
        e.preventDefault();
        openWishlistModal();
    });
}

// Open product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    modalMainImage.src = product.images[0];
    modalProductName.textContent = product.name;
    modalProductPrice.textContent = product.price;
    modalProductDescription.textContent = product.description;

    // Render thumbnails
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    thumbnailContainer.innerHTML = product.images.map((img, index) => `
        <img src="${img}" alt="Thumbnail ${index + 1}" 
             class="thumbnail ${index === 0 ? 'active' : ''}"
             onclick="changeMainImage('${img}', this)">
    `).join('');

    modal.style.display = 'block';
}

// Open cart modal
function openCartModal() {
    const cartModal = document.createElement('div');
    cartModal.className = 'modal';
    cartModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Coșul meu</h2>
            <div class="cart-items">
                ${cart.length === 0 ? '<p>Coșul este gol</p>' : 
                cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.images[0]}" alt="${item.name}">
                        <div class="cart-item-details">
                            <h3>${item.name}</h3>
                            <p>${item.price}</p>
                        </div>
                        <button onclick="removeFromCart(${item.id})" class="remove-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
            ${cart.length > 0 ? `
                <div class="cart-total">
                    <p>Total: ${calculateTotal()} MDL</p>
                    <button class="checkout-btn">Finalizează Comanda</button>
                </div>
            ` : ''}
        </div>
    `;

    document.body.appendChild(cartModal);
    cartModal.style.display = 'block';

    // Close modal functionality
    const closeBtn = cartModal.querySelector('.close-modal');
    closeBtn.onclick = () => cartModal.remove();
    cartModal.onclick = (e) => {
        if (e.target === cartModal) cartModal.remove();
    };
}

// Open wishlist modal
function openWishlistModal() {
    const wishlistModal = document.createElement('div');
    wishlistModal.className = 'modal';
    wishlistModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Produse Favorite</h2>
            <div class="wishlist-items">
                ${wishlist.length === 0 ? '<p>Nu aveți produse favorite</p>' : 
                wishlist.map(item => `
                    <div class="wishlist-item">
                        <img src="${item.images[0]}" alt="${item.name}">
                        <div class="wishlist-item-details">
                            <h3>${item.name}</h3>
                            <p>${item.price}</p>
                        </div>
                        <button onclick="removeFromWishlist(${item.id})" class="remove-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button onclick="addToCart(${item.id})" class="add-to-cart-btn">
                            Adaugă în Coș
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.body.appendChild(wishlistModal);
    wishlistModal.style.display = 'block';

    // Close modal functionality
    const closeBtn = wishlistModal.querySelector('.close-modal');
    closeBtn.onclick = () => wishlistModal.remove();
    wishlistModal.onclick = (e) => {
        if (e.target === wishlistModal) wishlistModal.remove();
    };
}

// Calculate total price
function calculateTotal() {
    return cart.reduce((total, item) => {
        const price = parseInt(item.price.replace(/[^0-9]/g, ''));
        return total + price;
    }, 0);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCounters();
    openCartModal(); // Refresh cart modal
    showNotification('Produs eliminat din coș!');
}

// Remove from wishlist
function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    updateCounters();
    openWishlistModal(); // Refresh wishlist modal
    showNotification('Produs eliminat din favorite!');
}

// Change main image in modal
function changeMainImage(imgSrc, thumbnail) {
    modalMainImage.src = imgSrc;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);
    updateCounters();
    showNotification('Produs adăugat în coș!');
}

// Add to wishlist
function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const isInWishlist = wishlist.some(p => p.id === productId);
    if (isInWishlist) {
        wishlist = wishlist.filter(p => p.id !== productId);
        showNotification('Produs eliminat din favorite!');
    } else {
        wishlist.push(product);
        showNotification('Produs adăugat la favorite!');
    }
    updateCounters();
}

// Update counters
function updateCounters() {
    cartCount.textContent = cart.length;
    wishlistCount.textContent = wishlist.length;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 