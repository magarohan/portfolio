import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about"  element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
