import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { API_ENDPOINTS } from "../../config/api";

function Booking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, Resname, description, rating, Reslocation, price } =
    location.state;
  const [formData, setFormData] = useState({
    selectedDate: null,
    selectedTime: "",
    numberOfPeople: "",
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    specialRequests: ""
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      selectedDate: date,
      selectedTime: "" // Reset time when date changes
    }));
    // Clear date error when user selects a date
    if (errors.selectedDate) {
      setErrors(prev => ({ ...prev, selectedDate: "" }));
    }
    
    // Fetch available slots for the selected date
    if (date && Resname) {
      checkAvailability(date);
    }
  };
  // Check availability for selected date and restaurant
  const checkAvailability = async (date) => {
    try {
      setIsCheckingAvailability(true);
      const dateString = date.toISOString().split('T')[0];
      const response = await axios.get(
        API_ENDPOINTS.CHECK_AVAILABILITY(Resname, dateString),
        { timeout: 30000 }
      );
      
      if (response.data.success) {
        setAvailableSlots(response.data.availableSlots);
      }
    } catch (error) {
      console.error("Error checking availability:", error);
      // If API fails, show all slots as available
      const allSlots = [
        "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
        "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
        "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
        "09:00 PM", "09:30 PM", "10:00 PM"
      ];
      setAvailableSlots(allSlots);
    } finally {
      setIsCheckingAvailability(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Date validation
    if (!formData.selectedDate) {
      newErrors.selectedDate = "Please select a date";
    } else if (formData.selectedDate < today) {
      newErrors.selectedDate = "Please select a future date";
    }

    // Time validation
    if (!formData.selectedTime) {
      newErrors.selectedTime = "Please select a time";
    }

    // Number of people validation
    if (!formData.numberOfPeople) {
      newErrors.numberOfPeople = "Please enter number of people";
    } else if (formData.numberOfPeople < 1 || formData.numberOfPeople > 20) {
      newErrors.numberOfPeople = "Number of people must be between 1 and 20";
    }

    // Customer name validation
    if (!formData.customerName.trim()) {
      newErrors.customerName = "Please enter your name";
    } else if (formData.customerName.trim().length < 2) {
      newErrors.customerName = "Name must be at least 2 characters";
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.customerPhone) {
      newErrors.customerPhone = "Please enter your phone number";
    } else if (!phoneRegex.test(formData.customerPhone.replace(/\D/g, ''))) {
      newErrors.customerPhone = "Please enter a valid 10-digit phone number";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.customerEmail) {
      newErrors.customerEmail = "Please enter your email";
    } else if (!emailRegex.test(formData.customerEmail)) {
      newErrors.customerEmail = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const bookingData = {
        restaurant: {
          name: Resname,
          location: Reslocation,
          price: price
        },
        booking: {
          date: formData.selectedDate.toISOString().split('T')[0],
          time: formData.selectedTime,
          numberOfPeople: parseInt(formData.numberOfPeople),
          customerName: formData.customerName.trim(),
          customerPhone: formData.customerPhone.replace(/\D/g, ''), // Remove non-digits
          customerEmail: formData.customerEmail.toLowerCase(),
          specialRequests: formData.specialRequests.trim(),
          bookingId: `BK${Date.now()}${Math.random().toString(36).substr(2, 4).toUpperCase()}`, // Better booking ID          status: "confirmed"
        }      };

      // Make actual API call to backend
      const response = await axios.post(API_ENDPOINTS.CREATE_BOOKING, bookingData, {
        timeout: 30000 // 30 second timeout for Render free tier
      });
      
      if (response.data.success) {
        toast.success(`Table booked successfully! Booking ID: ${bookingData.booking.bookingId}. Confirmation details sent to your email.`, {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        // Reset form
        setFormData({
          selectedDate: null,
          selectedTime: "",
          numberOfPeople: "",
          customerName: "",
          customerPhone: "",
          customerEmail: "",
          specialRequests: ""
        });

        // Navigate back to restaurants after successful booking
        setTimeout(() => {
          navigate("/reserve");
        }, 3000);
      }

    } catch (error) {
      let errorMessage = "Failed to book table. Please try again.";
      
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.data?.errors) {
        errorMessage = error.response.data.errors.join(", ");
      }
      
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };
  // Get minimum date (today)
  const minDate = new Date();
  
  // Get maximum date (3 months from today)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  // Generate time slots with better organization
  const timeSlots = [
    { category: "Lunch", times: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM"] },
    { category: "Afternoon", times: ["03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"] },
    { category: "Dinner", times: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM"] }
  ];

  // Check if selected date is weekend
  const isWeekend = (date) => {
    if (!date) return false;
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday = 0, Saturday = 6
  };
  // Check if time slot should be disabled (for example, lunch slots on weekends or unavailable slots)
  const isTimeSlotDisabled = (time, selectedDate) => {
    if (!selectedDate) return false;
    
    // Check if slot is not available (booked)
    if (availableSlots.length > 0 && !availableSlots.includes(time)) {
      return true;
    }
    
    // Example: Disable lunch slots on weekends
    const lunchTimes = ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM"];
    if (isWeekend(selectedDate) && lunchTimes.includes(time)) {
      return true;
    }
    
    return false;
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
          <div className="p-6 flex flex-col space-y-4 md:space-y-6 sm:p-8">            <h1 className="restaurant-title text-3xl font-bold mx-auto leading-tight md:text-2x tracking-tight md:text-2x text-white">
              Restaurant Detail
            </h1>
            <img
              className="h-[200px] w-[2000px] object-cover"
              src={image}
              alt="Sunset in the mountains"
            />            <div className="restaurant-title text-white font-bold mx-auto text-4xl">
              {Resname}
            </div>
            <div className="menu-text text-white font-semibold mx-auto text-lg">
              {description}
            </div>
            <div className="restaurant-subtitle text-white font-semibold mx-auto text-lg">
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
        </div>        <div className="w-full flex flex-col glassmorphism rounded-lg shadow dark:border sm:max-w-md xl:p-0 -mt-20 mx-auto">
          <div className="p-6 flex flex-col space-y-4 md:space-y-6 sm:p-8">            <h1 className="restaurant-title text-3xl font-bold mx-auto leading-tight md:text-2x tracking-tight md:text-2x text-white">
              Book a Table
            </h1>
            <form className="w-full" onSubmit={handleSubmit}>
              
              {/* Customer Information */}
              <div className="mb-4">                <label
                  htmlFor="customerName"
                  className="block mb-2 text-md font-medium text-white restaurant-subtitle"
                >
                  Full Name <span className="text-red-400">*</span>
                </label><input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="forminput"
                  required
                />
                {errors.customerName && (
                  <p className="text-red-400 text-sm mt-1">{errors.customerName}</p>
                )}
              </div>              <div className="mb-4">
                <label
                  htmlFor="customerEmail"
                  className="block mb-2 text-md font-medium text-white restaurant-subtitle"
                >
                  Email Address <span className="text-red-400">*</span>
                </label><input
                  type="email"
                  name="customerEmail"
                  value={formData.customerEmail}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="forminput"
                  required
                />
                {errors.customerEmail && (
                  <p className="text-red-400 text-sm mt-1">{errors.customerEmail}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="customerPhone"
                  className="block mb-2 text-md font-medium text-white"
                >
                  Phone Number <span className="text-red-400">*</span>
                </label>                <input
                  type="tel"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  className="forminput"
                  required
                />
                {errors.customerPhone && (
                  <p className="text-red-400 text-sm mt-1">{errors.customerPhone}</p>
                )}
              </div>              {/* Booking Details */}
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="date"
                  className="block mb-2 text-md font-medium text-white"
                >
                  Select Date <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <DatePicker
                    name="date"
                    selected={formData.selectedDate}
                    onChange={handleDateChange}
                    dateFormat="EEEE, MMMM do, yyyy"
                    placeholderText="Click to select date"
                    locale="en-US"
                    minDate={minDate}
                    maxDate={maxDate}
                    filterDate={(date) => {
                      // Optional: disable certain days (e.g., Mondays for maintenance)
                      // return date.getDay() !== 1; // Disable Mondays
                      return true;
                    }}
                    highlightDates={[
                      {
                        "react-datepicker__day--highlighted-custom-1": [new Date()]
                      }
                    ]}
                    showPopperArrow={false}
                    className="forminput customDatePickerWidth"
                    calendarClassName="custom-calendar"
                    dayClassName={(date) => {
                      const isToday = date.toDateString() === new Date().toDateString();
                      const isWeekendDay = date.getDay() === 0 || date.getDay() === 6;
                      
                      let className = "custom-day";
                      if (isToday) className += " today";
                      if (isWeekendDay) className += " weekend";
                      
                      return className;
                    }}
                    showWeekNumbers={false}
                    showMonthDropdown={true}
                    showYearDropdown={true}
                    dropdownMode="select"
                    isClearable={true}
                    showTimeSelect={false}
                  />
                  <div className="absolute right-3 top-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {formData.selectedDate && (
                  <div className="mt-2 text-sm text-green-400">
                    Selected: {formData.selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                    {isWeekend(formData.selectedDate) && (
                      <span className="ml-2 text-yellow-400">(Weekend - Limited lunch hours)</span>
                    )}
                  </div>
                )}                {errors.selectedDate && (
                  <p className="text-red-400 text-sm mt-1">{errors.selectedDate}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label
                  htmlFor="selectedTime"
                  className="block mb-2 text-md font-medium text-white"
                >
                  Select Time <span className="text-red-400">*</span>
                  {isCheckingAvailability && (
                    <span className="ml-2 text-blue-400 text-sm">(Checking availability...)</span>
                  )}
                </label>
                <div className="relative">
                  <select
                    name="selectedTime"
                    value={formData.selectedTime}
                    onChange={handleInputChange}
                    disabled={!formData.selectedDate || isCheckingAvailability}
                    className="forminput disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">
                      {!formData.selectedDate 
                        ? "Please select a date first" 
                        : isCheckingAvailability 
                        ? "Checking availability..." 
                        : "Select your preferred time"
                      }
                    </option>
                    {formData.selectedDate && !isCheckingAvailability && timeSlots.map((category, categoryIndex) => (
                      <optgroup key={categoryIndex} label={`${category.category} Time`}>
                        {category.times.map((time, timeIndex) => {
                          const disabled = isTimeSlotDisabled(time, formData.selectedDate);
                          const isBooked = availableSlots.length > 0 && !availableSlots.includes(time);
                          return (
                            <option 
                              key={timeIndex} 
                              value={time}
                              disabled={disabled}
                              style={disabled ? { color: '#999', fontStyle: 'italic' } : {}}
                            >
                              {time} {disabled ? 
                                (isBooked ? '(Booked)' : '(Not available)') : 
                                availableSlots.length > 0 ? '(Available)' : ''
                              }
                            </option>
                          );
                        })}
                      </optgroup>
                    ))}
                  </select>
                  <div className="absolute right-3 top-3 pointer-events-none">
                    {isCheckingAvailability ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-400"></div>
                    ) : (
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                {formData.selectedTime && (
                  <div className="mt-2 text-sm text-green-400">
                    Selected: {formData.selectedTime}
                    {timeSlots.find(cat => cat.times.includes(formData.selectedTime)) && (
                      <span className="ml-2 text-gray-300">
                        ({timeSlots.find(cat => cat.times.includes(formData.selectedTime)).category})
                      </span>
                    )}
                  </div>
                )}
                {formData.selectedDate && availableSlots.length > 0 && (
                  <div className="mt-3">
                    <div className="text-sm text-blue-400 mb-2">
                      <strong>{availableSlots.length}</strong> time slots available for {formData.selectedDate.toLocaleDateString()}
                    </div>
                    
                    {/* Quick Time Slot Visual */}
                    <div className="grid grid-cols-3 gap-2 p-3 bg-gray-900 bg-opacity-30 rounded-lg">
                      {timeSlots.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="text-center">
                          <div className="text-xs text-gray-400 mb-1 font-medium">{category.category}</div>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {category.times.slice(0, 4).map((time, timeIndex) => {
                              const isAvailable = availableSlots.includes(time);
                              const isSelected = formData.selectedTime === time;
                              return (
                                <div
                                  key={timeIndex}
                                  onClick={() => !isTimeSlotDisabled(time, formData.selectedDate) && setFormData(prev => ({...prev, selectedTime: time}))}
                                  className={`
                                    w-8 h-6 text-xs rounded cursor-pointer transition-all duration-200 flex items-center justify-center font-medium
                                    ${isSelected 
                                      ? 'bg-blue-500 text-white scale-110 shadow-lg' 
                                      : isAvailable 
                                      ? 'bg-green-500 bg-opacity-30 text-green-300 hover:bg-opacity-50 hover:scale-105' 
                                      : 'bg-red-500 bg-opacity-30 text-red-300 cursor-not-allowed'
                                    }
                                  `}
                                  title={`${time} - ${isAvailable ? 'Available' : 'Booked'}`}
                                >
                                  {time.split(':')[0]}
                                </div>
                              );
                            })}
                            {category.times.length > 4 && (
                              <div className="w-8 h-6 text-xs rounded flex items-center justify-center text-gray-400">
                                +{category.times.length - 4}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-center gap-4 mt-2 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-500 bg-opacity-30 rounded"></div>
                        <span className="text-gray-400">Available</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-500 bg-opacity-30 rounded"></div>
                        <span className="text-gray-400">Booked</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-500 rounded"></div>
                        <span className="text-gray-400">Selected</span>
                      </div>
                    </div>
                    
                    {/* Popular Times Quick Select */}
                    <div className="mt-4 p-3 bg-blue-900 bg-opacity-20 rounded-lg border border-blue-500 border-opacity-30">
                      <div className="text-sm text-blue-300 mb-2 font-medium">🔥 Popular Times</div>
                      <div className="flex flex-wrap gap-2">
                        {["06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"].map((popularTime, index) => {
                          const isAvailable = availableSlots.includes(popularTime);
                          const isSelected = formData.selectedTime === popularTime;
                          if (!isAvailable) return null;
                          
                          return (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setFormData(prev => ({...prev, selectedTime: popularTime}))}
                              className={`
                                px-3 py-1 rounded-full text-sm font-medium transition-all duration-200
                                ${isSelected 
                                  ? 'bg-blue-500 text-white scale-105 shadow-lg' 
                                  : 'bg-blue-500 bg-opacity-20 text-blue-300 hover:bg-opacity-40 hover:scale-105'
                                }
                              `}
                            >
                              {popularTime}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
                {errors.selectedTime && (
                  <p className="text-red-400 text-sm mt-1">{errors.selectedTime}</p>
                )}
                {formData.selectedDate && isWeekend(formData.selectedDate) && (
                  <div className="mt-2 p-2 bg-yellow-900 bg-opacity-50 rounded text-yellow-300 text-sm">
                    <strong>Weekend Notice:</strong> Lunch service (12:00 PM - 2:30 PM) is not available on weekends.
                  </div>
                )}
              </div>
              
              <div className="mb-4">
                <label
                  htmlFor="numberOfPeople"
                  className="block mb-2 text-md font-medium text-white"
                >
                  Number of People <span className="text-red-400">*</span>
                </label>                <input
                  type="number"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleInputChange}
                  placeholder="Enter number of guests"
                  className="forminput"
                  min="1"
                  max="20"
                  required
                />
                {errors.numberOfPeople && (
                  <p className="text-red-400 text-sm mt-1">{errors.numberOfPeople}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="specialRequests"
                  className="block mb-2 text-md font-medium text-white"
                >
                  Special Requests (Optional)
                </label>                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Any special requests, dietary requirements, or occasion details..."
                  rows="4"
                  className="forminput resize-none"
                />
              </div>
              
              <div>
                <div className="flex justify-center">                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="booking-btn mx-auto text-xl text-white rounded-lg font-normal px-8 py-3 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Booking..." : "Reserve Now"}
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
