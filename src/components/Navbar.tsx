import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PartyPopper, Heart, Menu, User } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <PartyPopper className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-800">Event Vista</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services/wedding" className="flex items-center space-x-1 text-gray-600 hover:text-purple-600">
              <Heart className="h-5 w-5" />
              <span>Weddings</span>
            </Link>
            <Link to="/services/birthday" className="flex items-center space-x-1 text-gray-600 hover:text-purple-600">
              <PartyPopper className="h-5 w-5" />
              <span>Birthdays</span>
            </Link>
            <button
              onClick={() => navigate('/auth')}
              className="flex items-center space-x-1 px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700"
            >
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link to="/services/wedding" className="text-gray-600 hover:text-purple-600" onClick={toggleMobileMenu}>
              Weddings
            </Link>
            <Link to="/services/birthday" className="text-gray-600 hover:text-purple-600" onClick={toggleMobileMenu}>
              Birthdays
            </Link>
            <button
              onClick={() => {
                navigate('/auth');
                setIsMobileMenuOpen(false);
              }}
              className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
