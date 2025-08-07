import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiFilter, FiX, FiShoppingCart, FiStar, FiChevronDown } from 'react-icons/fi';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const ShopPage = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Extract category from URL
  const categoryFromUrl = location.pathname.split('/shop/')[1]?.replace(/-/g, ' ') || 'All Products';
  
  // Sample product data
const products = [
    {
      id: 1,
      name: 'Premium All-Season Tire',
      category: 'All-Season Tires',
      price: 189.99,
      rating: 4.5,
      reviews: 128,
      image: '/tire1.jpg',
      isSale: true,
      originalPrice: 219.99,
      description: 'High-performance all-season tires with excellent wet and dry traction. 60,000 mile warranty.',
      features: [
        'All-weather traction',
        'Quiet ride technology',
        'Extended tread life',
        'Fuel efficient design'
      ],
      brand: 'Michelin'
    },
    {
      id: 2,
      name: 'Winter Performance Tire',
      category: 'Winter Tires',
      price: 159.99,
      rating: 4.2,
      reviews: 86,
      image: '/tire2.jpg',
      description: 'Superior winter traction with advanced snow and ice grip technology.',
      features: [
        'Deep snow traction',
        'Ice-grip compound',
        'Durable winter compound',
        '3D siping technology'
      ],
      brand: 'Bridgestone'
    },
    {
      id: 3,
      name: 'Sport Performance Tire',
      category: 'Performance Tires',
      price: 249.99,
      rating: 4.8,
      reviews: 215,
      image: '/tire3.jpg',
      description: 'Ultra-high performance tires for sports cars and performance vehicles.',
      features: [
        'Track-ready performance',
        'Enhanced cornering stability',
        'High-speed rated',
        'Precision handling'
      ],
      brand: 'Pirelli'
    },
    {
      id: 4,
      name: 'Heavy Duty Truck Tire',
      category: 'Truck Tires',
      price: 289.99,
      rating: 4.3,
      reviews: 42,
      image: '/tire4.jpg',
      description: 'Rugged tires built for heavy-duty trucks and commercial vehicles.',
      features: [
        'Extra load capacity',
        'Reinforced sidewalls',
        'All-terrain traction',
        'Long-lasting tread'
      ],
      brand: 'Goodyear'
    },
    {
      id: 5,
      name: 'Alloy Wheel Set (18")',
      category: 'Alloy Wheels',
      price: 499.99,
      rating: 4.7,
      reviews: 173,
      image: '/wheel1.jpg',
      isSale: true,
      originalPrice: 599.99,
      description: 'Lightweight alloy wheels that combine style and performance.',
      features: [
        'Aircraft-grade aluminum',
        'Custom finishes available',
        'Improved heat dissipation',
        'Corrosion resistant'
      ],
      brand: 'Enkei'
    },
    {
      id: 6,
      name: 'Tire Care Kit',
      category: 'Tire Care',
      price: 29.99,
      rating: 4.1,
      reviews: 57,
      image: '/accessory1.jpg',
      description: 'Complete kit to clean, protect and maintain your tires.',
      features: [
        'Includes cleaner and protectant',
        'UV protection',
        'Non-greasy formula',
        'Easy application'
      ],
      brand: 'Chemical Guys'
    },
    {
      id: 7,
      name: 'TPMS Sensor Set',
      category: 'TPMS Sensors',
      price: 89.99,
      rating: 4.4,
      reviews: 91,
      image: '/accessory2.jpg',
      description: 'Direct-fit TPMS sensors for accurate tire pressure monitoring.',
      features: [
        'OE-compatible',
        'Easy installation',
        'Long battery life',
        'Reliable signal'
      ],
      brand: 'Schrader'
    },
    {
      id: 8,
      name: 'Custom Wheel Package',
      category: 'Wheel Packages',
      price: 1299.99,
      rating: 4.9,
      reviews: 204,
      image: '/wheel2.jpg',
      description: 'Complete wheel and tire package with custom fitment.',
      features: [
        'Wheels + tires mounted',
        'Precision balanced',
        'Lifetime lug nuts included',
        'Free shipping'
      ],
      brand: 'Vossen'
    }
  ];
  // Get unique categories
  const categories = [...new Set(products.map(product => product.category))];
  const brands = [...new Set(products.map(product => product.brand))];

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.id - b.id; // default sort by featured (original order)
  });

  // Open product modal
  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-[#A1252E] transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-[#A1252E] transition-colors">Shop</Link>
        {categoryFromUrl !== 'All Products' && (
          <>
            <span className="mx-2">/</span>
            <span className="text-[#A1252E] font-medium">{categoryFromUrl}</span>
          </>
        )}
      </nav>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
          {selectedCategory === 'All Products' ? 'Shop All Products' : selectedCategory}
          <span className="block text-sm font-normal text-gray-500 mt-1">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
          </span>
        </h1>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#A1252E] focus:border-[#A1252E]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
            <FiChevronDown className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg flex items-center">
                <FiFilter className="mr-2" />
                Filters
              </h3>
              <button 
                onClick={() => {
                  setSelectedCategory('All Products');
                  setPriceRange([0, 500]);
                }}
                className="text-sm text-[#A1252E] hover:underline"
              >
                Clear all
              </button>
            </div>
            
            {/* Categories */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory('All Products')}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedCategory === 'All Products' 
                        ? 'bg-[#A1252E] text-white' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    All Products
                  </button>
                </li>
                {categories.map(category => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category 
                          ? 'bg-[#A1252E] text-white' 
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
              <div className="px-2">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">${priceRange[0]}</span>
                  <span className="text-sm text-gray-600">${priceRange[1]}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
            
            {/* Brands */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Brands</h4>
              <ul className="space-y-2">
                {brands.map(brand => (
                  <li key={brand}>
                    <button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-50 text-gray-700 transition-colors">
                      {brand}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map(product => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all cursor-pointer group"
                  onClick={() => openProductModal(product)}
                >
                  <div className="relative pt-[100%] bg-gray-50">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="absolute top-0 left-0 w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.isSale && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        SALE
                      </div>
                    )}
                    <div className="absolute top-2 right-2 flex items-center bg-white bg-opacity-90 px-2 py-1 rounded shadow-sm">
                      <FiStar className="text-yellow-400 mr-1" />
                      <span className="text-xs font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-2">
                      <h3 className="font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
                      <p className="text-xs text-gray-500">{product.brand}</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div>
                        {product.isSale && (
                          <span className="text-sm text-gray-500 line-through mr-2">
                            ${product.originalPrice}
                          </span>
                        )}
                        <span className="font-bold text-[#A1252E]">
                          ${product.price}
                        </span>
                      </div>
                      <button 
                        className="bg-[#A1252E] text-white p-2 rounded-full hover:bg-[#8a1e27] transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add to cart logic
                        }}
                      >
                        <FiShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <FiX className="text-gray-400 text-2xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your filters or search criteria</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All Products');
                  setPriceRange([0, 500]);
                }}
                className="px-4 py-2 bg-[#A1252E] text-white rounded-md hover:bg-[#8a1e27] transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Modal */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  {selectedProduct && (
                    <div className="relative">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                      >
                        <FiX className="text-gray-600" />
                      </button>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Product Image */}
                        <div className="bg-gray-50 p-8">
                          <div className="relative pt-[100%]">
                            <img
                              src={selectedProduct.image}
                              alt={selectedProduct.name}
                              className="absolute top-0 left-0 w-full h-full object-contain"
                            />
                          </div>
                        </div>
                        
                        {/* Product Details */}
                        <div className="p-6 md:p-8">
                          <div className="mb-4">
                            <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md mb-2">
                              {selectedProduct.category}
                            </span>
                            <Dialog.Title className="text-2xl font-bold text-gray-900">
                              {selectedProduct.name}
                            </Dialog.Title>
                            <div className="flex items-center mt-2">
                              <div className="flex items-center">
                                <FiStar className="text-yellow-400 mr-1" />
                                <span className="font-medium">{selectedProduct.rating}</span>
                                <span className="text-gray-500 text-sm ml-1">({selectedProduct.reviews} reviews)</span>
                              </div>
                              <span className="mx-2 text-gray-300">|</span>
                              <span className="text-sm text-gray-500">Brand: {selectedProduct.brand}</span>
                            </div>
                          </div>
                          
                          <div className="mb-6">
                            <p className="text-gray-600">{selectedProduct.description}</p>
                          </div>
                          
                          <div className="mb-6">
                            <h3 className="font-medium text-gray-900 mb-2">Key Features</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {selectedProduct.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-green-500 mr-2">✓</span>
                                  <span className="text-gray-600">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="border-t border-gray-200 pt-4">
                            <div className="flex items-center justify-between">
                              <div>
                                {selectedProduct.isSale && (
                                  <span className="text-lg text-gray-500 line-through mr-2">
                                    ${selectedProduct.originalPrice}
                                  </span>
                                )}
                                <span className="text-2xl font-bold text-[#A1252E]">
                                  ${selectedProduct.price}
                                </span>
                              </div>
                              <button className="flex items-center justify-center bg-[#A1252E] text-white px-6 py-3 rounded-md hover:bg-[#8a1e27] transition-colors">
                                <FiShoppingCart className="mr-2" />
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ShopPage;