import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ModernComingSoon from "./ModernComingSoon";

const steps = [
  { path: "/vehicle-info", label: "Vehicle Info" },
 
  { path: "/services", label: "Services" },
  { path: "/scheduler", label: "Schedule" },
  { path: "/review-appointment", label: "Review" },
];

const targetDate = new Date('2024-08-12T23:00:00Z').getTime();

const useCountdown = (target) => {
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);
  return timeLeft;
};

const WhyUsComingSoon = () => {
  const timeLeft = useCountdown(targetDate);

  return (
    <ModernComingSoon
      title="Why Us page will be up soon..."
      subtitle="approximately"
      date="2024-08-12T23:00:00Z"
    />
  );
};

const FinancingComingSoon = () => {
  return (
    <ModernComingSoon
      title="Financing page will be up soon..."
      subtitle="approximately"
      date="2024-08-12T23:00:00Z"
    />
  );
};

const Stepper = ({ activeStep }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Find the index of the current path in the steps array
  const currentStepIndex = steps.findIndex(step => step.path === currentPath);

  return (
    <div className="flex pt-20 justify-center mb-8 mt-9 bg-black">
      <div className="flex flex-wrap justify-center gap-0 px-4">
        {steps.map((step, index) => {
          const isVisited = index <= currentStepIndex;

          return (
            <motion.div 
              key={step.path} 
              initial={{ scale: 0.8, opacity: 0 }} // Start animation
              animate={{ scale: 1, opacity: 1 }} // End animation
              transition={{ duration: 0.3 }} // Smooth transition
              className="flex items-center"
            >
              {/* Step Link with animation */}
              <Link
                to={step.path}
                className={`min-w-[140px] px-6 py-2 rounded-full text-base transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-ferrari focus:ring-offset-2 focus:ring-offset-black text-center ${
                  isVisited
                    ? "bg-ferrari text-white shadow-md scale-110"
                    : "bg-black text-white border border-white/30"
                }`}
                style={{borderRadius: '9999px'}} // Ensures pill shape
              >
                {step.label}
              </Link>

              {/* Divider Animation */}
              {index < steps.length - 1 && (
                <motion.div
                  className="w-16 h-0.5 bg-white -ml-1 -mr-1" // Adjusted width and negative margins
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                ></motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;