// Product Database - Updated with multiple categories
const products = [
  {
    id: 1,
    name: "Remera Princesa",
    categories: ["mujer", "remeras", "verano"],
    price: 12000,
    originalPrice: null,
    discount: null,
    sku: "M-REMP01",
    images: ["assets/img/IMG_1319.jpg", "assets/img/IMG_1287.JPG"],
    colors: ["Verde militar", "Gris", "Negro", "Blanco"],
    sizes: ["S", "M", "L", "XL"],
    description: "Remera de algodón suave y cómoda, perfecta para uso diario.",
    stock: 15,
    featured: true,
    onSale: false
  },
  {
    id: 2,
    name: "Remera Combinada",
    categories: ["mujer", "remeras", "verano", "ofertas"],
    price: 6000,
    originalPrice: 8000,
    discount: 25,
    sku: "M-REMP02",
    images: ["assets/img/IMG_1294.JPG", "assets/img/IMG_1298.JPG"],
    colors: ["Verde militar", "Negro", "Violeta", "Gris", "Rosa", "Blanco", "Morado", "Bordo"],
    sizes: ["S", "M", "L", "XL"],
    description: "Remera combinada con diseño moderno y colores vibrantes.",
    stock: 8,
    featured: true,
    onSale: true
  },
  {
    id: 3,
    name: "Chaleco Engomado",
    categories: ["mujer", "abrigos", "invierno", "ofertas"],
    price: 40000,
    originalPrice: 50000,
    discount: 20,
    sku: "M-CHAL01",
    images: ["assets/img/IMG_1313.jpg", "assets/img/IMG_1308.JPG"],
    colors: ["Marrón", "Negro", "Beige"],
    sizes: ["S", "M", "L", "XL"],
    description: "Chaleco engomado resistente al agua, ideal para el invierno.",
    stock: 5,
    featured: true,
    onSale: true
  },
  {
    id: 4,
    name: "Sueter Lana",
    categories: ["mujer", "abrigos", "invierno", "ofertas"],
    price: 30000,
    originalPrice: 35000,
    discount: 15,
    sku: "M-SUET01",
    images: ["assets/img/IMG_1300.JPG", "assets/img/IMG_1301.JPG"],
    colors: ["Beige", "Rojo", "Negro", "Gris"],
    sizes: ["S", "M", "L", "XL"],
    description: "Suéter de lana natural, suave y abrigado.",
    stock: 12,
    featured: true,
    onSale: true
  },
  {
    id: 5,
    name: "Pantalón Cargo",
    categories: ["hombre", "pantalones", "casual"],
    price: 25000,
    originalPrice: null,
    discount: null,
    sku: "H-PANT01",
    images: ["assets/img/IMG_1302.JPG"],
    colors: ["Verde militar", "Negro", "Beige"],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Pantalón cargo resistente con múltiples bolsillos.",
    stock: 10,
    featured: false,
    onSale: false
  },
  {
    id: 6,
    name: "Campera Deportiva",
    categories: ["hombre", "abrigos", "deportivo", "invierno"],
    price: 35000,
    originalPrice: null,
    discount: null,
    sku: "H-CAMP01",
    images: ["assets/img/IMG_1309.JPG"],
    colors: ["Negro", "Azul marino", "Gris"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Campera deportiva con capucha, ideal para actividades al aire libre.",
    stock: 7,
    featured: false,
    onSale: false
  },
  {
    id: 7,
    name: "Vestido Infantil",
    categories: ["ninos", "vestidos", "verano"],
    price: 15000,
    originalPrice: null,
    discount: null,
    sku: "N-VEST01",
    images: ["assets/img/IMG_1310.JPG"],
    colors: ["Rosa", "Celeste", "Amarillo"],
    sizes: ["2", "4", "6", "8", "10"],
    description: "Vestido infantil cómodo y colorido para niñas.",
    stock: 20,
    featured: false,
    onSale: false
  },
  {
    id: 8,
    name: "Zapatillas Deportivas",
    categories: ["calzado", "deportivo", "unisex"],
    price: 45000,
    originalPrice: null,
    discount: null,
    sku: "C-ZAP01",
    images: ["assets/img/IMG_1311.JPG"],
    colors: ["Blanco", "Negro", "Azul"],
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42", "43"],
    description: "Zapatillas deportivas cómodas para uso diario.",
    stock: 15,
    featured: false,
    onSale: false
  },
  {
    id: 9,
    name: "Camisa Formal",
    categories: ["hombre", "camisas", "formal", "ofertas"],
    price: 18000,
    originalPrice: 22000,
    discount: 18,
    sku: "H-CAM01",
    images: ["assets/img/IMG_1302.JPG"],
    colors: ["Blanco", "Azul", "Negro"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Camisa formal de algodón para ocasiones especiales.",
    stock: 12,
    featured: true,
    onSale: true
  },
  {
    id: 10,
    name: "Botas de Cuero",
    categories: ["calzado", "formal", "invierno"],
    price: 65000,
    originalPrice: null,
    discount: null,
    sku: "C-BOT01",
    images: ["assets/img/IMG_1311.JPG"],
    colors: ["Marrón", "Negro"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    description: "Botas de cuero genuino, resistentes y elegantes.",
    stock: 8,
    featured: false,
    onSale: false
  },
  {
    id: 11,
    name: "Conjunto Infantil",
    categories: ["ninos", "conjuntos", "casual", "ofertas"],
    price: 12000,
    originalPrice: 15000,
    discount: 20,
    sku: "N-CONJ01",
    images: ["assets/img/IMG_1310.JPG"],
    colors: ["Azul", "Rosa", "Verde"],
    sizes: ["2", "4", "6", "8"],
    description: "Conjunto cómodo para niños, ideal para jugar.",
    stock: 25,
    featured: true,
    onSale: true
  },
  {
    id: 12,
    name: "Blusa Elegante",
    categories: ["mujer", "blusas", "formal"],
    price: 16000,
    originalPrice: null,
    discount: null,
    sku: "M-BLU01",
    images: ["assets/img/IMG_1294.JPG"],
    colors: ["Blanco", "Negro", "Rosa", "Azul"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Blusa elegante para ocasiones especiales.",
    stock: 18,
    featured: false,
    onSale: false
  },
  {
    id: 13,
    name: "Sandalias de Verano",
    categories: ["calzado", "verano", "ofertas"],
    price: 25000,
    originalPrice: 30000,
    discount: 17,
    sku: "C-SAN01",
    images: ["assets/img/IMG_1311.JPG"],
    colors: ["Beige", "Negro", "Blanco"],
    sizes: ["35", "36", "37", "38", "39", "40"],
    description: "Sandalias cómodas para el verano.",
    stock: 20,
    featured: false,
    onSale: true
  },
  {
    id: 14,
    name: "Pijama Infantil",
    categories: ["ninos", "pijamas", "casual"],
    price: 8000,
    originalPrice: null,
    discount: null,
    sku: "N-PIJ01",
    images: ["assets/img/IMG_1310.JPG"],
    colors: ["Celeste", "Rosa", "Amarillo"],
    sizes: ["2", "4", "6", "8", "10", "12"],
    description: "Pijama suave y cómodo para niños.",
    stock: 30,
    featured: false,
    onSale: false
  }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('rosema-cart')) || [];

// Current filters - Updated for multiple categories
let currentFilters = {
  category: 'all',
  search: '',
  onSale: false
};

// Category subcategories configuration
const categorySubcategories = {
  mujer: {
    title: "Ver todo de MUJER",
    items: [
      { name: "Ver todo de MUJER", type: "all", active: true },
      { name: "Vestidos", type: "vestidos" },
      { name: "Prendas de Torso", type: "torso" },
      { name: "Prendas de Piernas", type: "piernas" },
      { name: "VERANO", type: "season", season: "verano", class: "season-verano" },
      { name: "MEDIA ESTACION", type: "season", season: "media", class: "season-media" },
      { name: "INVIERNO", type: "season", season: "invierno", class: "season-invierno" },
      { name: "Formal", type: "formal" },
      { name: "Fiestas", type: "fiestas" },
      { name: "TALLAS", type: "tallas" }
    ]
  },
  hombre: {
    title: "Ver todo de HOMBRE",
    items: [
      { name: "Ver todo de HOMBRE", type: "all", active: true },
      { name: "Camisas", type: "camisas" },
      { name: "Pantalones", type: "pantalones" },
      { name: "Camperas", type: "camperas" },
      { name: "VERANO", type: "season", season: "verano", class: "season-verano" },
      { name: "MEDIA ESTACION", type: "season", season: "media", class: "season-media" },
      { name: "INVIERNO", type: "season", season: "invierno", class: "season-invierno" },
      { name: "Deportivo", type: "deportivo" },
      { name: "Formal", type: "formal" },
      { name: "TALLAS", type: "tallas" }
    ]
  },
  ninos: {
    title: "Ver todo de NIÑOS/BEBÉS",
    items: [
      { name: "Ver todo de NIÑOS/BEBÉS", type: "all", active: true },
      { name: "Bebés (0-2 años)", type: "bebes" },
      { name: "Niños (3-8 años)", type: "ninos" },
      { name: "Niñas (3-8 años)", type: "ninas" },
      { name: "VERANO", type: "season", season: "verano", class: "season-verano" },
      { name: "MEDIA ESTACION", type: "season", season: "media", class: "season-media" },
      { name: "INVIERNO", type: "season", season: "invierno", class: "season-invierno" },
      { name: "Pijamas", type: "pijamas" },
      { name: "TALLAS", type: "tallas" }
    ]
  },
  calzado: {
    title: "Ver todo de CALZADO",
    items: [
      { name: "Ver todo de CALZADO", type: "all", active: true },
      { name: "Zapatillas", type: "zapatillas" },
      { name: "Botas", type: "botas" },
      { name: "Sandalias", type: "sandalias" },
      { name: "Zapatos Formales", type: "formales" },
      { name: "VERANO", type: "season", season: "verano", class: "season-verano" },
      { name: "MEDIA ESTACION", type: "season", season: "media", class: "season-media" },
      { name: "INVIERNO", type: "season", season: "invierno", class: "season-invierno" },
      { name: "TALLAS", type: "tallas" }
    ]
  },
  "ropa-interior": {
    title: "Ver todo de ROPA INTERIOR",
    items: [
      { name: "Ver todo de ROPA INTERIOR", type: "all", active: true },
      { name: "Ropa Interior Mujer", type: "mujer" },
      { name: "Ropa Interior Hombre", type: "hombre" },
      { name: "Ropa Interior Infantil", type: "infantil" },
      { name: "TALLAS", type: "tallas" }
    ]
  },
  accesorios: {
    title: "Ver todo de ACCESORIOS",
    items: [
      { name: "Ver todo de ACCESORIOS", type: "all", active: true },
      { name: "Carteras", type: "carteras" },
      { name: "Cinturones", type: "cinturones" },
      { name: "Sombreros", type: "sombreros" },
      { name: "Joyas", type: "joyas" },
      { name: "Bufandas", type: "bufandas" }
    ]
  }
};

// Current subcategory filter
let currentSubcategory = {
  category: 'all',
  subcategory: 'all',
  sortBy: 'featured'
};

// View mode state
let isFullCatalogView = false;

// Mobile detection
function isMobileDevice() {
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  renderProducts();
  updateCartUI();
  setupCarousel();
  setupMobileMenu();
  setupHomepageSuggestions();
}

function setupEventListeners() {
  // Search functionality
  const searchInput = document.querySelector('input[type="search"]');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }
  
  // Mobile search
  const mobileSearchBtn = document.querySelector('.sm\\:hidden button[aria-label="Buscar"]');
  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener('click', toggleMobileSearch);
  }
  
  // Category navigation - Updated for "Inicio" functionality
  const categoryLinks = document.querySelectorAll('.category-nav a, #mobile-menu a');
  categoryLinks.forEach(link => {
    link.addEventListener('click', handleCategoryClick);
  });
  
  // Cart button
  const cartBtn = document.querySelector('button[aria-label="Carrito"]');
  if (cartBtn) {
    cartBtn.addEventListener('click', toggleCart);
  }
  
  // Ver todo button
  const verTodoBtn = document.querySelector('.btn-ver-todo');
  if (verTodoBtn) {
    verTodoBtn.addEventListener('click', showAllProducts);
  }
  
  // Sort dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', handleSortChange);
  }
  
  // Back to home button
  const backToHomeBtn = document.getElementById('back-to-home');
  if (backToHomeBtn) {
    backToHomeBtn.addEventListener('click', backToHome);
  }
  
  // Detail page back button
  const detailBackBtn = document.getElementById('detail-back-btn');
  if (detailBackBtn) {
    detailBackBtn.addEventListener('click', backToHome);
  }
  
  // Load more button
  const loadMoreBtn = document.getElementById('load-more');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadMoreProducts);
  }
}

