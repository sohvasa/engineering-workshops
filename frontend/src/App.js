import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <div style={{ position: 'relative', height: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
