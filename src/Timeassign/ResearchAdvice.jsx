import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  Lightbulb, 
  Shield, 
  Car, 
  Wrench, 
  Clock, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Star
} from "lucide-react";

const ResearchAdvice = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Articles", icon: <BookOpen className="w-5 h-5" /> },
    { id: "tires", name: "Tire Care", icon: <Car className="w-5 h-5" /> },
    { id: "maintenance", name: "Maintenance", icon: <Wrench className="w-5 h-5" /> },
    { id: "safety", name: "Safety Tips", icon: <Shield className="w-5 h-5" /> },
    { id: "performance", name: "Performance", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const articles = [
    {
      id: 1,
      title: "Complete Tire Care Guide: Everything You Need to Know",
      category: "tires",
      excerpt: "Learn the essential tips for maintaining your tires, from proper inflation to rotation schedules and when to replace them.",
      readTime: "8 min read",
      difficulty: "Beginner",
      tags: ["Tire Maintenance", "Safety", "Longevity"],
      featured: true,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Seasonal Tire Changes: When and Why to Switch",
      category: "tires",
      excerpt: "Understanding when to switch between summer, winter, and all-season tires for optimal performance and safety.",
      readTime: "6 min read",
      difficulty: "Intermediate",
      tags: ["Seasonal Tires", "Winter Driving", "Performance"],
      featured: false,
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "Essential Vehicle Maintenance Schedule",
      category: "maintenance",
      excerpt: "A comprehensive maintenance schedule to keep your vehicle running smoothly and prevent costly repairs.",
      readTime: "10 min read",
      difficulty: "Beginner",
      tags: ["Maintenance", "Prevention", "Cost Savings"],
      featured: true,
      date: "2024-01-08"
    },
    {
      id: 4,
      title: "Brake System Maintenance: Signs You Need Attention",
      category: "safety",
      excerpt: "Recognize the warning signs of brake problems and learn when to seek professional service.",
      readTime: "7 min read",
      difficulty: "Intermediate",
      tags: ["Brakes", "Safety", "Warning Signs"],
      featured: false,
      date: "2024-01-05"
    },
    {
      id: 5,
      title: "Oil Change Myths Debunked",
      category: "maintenance",
      excerpt: "Separate fact from fiction when it comes to oil changes and engine maintenance.",
      readTime: "5 min read",
      difficulty: "Beginner",
      tags: ["Oil Change", "Engine Care", "Myths"],
      featured: false,
      date: "2024-01-03"
    },
    {
      id: 6,
      title: "Performance Tuning: Getting the Most from Your Engine",
      category: "performance",
      excerpt: "Advanced techniques for optimizing your vehicle's performance while maintaining reliability.",
      readTime: "12 min read",
      difficulty: "Advanced",
      tags: ["Performance", "Tuning", "Engine"],
      featured: false,
      date: "2023-12-28"
    },
    {
      id: 7,
      title: "Winter Driving Safety: Complete Guide",
      category: "safety",
      excerpt: "Essential safety tips and vehicle preparation for safe winter driving conditions.",
      readTime: "9 min read",
      difficulty: "Beginner",
      tags: ["Winter Driving", "Safety", "Preparation"],
      featured: true,
      date: "2023-12-25"
    },
    {
      id: 8,
      title: "Understanding Tire Pressure Monitoring Systems",
      category: "tires",
      excerpt: "How TPMS works and why proper tire pressure is crucial for safety and performance.",
      readTime: "6 min read",
      difficulty: "Intermediate",
      tags: ["TPMS", "Tire Pressure", "Technology"],
      featured: false,
      date: "2023-12-20"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter(article => article.featured);

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
            Research & <span className="text-[#DC143C]">Advice</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert insights, tips, and guides to help you make informed decisions about your vehicle maintenance and care.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, tips, and guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black border border-[#DC143C]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#DC143C] focus:outline-none transition-colors"
              />
            </div>
            
            {/* Filter Button */}
            <button className="flex items-center space-x-2 px-6 py-3 bg-black border border-[#DC143C]/30 rounded-lg text-white hover:border-[#DC143C] transition-colors">
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#DC143C] border-[#DC143C] text-white"
                    : "bg-black border-[#DC143C]/30 text-gray-300 hover:border-[#DC143C] hover:text-white"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Star className="w-6 h-6 text-[#DC143C] mr-2" />
              Featured Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-black border border-[#DC143C]/30 rounded-xl p-6 hover:border-[#DC143C] transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,20,60,0.3)] h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-[#DC143C] font-medium uppercase tracking-wide">
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#DC143C] transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="text-xs bg-[#DC143C]/10 text-[#DC143C] px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#DC143C] group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            All Articles ({filteredArticles.length})
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-black border border-[#DC143C]/30 rounded-xl p-6 hover:border-[#DC143C] transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,20,60,0.3)] h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-[#DC143C] font-medium uppercase tracking-wide">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#DC143C] transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-xs bg-[#DC143C]/10 text-[#DC143C] px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#DC143C] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#DC143C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[#DC143C]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search terms or filters</p>
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#DC143C] to-[#B91C3C] rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Professional Help?
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              Our expert technicians are ready to help with any automotive questions or services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/vehicle-info")}
                className="bg-white text-[#DC143C] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105"
              >
                Book Consultation
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-[#DC143C] transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchAdvice; 