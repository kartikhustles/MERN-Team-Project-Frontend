// API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://mongo-dep.onrender.com' // Your Render backend URL
    : 'http://localhost:4000');

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/people/login`,
  SIGNUP: `${API_BASE_URL}/people/create-people`,
  BOOKINGS: `${API_BASE_URL}/bookings`,
  CREATE_BOOKING: `${API_BASE_URL}/bookings/create`,
  CHECK_AVAILABILITY: (restaurantName, date) => `${API_BASE_URL}/bookings/availability/${encodeURIComponent(restaurantName)}/${date}`
};

export default API_BASE_URL;

// Replace this line with your actual Heroku URL
// Example: https://your-restaurant-backend.herokuapp.com
// After deploying backend, update this URL
