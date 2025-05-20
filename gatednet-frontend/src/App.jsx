import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import the landing and admin apps
import LandingApp from './landing/LandingApp';
import AdminApp from './admin/AdminApp';

// Import admin auth and dashboard pages (adjust paths if needed)
import AdminLogin from './admin/pages/AdminLogin';
import AdminSignup from './admin/pages/AdminSignup';
import Dashboard from './admin/components/Dashboard';

// Authentication guard for protected routes
const RequireAuth = ({ children }) => {
  const isAuthenticated = localStorage.getItem('admin_id_token');
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing page at root */}
        <Route path="/" element={<LandingApp />} />

        {/* Admin landing page */}
        <Route path="/admin" element={<AdminApp />} />

        {/* Admin authentication */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />

        {/* Admin protected routes */}
        <Route
          path="/admin/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />

        {/* Redirect unmatched routes to landing */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
