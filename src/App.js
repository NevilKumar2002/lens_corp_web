// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { ThemeProvider } from './Components/Theme';
import HeroSection from './Components/HeroSection';
import Home from './Components/Home';
import Footer from './Components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
