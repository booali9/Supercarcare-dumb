import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiAward, FiUsers, FiSettings, FiShield } from "react-icons/fi";

const About = () => {
  const scrollToServices = () => {
    const aboutSection = document.getElementById("services");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const statVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  // Stats data
  const stats = [
    { value: "10+", label: "Years Experience", icon: <FiAward className="text-2xl" /> },
    { value: "5,000+", label: "Satisfied Clients", icon: <FiUsers className="text-2xl" /> },
    { value: "100%", label: "Quality Assurance", icon: <FiShield className="text-2xl" /> },
    { value: "24/7", label: "Support", icon: <FiSettings className="text-2xl" /> }
  ];

  return (
    <section 
      id="about" 
      className="relative overflow-hidden bg-black bg-gradient-to-b from-[#0a0606] to-black py-20 px-6 md:px-10 lg:px-16"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-black/30 -z-10 rounded-l-full"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-ferrari/20 -z-10"></div>
      
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Text Content */}
        <motion.div 
          className="w-full lg:w-1/2"
          variants={itemVariants}
        >
          <div className="inline-block px-4 py-2 bg-ferrari/10 text-ferrari rounded-full text-sm font-medium mb-4">
            About Us
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Premium Care for <span className="text-ferrari">Your Supercar</span>
          </h2>
          
          <motion.p 
            className="text-gray-300 mb-6 text-lg"
            variants={itemVariants}
          >
            At <span className="font-semibold text-ferrari">Supercar Care</span>, we combine cutting-edge technology with artisan craftsmanship to deliver unparalleled service for high-performance vehicles.
          </motion.p>
          
          <motion.p 
            className="text-gray-300 mb-8 text-lg"
            variants={itemVariants}
          >
            Our <span className="font-semibold">master technicians</span> undergo rigorous training to handle the most exclusive automobiles, ensuring precision in every adjustment and perfection in every detail.
          </motion.p>
          
          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-4 mb-8"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-black/80 p-4 rounded-xl border border-ferrari/30 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-ferrari/10 text-ferrari rounded-lg">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={scrollToServices}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-ferrari text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-ferrari/80 transition-colors shadow-lg hover:shadow-xl"
            >
              <span className="font-medium">Our Expertise</span>
              <FiArrowRight className="text-lg" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-ferrari px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-ferrari/10 transition-colors shadow-sm border border-ferrari"
            >
              <span className="font-medium">Contact Us</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Visual Elements (No Images) */}
        <motion.div 
          className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
          variants={containerVariants}
        >
          {/* Placeholder Cards with Icons */}
          <motion.div 
            variants={statVariants}
            whileHover="hover"
            className="relative overflow-hidden rounded-xl shadow-lg aspect-square bg-gradient-to-br from-black/80 to-black flex items-center justify-center"
          >
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-ferrari/10 rounded-full flex items-center justify-center text-ferrari mb-4">
                <FiSettings className="text-2xl" />
              </div>
              <h3 className="font-bold text-white">Precision Engineering</h3>
            </div>
          </motion.div>
          
          <motion.div 
            variants={statVariants}
            whileHover="hover"
            className="relative overflow-hidden rounded-xl shadow-lg aspect-square bg-gradient-to-br from-black/80 to-black flex items-center justify-center"
          >
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-ferrari/10 rounded-full flex items-center justify-center text-ferrari mb-4">
                <FiAward className="text-2xl" />
              </div>
              <h3 className="font-bold text-white">Award-Winning Service</h3>
            </div>
          </motion.div>
          
          <motion.div 
            variants={statVariants}
            whileHover="hover"
            className="relative overflow-hidden rounded-xl shadow-lg aspect-square bg-gradient-to-br from-black/80 to-black flex items-center justify-center"
          >
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-ferrari/10 rounded-full flex items-center justify-center text-ferrari mb-4">
                <FiShield className="text-2xl" />
              </div>
              <h3 className="font-bold text-white">Quality Guarantee</h3>
            </div>
          </motion.div>
          
          <motion.div 
            variants={statVariants}
            whileHover="hover"
            className="relative overflow-hidden rounded-xl shadow-lg aspect-square bg-gradient-to-br from-black/80 to-black flex items-center justify-center"
          >
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-ferrari/10 rounded-full flex items-center justify-center text-ferrari mb-4">
                <FiUsers className="text-2xl" />
              </div>
              <h3 className="font-bold text-white">Client Focused</h3>
              <div className="absolute bottom-4 left-4 text-ferrari font-medium text-sm">
                Since 2012
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;