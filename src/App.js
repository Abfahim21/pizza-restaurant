import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';

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
    </div>
  );
}

export default App;
