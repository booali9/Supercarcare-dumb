import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const Footer = () => {
  const contacts = [
    {
      icon: <FaEnvelope className="w-6 h-6 text-black" />,
      title: "Email",
      description: "Our friendly team is here to help.",
      contact: "hello@supercar.com",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-black" />,
      title: "Office",
      description: "Come say hello at our office HQ.",
      contact: "100 Smith Street, Collingwood VIC 3066 AU",
    },
    {
      icon: <FaPhone className="w-6 h-6 text-black" />,
      title: "Phone",
      description: "Mon-Fri from 9am to 5pm.",
      contact: "+92 (333) 000-0000",
    },
  ];

  return (
    <footer className="bg-black bg-gradient-to-t from-[#0a0606] to-black border-t border-ferrari py-8 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-ferrari">Supercar Care Center</h3>
          <p className="text-gray-300">Premium Auto Care for Supercars</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a href="#" className="text-gray-300 hover:text-ferrari transition-colors">Home</a>
          <a href="#" className="text-gray-300 hover:text-ferrari transition-colors">Services</a>
          <a href="#" className="text-gray-300 hover:text-ferrari transition-colors">About</a>
          <a href="#" className="text-gray-300 hover:text-ferrari transition-colors">Contact</a>
        </div>
        <div className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Supercar Care Center. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
