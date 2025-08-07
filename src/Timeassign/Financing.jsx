import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  CreditCard, 
  Calculator, 
  Shield, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Users,
  Award,
  Zap,
  Heart
} from "lucide-react";

const Financing = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const financingPlans = [
    {
      id: 1,
      name: "Pay Now",
      description: "Pay in full at the time of service",
      features: [
        "No interest charges",
        "Immediate ownership",
        "No credit check required",
        "Best for smaller services"
      ],
      interestRate: "0%",
      term: "Immediate",
      minAmount: "$50",
      maxAmount: "No limit",
      color: "from-green-500 to-emerald-500",
      popular: false
    },
    {
      id: 2,
      name: "30-Day Payment",
      description: "Pay within 30 days with no interest",
      features: [
        "No interest if paid within 30 days",
        "Flexible payment schedule",
        "Quick approval process",
        "Perfect for unexpected repairs"
      ],
      interestRate: "0%",
      term: "30 days",
      minAmount: "$100",
      maxAmount: "$5,000",
      color: "from-blue-500 to-indigo-500",
      popular: true
    },
    {
      id: 3,
      name: "6-Month Plan",
      description: "Spread payments over 6 months",
      features: [
        "Low monthly payments",
        "Competitive interest rates",
        "No prepayment penalties",
        "Ideal for major services"
      ],
      interestRate: "5.99%",
      term: "6 months",
      minAmount: "$500",
      maxAmount: "$10,000",
      color: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      id: 4,
      name: "12-Month Plan",
      description: "Extended payment plan for larger services",
      features: [
        "Lowest monthly payments",
        "Fixed interest rate",
        "No hidden fees",
        "Best for comprehensive services"
      ],
      interestRate: "7.99%",
      term: "12 months",
      minAmount: "$1,000",
      maxAmount: "$25,000",
      color: "from-orange-500 to-red-500",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Safe",
      description: "All transactions are encrypted and secure with bank-level protection"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Approval",
      description: "Get approved in minutes with our streamlined application process"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges - you know exactly what you'll pay"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Support",
      description: "Dedicated support team to help with any financing questions"
    }
  ];

  const calculatePayment = (amount, rate, term) => {
    if (rate === "0%") return amount;
    const monthlyRate = parseFloat(rate) / 100 / 12;
    const months = parseInt(term);
    return (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  };

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
            Flexible <span className="text-[#DC143C]">Financing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Make your auto care investment easier with our flexible financing options designed to fit your budget and needs.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-black border border-[#DC143C]/30 rounded-xl p-6 hover:border-[#DC143C] transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Financing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your <span className="text-[#DC143C]">Payment Plan</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`relative cursor-pointer ${
                  selectedPlan === plan.id ? 'ring-2 ring-[#DC143C]' : ''
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#DC143C] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="bg-black border border-[#DC143C]/30 rounded-xl p-6 hover:border-[#DC143C] transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,20,60,0.3)] h-full">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${plan.color} flex items-center justify-center text-white mb-4`}>
                    <CreditCard className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Interest Rate:</span>
                      <span className="text-[#DC143C] font-semibold">{plan.interestRate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Term:</span>
                      <span className="text-white font-semibold">{plan.term}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Min Amount:</span>
                      <span className="text-white font-semibold">{plan.minAmount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Max Amount:</span>
                      <span className="text-white font-semibold">{plan.maxAmount}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-[#DC143C] mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-[#DC143C] hover:bg-[#DC143C]/80 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Select Plan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-black border border-[#DC143C]/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Payment <span className="text-[#DC143C]">Calculator</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Calculate Your Payment</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Service Amount</label>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="w-full px-4 py-3 bg-black border border-[#DC143C]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#DC143C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Payment Plan</label>
                    <select className="w-full px-4 py-3 bg-black border border-[#DC143C]/30 rounded-lg text-white focus:border-[#DC143C] focus:outline-none">
                      <option value="">Select a plan</option>
                      {financingPlans.map(plan => (
                        <option key={plan.id} value={plan.id}>
                          {plan.name} - {plan.interestRate} interest
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Payment Summary</h3>
                <div className="bg-[#DC143C]/10 border border-[#DC143C]/30 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Service Amount:</span>
                    <span className="text-white font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Interest:</span>
                    <span className="text-white font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Amount:</span>
                    <span className="text-white font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monthly Payment:</span>
                    <span className="text-[#DC143C] font-bold">$0.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Our Financing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our <span className="text-[#DC143C]">Financing</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Competitive Rates</h3>
              <p className="text-gray-400">Some of the lowest interest rates in the industry with flexible terms</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quick Approval</h3>
              <p className="text-gray-400">Get approved in minutes with our streamlined application process</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Customer Focused</h3>
              <p className="text-gray-400">We work with you to find the best payment solution for your needs</p>
            </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              Apply for financing today and get the auto care your vehicle deserves
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/vehicle-info")}
                className="bg-white text-[#DC143C] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105"
              >
                Apply Now
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-[#DC143C] transition-colors duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Financing; 