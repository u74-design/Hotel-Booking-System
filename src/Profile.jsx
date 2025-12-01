import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const [bookings, setBookings] = useState([]);
  const [totalBookings, setTotalBookings] = useState(0);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3001/profile", {
          withCredentials: true
        });

        setBookings(res.data.user.bookings || []);
        setTotalBookings(res.data.user.bookings?.length || 0);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/delete-booking/${id}`,
         { withCredentials: true});

      // Remove immediately from UI
      setBookings(prev => prev.filter(b => b._id !== id));
      setTotalBookings(prev => prev - 1);

      alert("Booking removed successfully ✔");
    } catch (err) {
      console.log(err);
      alert("Failed to delete booking");
    }
  };
  // ----------------------------------------------------------


  if (!user) return <h1 className="text-center mt-10 text-3xl font-bold">Loading...</h1>;

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-[#F6C453]/15 to-white py-14 px-10">

      <h1 className="text-5xl font-bold text-center text-black tracking-wide mb-14">
        Profile Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-10 max-w-[1300px] mx-auto">

        {/* ------- PERSONAL INFO ------- */}
        <div className="col-span-1 bg-white rounded-2xl shadow-lg p-8 border border-[#F6C453]/40">
          <h2 className="text-2xl font-bold text-[#F6C453] mb-6">Personal Information</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li><b>Name:</b> {user.name}</li>
            <li><b>Email:</b> {user.email}</li>
          </ul>
        </div>

        {/* ------- ACCOUNT SUMMARY ------- */}
        <div className="col-span-1 bg-white rounded-2xl shadow-lg p-8 border border-[#F6C453]/40">
          <h2 className="text-2xl font-bold text-[#F6C453] mb-6">Account Summary</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li><b>Total Bookings:</b> {totalBookings}</li>
          </ul>
        </div>
      </div>

      {/* -------- BOOKING HISTORY TABLE -------- */}
      <div className="max-w-[1300px] mx-auto mt-14 bg-white rounded-2xl shadow-lg p-10 border border-[#F6C453]/40">
        <h2 className="text-3xl font-bold text-[#F6C453] mb-6">Booking History</h2>

        {bookings.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#F6C453] text-white text-lg">
                <th className="py-3">Room</th>
                <th className="py-3">Check-In</th>
                <th className="py-3">Check-Out</th>
                <th className="py-3">Guests</th>
                <th className="py-3">Action</th>
              </tr>
            </thead>

            <tbody className="text-gray-700 text-center">
              {bookings.map((b, i) => (
                <tr key={i} className="border-b">
                  <td className="py-3">{b.RoomName}</td>
                  <td>{b.CIdate}</td>
                  <td>{b.COdate}</td>
                  <td>{b.GuestNum}</td>

                  {/* DELETE BUTTON */}
                  <td>
                    <button 
                      onClick={() => handleDelete(b._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-lg text-gray-600">No bookings yet.</p>
        )}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/dashboard")}
          className="px-8 py-3 bg-[#F6C453] font-semibold rounded-lg hover:bg-black hover:text-white"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Profile;
