import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentScheduler = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("schedule");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [asapDate, setAsapDate] = useState("today");
  const [error, setError] = useState("");

  const generateTimeSlots = () => {
    const slots = [];
    let start = 9 * 60;
    let end = 17.5 * 60;

    while (start <= end) {
      let hours = Math.floor(start / 60);
      let minutes = start % 60;
      let time = `${hours}:${minutes === 0 ? "00" : minutes} ${hours >= 12 ? "PM" : "AM"}`;
      slots.push(time);
      start += 30;
    }

    return slots;
  };

  const handleContinue = () => {
    if (view === "schedule" && !selectedTime) {
      setError("Please select a time to continue.");
    } else if (view === "asap") {
      navigate("/review-appointment");
    } else {
      navigate("/review-appointment");
    }
  };

  const handleBack = () => {
    navigate("/services");
  };

  return (
    <div className="bg-black bg-gradient-to-b from-[#0a0606] to-black min-h-screen py-10 px-4">
      <div className="p-6 border mt-5 mb-10 border-ferrari rounded-lg shadow-md max-w-3xl mx-auto bg-black text-white">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-ferrari">Schedule Your Appointment</h2>
            <p className="text-gray-300">Choose a convenient date and time for your service</p>
          </div>
          <button
            onClick={handleBack}
            className="border border-ferrari font-medium text-sm rounded-md py-2 px-4 hover:bg-ferrari/10 transition-colors text-white"
          >
            Back
          </button>
        </div>

        {/* Toggle Buttons */}
        <div className="flex bg-black border border-ferrari rounded-lg p-1 mb-6">
          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              view === "schedule" ? "bg-ferrari text-white shadow-sm" : "bg-transparent text-white hover:bg-ferrari/10"
            }`}
            onClick={() => {
              setView("schedule");
              setError("");
            }}
          >
            Schedule for Later
          </button>
          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              view === "asap" ? "bg-ferrari text-white shadow-sm" : "bg-transparent text-white hover:bg-ferrari/10"
            }`}
            onClick={() => {
              setView("asap");
              setError("");
            }}
          >
            ASAP Service
          </button>
        </div>

        {error && <p className="text-ferrari text-sm mb-4">{error}</p>}

        <div className="space-y-6">
          <AnimatePresence mode="wait">
            {view === "schedule" && (
              <motion.div
                key="schedule"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-white">Select a date</h3>
                  <div className="border border-ferrari rounded-lg p-2 bg-black">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      inline
                    />
                  </div>
                </div>

                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <h4 className="font-medium text-white">Select Time:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {generateTimeSlots().map((time, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`py-2 px-3 rounded-md border text-sm ${
                            selectedTime === time
                              ? "border-ferrari bg-ferrari text-white"
                              : "border-ferrari/30 text-white hover:border-ferrari/60 bg-black"
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div className="flex justify-end">
                  <motion.button
                    onClick={handleContinue}
                    className="bg-ferrari hover:shadow-[0_0_20px_2px_rgba(255,40,0,0.5)] hover:bg-ferrari/80 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue
                  </motion.button>
                </div>
              </motion.div>
            )}

            {view === "asap" && (
              <motion.div
                key="asap"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-white">ASAP Service</h3>
                  <p className="text-gray-300 mb-4">
                    We'll schedule your appointment for the earliest available time slot today or tomorrow.
                  </p>

                  <div className="flex gap-3 mb-6">
                    <motion.button
                      className={`py-2 px-4 rounded-lg border ${
                        asapDate === "today"
                          ? "border-ferrari bg-ferrari text-white"
                          : "border-ferrari/30 text-white hover:border-ferrari/60 bg-black"
                      }`}
                      onClick={() => setAsapDate("today")}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Today
                    </motion.button>
                    <motion.button
                      className={`py-2 px-4 rounded-lg border ${
                        asapDate === "tomorrow"
                          ? "border-ferrari bg-ferrari text-white"
                          : "border-ferrari/30 text-white hover:border-ferrari/60 bg-black"
                      }`}
                      onClick={() => setAsapDate("tomorrow")}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Tomorrow
                    </motion.button>
                  </div>

                  <div className="bg-ferrari/10 border-l-4 border-ferrari p-4 mb-6">
                    <p className="text-sm">
                      <strong className="text-ferrari">Note:</strong> ASAP service is subject to availability. 
                      We'll contact you to confirm the exact time once your appointment is submitted.
                    </p>
                  </div>

                  <div className="border border-ferrari rounded-lg p-4 mb-6 bg-black">
                    <h4 className="font-medium mb-3 text-white">Your appointment details:</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium text-white">Date:</span> {asapDate === "today" ? "Today" : "Tomorrow"}</p>
                      <p><span className="font-medium text-white">Time:</span> As soon as possible</p>
                      <p><span className="font-medium text-white">Estimated duration:</span> 40 minutes</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 mb-6">
                    ASAP appointments are typically serviced within 30-60 minutes of arrival.
                  </p>
                </div>

                <div className="flex justify-end">
                  <motion.button
                    onClick={handleContinue}
                    className="bg-ferrari hover:shadow-[0_0_20px_2px_rgba(255,40,0,0.5)] hover:bg-ferrari/80 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AppointmentScheduler;