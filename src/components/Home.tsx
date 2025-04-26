import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged
import { Cake, Heart, Music, Camera, Utensils, Users } from 'lucide-react';

const services = [
  { icon: Heart, title: 'Wedding Planning', path: '/services/wedding', description: 'Complete wedding planning and coordination services' },
  { icon: Cake, title: 'Birthday Events', path: '/services/birthday', description: 'Memorable birthday celebrations for all ages' },
  { icon: Utensils, title: 'Catering', path: '/services/catering', description: 'Exquisite catering services for all occasions' },
  { icon: Music, title: 'Entertainment', path: '/services/entertainment', description: 'Music, DJs, and live performances' },
  { icon: Camera, title: 'Photography', path: '/services/photography', description: 'Professional photo and video services' },
  { icon: Users, title: 'Event Staff', path: '/services/event-staff', description: 'Professional event staff and coordination' },
];

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set user to logged in if a user is found
      } else {
        setUser(null); // Set user to logged out if no user is found
        navigate("/auth"); // Redirect to login page if user is not logged in
      }
    });

    return () => unsubscribe(); // Clean up the listener when component unmounts
  }, [navigate]);

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
          alt="Event backdrop"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Create Unforgettable Moments</h1>
          <p className="mt-4 text-lg sm:text-xl">Your one-stop destination for planning perfect events.</p>
          <Link
            to="/services/wedding"
            className="mt-6 inline-block bg-purple-600 px-6 py-3 rounded-md text-white font-medium hover:bg-purple-700"
          >
            Start Planning
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.path}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <Icon className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Plan Your Event?</h2>
            <p className="text-purple-100 mb-8">Join us today and start planning your perfect event</p>
            {/* Only show Sign Up button if user is not logged in */}
            {!user && (
              <Link
                to="/auth"
                className="inline-block bg-white px-8 py-3 rounded-md text-purple-700 font-medium hover:bg-gray-100"
              >
                Sign Up Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
