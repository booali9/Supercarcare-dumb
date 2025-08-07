import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  { name: "Michael R.", car: "Ferrari 488 Pista", review: "Supercare Center transformed the handling of my Ferrari. Their expertise in high-performance tires is unmatched. I wouldn't trust my car with anyone else." },
  { name: "Sarah L.", car: "Porsche 911 GT3", review: "The team at Supercare Center recommended the perfect set of tires for both track days and daily driving. Exceptional service and knowledge." },
  { name: "James T.", car: "Lamborghini Huracán", review: "I've been bringing my collection to Supercare Center for years. Their attention to detail and commitment to quality is why I keep coming back." },
  { name: "Emily W.", car: "McLaren 720S", review: "Supercare Center always provides top-tier recommendations. My McLaren has never felt better on the road!" },
  { name: "David K.", car: "Aston Martin DB11", review: "Astonishing service and expertise! My Aston Martin's handling has improved significantly." },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setIndex((prevIndex) =>
          prevIndex + itemsPerView >= testimonials.length ? 0 : prevIndex + 1
        );
      }, 5000); // Auto-rotate every 5 seconds
      return () => clearInterval(interval);
    }
  }, [index, isPaused, itemsPerView]);

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsPerView : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex + itemsPerView >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 bg-black bg-gradient-to-b from-[#0a0606] to-black text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">
        What Our <span className="text-ferrari">Clients</span> Say
      </h2>
      <p className="text-gray-300 mb-8">
        Trusted by supercar owners and exotic car collectors around the world.
      </p>
      <div className="relative mx-auto max-w-8xl px-4 overflow-hidden">
        <div className="flex justify-center gap-6">
          <AnimatePresence mode="popLayout">
            {testimonials.slice(index, index + itemsPerView).map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="bg-black border border-ferrari p-6 rounded-lg text-left w-full max-w-lg transition"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="flex items-center mb-4">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} className="text-ferrari" />
                    ))}
                </div>
                <p className="text-gray-300 mb-4">{testimonial.review}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-ferrari/10 rounded-full mr-3"></div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.car}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button onClick={prevTestimonial} className="p-2 bg-ferrari/20 rounded-full">
            <FiChevronLeft className="text-2xl text-ferrari font-bold" />
          </button>
          <button onClick={nextTestimonial} className="p-2 bg-ferrari/20 rounded-full">
            <FiChevronRight className="text-2xl text-ferrari font-bold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;