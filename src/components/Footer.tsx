import React from 'react';
import { Link } from 'react-router-dom';
import { PartyPopper, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
          <Link 
  to="/" 
  className="flex items-center space-x-2" 
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <PartyPopper className="h-8 w-8 text-purple-400" />
  <span className="text-xl font-bold">Event Vista</span>
</Link>

            <p className="mt-4 text-gray-400">Making your special moments unforgettable.</p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/wedding" className="text-gray-400 hover:text-white">Weddings</Link></li>
              <li><Link to="/services/birthday" className="text-gray-400 hover:text-white">Birthdays</Link></li>
              <li><Link to="/services/catering" className="text-gray-400 hover:text-white">Catering</Link></li>
              <li><Link to="/services/entertainment" className="text-gray-400 hover:text-white">Entertainment</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><a href="https://wa.me/918103113853" className="text-gray-400 hover:text-white" rel="noreferrer noopener">Contact Us</a></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/14y8jueYFe/" 
                target="_blank" 
                rel="noreferrer noopener" 
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
                title="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/rishirajsinghmourya_" 
                target="_blank" 
                rel="noreferrer noopener" 
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
                title="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/rishirajrajput" 
                target="_blank" 
                rel="noreferrer noopener" 
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn"
                title="Connect with us on LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:rajputrishiraj4@gmail.com" 
                className="text-gray-400 hover:text-white"
                aria-label="Email"
                title="Email us"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Event Vista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
