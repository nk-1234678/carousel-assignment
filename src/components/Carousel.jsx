import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    contact: "1234567890",
    skills: ["React", "Node.js"]
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    contact: "9876543210",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    contact: "5555555555",
    skills: ["Python", "Machine Learning"]
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob@example.com",
    contact: "1112223333",
    skills: ["C++", "Data Structures"]
  },
  {
    id: 5,
    name: "Emily Davis",
    email: "emily@example.com",
    contact: "9998887777",
    skills: ["Java", "Spring Boot"]
  },
  {
    id: 6,
    name: "Michael Scott",
    email: "michael@dundermifflin.com",
    contact: "8001234567",
    skills: ["Sales", "Management"]
  },
  {
    id: 7,
    name: "Dwight Schrute",
    email: "dwight@dundermifflin.com",
    contact: "8007654321",
    skills: ["Beet Farming", "Sales", "Karate"]
  },
  {
    id: 8,
    name: "Pam Beesly",
    email: "pam@dundermifflin.com",
    contact: "8009876543",
    skills: ["Design", "Art", "Customer Service"]
  },
  {
    id: 9,
    name: "Jim Halpert",
    email: "jim@dundermifflin.com",
    contact: "8004567890",
    skills: ["Sales", "Pranks", "Teamwork"]
  },
  {
    id: 10,
    name: "Angela Martin",
    email: "angela@dundermifflin.com",
    contact: "8001122334",
    skills: ["Accounting", "Organization", "Cats"]
  },
  {
    id: 11,
    name: "Kevin Malone",
    email: "kevin@dundermifflin.com",
    contact: "8009988776",
    skills: ["Accounting", "Cooking", "Drumming"]
  },
  {
    id: 12,
    name: "Stanley Hudson",
    email: "stanley@dundermifflin.com",
    contact: "8002233445",
    skills: ["Sales", "Crosswords", "Patience"]
  },
  {
    id: 13,
    name: "Ryan Howard",
    email: "ryan@dundermifflin.com",
    contact: "8005566778",
    skills: ["Marketing", "Startups", "Technology"]
  },
  {
    id: 14,
    name: "Kelly Kapoor",
    email: "kelly@dundermifflin.com",
    contact: "8006677889",
    skills: ["Social Media", "Fashion", "Customer Service"]
  },
  {
    id: 15,
    name: "Creed Bratton",
    email: "creed@dundermifflin.com",
    contact: "8003344556",
    skills: ["Mystery", "Security", "Survival"]
  }
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const current = data[index];

  const nextCard = () => {
    if (index < data.length - 1) setIndex(index + 1);
  };

  const prevCard = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen gap-[50px] bg-gradient-to-r from-[#f9f6f2] via-[#f4f2ff] to-[#f9f6f2]">
      {/* Left arrow */}
      <div onClick={prevCard} className="cursor-pointer hover:scale-110 transition-transform duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-purple-500 hover:text-purple-700" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="relative flex flex-row justify-between items-center gap-4 h-[320px] w-[560px] rounded-[30px] bg-gradient-to-br from-white via-purple-50 to-white shadow-2xl backdrop-blur-md border border-white/60 transition duration-500 hover:scale-[1.02] hover:shadow-purple-300 overflow-hidden">
        
      {/* ID Tag */}
      <div className="absolute top-4 left-4 bg-purple-100 text-purple-800 font-semibold text-sm px-4 py-1 rounded-full shadow-md z-10">
        ID: {current.id}
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center space-y-2 px-6 z-10 ml-[30px]">
        <h2 className="text-3xl font-heading font-bold text-purple-700 drop-shadow-sm">{current.name}</h2>
        <p className="text-gray-800 font-body flex items-center gap-2">
          <span className="material-icons text-purple-400">email</span>
          {current.email}
        </p>
        <p className="text-gray-800 font-body flex items-center gap-2">
          <span className="material-icons text-purple-400">call</span>
          {current.contact}
        </p>
        <p className="text-gray-800 font-body flex items-center gap-2">
          <span className="material-icons text-purple-400">psychology</span>
          <span className="font-semibold">Skills:</span> {current.skills.join(", ")}
        </p>
      </div>

      {/* Avatar + Effects */}
      <div className="relative flex items-center justify-center w-[130px] h-[130px] mr-16 z-10">
        <div className="absolute w-[160px] h-[160px] border-[3px] border-dashed border-purple-300 rounded-full animate-spin-slow opacity-50"></div>
        <div className="absolute w-[180px] h-[180px] border-t-4 border-b-4 border-purple-100 rounded-full animate-ping opacity-30"></div>

        <div className="flex items-center justify-center w-[120px] h-[120px] bg-purple-600 text-white text-5xl font-bold rounded-full border-4 border-white shadow-lg uppercase z-10">
          {current.name.charAt(0)}
        </div>
      </div>
      </div>


      {/* Right arrow */}
      <div onClick={nextCard} className="cursor-pointer hover:scale-110 transition-transform duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-purple-500 hover:text-purple-700" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default Carousel;
