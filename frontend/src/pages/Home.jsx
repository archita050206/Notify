import React from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/background4.jpg"

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center"  style={{ backgroundImage: `url(${bgImg})` }}>
         <nav className="w-full flex justify-between items-center px-8 py-4 absolute top-0 left-0">
        <h1 className="text-2xl font-bold text-white drop-shadow-lg ps-8 pt-3">Notify</h1>
        
      </nav>
      <h1 className="text-[60px] font-bold mt-2 text-white drop-shadow-2xl">Turn <span className="bg-gradient-to-br from-[#00FFFF] to-pink-400 bg-clip-text text-transparent text-outline " >messy thoughts</span> into</h1>
      <h1 className="text-[60px] font-bold mb-3  -mt-4 text-white drop-shadow-2xl">actionable notes. <span className="bg-gradient-to-br from-[#00FFFF] to-pink-400 bg-clip-text text-transparent text-outline ">Faster</span></h1>
       <div className="text-gray-400 text-shadow text-lg ">Capture your ideas, organize your tasks, and turn thoughts into actionable notes — all in one place.</div>
       <div className="text-gray-400 text-shadow text-md mb-8">From fleeting ideas to structured notes — stay productive and in control.</div>
      <button
        onClick={() => navigate("/notes")}
        className="bg-gradient-to-br from-indigo-700 to-pink-500 text-white  text-shadow px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
