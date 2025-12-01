import React from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import About from "./About";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <div className="relative h-screen w-full">
        <img className="w-full h-full" src="/LandingPage.png" alt="" />

        <div className="absolute top-0 left-0 w-full px-6 py-5 z-50">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold tracking-widest text-white">
              CARE <span className="text-[#F6C453]">&</span> HOTEL
            </h1>

            <div className="flex ml-auto space-x-12 mr-24">
              <h1 className="text-[20px] font-semibold text-white hover:text-[#F6C453] cursor-pointer">
                Home
              </h1>
              <button
                className="text-[20px] font-semibold text-white hover:text-[#F6C453] cursor-pointer"
                onClick={() => navigate("/about")}
              >
                About
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-50 right-50 p-6 rounded-lg w-[450px]">
          <p className="text-black text-2xl leading-relaxed tracking-wide drop-shadow-xl">
            Experience a stay where{" "}
            <span className="bg-yellow-500/40 px-1 rounded">
              comfort meets elegance
            </span>
            .
            <br />
            From serene rooms to warm hospitality,
            <br />
            <span className="bg-yellow-500/40 px-1 rounded">
              CARE & HOTEL
            </span>{" "}
            feels like home.
          </p>
          <br />

          <button
            onClick={() => navigate("/signup")}
            className="bg-[#F6C453] text-black font-bold text-lg px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
          >
            Sign Up
          </button>
          <br />
          <br />
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-transparent border-2 border-[#F6C453] text-[#F6C453] font-bold text-lg px-6 py-3 rounded-xl shadow-lg hover:bg-[#F6C453]/20 hover:shadow-yellow-400/40 hover:scale-105 transition-all duration-300 transform"
          >
            Explore More!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