function setupHomepageSuggestions() {
  // Add event listeners to homepage suggestion cards
  const suggestionCards = document.querySelectorAll('#homepage-suggestions [data-category]');
  suggestionCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.category;
      if (categorySubcategories[category]) {
        showCategoryPage(category);
      }
    });
  });
}

function handleSearch(e) {
  currentFilters.search = e.target.value.toLowerCase();
  renderProducts();
}

function toggleMobileSearch() {
  const searchContainer = document.createElement('div');
  searchContainer.className = 'fixed top-0 left-0 w-full bg-[#d63629] p-4 z-50';
  searchContainer.innerHTML = `
    <div class="flex items-center space-x-2">
      <input type="search" placeholder="Buscar productos..." 
             class="flex-1 rounded-full py-2 px-4 text-gray-900 focus:outline-none" 
             id="mobile-search-input">
      <button onclick="closeMobileSearch()" class="text-white text-xl">✕</button>
    </div>
  `;
  
  document.body.appendChild(searchContainer);
  document.getElementById('mobile-search-input').focus();
  
  document.getElementById('mobile-search-input').addEventListener('input', handleSearch);
}

function closeMobileSearch() {
  const searchContainer = document.querySelector('.fixed.top-0');
  if (searchContainer) {
    searchContainer.remove();
  }
}

