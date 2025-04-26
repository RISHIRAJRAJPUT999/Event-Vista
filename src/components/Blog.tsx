import React, { useEffect, useState } from "react";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Event Planning Tips",
      summary: "Discover the best strategies to make your events successful and memorable.",
      content: `
        Planning an event requires careful attention to detail. Here are 10 expert tips to ensure success:
        
        1. Start early to secure the best venues and vendors.
        2. Set a clear budget and stick to it.
        3. Create a detailed timeline for all event activities.
        4. Choose the right theme and décor that match your audience.
        5. Use technology to streamline event management.
        6. Have backup plans for weather, technical issues, or cancellations.
        7. Engage attendees with interactive activities.
        8. Ensure smooth coordination between vendors, staff, and guests.
        9. Promote your event effectively through social media.
        10. Gather feedback and analyze the event's success.
      `,
    },
    {
      id: 2,
      title: "How to Choose the Perfect Venue",
      summary: "Finding the right venue is key to a successful event. Learn expert tips here.",
      content: `
        The venue sets the tone for your event. Here’s what to consider when choosing a venue:
        
        - **Location:** Ensure it is easily accessible for guests.
        - **Capacity:** Pick a venue that comfortably accommodates your expected audience.
        - **Amenities:** Check for parking, audio-visual equipment, and catering options.
        - **Ambiance:** The venue's aesthetics should align with your event theme.
        - **Cost:** Stay within your budget without compromising quality.
        - **Flexibility:** Ensure the venue allows necessary customizations.
        - **Reputation:** Read reviews and check past event experiences.
      `,
    },
    {
      id: 3,
      title: "The Future of Virtual Events",
      summary: "Virtual and hybrid events are transforming the industry. Here's what you need to know.",
      content: `
        With advancements in technology, virtual events are becoming more popular. Key trends include:
        
        - **Interactive networking sessions** with AI-driven matchmaking.
        - **Virtual reality (VR) and augmented reality (AR)** for immersive experiences.
        - **Hybrid events** blending in-person and virtual participation.
        - **Data-driven analytics** to improve audience engagement.
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Our Blog</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Stay updated with the latest event trends, tips, and success stories from Event Vista!
        </p>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-500 mt-2">{post.summary}</p>
              <div className="flex justify-between items-center mt-4">
                <button
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
                >
                  {selectedPost === post.id ? "Show Less" : "Read More"}
                </button>
                {selectedPost === post.id && (
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={() => setSelectedPost(null)}
                  >
                    Close
                  </button>
                )}
              </div>
              {selectedPost === post.id && (
                <div className="mt-4 p-4 bg-gray-50 border-l-4 border-purple-500">
                  <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
