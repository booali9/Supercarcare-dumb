import React from "react";
import { useNavigate } from "react-router-dom";

const HeroVideoBanner = () => {
    const navigate = useNavigate();

    const handleScheduleAppointment = () => {
        navigate("/vehicle-info");
    };

    return (
        <div id="HeroBanner" className="relative w-full h-screen overflow-hidden bg-black">
            {/* Video Container with Clean Top Edge */}
            <div className="absolute top-0 left-0 w-full h-full">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/assets/BMW_VideoBanner.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                {/* Clean Top Separation Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ferrari/70 to-transparent"></div>
                
                {/* Subtle Bottom Fade */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative h-full flex flex-col justify-center items-center text-center px-6 z-10">
                <div className="mb-8">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Premium <span className="text-ferrari">Auto Care</span>
                    </h1>
                    <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
                        Expert service for your luxury vehicle. Book your appointment today.
                    </p>
                </div>
                
                {/* Uniform Buttons - Both Red and Rounded */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                    <button
                        onClick={handleScheduleAppointment}
                        className="flex-1 bg-ferrari hover:bg-ferrari/90 text-white py-3 px-6 rounded-full text-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                        Schedule Appointment
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                    </button>
                    
                    <a
                        href="mailto:info@supercarcare.com"
                        className="flex-1 bg-ferrari/80 hover:bg-ferrari/90 text-white py-3 px-6 rounded-full text-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                        Email Us
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeroVideoBanner;