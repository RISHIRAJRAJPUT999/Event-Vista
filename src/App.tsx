import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebaseConfig';  
import { onAuthStateChanged } from 'firebase/auth';  

import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Auth from './components/Auth';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';  
import Blog from './components/Blog';  
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/services/:category" element={<Services />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />  
          <Route path="/blog" element={<Blog />} />  
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
