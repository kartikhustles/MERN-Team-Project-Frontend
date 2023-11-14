import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="hero p-4 flex flex-col justify-center items-center">
      <img
        className="h-full w-full object-cover z-[-1] fixed top-0"
        src="https://images.unsplash.com/photo-1481833761820-0509d3217039?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJlc3RhdXJhbnR8ZW58MHwwfDB8fHww"
        alt=""
      />
      <div className="w-full glassmorphism rounded-lg shadow dark:border sm:max-w-md xl:p-0 -mt-20 mx-auto">
        <div className="p-6 flex flex-col space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-3xl font-bold mx-auto leading-tight md:text-2x tracking-tight md:text-2x text-white">
            Book a Table
          </h1>
          <form className="w-full">
            <div className="flex flex-col">
              <label
                htmlFor="date"
                className="block mb-2 text-md font-medium text-white"
              >
                Select Date:
              </label>

              <DatePicker
                name="date"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Click Here"
                locale="en-US"
                required
                className="border text-base font-semibold rounded-lg block p-2.5 forminput customDatePickerWidth"
                // className="bg-gray-700 py-2 px-24 rounded-2xl text-white custom-datepicker"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="time"
                className="block mb-2 text-md font-medium text-white"
              >
                Select Time:
              </label>
              <select
                required
                className="border text-base font-semibold rounded-lg block w-full p-2.5 forminput disable-time-arrow"
                // className="bg-gray-700 py-2 px-36 rounded-2xl text-white"
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="12:00PM">12:00 PM</option>
                <option value="12:30PM">12:30 PM</option>
                <option value="01:00PM">01:00 PM</option>
                <option value="01:30PM">01:30 PM</option>
                <option value="02:00PM">02:00 PM</option>
                <option value="02:30PM">02:30 PM</option>
                <option value="07:00PM">07:00 PM</option>
                <option value="07:30PM">07:30 PM</option>
                <option value="08:00PM">08:00 PM</option>
                <option value="08:30PM">08:30 PM</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="num-people"
                className="block mb-2 text-md font-medium text-white"
              >
                Number of People:
              </label>
              <input
                type="number"
                name="num-people"
                placeholder="04"
                required
                // className="bg-gray-700 py-2 px-24 rounded-2xl text-white"
                className="disable-time-arrow border text-base font-semibold rounded-lg block w-full p-2.5 forminput"
                min="1"
              />
            </div>
            <div>
              <div className="flex justify-center">
                <button className="disable-number-input mx-auto text-xl reservebtn text-white rounded-lg font-normal px-5 py-2 mt-6">
                  Reserve Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
