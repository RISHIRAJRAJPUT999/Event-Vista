import React, { useEffect, useState } from "react";

const Careers = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });  
  }, []);

  const jobs = [
    { 
      title: "Event Coordinator", 
      location: "Remote", 
      type: "Full-Time", 
      salary: "$50,000 - $65,000 per year",
      description: "Plan and execute successful events, ensuring smooth coordination from start to finish.",
      responsibilities: [
        "Manage event logistics and execution.",
        "Coordinate with vendors and clients.",
        "Ensure smooth event operations.",
        "Develop event timelines and schedules.",
        "Handle event budgeting and financial planning."
      ],
      requirements: [
        "2+ years of event planning experience.",
        "Strong communication and leadership skills.",
        "Ability to work under tight deadlines.",
        "Proficiency in event management software.",
        "Exceptional problem-solving and negotiation skills."
      ],
      benefits: [
        "Health and dental insurance",
        "Flexible work schedule",
        "Professional development opportunities",
        "Annual performance bonuses"
      ]
    },
    { 
      title: "Marketing Specialist", 
      location: "New York, USA", 
      type: "Part-Time", 
      salary: "$25 - $40 per hour",
      description: "Develop and execute marketing campaigns to promote events and increase brand awareness.",
      responsibilities: [
        "Create content for social media and advertising.",
        "Manage promotional campaigns.",
        "Analyze marketing performance and optimize strategies.",
        "Collaborate with influencers and media partners.",
        "Develop brand positioning strategies."
      ],
      requirements: [
        "Bachelor’s degree in Marketing or related field.",
        "Experience with digital marketing tools.",
        "Strong analytical and creative skills.",
        "Proficiency in SEO, SEM, and social media marketing.",
        "Ability to work independently and meet deadlines."
      ],
      benefits: [
        "Remote work options",
        "Paid training and skill development programs",
        "Networking opportunities",
        "Employee discounts on event services"
      ]
    },
    { 
      title: "Graphic Designer", 
      location: "Remote", 
      type: "Freelance", 
      salary: "$20 - $50 per hour",
      description: "Create visually appealing designs for digital and print marketing materials.",
      responsibilities: [
        "Develop graphics for social media, websites, and advertisements.",
        "Ensure brand consistency across all designs.",
        "Collaborate with marketing and event teams to meet visual requirements.",
        "Edit and refine designs based on feedback."
      ],
      requirements: [
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
        "Strong portfolio showcasing creative design skills.",
        "Ability to meet tight deadlines and work independently.",
        "Experience in event branding and marketing is a plus."
      ],
      benefits: [
        "Flexible work schedule",
        "Competitive pay based on project scope",
        "Opportunities for long-term collaboration"
      ]
    }
  ];

  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Join Our Team</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Explore exciting career opportunities at Event Vista. We’re looking for passionate individuals to make unforgettable events happen!
        </p>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all"
              onClick={() => setSelectedJob(job)}
            >
              <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
              <p className="text-gray-600">{job.location} • {job.type}</p>
              <p className="mt-2 text-gray-500">{job.description}</p>
            </div>
          ))}
        </div>

        {selectedJob && (
          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg relative">
            <button 
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-all"
              onClick={() => setSelectedJob(null)}
            >
              ✕
            </button>
            <h2 className="text-3xl font-semibold text-gray-900">{selectedJob.title}</h2>
            <p className="text-gray-600">{selectedJob.location} • {selectedJob.type}</p>
            <p className="text-gray-700 font-semibold mt-2">Salary: {selectedJob.salary}</p>
            
            <h3 className="mt-4 text-lg font-semibold">Responsibilities:</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {selectedJob.responsibilities.map((res, i) => <li key={i}>{res}</li>)}
            </ul>
            
            <h3 className="mt-4 text-lg font-semibold">Requirements:</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {selectedJob.requirements.map((req, i) => <li key={i}>{req}</li>)}
            </ul>

            <h3 className="mt-4 text-lg font-semibold">Benefits:</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {selectedJob.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
            </ul>

            <a 
              href={`https://wa.me/918103113853?text=I'm%20interested%20in%20the%20${encodeURIComponent(selectedJob.title)}%20position`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="mt-6 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all">
                Apply Now
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
