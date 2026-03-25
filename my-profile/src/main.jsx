import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/home.jsx';
import ContactMe from './pages/ContactMe.jsx';
import Aboutme from './pages/Aboutme.jsx';
import Projects from './pages/Projects.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
);