import React, { useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import loadingGif from "../../logo/loading.gif";
import { useLocation } from "react-router-dom";

function Booking() {
  const location = useLocation();
  const { image, Resname, description, rating, Reslocation, price } =
    location.state;

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <img
        className="lowbrightness h-full w-full object-cover z-[-1] fixed top-0"
        src="https://images.unsplash.com/photo-1481833761820-0509d3217039?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJlc3RhdXJhbnR8ZW58MHwwfDB8fHww"
        alt=""
      />
      <div className="p-4 flex lg:flex-row sm:flex-col justify-center items-center mt-28">
        <div className="w-full flex flex-col glassmorphism rounded-lg shadow dark:border sm:max-w-md xl:p-0 -mt-20 mx-auto">
          <div className="p-6 flex flex-col space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl font-bold mx-auto leading-tight md:text-2x tracking-tight md:text-2x text-white">
              Resturaunt Detail
            </h1>
            <img
              className="h-[200px] w-[2000px] object-cover"
              src={image}
              alt="Sunset in the mountains"
            />
            <div className="text-white font-bold mx-auto text-4xl">
              {Resname}
            </div>
            <div className="text-white font-semibold mx-auto text-lg">
              {description}
            </div>
            <div className="text-white font-semibold mx-auto text-lg">
              {price}
            </div>
            <div className="flex justify-between">
              <span className="inline-block h-8 relative border item-enhance rounded-full p-4 text-sm font-semibold text-gray-50 mr-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star-fill absolute star-position"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </span>
              <span className="inline-block border item-enhance rounded-full px-4 py-2 text-sm font-semibold text-gray-50 mr-2 mb-2">
                {rating}
              </span>
              <span className="inline-block border item-enhance rounded-full px-4 py-2 text-sm font-semibold text-gray-50 mr-2 mb-2">
                {Reslocation}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col glassmorphism rounded-lg shadow dark:border sm:max-w-md xl:p-0 -mt-20 mx-auto">
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
    </div>
  );
}

export default Booking;
