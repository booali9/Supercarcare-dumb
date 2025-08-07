import React, { useState } from 'react';
import { Star, Edit, Trash2 } from 'lucide-react';

const RatingsReviews = () => {
  const [reviews] = useState([
    {
      id: 1,
      product: "Performance All-Season Tires",
      rating: 5,
      date: "2023-10-15",
      review: "Excellent tires! Great grip in both wet and dry conditions. Very comfortable ride quality."
    },
    {
      id: 2,
      product: "Sport Alloy Wheels",
      rating: 4,
      date: "2023-08-22",
      review: "Good looking wheels but a bit heavier than expected. Finish is durable though."
    },
    {
      id: 3,
      product: "Performance Brake Kit",
      rating: 5,
      date: "2023-05-10",
      review: "Fantastic stopping power. Installation was straightforward and they look great behind my wheels."
    }
  ]);

  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-[#A1252E]/10 p-3 rounded-full">
          <Star className="text-[#A1252E]" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Ratings & Reviews</h2>
      </div>

      {/* Filter Options */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['all', '5', '4', '3', '2', '1'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter
                ? 'bg-[#A1252E] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter === 'all' ? 'All Reviews' : `${filter} Star${filter !== '1' ? 's' : ''}`}
          </button>
        ))}
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews
          .filter(review => activeFilter === 'all' || review.rating === parseInt(activeFilter))
          .map((review) => (
            <div key={review.id} className="border border-gray-100 rounded-xl p-6 hover:shadow-sm transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{review.product}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={18}
                        className={`${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-[#A1252E] p-1.5 rounded-full hover:bg-[#A1252E]/10">
                    <Edit size={18} />
                  </button>
                  <button className="text-gray-400 hover:text-red-500 p-1.5 rounded-full hover:bg-red-500/10">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <p className="mt-3 text-gray-700">{review.review}</p>
            </div>
          ))}
      </div>

      {reviews.length === 0 && (
        <div className="text-center py-12">
          <Star className="mx-auto h-12 w-12 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No Reviews Yet</h3>
          <p className="text-gray-500 mt-1">Your product reviews will appear here</p>
        </div>
      )}
    </div>
  );
};

export default RatingsReviews;