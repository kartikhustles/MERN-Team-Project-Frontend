import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Reserve from "./Components/Reserve/Reserve";
import Booking from "./Components/Booking/Booking";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/reserve"
            element={<Reserve isLoggedIn={isLoggedIn} />}
          />          <Route
            path="/signup"
            element={
              <Signup setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="/login"
            element={
              <Login setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="/booking"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Booking />
              </PrivateRoute>
            }
          />        </Routes>
        <Footer />
        <ToastContainer />
      </HashRouter>
    </div>
  );
}

export default App;
