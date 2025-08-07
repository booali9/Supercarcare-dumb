import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ScheduleHistory = () => {
  const navigate = useNavigate();
  
  // Sample appointment data
  const [appointments, setAppointments] = useState([
    {
      id: 'A1001',
      date: '2025-06-15',
      time: '10:00 AM',
      service: 'Airbike Tune-up',
      vehicle: 'Volonaut VX-2000',
      status: 'Confirmed',
      notes: 'Please bring your airbike 15 minutes early'
    },
    {
      id: 'A1002',
      date: '2025-05-28',
      time: '02:30 PM',
      service: 'Battery Replacement',
      vehicle: 'Volonaut VX-1500',
      status: 'Completed',
      notes: 'Service completed successfully'
    },
    {
      id: 'A1003',
      date: '2025-04-10',
      time: '09:00 AM',
      service: 'Rotor Inspection',
      vehicle: 'Volonaut VX-3000',
      status: 'Completed',
      notes: 'Recommended rotor adjustment'
    }
  ]);

  const cancelAppointment = (id) => {
    setAppointments(appointments.map(appt => 
      appt.id === id ? { ...appt, status: 'Cancelled' } : appt
    ));
  };

  const handleNewAppointment = () => {
    navigate('/vehicle-info');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-black text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Appointment History</h2>
        <button
          onClick={handleNewAppointment}
          className="bg-ferrari text-white px-4 py-2 rounded-md hover:bg-ferrari/80 transition"
        >
          Schedule New Appointment
        </button>
      </div>

      <div className="space-y-4">
        {appointments.length === 0 ? (
          <p className="text-center py-8 text-gray-400">No appointments scheduled yet.</p>
        ) : (
          appointments.map((appointment) => (
            <div key={appointment.id} className="bg-[#0a0606] p-4 rounded-md shadow-md border-l-4 border-ferrari">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {appointment.service} - {appointment.vehicle}
                  </h3>
                  <p className="text-gray-300">
                    {appointment.date} at {appointment.time}
                  </p>
                  <p className="mt-1">
                    Status: <span className={`font-medium ${
                      appointment.status === 'Confirmed' ? 'text-green-400' :
                      appointment.status === 'Completed' ? 'text-blue-400' :
                      appointment.status === 'Cancelled' ? 'text-ferrari' :
                      'text-yellow-400'
                    }`}>
                      {appointment.status}
                    </span>
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  Appointment ID: {appointment.id}
                </div>
              </div>
              
              {appointment.notes && (
                <div className="mt-3 p-3 bg-gray-900 rounded">
                  <p className="text-sm text-gray-300">{appointment.notes}</p>
                </div>
              )}

              {appointment.status === 'Confirmed' || appointment.status === 'Pending' ? (
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={() => cancelAppointment(appointment.id)}
                    className="text-ferrari hover:text-ferrari/80 text-sm font-medium transition"
                  >
                    Cancel Appointment
                  </button>
                </div>
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ScheduleHistory;