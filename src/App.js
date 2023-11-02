import {HashRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';

function App() {
  return (
   <div>
    <HashRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
      <Footer/>
    </HashRouter>
   </div>
  );
}

export default App;
