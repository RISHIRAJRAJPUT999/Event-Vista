import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Cake, Heart, Music, Camera, Utensils, Users, Calendar, MapPin, DollarSign, Check, Phone } from 'lucide-react';

const serviceDetails = {
  wedding: {
    title: 'Wedding Planning Services',
    description: 'Make your special day perfect with our comprehensive wedding planning services',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    packages: [
      {
        name: 'Essential Package',
        price: 2999,
        features: ['Venue Selection', 'Basic Decoration', 'Catering (100 guests)', 'Photography']
      },
      {
        name: 'Premium Package',
        price: 4999,
        features: ['Luxury Venue', 'Premium Decoration', 'Catering (200 guests)', 'Photography & Videography', 'Live Music']
      },
      {
        name: 'Royal Package',
        price: 7999,
        features: ['Elite Venue', 'Exclusive Decoration', 'Premium Catering (300 guests)', 'Complete Media Coverage', 'Live Band & DJ']
      }
    ]
  },
  birthday: {
    title: 'Birthday Celebration Services',
    description: 'Create memorable birthday celebrations for all ages',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80',
    packages: [
      {
        name: 'Kids Party Package',
        price: 499,
        features: ['Theme Decoration', 'Games & Activities', 'Basic Catering', 'Birthday Cake']
      },
      {
        name: 'Teen Party Package',
        price: 799,
        features: ['Modern Decoration', 'DJ & Music', 'Snacks & Beverages', 'Photo Booth']
      },
      {
        name: 'Adult Celebration Package',
        price: 1299,
        features: ['Elegant Decoration', 'Premium Catering', 'Bar Service', 'Live Music']
      }
    ]
  },
  entertainment: {
    title: 'Entertainment Services',
    description: 'Professional entertainment solutions for your events',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80',
    packages: [
      {
        name: 'DJ Package',
        price: 599,
        features: ['Professional DJ', '4 Hours Service', 'Basic Lighting', 'Sound System']
      },
      {
        name: 'Live Band Package',
        price: 1499,
        features: ['4-Piece Band', '3 Hours Performance', 'Sound Equipment', 'Song Requests']
      },
      {
        name: 'Complete Package',
        price: 2499,
        features: ['DJ & Live Band', '6 Hours Service', 'Premium Lighting', 'Dance Floor']
      }
    ]
  },
  "event-staff": {
    title: 'Event Staff Services',
    description: 'Professional staff to manage and execute your events smoothly',
    image:"https://5.imimg.com/data5/SELLER/Default/2024/1/373715698/MR/RB/JR/134113068/corporate-events-management-services.jpg",
     packages: [
      {
        name: 'Standard Staff',
        price: 299,
        features: ['Waiters & Servers', 'Basic Event Setup', 'Crowd Management']
      },
      {
        name: 'Premium Staff',
        price: 799,
        features: ['Bartenders & Servers', 'Professional Setup', 'Event Coordinators']
      },
      {
        name: 'VIP Staff',
        price: 1499,
        features: ['Personalized Concierge', 'On-Site Manager', 'Luxury Hospitality Services']
      }
    ]
  },
  photography: {
    title: 'Photography Services',
    description: 'Capture your precious moments with our professional photography packages',
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80',
    packages: [
      {
        name: 'Basic Photography',
        price: 499,
        features: ['1 Photographer', '3 Hours Coverage', '50 Edited Photos', 'Online Album']
      },
      {
        name: 'Premium Photography',
        price: 999,
        features: ['2 Photographers', '6 Hours Coverage', '100 Edited Photos', 'Printed Album']
      },
      {
        name: 'Elite Photography',
        price: 1999,
        features: ['3 Photographers', 'Full-Day Coverage', '200+ Edited Photos', 'Luxury Photo Book']
      }
    ]
  },
  catering: {
    title: 'Catering Services',
    description: 'Exquisite catering solutions for all your event needs',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80',
    packages: [
      {
        name: 'Basic Buffet',
        price: 25,
        features: ['Per Person', '3 Main Dishes', '2 Sides', 'Dessert Station']
      },
      {
        name: 'Premium Buffet',
        price: 45,
        features: ['Per Person', '5 Main Dishes', '4 Sides', 'Premium Desserts', 'Beverage Station']
      },
      {
        name: 'Luxury Service',
        price: 75,
        features: ['Per Person', 'Passed Hors d\'oeuvres', 'Plated Service', 'Premium Bar', 'Custom Menu']
      }
    ]
  }
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { category } = useParams();
  const service = serviceDetails[category as keyof typeof serviceDetails];

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobile: string) => /^\d{10}$/.test(mobile);

  const handleConfirmBooking = () => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  
    if (!name.trim() || !validateEmail(email) || !validateMobile(mobile) || !date.trim() || !location.trim()) {
      setError("Please fill in all required fields correctly.");
      return;
    }
  
    if (date < today) {
      setError("Please select a future date.");
      return;
    }
  
    const message = `Hello, I would like to book the '${selectedPackage.name}' package for ${service.title}. 
    \nName: ${name} 
    \nEmail: ${email} 
    \nMobile: ${mobile} 
    \nDate: ${date} 
    \nLocation: ${location} 
    \nDescription: ${description} 
    \nPrice: $${selectedPackage.price}`;
  
    const phoneNumber = "+919039230092";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    window.open(whatsappURL, "_blank");
  
    setSelectedPackage(null);
    setName("");
    setEmail("");
    setMobile("");
    setDate("");
    setLocation("");
    setDescription("");
    setError("");
  };
  

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Service category not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="relative mb-16 w-full h-[500px]">
        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold text-white">{service.title}</h1>
          <p className="mt-4 text-2xl text-gray-200 max-w-3xl">{service.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.packages.map((pkg) => (
            <div key={pkg.name} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{pkg.name}</h3>
                <div className="flex items-center text-3xl font-bold text-purple-600 mb-6">
                  <DollarSign className="h-6 w-6 mr-2" />
                  {pkg.price}
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-purple-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-8 w-full bg-purple-600 text-white py-3 px-4 rounded-xl hover:bg-purple-700 transition-all shadow-md"
                  onClick={() => setSelectedPackage(pkg)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPackage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-bold">{selectedPackage.name}</h2>
            <p className="text-gray-600 mt-2">Price: ${selectedPackage.price}</p>

            <p className="text-gray-500 mt-4">Please enter your details to book:</p>
            <input type="text" placeholder="Your Name" className="w-full mt-3 p-2 border rounded-lg" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Your Email" className="w-full mt-3 p-2 border rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" placeholder="Mobile Number" className="w-full mt-3 p-2 border rounded-lg" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <input type="date" className="w-full mt-3 p-2 border rounded-lg" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="text" placeholder="Location" className="w-full mt-3 p-2 border rounded-lg" value={location} onChange={(e) => setLocation(e.target.value)} />
            <textarea placeholder="Description" className="w-full mt-3 p-2 border rounded-lg" value={description} onChange={(e) => setDescription(e.target.value)} />

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="flex justify-between mt-6">
              <button onClick={() => setSelectedPackage(null)} className="bg-gray-500 text-white py-2 px-4 rounded">Cancel</button>
              <button onClick={handleConfirmBooking} className="bg-purple-600 text-white py-2 px-4 rounded">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
