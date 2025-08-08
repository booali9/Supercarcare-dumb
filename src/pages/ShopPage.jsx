import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiSettings, FiAward, FiShield, FiUsers, FiTool } from 'react-icons/fi';

const mockProducts = [
  {
    id: 1,
    icon: <FiSettings className="text-ferrari/80 text-3xl" />,
    title: 'Performance Tire Installation',
    description: 'Expert installation of high-performance tires for supercars and exotics. Includes balancing and TPMS setup.',
    price: 299.99,
  },
  {
    id: 2,
    icon: <FiAward className="text-ferrari/80 text-3xl" />,
    title: 'Wheel Alignment',
    description: 'Precision laser alignment for optimal handling and tire longevity. Includes digital printout.',
    price: 199.99,
  },
  {
    id: 3,
    icon: <FiShield className="text-ferrari/80 text-3xl" />,
    title: 'Ceramic Coating',
    description: 'Protect your paint and wheels with a professional-grade ceramic coating. Lasts up to 5 years.',
    price: 499.99,
  },
  {
    id: 4,
    icon: <FiUsers className="text-ferrari/80 text-3xl" />,
    title: 'Concierge Pickup & Delivery',
    description: 'White-glove pickup and delivery service for your vehicle, anywhere in the city.',
    price: 149.99,
  },
  {
    id: 5,
    icon: <FiTool className="text-ferrari/80 text-3xl" />,
    title: 'Brake Service',
    description: 'High-performance brake pad and rotor replacement for sports and luxury vehicles.',
    price: 399.99,
  },
];

const ShopPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen relative bg-black py-16 px-4 overflow-hidden">
      {/* Checkered grid pattern background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(220,20,60,0.08) 25%, transparent 25%, transparent 75%, rgba(220,20,60,0.08) 75%),
            linear-gradient(45deg, rgba(220,20,60,0.08) 25%, transparent 25%, transparent 75%, rgba(220,20,60,0.08) 75%),
            linear-gradient(90deg, rgba(220,20,60,0.04) 1px, transparent 1px),
            linear-gradient(rgba(220,20,60,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 20px 20px, 20px 20px',
          backgroundPosition: '0 0, 20px 20px, 0 0, 0 0',
        }} />
        {/* Red overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/20 to-black/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-ferrari/80 mb-4 drop-shadow-lg flex items-center justify-center gap-3">
            <FiShoppingCart className="inline-block text-ferrari/80 text-5xl mb-1" />
            Shop Our Premium Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover and book our exclusive supercar care services. Every product is tailored for performance, luxury, and peace of mind.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProducts.map(product => (
            <div
              key={product.id}
              className="bg-[#181818] border border-ferrari/50 rounded-2xl shadow-lg p-8 flex flex-col items-start transition-all hover:shadow-[0_0_24px_4px_rgba(220,20,60,0.2)] hover:-translate-y-1 duration-200 group"
            >
              <div className="mb-4">{product.icon}</div>
              <h2 className="text-2xl font-bold text-ferrari/80 mb-2 group-hover:drop-shadow-[0_0_8px_rgba(220,20,60,0.5)] transition-all">{product.title}</h2>
              <p className="text-gray-300 mb-4 flex-1">{product.description}</p>
              <div className="flex items-center justify-between w-full mt-auto">
                <span className="text-lg font-semibold text-white">${product.price.toFixed(2)}</span>
                <button
                  className="bg-ferrari/80 text-white px-6 py-2 rounded-lg font-semibold hover:bg-ferrari/90 transition shadow-lg hover:shadow-ferrari/30 flex items-center gap-2"
                  onClick={() => navigate('/scheduler')}
                >
                  <FiShoppingCart className="inline-block" />
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;