import {HashRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Reserve from './Components/Reserve/Reserve';
import Login from './Components/Login/Login';

function App() {
  return (
   <div>
    <HashRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/reserve" element={<Reserve/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </HashRouter>
   </div>
  );
}

export default App;
