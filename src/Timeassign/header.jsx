import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, User, Shield, Truck, Star, CreditCard } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn] = useState(false);
  const [showResearchDropdown, setShowResearchDropdown] = useState(false);
  const [showResearchContent, setShowResearchContent] = useState(false);
  const [activeNav, setActiveNav] = useState("/");
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Measure header height initially
    updateHeaderHeight();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update height when scrolled state or menu open state changes
    updateHeaderHeight();
  }, [scrolled, menuOpen]);

  const updateHeaderHeight = () => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  };

  const navItems = [
    { name: "Why Us", path: "/why-us", icon: <Star size={16} className="mr-2" /> },
    { name: "Services", path: "/services", icon: <Truck size={16} className="mr-2" /> },
    { name: "Research & Advice", path: "#", icon: <Shield size={16} className="mr-2" />, dropdown: true },
    { name: "Financing", path: "/financing", icon: <CreditCard size={16} className="mr-2" /> },
  ];

  const researchContent = [
    { title: "Tire Selection Guide", content: "Learn how to choose the perfect tires for your vehicle." },
    { title: "Maintenance Tips", content: "Discover essential maintenance practices." },
    { title: "Performance Optimization", content: "Optimize your tire performance for better results." },
    { title: "Seasonal Tire Advice", content: "Switch between tires for max safety and performance." },
  ];

  const handleNavClick = (path) => {
    setActiveNav(path);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Spacer div that matches the header height */}
      <div style={{ height: `${headerHeight}px` }} className="w-full" />
      
      {/* Header component */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-30 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'shadow-lg bg-black/95 py-1' : 'py-3'}`}
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(220, 20, 60, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(220, 20, 60, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(15, 15, 15, 0.95) 100%)
          `,
          boxShadow: `
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 4px 10px rgba(0, 0, 0, 0.4)
          `,
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Main header content */}
        <div className={`relative px-6 transition-all duration-300 ${scrolled ? 'py-1' : 'py-3'}`}>
          <div className="flex flex-col items-center w-full">
            {/* Mobile menu button - only visible on small screens */}
            <div className="md:hidden absolute left-6 top-1/2 transform -translate-y-1/2">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="flex flex-col items-center w-full">
              <a 
                href="/" 
                className="flex flex-col items-center group mb-2" 
                onClick={() => handleNavClick("/")}
              >
                <div className={`relative transform hover:scale-105 transition-transform duration-200 ${scrolled ? 'h-8' : 'h-12'}`}>
                  <img 
                    src="/img/logo.png" 
                    alt="Supercar Care Center Logo" 
                    className={`object-contain drop-shadow-lg mx-auto transition-all duration-300 ${scrolled ? 'h-8' : 'h-12'}`}
                  />
                  <div className="absolute inset-0 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
                </div>
                <div className="mt-2 text-center">
                  <h1 className={`font-black text-white tracking-wider transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
                    SUPERCAR CARE CENTER
                  </h1>
                  <span className="text-xs text-white/60 font-medium tracking-wide block">
                    Premium Auto Care
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop navigation - hidden on mobile */}
            <div className="hidden md:flex flex-col items-center w-full mt-2">
              <div className="flex flex-wrap items-center justify-center space-x-1 mb-2">
                {navItems.map((item) => (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => item.dropdown && setShowResearchDropdown(true)}
                    onMouseLeave={() => item.dropdown && setShowResearchDropdown(false)}
                  >
                    {item.dropdown ? (
                      <button
                        onClick={() => {
                          setShowResearchDropdown(!showResearchDropdown);
                          setShowResearchContent(true);
                        }}
                        className="group relative flex items-center px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-all duration-200 rounded-md hover:bg-[#DC143C]/10"
                      >
                        {item.icon}
                        {item.name}
                        <ChevronDown size={14} className="ml-2 transition-transform group-hover:rotate-180 duration-200" />
                      </button>
                    ) : (
                      <a
                        href={item.path}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.path);
                        }}
                        className={`group relative flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                          activeNav === item.path
                            ? "text-white bg-white/5"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.icon}
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md z-50 border-t border-white/10">
            <div className="px-4 py-3">
              {navItems.map((item) => (
                <div key={item.path} className="py-2">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setShowResearchContent(!showResearchContent)}
                        className="flex justify-between w-full items-center py-2 text-white"
                      >
                        <span className="flex items-center">
                          {item.icon}
                          {item.name}
                        </span>
                        <ChevronDown size={16} className={`transition-transform ${showResearchContent ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {showResearchContent && (
                        <div className="pl-6 py-2">
                          {researchContent.map((content, index) => (
                            <div key={index} className="py-2">
                              <h4 className="text-sm font-medium text-white">{content.title}</h4>
                              <p className="text-xs text-white/60">{content.content}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.path);
                      }}
                      className={`flex items-center py-2 ${
                        activeNav === item.path ? "text-white" : "text-white/80"
                      }`}
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Research Dropdown for desktop */}
        {showResearchDropdown && (
          <div 
            className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 bg-black/95 backdrop-blur-md rounded-md shadow-2xl mt-2 p-4 z-50 border border-white/10 w-80"
            onMouseEnter={() => setShowResearchDropdown(true)}
            onMouseLeave={() => setShowResearchDropdown(false)}
          >
            <h3 className="text-white font-medium mb-2 border-b border-white/10 pb-1">Research & Advice</h3>
            <div className="grid gap-3 pt-1">
              {researchContent.map((content, index) => (
                <div key={index}>
                  <h4 className="text-sm font-medium text-white">{content.title}</h4>
                  <p className="text-xs text-white/60 mt-0.5">{content.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;