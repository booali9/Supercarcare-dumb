import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Star, 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Car, 
  CheckCircle, 
  TrendingUp,
  Heart,
  Zap,
  ArrowRight
} from "lucide-react";

const WhyUs = () => {
  const navigate = useNavigate();

  const reasons = [
    {
      id: 1,
      icon: <Award className="w-8 h-8" />,
      title: "Award-Winning Service",
      description: "Recognized for excellence in automotive care with multiple industry awards and certifications",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Certified technicians with decades of combined experience in all aspects of vehicle maintenance",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 3,
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "All services backed by comprehensive warranties and our 100% satisfaction guarantee",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: <Clock className="w-8 h-8" />,
      title: "Fast & Reliable",
      description: "Quick turnaround times without compromising on quality or attention to detail",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      icon: <Car className="w-8 h-8" />,
      title: "Latest Technology",
      description: "State-of-the-art diagnostic equipment and tools for precise, efficient service",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 6,
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "Personalized service with transparent pricing and honest recommendations",
      color: "from-rose-500 to-red-500"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "50K+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "100%", label: "Satisfaction Rate", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Zap className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: "Integrity",
      description: "We believe in honest, transparent service with no hidden fees or unnecessary repairs.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Excellence",
      description: "Every service is performed to the highest standards with attention to every detail.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Innovation",
      description: "We stay ahead with the latest technology and techniques in automotive care.",
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      title: "Care",
      description: "We treat every vehicle as if it were our own, with the care and respect it deserves.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-black bg-gradient-to-b from-[#0a0606] to-black min-h-screen py-10 px-4" style={{ paddingTop: '140px' }}>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-[#DC143C]">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're not just another auto service center. We're your trusted partner in keeping your vehicle running at its best, with unmatched expertise, quality, and customer care.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-black border border-[#DC143C]/30 rounded-xl p-6 hover:border-[#DC143C] transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#DC143C] mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Makes Us <span className="text-[#DC143C]">Different</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-black border border-[#DC143C]/30 rounded-xl p-6 hover:border-[#DC143C] transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,20,60,0.3)] h-full">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${reason.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {reason.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#DC143C] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="text-[#DC143C]">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-black border border-[#DC143C]/30 rounded-xl p-6 hover:border-[#DC143C] transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Our <span className="text-[#DC143C]">Customers</span> Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                text: "The best auto service I've ever experienced. Professional, honest, and they really care about your vehicle."
              },
              {
                name: "Mike Chen",
                rating: 5,
                text: "Fast service, fair pricing, and they explained everything clearly. Highly recommend!"
              },
              {
                name: "Emily Rodriguez",
                rating: 5,
                text: "Outstanding customer service and quality work. They've earned my trust and business for life."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="bg-black border border-[#DC143C]/30 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#DC143C] fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-white font-semibold">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#DC143C] to-[#B91C3C] rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              Join thousands of satisfied customers who trust us with their vehicles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/vehicle-info")}
                className="bg-white text-[#DC143C] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105"
              >
                Book Appointment
              </button>
              <button
                onClick={() => navigate("/services")}
                className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-[#DC143C] transition-colors duration-300"
              >
                View Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs; 