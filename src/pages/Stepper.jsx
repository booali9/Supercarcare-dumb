import { useLocation, Link } from "react-router-dom";
import React from "react";

const steps = [
  { path: "/vehicle-info", label: "Vehicle Info" },
  { path: "/services", label: "Services" },
  { path: "/scheduler", label: "Schedule" },
  { path: "/review-appointment", label: "Review" },
];

const Stepper = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentStepIndex = steps.findIndex((step) => step.path === currentPath);

  return (
    <nav className="sticky top-0 z-40 bg-black/90 backdrop-blur border-b border-ferrari/30 w-full flex justify-center py-2 sm:py-3">
      <ol className="flex w-full max-w-md mx-auto justify-between items-center px-2 sm:px-0">
        {steps.map((step, idx) => {
          const isActive = idx === currentStepIndex;
          const isVisited = idx < currentStepIndex;
          return (
            <li key={step.path} className="flex flex-col items-center flex-1">
              <Link
                to={step.path}
                className={`flex items-center justify-center rounded-full border-2 transition-all duration-200 w-9 h-9 sm:w-10 sm:h-10 text-base font-bold
                  ${isActive ? "bg-ferrari border-ferrari text-white scale-110 shadow-lg" : isVisited ? "bg-ferrari/20 border-ferrari text-ferrari" : "bg-black border-gray-600 text-gray-400"}
                `}
                aria-current={isActive ? "step" : undefined}
              >
                {idx + 1}
              </Link>
              {/* Show label only for current step */}
              <span className={`mt-1 text-xs sm:text-sm font-medium transition-all duration-200 ${isActive ? "text-ferrari" : "text-gray-400"} ${isActive ? "block" : "hidden sm:block"}`}>{step.label}</span>
              {/* Progress bar connector */}
              {idx < steps.length - 1 && (
                <div className={`absolute left-full top-1/2 transform -translate-y-1/2 w-6 sm:w-10 h-0.5 ${isVisited ? "bg-ferrari" : "bg-gray-700"}`}></div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Stepper;