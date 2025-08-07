import React, { useState } from 'react';
import { Heart, ShoppingBag, Trash2, Search, Star, ChevronRight } from 'lucide-react';

const SavedItems = () => {
  const [savedItems, setSavedItems] = useState([
    {
      id: 1,
      name: "Performance All-Season Tires",
      brand: "Michelin",
      price: 189.99,
      originalPrice: 219.99,
      rating: 4.7,
      image: "https://via.placeholder.com/150?text=Tire",
      inStock: true
    },
    {
      id: 2,
      name: "Sport Alloy Wheels",
      brand: "Enkei",
      price: 249.99,
      originalPrice: 299.99,
      rating: 4.5,
      image: "https://via.placeholder.com/150?text=Wheel",
      inStock: true
    },
    {
      id: 3,
      name: "Performance Brake Kit",
      brand: "Brembo",
      price: 399.99,
      originalPrice: 459.99,
      rating: 4.9,
      image: "https://via.placeholder.com/150?text=Brake",
      inStock: false
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const removeItem = (id) => {
    setSavedItems(savedItems.filter(item => item.id !== id));
  };

  const moveToCart = (id) => {
    // Implement your cart logic here
    console.log(`Item ${id} moved to cart`);
    removeItem(id);
  };

  const filteredItems = savedItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 p-6 md:p-8 bg-white  min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Saved Items</h1>
            <p className="text-gray-500 mt-1">
              {savedItems.length} {savedItems.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="relative mt-4 md:mt-0 md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search saved items..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A1252E] focus:border-[#A1252E] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Saved Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative pt-[70%] bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  {!item.inStock && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Out of Stock
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900 line-clamp-1">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{item.brand}</p>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 p-1 rounded-full hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mt-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{item.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">
                      {item.inStock ? 'In Stock' : 'Backorder'}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-4">
                    <span className="text-lg font-semibold text-[#A1252E]">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.originalPrice && (
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex space-x-3">
                    <button
                      onClick={() => moveToCart(item.id)}
                      disabled={!item.inStock}
                      className={`flex-1 flex items-center justify-center py-2 px-4 rounded-lg ${item.inStock ? 'bg-[#A1252E] text-white hover:bg-[#A1252E]/90' : 'bg-gray-200 text-gray-500 cursor-not-allowed'} transition-colors`}
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      {item.inStock ? 'Add to Cart' : 'Notify Me'}
                    </button>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="mx-auto w-24 h-24 bg-[#A1252E]/10 rounded-full flex items-center justify-center">
              <Heart className="h-10 w-10 text-[#A1252E]" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {searchQuery ? 'No matching items found' : 'Your saved items will appear here'}
            </h3>
            <p className="mt-2 text-gray-500">
              {searchQuery ? 'Try a different search term' : 'Start saving items you love'}
            </p>
            {!searchQuery && (
              <button className="mt-6 px-6 py-2 bg-[#A1252E] text-white rounded-lg hover:bg-[#A1252E]/90 transition-colors">
                Browse Products
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedItems;