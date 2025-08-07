<section className="bg-black bg-gradient-to-b from-[#0a0606] to-black py-20 px-4">
  <div className="max-w-7xl mx-auto">
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