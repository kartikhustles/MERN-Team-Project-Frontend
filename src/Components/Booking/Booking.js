import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="hero p-4 flex flex-col justify-center items-center">
      <img
        className="h-full w-full object-cover z-[-1] fixed top-0"
        src="https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="w-full flex justify-center items-center">
  <div className="w-full glassmorphism rounded-lg shadow dark:border sm:max-w-md xl:p-0 -mt-20 mx-auto">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2x text-white">
            Book a Table
          </h1>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Date:
              </label>
              
              <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              locale="en-US"
              className="bg-gray-700 p-2 rounded-2xl text-white custom-datepicker"
              />

            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Time:
              </label>
              <select className="bg-gray-700 p-2 rounded-2xl text-white">
                <option>12:00 PM</option>
                <option>12:30 PM</option>
                <option>01:00 PM</option>
                <option>01:30 PM</option>
                <option>02:00 PM</option>
                <option>02:30 PM</option>
                <option>07:30 PM</option>
                <option>08:00 PM</option>
                <option>08:30 PM</option>
              </select>
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Number of People:
              </label>
              <input
                type="number"
                className="bg-gray-700 p-2 rounded-2xl text-white"
                min="1"
              />
            </div>
            <div>
            <div className="flex justify-center">
  <button className="mx-auto text-xl reservebtn text-white rounded-lg font-normal px-5 py-2 m-2">
    Reserve Now
  </button>
</div>



            </div>
          </form>
        </div>
      </div>
    </div>
   </div> 
  );
}

export default Booking;
