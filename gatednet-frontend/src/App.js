import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the main components from your admin and landing folders
import AdminApp from './admin/app'; // Note: matches your lowercase 'app.jsx'
import LandingApp from './landing/app'; // Note: matches your capitalized 'App.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingApp />} />
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
    </Router>
  );
}

export default App;