import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1); // or navigate('/'), or navigate('/location')

  return (
    <section className="bg-black bg-gradient-to-b from-[#0a0606] to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Professional Back Button */}
        <div className="flex justify-start mb-6">
          <button
            onClick={handleBack}
            className="bg-black/70 hover:bg-black/90 rounded-full p-2 shadow-lg border border-ferrari focus:outline-none z-20 flex items-center gap-2 text-ferrari font-semibold text-base"
            aria-label="Go back"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Back</span>
          </button>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-ferrari mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map your services here, each card: */}
          <div className="bg-black border border-ferrari rounded-xl p-6 shadow-lg hover:bg-ferrari/10 transition">
            <h3 className="text-xl font-bold text-ferrari mb-2">Service Name</h3>
            <p className="text-gray-300 mb-4">Service description goes here.</p>
            <button className="bg-ferrari text-white px-6 py-2 rounded-lg hover:shadow-[0_0_20px_2px_rgba(255,40,0,0.5)] hover:bg-ferrari/80 transition font-semibold">Book Now</button>
          </div>
          {/* ...repeat for each service... */}
        </div>
      </div>
    </section>
  );
};

export default Services;