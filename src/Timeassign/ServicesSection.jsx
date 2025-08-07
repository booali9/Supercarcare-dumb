import { FaStar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaStar className="text-ferrari text-xl" />, 
    title: "Performance Upgrades",
    description: "Enhance your supercar's handling, grip, and acceleration with our premium tire upgrades specifically selected for your vehicle model."
  },
  {
    icon: <FaClock className="text-ferrari text-xl" />, 
    title: "Seasonal Tire Service",
    description: "Optimize your driving experience year-round with our seasonal tire changes and storage solutions for high-performance vehicles."
  },
  {
    icon: <FaMapMarkerAlt className="text-ferrari text-xl" />, 
    title: "Track Day Preparation",
    description: "Maximize your track day performance with our specialized tire setups designed for optimal grip and handling at high speeds."
  }
];

const Services=()=>{
  return (
  <section id="services" className="min-h-[60vh] flex items-center justify-center bg-black bg-gradient-to-b from-[#0a0606] to-black px-4 py-16">
  <div className="w-full max-w-full">
    <div className="text-center mb-8">
      <h2 className="text-4xl mb-5 font-bold text-white">
        Our <span className="text-ferrari">Premium</span> Services
      </h2>
      <p className="text-gray-300 mt-2">
        We offer a comprehensive range of services designed to maximize the performance
        and longevity of your supercar's tires.
      </p>
    </div>
    <div className="grid m-6 md:grid-cols-3 sm:grid-cols-1 gap-6">
  {services.slice(0, 3).map((service, index) => (
    <div 
      key={index} 
      className="bg-black border border-ferrari hover:border-ferrari/80 cursor-pointer p-6 md:p-12 rounded-lg shadow-lg flex items-start gap-4 transition"
    >
      <div className="bg-ferrari/10 p-3 rounded-full flex items-center justify-center">{service.icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-ferrari">{service.title}</h3>
        <p className="text-gray-300 mt-1">{service.description}</p>
      </div>
    </div>
  ))}
</div>
      <div className="flex justify-center mt-8">
        <a href="/services" className="bg-ferrari text-white px-8 py-3 rounded-lg font-semibold hover:bg-ferrari/80 transition shadow-lg">See All Services</a>
      </div>
    </div>
  </section>

  );
}
export default Services