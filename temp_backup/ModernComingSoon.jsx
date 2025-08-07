import React, { useState, useEffect } from "react";

// You can use any undraw/illustration SVG you like, here is a placeholder:
const Illustration = () => (
  <svg width="340" height="220" viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="170" cy="200" rx="150" ry="20" fill="#222" />
    <rect x="60" y="60" width="220" height="100" rx="20" fill="#191919" />
    <circle cx="170" cy="110" r="40" fill="#ff2800" />
    <rect x="150" y="90" width="40" height="40" rx="8" fill="#fff" />
    <rect x="170" y="110" width="20" height="20" rx="4" fill="#ff2800" />
  </svg>
);

const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return timeLeft;
};

const ModernComingSoon = ({
  title = "We'll be up soon...",
  subtitle = "approximately",
  date = "2024-08-12T23:00:00Z",
  illustration = <Illustration />,
}) => {
  const targetDate = new Date(date).getTime();
  const timeLeft = useCountdown(targetDate);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#040404] overflow-hidden">
      {/* Checkbox SVG Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='14' y='14' width='4' height='4' rx='1' fill='%23222222'/%3E%3C/svg%3E")`,
          opacity: 0.5,
        }}
      />
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-12 px-4">
        <div className="mb-8">{illustration}</div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#bfbfb9] text-center mb-4 drop-shadow-lg">{title}</h1>
        <div className="text-lg text-[#ff2800] font-semibold mb-2">{subtitle}</div>
        <div className="flex space-x-8 mt-4 text-center">
          <div>
            <div className="text-4xl font-bold text-white">{String(timeLeft.hours).padStart(2, "0")}</div>
            <div className="text-xs text-[#bfbfb9] mt-1">Hours</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white">{String(timeLeft.minutes).padStart(2, "0")}</div>
            <div className="text-xs text-[#bfbfb9] mt-1">Minutes</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white">{String(timeLeft.seconds).padStart(2, "0")}</div>
            <div className="text-xs text-[#bfbfb9] mt-1">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernComingSoon; 