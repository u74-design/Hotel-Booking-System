import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingSlot = () => {
  const navigate = useNavigate();
  const { state: room } = useLocation();   // received room data
    const [CIdate , setCIDate] = useState(null)
    const [COdate , setCODate] = useState(null)
    const [GuestNum,setGuestNum] = useState(null)
    const [RoomNum,setRoomNum] = useState(null)

    const handleBooking = async (e) => {
        try{
            const res = await axios.post("http://localhost:3001/booking-create",
            {CIdate,COdate,GuestNum,RoomNum ,RoomName : room.name},
            {withCredentials:true}
            )
        }catch(error){
            console.error(err);
            alert("Booking failed. Please try again.");
        }
        navigate('/payment',{state:room})
    }
    
  if (!room) return <h1 className="text-center p-10 text-2xl">No Room Selected</h1>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-12">
      <div className="w-[75%] bg-white shadow-2xl rounded-3xl p-10">

        {/* Room Header */}
        <div className="flex gap-10">
          <img src={room.img} alt={room.name}
            className="w-[45%] h-[300px] object-cover rounded-2xl shadow-md" />

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold">{room.name}</h1>
              <p className="text-gray-500 mt-1 text-lg">{room.size}</p>
              <p className="mt-2 flex gap-3 text-gray-700">
                {room.wifi && <span>📶 Wifi</span>}
                {room.ac && <span>❄ AC</span>}
                <span>🛏 Premium Bed</span>
              </p>
            </div>

            <h2 className="text-3xl font-bold text-[#F6C453]">
              {room.price} / night
            </h2>
          </div>
        </div>

        {/* Booking Form */}
        <div className="mt-10">
          <h1 className="text-2xl font-bold mb-4">Select Booking Details</h1>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label  className="font-semibold">Check-in Date</label>
              <input onChange={(e)=>setCIDate(e.target.value)} type="date" className="w-full mt-1 border p-3 rounded-xl" />
            </div>

            <div>
              <label   className="font-semibold">Check-out Date</label>
              <input onChange={(e)=>setCODate(e.target.value)} type="date" className="w-full mt-1 border p-3 rounded-xl" />
            </div>

            <div>
              <label className="font-semibold">Guests</label>
              <input   onChange={(e)=>setGuestNum(e.target.value)}  type="number" min="1" max="10" className="w-full mt-1 border p-3 rounded-xl" />
            </div>

            <div>
              <label  className="font-semibold">Rooms</label>
              <input onChange={(e)=>setRoomNum(e.target.value)}  type="number" min="1" max="5" className="w-full mt-1 border p-3 rounded-xl" />
            </div>
          </div>

          <button onClick={handleBooking} className="mt-8 w-full bg-[#F6C453] hover:bg-yellow-500 py-3 rounded-xl text-xl font-bold">
            Proceed to Payment 💳
          </button>

          <button onClick={() => navigate(-1)} 
            className="mt-4 w-full bg-gray-200 hover:bg-gray-300 py-3 rounded-xl text-lg font-semibold">
            ⬅ Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSlot;
