import React, { useEffect ,useState } from 'react';

const AboutUs = () => {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && feedback.trim() !== '') {
      setSubmitted(true);
    }
  };
  const previousFeedback = [
    { name: "Amit Sharma", rating: 5, comment: "Amazing experience! Everything was well organized." },
    { name: "Priya Mehta", rating: 4, comment: "Great platform, but could use more customization options." },
    { name: "Rahul Verma", rating: 5, comment: "Loved the seamless event booking process!" }
  ];
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 text-center">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20 px-8 rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
          Welcome to Event Vista 🎉
        </h1>
        <p className="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Your ultimate destination for discovering and organizing unforgettable events. 
          Whether it’s a wedding, a corporate gala, or a birthday bash, we help turn moments into lifelong memories.
        </p>
      </div>

      {/* Our Mission */}
      <div className="mt-16 bg-gray-100 p-10 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-purple-700 mb-6">🌟 Our Mission</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          At <span className="font-semibold text-gray-900">Event Vista</span>, our mission is to simplify event planning by providing a seamless, efficient, and creative experience. 
          We bridge the gap between users and the best event services, ensuring every occasion is stress-free and spectacular.
        </p>
      </div>

      {/* Our Values */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">💡 What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-purple-100 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-purple-700">Innovation</h3>
            <p className="text-gray-600">
              We leverage the latest technology to create a smooth and efficient event-planning experience.
            </p>
          </div>
          <div className="p-6 bg-blue-100 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700">Creativity</h3>
            <p className="text-gray-600">
              Every event is unique. We believe in bringing creativity and personalization to make yours stand out.
            </p>
          </div>
          <div className="p-6 bg-green-100 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-green-700">Reliability</h3>
            <p className="text-gray-600">
              From planning to execution, we ensure everything runs smoothly with trustworthy services.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">👨‍💻 Meet Our Team</h2>
        <p className="text-lg text-gray-700 mb-8">
          The minds behind Event Vista, dedicated to revolutionizing event planning.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-purple-700">Rishiraj Rajput</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-purple-700">Raj Solanki</h3>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-purple-700">Rishabh Gour</h3>
            <p className="text-gray-600">Backend & Database</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-purple-700">Nikhil Sharma</h3>
            <p className="text-gray-600">Marketing & Outreach</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16 bg-gray-900 text-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold mb-6">🚀 Why Choose Event Vista?</h2>
        <p className="text-lg mb-6">
          Event Vista is designed to take the hassle out of event planning, giving you more time to enjoy the moments that matter.
        </p>
        <ul className="text-lg space-y-4">
          <li>✅ A user-friendly platform that makes event planning seamless.</li>
          <li>✅ A diverse range of services to cater to all event needs.</li>
          <li>✅ A dedicated and experienced team ready to assist you.</li>
          <li>✅ A commitment to quality, creativity, and reliability.</li>
        </ul>
      </div>
 {/* Ratings & Feedback Section */}
 <div className="mt-16 bg-gray-100 p-10 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-purple-700 mb-6">⭐ Rate & Share Your Experience</h2>
        <div className="mb-6 text-left">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">What Others Say:</h3>
          <div className="space-y-4">
            {previousFeedback.map((entry, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow">
                <p className="text-lg font-semibold text-gray-900">{entry.name}</p>
                <p className="text-yellow-400">{'★'.repeat(entry.rating)}{'☆'.repeat(5 - entry.rating)}</p>
                <p className="text-gray-700">{entry.comment}</p>
              </div>
            ))}
          </div>
        </div>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`text-3xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  onClick={() => handleRating(star)}
                >
                  ★
                </button>
              ))}
            </div>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="4"
              placeholder="Share your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-700"
            >
              Submit Feedback
            </button>
          </form>
        ) : (
          <p className="text-lg text-gray-700 font-semibold">🎉 Thank you for your feedback!</p>
        )}
      </div>
      {/* Call to Action */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">🎊 Let’s Create Unforgettable Moments Together!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Start planning your event today and make every celebration a masterpiece with Event Vista.
        </p>
        <a href="/" className="px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-700">
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