function handleCategoryClick(e) {
  e.preventDefault();
  
  // Get category from data attribute or text content
  const categoryData = e.target.dataset.category;
  const categoryText = e.target.textContent.toLowerCase().trim();
  
  // Handle "Inicio" button specifically
  if (categoryText === 'inicio') {
    backToHome();
    return;
  }
  
  // Map category names
  const categoryMap = {
    'mujer': 'mujer',
    'hombre': 'hombre',
    'niños/bebes': 'ninos',
    'niños/bebés': 'ninos',
    'calzado': 'calzado',
    'ropa interior': 'ropa-interior',
    'accesorios': 'accesorios',
    'ver todo': 'all'
  };
  
  const selectedCategory = categoryData || categoryMap[categoryText] || 'all';
  
  // If selecting a specific category, show category page
  if (selectedCategory !== 'all' && categorySubcategories[selectedCategory]) {
    showCategoryPage(selectedCategory);
  } else {
    // Show all products
    currentFilters.category = 'all';
    currentSubcategory.category = 'all';
    currentSubcategory.subcategory = 'all';
    isFullCatalogView = true;
    renderProducts();
  }
  
  // Close mobile menu if open
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }
}

function showAllProducts() {
  currentFilters.category = 'all';
  currentFilters.search = '';
  currentFilters.onSale = false;
  const searchInput = document.querySelector('input[type="search"]');
  if (searchInput) searchInput.value = '';
  
  // Reset subcategory filters
  currentSubcategory.category = 'all';
  currentSubcategory.subcategory = 'all';
  currentSubcategory.sortBy = 'featured';
  
  // Toggle to full catalog view
  isFullCatalogView = true;
  renderProducts();
}

