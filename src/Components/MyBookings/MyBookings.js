import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");

  const fetchBookings = async (customerEmail) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:4000/bookings/customer/${customerEmail}`);
      
      if (response.data.success) {
        setBookings(response.data.bookings);
      }
    } catch (error) {
      toast.error("Failed to fetch bookings", {
        position: "top-right",
        autoClose: 3000,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      fetchBookings(email.trim().toLowerCase());
    }
  };

  const cancelBooking = async (bookingId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/bookings/${bookingId}`);
      
      if (response.data.success) {
        toast.success("Booking cancelled successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        
        // Refresh bookings
        fetchBookings(email);
      }
    } catch (error) {
      toast.error("Failed to cancel booking", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-400';
      case 'pending':
        return 'text-yellow-400';
      case 'cancelled':
        return 'text-red-400';
      case 'completed':
        return 'text-blue-400';
      default:
        return 'text-white';
    }
  };

  return (
    <div className="min-h-screen p-8">
      <img
        className="h-full w-full lowbrightness object-cover z-[-1] fixed top-0"
        src="https://images.unsplash.com/photo-1504981983529-9ed8031ade7f?q=80&w=2303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">My Bookings</h1>
        
        {/* Email Input Form */}
        <div className="glassmorphism rounded-lg p-6 mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to view bookings"
              className="flex-1 border text-base font-semibold rounded-lg p-3 forminput"
              required
            />            <button
              type="submit"
              className="auth-btn text-white font-medium rounded-lg"
            >
              View Bookings
            </button>
          </form>
        </div>

        {/* Bookings List */}
        {isLoading ? (
          <div className="text-center text-white text-xl">Loading bookings...</div>
        ) : bookings.length === 0 && email ? (
          <div className="text-center text-white text-xl">No bookings found for this email.</div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking, index) => (
              <div key={index} className="glassmorphism rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {booking.restaurant.name}
                    </h3>
                    <p className="text-gray-300 mb-1">
                      <strong>Location:</strong> {booking.restaurant.location}
                    </p>
                    <p className="text-gray-300 mb-1">
                      <strong>Price Range:</strong> {booking.restaurant.price}
                    </p>
                    <p className="text-gray-300 mb-1">
                      <strong>Booking ID:</strong> {booking.booking.bookingId}
                    </p>
                    <p className={`font-semibold ${getStatusColor(booking.booking.status)}`}>
                      Status: {booking.booking.status.toUpperCase()}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-300 mb-1">
                      <strong>Date:</strong> {formatDate(booking.booking.date)}
                    </p>
                    <p className="text-gray-300 mb-1">
                      <strong>Time:</strong> {booking.booking.time}
                    </p>
                    <p className="text-gray-300 mb-1">
                      <strong>People:</strong> {booking.booking.numberOfPeople}
                    </p>
                    <p className="text-gray-300 mb-1">
                      <strong>Name:</strong> {booking.booking.customerName}
                    </p>
                    <p className="text-gray-300 mb-1">
                      <strong>Phone:</strong> {booking.booking.customerPhone}
                    </p>
                    {booking.booking.specialRequests && (
                      <p className="text-gray-300 mb-3">
                        <strong>Special Requests:</strong> {booking.booking.specialRequests}
                      </p>
                    )}
                    
                    {booking.booking.status === 'confirmed' && (
                      <button
                        onClick={() => cancelBooking(booking.booking.bookingId)}
                        className="bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg px-4 py-2 mt-2"
                      >
                        Cancel Booking
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBookings;
