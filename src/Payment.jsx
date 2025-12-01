import React,{useContext} from "react";
import { UserContext } from "./UserContext";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const { state: room } = useLocation(); 
  const navigate = useNavigate();
  const handlePayment = (e) => {
  e.preventDefault(); // prevent page reload
  // Here you can integrate real payment API in the future
  navigate('/dashboard'); // after "payment"
  alert("Successfully Booked!")
};
  return (
    <div className="min-h-screen bg-linear-to-br from-[#F6C453]/20 via-white to-[#F6C453]/10 flex justify-center items-center px-5">
      
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md border border-[#F6C453]/40">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-[#F6C453] mb-6">
          Payment
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Complete your transaction to confirm your booking.
        </p>

        {/* Price Display */}
        <div className="bg-[#F6C453]/20 border border-[#F6C453] text-center py-4 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-gray-800"></h2>
          <span className="text-sm text-gray-600">{room.price}</span>
        </div>

        {/* Card Inputs */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Card Holder Name"
            className="w-full p-3 border rounded-lg focus:outline-[#F6C453]"
          />

          <input
            type="text"
            placeholder="Card Number"
            maxLength="16"
            className="w-full p-3 border rounded-lg focus:outline-[#F6C453]"
          />

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-1/2 p-3 border rounded-lg focus:outline-[#F6C453]"
            />
            <input
              type="password"
              placeholder="CVV"
              maxLength="3"
              className="w-1/2 p-3 border rounded-lg focus:outline-[#F6C453]"
            />
          </div>

          <button
            type="submit"
            onClick={handlePayment}
            className="w-full bg-[#F6C453] hover:bg-black hover:text-white text-black font-semibold py-3 rounded-lg transition-all duration-300 text-lg"
          >
            Pay Now
          </button>
        </form>

      </div>
    </div>
  );
};

export default Payment;
