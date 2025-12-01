import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#333] px-4">

      {/* Card */}
      <div className="bg-white/10 backdrop-blur-xl shadow-2xl p-10 rounded-2xl w-[420px]">

        <h1 className="text-4xl font-bold text-white text-center mb-2 tracking-wide">
          Welcome Back
        </h1>
        <p className="text-gray-300 text-sm text-center mb-8">
          Login to continue your stay with <span className="text-[#F6C453] font-semibold">CARE & HOTEL</span>
        </p>

        {/* Login Form */}
        <form className="space-y-6">

          <div>
            <label className="text-gray-200 text-sm">Email</label>
            <input
              
              type="email"
              placeholder="Enter Email"
              className="w-full mt-1 p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#F6C453]"
            />
          </div>

          <div>
            <label className="text-gray-200 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full mt-1 p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#F6C453]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F6C453] text-black font-bold text-lg py-3 rounded-lg mt-4 hover:bg-yellow-500 hover:scale-105 duration-300 shadow-md"
            onClick={()=>navigate("/dashboard")}
          >
            Login
          </button>
        </form>

        <p className="text-gray-300 text-center mt-6 text-sm">
          Don’t have an account?
          <span onClick={()=>navigate("/signup")}className="text-[#F6C453] cursor-pointer ml-1 hover:underline">
            Sign Up
          </span>
        </p>
      </div>

    </div>
  );
};

export default Login;