function handleSortChange(e) {
  currentSubcategory.sortBy = e.target.value;
  renderProducts();
}

function showCategoryPage(category) {
  const categoryPage = document.getElementById('category-page');
  const carouselSections = document.getElementById('carousel-sections');
  const fullCatalog = document.getElementById('full-catalog');
  const homepageSuggestions = document.getElementById('homepage-suggestions');
  const productDetailPage = document.getElementById('product-detail-page');
  const categoryTitle = document.getElementById('category-title');
  const subcategoryMenu = document.getElementById('subcategory-menu');
  
  if (!categoryPage || !categorySubcategories[category]) return;
  
  // Hide all other sections and show category page
  if (carouselSections) carouselSections.classList.add('hidden');
  if (fullCatalog) fullCatalog.classList.add('hidden');
  if (homepageSuggestions) homepageSuggestions.classList.add('hidden');
  if (productDetailPage) productDetailPage.classList.add('hidden');
  categoryPage.classList.remove('hidden');
  
  // Set title
  if (categoryTitle) {
    categoryTitle.textContent = categorySubcategories[category].title;
  }
  
  // Generate subcategory menu
  if (subcategoryMenu) {
    const menuHTML = categorySubcategories[category].items.map(item => {
      const activeClass = item.active ? 'active' : '';
      const seasonClass = item.class || '';
      return `
        <a href="#" class="subcategory-item ${activeClass} ${seasonClass}" 
           data-category="${category}" 
           data-subcategory="${item.type}"
           data-season="${item.season || ''}">
          ${item.name}
        </a>
      `;
    }).join('');
    
    subcategoryMenu.innerHTML = menuHTML;
    
    // Add event listeners to subcategory items
    subcategoryMenu.querySelectorAll('.subcategory-item').forEach(item => {
      item.addEventListener('click', handleSubcategoryClick);
    });
  }
  
  // Set current category and render products
  currentFilters.category = category;
  currentSubcategory.category = category;
  currentSubcategory.subcategory = 'all';
  
  // Render products in the new page
  renderCategoryProducts();
}

