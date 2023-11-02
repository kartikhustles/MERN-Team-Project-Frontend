import './App.css';
import About from './Components/About/About';
import DashBoard from './Components/DashBoard/DashBoard';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Reserve from './Components/Reserve/Reserve';
import Menu from './Components/Menu/Menu';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
