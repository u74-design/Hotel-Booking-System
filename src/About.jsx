import React, { use } from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-10">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center mb-6">
        About <span className="text-[#F6C453]">CARE & HOTEL</span>
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg">
        Experience luxury, comfort, and elegance where every stay feels like
        home. Our hotel is designed for travelers who seek both relaxation and
        sophistication.
      </p>

      {/* Image + Description Section */}
      <div className="flex items-center justify-between gap-12 w-[90%] mx-auto mt-16 flex-wrap">
        <img
          src="LandingPage.png"
          alt="Hotel Interior"
          className="rounded-2xl shadow-2xl w-[45%] min-w-[350px] object-cover"
        />

        <div className="w-[45%] min-w-[350px]">
          <h2 className="text-3xl font-bold mb-4 text-[#F6C453]">
            Premium Hospitality Since 1995
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            With decades of experience in serving guests from across the world,
            we have created a space that balances luxury with warmth. Spacious
            rooms, scenic views, relaxing ambience and world-class services make
            every guest feel valued & special.
          </p>

          <ul className="mt-6 space-y-2 text-lg text-gray-800">
            <li>✔ Premium Rooms & Royal Suites</li>
            <li>✔ Infinity Pool, Gym & Spa</li>
            <li>✔ 24/7 Room Service & Concierge</li>
            <li>✔ Candle-light Dining & Outdoor Lounge</li>
          </ul>
          <button
            onClick={() => navigate("/signup")}
            className="mt-6 px-7 py-3 bg-[#F6C453] text-black font-bold text-lg rounded-xl 
             shadow-md hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
          >
            Sign Up
          </button>
          <br/>
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-7 py-3 bg-[#F6C453] text-black font-bold text-lg rounded-xl 
             shadow-md hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
          >
            Home
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-4 gap-10 text-center max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg py-8">
          <h1 className="text-4xl font-bold text-[#F6C453]">28+</h1>
          <p className="text-gray-600">Years of Excellence</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg py-8">
          <h1 className="text-4xl font-bold text-[#F6C453]">5000+</h1>
          <p className="text-gray-600">Happy Guests</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg py-8">
          <h1 className="text-4xl font-bold text-[#F6C453]">40+</h1>
          <p className="text-gray-600">Luxury Rooms</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg py-8">
          <h1 className="text-4xl font-bold text-[#F6C453]">15+</h1>
          <p className="text-gray-600">World-class Facilities</p>
        </div>
      </div>
    </div>
  );
};

export default About;
