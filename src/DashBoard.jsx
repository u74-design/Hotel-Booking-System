import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const fetchUser = async () => {
      if (user?.guest) return; 
      try {
        const res = await axios.get("http://localhost:3001/current-user", {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch (err) {
        setUser({name : "Guest" , guest:true})
      }
    };
    fetchUser();
  }, [navigate, setUser]);  //Want to know more
  if (!user) return <div>Loading...</div>;
  const handleLogout = () => {
      setUser(null);
      navigate('/');
  }
  const rooms = [
    {
      name: "Classic Room",
      price: "₹3499",
      img: "Classcic.jpg",
      size: "1 King Bed • 2 Guests",
      wifi: true,
      ac: true,
    },
    {
      name: "Deluxe Room",
      price: "₹4999",
      img: "Deluxe.jpg",
      size: "1 King Bed • 3 Guests",
      wifi: true,
      ac: true,
    },
    {
      name: "Super Deluxe Suite",
      price: "₹5999",
      img: "Super Deluxe.jpg",
      size: "2 Beds • 4 Guests",
      wifi: true,
      ac: true,
    },
    {
      name: "Luxury Suite",
      price: "₹7999",
      img: "Luxury.webp",
      size: "1 King Bed • Balcony",
      wifi: true,
      ac: true,
    },
    {
      name: "Family Room",
      price: "₹6999",
      img: "Family Room.jpg",
      size: "2 Beds • 5 Guests",
      wifi: true,
      ac: true,
    },
    {
      name: "Presidential Suite",
      price: "₹14999",
      img: "presidential-suite.jpg",
      size: "2 King Beds • VIP Lounge",
      wifi: true,
      ac: true,
    },
    {
      name: "Penthouse Royal Villa",
      price: "₹19999",
      img: "Royal.jpg",
      size: "Luxury Villa • Private Pool",
      wifi: true,
      ac: true,
    },
    {
      name: "Single Budget Room",
      price: "₹2499",
      img: "LowRate.jpg",
      size: "1 Bed • 1 Guest",
      wifi: false,
      ac: true,
    },
    {
      name: "Garden View Premium",
      price: "₹6499",
      img: "Garden View.jpg",
      size: "1 Bed • Balcony Garden View",
      wifi: true,
      ac: true,
    },
    {
      name: "City View Suite",
      price: "₹7299",
      img: "City view.jpg",
      size: "1 King Bed • High Floor City View",
      wifi: true,
      ac: true,
    },
    {
      name: "Ocean Breeze Deluxe",
      price: "₹8599",
      img: "Ocean.jpg",
      size: "Sea View • Balcony • Premium Sofa",
      wifi: true,
      ac: true,
    },
    {
      name: "Old Empire Heritage Suite",
      price: "₹9999",
      img: "Old.jpg",
      size: "Vintage Royal Furniture • King Bed • Antique Interior",
      wifi: true,
      ac: true,
    },
  ];

  const facilities = [
    {
      name: "Fitness & Gym",
      img: "Gym.avif",
      desc: "Fully equipped modern gym, trainers & personal sessions.",
    },
    {
      name: "Swimming Pool",
      img: "SP.webp",
      desc: "Infinity pool with sunset view, drinks & music.",
    },
    {
      name: "Spa & Relaxation",
      img: "Spa.webp",
      desc: "Sauna room, body massage, aroma therapy & jacuzzi.",
    },
    {
      name: "Garden & Outdoor",
      img: "Garden.jpg",
      desc: "Lush gardens, walking paths, seating & relaxation zones.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* NAVBAR */}
      <nav className="w-full bg-white shadow-md py-5 px-10 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="text-3xl font-bold tracking-widest">
          CARE <span className="text-[#F6C453]">&</span> HOTEL
        </h1>

        {/* RIGHT SIDE OPTIONS IN ONE LINE */}
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold">
            Welcome Back, <span className="text-[#F6C453]">{user?.name || "Guest"}</span>
          </h1>

          <button
            className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            onClick={() => navigate("/profile")}
          >
            Profile
          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600"
          >
            Home
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* ROOMS SECTION */}
      <div className="w-[90%] mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-6">Available Rooms 🏩</h1>
        <p className="text-gray-600 mb-8">Choose your luxury stay.</p>
        <div className="grid grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 duration-300 cursor-pointer"
            >
              <img
                src={room.img}
                className="h-52 w-full object-cover"
                alt={room.name}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold">{room.name}</h2>
                <p className="text-gray-500 mt-1">{room.size}</p>
                <div className="flex items-center gap-3 mt-2 text-gray-600">
                  {room.wifi && <span>📶 Wifi</span>}
                  {room.ac && <span>❄ AC</span>}
                  <span>🛏 Premium Bed</span>
                </div>
                <p className="text-xl font-bold text-[#F6C453] mt-3">
                  {room.price} / night
                </p>
                <button
                  onClick={() => navigate("/bookingSlot", { state: room })}
                  className="mt-4 w-full bg-[#F6C453] text-black py-2 rounded-xl font-semibold hover:bg-yellow-500"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FACILITIES SECTION */}
      <div className="w-[90%] mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-6 text-center">Explore More ✦</h1>
        <p className="text-gray-600 text-center mb-10">
          Premium luxury & comfort for every guest.
        </p>

        <div className="grid grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 duration-300 cursor-pointer"
            >
              <img
                src={facility.img}
                className="h-52 w-full object-cover"
                alt={facility.name}
              />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold">{facility.name}</h2>
                <p className="text-gray-600 mt-2 text-sm">{facility.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