function backToHome() {
  const categoryPage = document.getElementById('category-page');
  const carouselSections = document.getElementById('carousel-sections');
  const homepageSuggestions = document.getElementById('homepage-suggestions');
  const fullCatalog = document.getElementById('full-catalog');
  const productDetailPage = document.getElementById('product-detail-page');
  
  // Hide all other sections and show home sections
  if (categoryPage) categoryPage.classList.add('hidden');
  if (fullCatalog) fullCatalog.classList.add('hidden');
  if (productDetailPage) productDetailPage.classList.add('hidden');
  if (carouselSections) carouselSections.classList.remove('hidden');
  if (homepageSuggestions) homepageSuggestions.classList.remove('hidden');
  
  // Reset filters
  currentFilters.category = 'all';
  currentSubcategory.category = 'all';
  currentSubcategory.subcategory = 'all';
  isFullCatalogView = false;
  
  // Re-render products for home view
  renderProducts();
}

function loadMoreProducts() {
  // For now, just show a message - in a real app this would load more products
  const loadMoreBtn = document.getElementById('load-more');
  if (loadMoreBtn) {
    loadMoreBtn.textContent = 'CARGANDO...';
    setTimeout(() => {
      loadMoreBtn.textContent = 'VER MÁS ▼';
    }, 1000);
  }
}

function handleSubcategoryClick(e) {
  e.preventDefault();
  
  const category = e.target.dataset.category;
  const subcategory = e.target.dataset.subcategory;
  const season = e.target.dataset.season;
  
  // Update current filters
  currentFilters.category = category;
  currentSubcategory.category = category;
  currentSubcategory.subcategory = subcategory;
  
  // Update active state in menu
  const subcategoryMenu = document.getElementById('subcategory-menu');
  if (subcategoryMenu) {
    subcategoryMenu.querySelectorAll('.subcategory-item').forEach(item => {
      item.classList.remove('active');
    });
    e.target.classList.add('active');
  }
  
  // Render products
  renderCategoryProducts();
}

