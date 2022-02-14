import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='menu' element={ <Menu/> }></Route>
        <Route path='about' element={ <About/> }></Route>
        <Route path='contact' element={ <Contact/> }></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
