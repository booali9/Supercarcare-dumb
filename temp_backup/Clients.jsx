<section className="bg-black bg-gradient-to-b from-[#0a0606] to-black py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-ferrari mb-8 text-center">Our Clients</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
      {/* Map your clients here, each card: */}
      <div className="bg-black border border-ferrari rounded-xl p-6 shadow-lg flex items-center justify-center hover:shadow-[0_0_20px_2px_rgba(255,40,0,0.5)] transition">
        {/* Client logo or name */}
        <img src="/path/to/client-logo.png" alt="Client Name" className="h-12 object-contain" />
      </div>
      {/* ...repeat for each client... */}
    </div>
  </div>
</section> 