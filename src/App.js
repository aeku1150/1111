import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Logout from './pages/Logout';
import Footer from './components/Footer'; // เพิ่ม Footer
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'; // นำเข้าไฟล์ CSS

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />
        
        {/* Content Section */}
        <div className="main-content">
          <Routes>
            <Route path="/1111" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