function renderCategoryProducts() {
  let filteredProducts = products.filter(product => {
    // Updated to use categories array instead of single category
    const matchesCategory = currentFilters.category === 'all' || 
                           product.categories.includes(currentFilters.category);
    const matchesSearch = currentFilters.search === '' || 
                         product.name.toLowerCase().includes(currentFilters.search) ||
                         product.description.toLowerCase().includes(currentFilters.search);
    const matchesSale = !currentFilters.onSale || product.onSale;
    
    // Subcategory filtering
    if (currentSubcategory.subcategory !== 'all') {
      // Check if product categories include the subcategory
      const matchesSubcategory = product.categories.includes(currentSubcategory.subcategory);
      return matchesCategory && matchesSearch && matchesSale && matchesSubcategory;
    }
    
    return matchesCategory && matchesSearch && matchesSale;
  });
  
  // Apply sorting
  filteredProducts = sortProducts(filteredProducts, currentSubcategory.sortBy);
  
  // Update results count
  updateResultsCount(filteredProducts.length);
  
  // Render products in category page
  const catalogGrid = document.getElementById('catalog-grid');
  const noResults = document.getElementById('no-results');
  
  if (filteredProducts.length === 0) {
    if (catalogGrid) catalogGrid.innerHTML = '';
    if (noResults) noResults.classList.remove('hidden');
  } else {
    if (noResults) noResults.classList.add('hidden');
    if (catalogGrid) {
      catalogGrid.innerHTML = filteredProducts.map(product => createCatalogProductCard(product)).join('');
      
      // Add click listeners to product cards - Mobile vs Desktop behavior
      catalogGrid.querySelectorAll('.catalog-product-card').forEach((item, index) => {
        item.addEventListener('click', () => {
          if (isMobileDevice()) {
            // Mobile: Go directly to detail page
            openProductDetailPage(filteredProducts[index]);
          } else {
            // Desktop: Show modal first
            openProductModal(filteredProducts[index]);
          }
        });
      });
    }
  }
}

function renderProducts() {
  let filteredProducts = products.filter(product => {
    // Updated to use categories array instead of single category
    const matchesCategory = currentFilters.category === 'all' || 
                           product.categories.includes(currentFilters.category);
    const matchesSearch = currentFilters.search === '' || 
                         product.name.toLowerCase().includes(currentFilters.search) ||
                         product.description.toLowerCase().includes(currentFilters.search);
    const matchesSale = !currentFilters.onSale || product.onSale;
    
    // Subcategory filtering (only apply in full catalog view)
    if (isFullCatalogView && currentSubcategory.subcategory !== 'all') {
      const matchesSubcategory = product.categories.includes(currentSubcategory.subcategory);
      return matchesCategory && matchesSearch && matchesSale && matchesSubcategory;
    }
    
    return matchesCategory && matchesSearch && matchesSale;
  });
  
  // Apply sorting
  if (isFullCatalogView) {
    filteredProducts = sortProducts(filteredProducts, currentSubcategory.sortBy);
  }
  
  if (isFullCatalogView) {
    showFullCatalog(filteredProducts);
  } else {
    showCarouselView(filteredProducts);
  }
}

function showCarouselView(filteredProducts) {
  // Show carousel sections
  const carouselSections = document.getElementById('carousel-sections');
  const fullCatalog = document.getElementById('full-catalog');
  
  if (carouselSections) carouselSections.classList.remove('hidden');
  if (fullCatalog) fullCatalog.classList.add('hidden');
  
  // Update carousel tracks
  updateCarouselTrack('carousel-track', filteredProducts.filter(p => p.featured));
  updateCarouselTrack('carousel-track-ofertas', filteredProducts.filter(p => p.onSale));
}

function sortProducts(products, sortBy) {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'name':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    case 'featured':
    default:
      return sortedProducts.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
  }
}

function showFullCatalog(filteredProducts) {
  // Hide carousel sections
  const carouselSections = document.getElementById('carousel-sections');
  const fullCatalog = document.getElementById('full-catalog');
  
  if (carouselSections) carouselSections.classList.add('hidden');
