// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";

import Overview from "./pages/dashboard/Overview";
import Permissions from "./pages/dashboard/Permissions";
import Build from "./pages/dashboard/Build";
import Analytics from "./pages/dashboard/Analytics";
import Settings from "./pages/dashboard/Settings";
import SimManagement from "./pages/dashboard/SimManagement";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/permissions" element={<Permissions />} />
        <Route path="/dashboard/build" element={<Build />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/sims" element={<SimManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
