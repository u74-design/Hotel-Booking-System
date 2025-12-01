import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./login"
import Dashboard from "./DashBoard";
import Profile from "./Profile";
import BookingSlot from "./BookingSlot";
import Payment from './Payment'
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/login'element = {<Login/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path="/signup" element={<Login />} />
        <Route path = "/bookingSlot" element={<BookingSlot/>} />
        <Route path= "/payment" element = {<Payment/>}/>
        <Route path="/about" element = {<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}
  
export default App;