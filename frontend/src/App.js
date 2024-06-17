import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here for About, Projects, Contact pages */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
