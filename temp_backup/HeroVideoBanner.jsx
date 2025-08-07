import React from "react";
import { useNavigate } from "react-router-dom";

const HeroVideoBanner = () => {
    const navigate = useNavigate();

    const handleScheduleAppointment = () => {
        navigate("/vehicle-info");
    };

    return (
        <div id="HeroBanner" className="relative w-full h-[100vh] overflow-hidden bg-black">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
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

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6 z-10">
                <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
                    Premium <span style={{color: 'rgb(255,40,0,1)'}}>Auto Care</span>
                </h1>
                <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
                    Expert service for your luxury vehicle. Book your appointment today.
                </p>
                <button
                    onClick={handleScheduleAppointment}
                    className="bg-ferrari text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-ferrari/80 transition flex items-center mb-4"
                >
                    Schedule Appointment
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 ml-2" 
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
                    className="bg-ferrari text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-ferrari/80 transition flex items-center"
                >
                    Email Us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m0 0l-4-4m4 4l-4 4" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default HeroVideoBanner;