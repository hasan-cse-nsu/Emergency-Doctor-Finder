/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import { toast } from "react-toastify";

const AppointmentModal = ({ doctorId, onClose }) => {
  const BaseURL = "https://emergency-doctor-finder.onrender.com/api";

  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = async () => {
    try {
      await axios.post(
        `${BaseURL}/appointment/${doctorId}`,
        {
          dateTime: selectedDate,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      toast.success("Appointment booked!");
      onClose();
    } catch (err) {
      toast.error("Failed to book appointment");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Select Date & Time</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d, yyyy h:mm aa"
          className="w-full p-2 border rounded"
          minDate={new Date()}
        />
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
