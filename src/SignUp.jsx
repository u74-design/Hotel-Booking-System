import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./UserContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    //Stops the page from refreshing automatically when form is submitted.
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3001/signup",
        { name, email, password },
        // If withCredentials is not true, the request still goes,
        // but cookies will not be sent → session not recognized → user becomes logged out
        { withCredentials: true }
      );

      const userRes = await axios.get("http://localhost:3001/current-user", {
        withCredentials: true,
      });

      setUser(userRes.data.user);
      navigate("/dashboard");
      // alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#333] px-4">
      <div className="bg-white/10 backdrop-blur-xl shadow-2xl p-10 rounded-2xl w-[420px]">
        <h1 className="text-4xl font-bold text-white text-center mb-2 tracking-wide">
          Create Account
        </h1>
        <p className="text-gray-300 text-sm text-center mb-8">
          Join{" "}
          <span className="text-[#F6C453] font-semibold">CARE & HOTEL</span> to
          book comfort & luxury.
        </p>

        <form className="space-y-5" onSubmit={handleSignup}>
          <div>
            <label className="text-gray-200 text-sm">Full Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#F6C453]"
            />
          </div>

          <div>
            <label className="text-gray-200 text-sm">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              className="w-full mt-1 p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#F6C453]"
            />
          </div>

          <div>
            <label className="text-gray-200 text-sm">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Choose a password"
              className="w-full mt-1 p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#F6C453]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F6C453] text-black font-bold text-lg py-3 rounded-lg mt-4 hover:bg-yellow-500 hover:scale-105 duration-300 shadow-md"
          >
            Sign Up
          </button>
          <br />
          <button
            type="button"
            onClick={async () => {
              await axios.post("http://localhost:3001/guest-login",{}, {
                withCredentials: true,
              }); 
              setUser({ name:"Guest", guest:true });
              navigate("/dashboard");
            }}
            className="w-full bg-gray-500 text-white py-3 rounded-lg mt-4 hover:bg-gray-600 duration-300"
          >
            Continue as Guest
          </button>
        </form>

        <p className="text-gray-300 text-center mt-6 text-sm">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="text-[#F6C453] cursor-pointer ml-1 hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
