import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ContactForm  from './components/ContactForm';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about"  element={<About/>}/>
          <Route path="/contact"  element={<ContactForm/>}/>
          <Route path="/projects"  element={<Projects/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
