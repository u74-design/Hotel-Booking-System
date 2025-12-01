import express from 'express';
import { MongoClient , ObjectId} from 'mongodb';
import session from 'express-session';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true // important to allow cookies
}));

// Session middleware
app.use(session({
  secret: "mySuperSecretKey123!@#",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24*60*60*1000, // 1 day
    httpOnly: true,
    sameSite: "lax", // important for cross-port requests
    secure: false    // must be false for localhost
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB
const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
const db = client.db("HMS");
const usersCollection = db.collection("Users");

// SIGNUP
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Insert user into DB
    const result = await usersCollection.insertOne({ name, email, password });

    // Set session AFTER successful signup
    req.session.user = { name, email, id: result.insertedId,password };

    res.status(200).json({
      message: "User registered successfully",
      user: req.session.user
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});

// LOGIN (optional)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await usersCollection.findOne({ email, password });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  req.session.user = { name: user.name, email: user.email, id: user._id };
  res.json({ message: "Logged in successfully", user: req.session.user });
});

// GET CURRENT USER
app.get('/current-user', (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    return res.json({ user: { name: "Guest", guest:true } });
  }
});

// LOGOUT
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ message: "Logout failed" });
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out successfully" });
  });
});

app.get('/profile', async (req, res) => {
  const user = await usersCollection.findOne({ _id: new ObjectId(req.session.user.id) });
  if (req.session.user) {
    res.json({user});
  } else {
    res.status(401).json({ message: "Not logged in" });
  }
});
app.post('/booking-create',async (req,res)=>{
    const {CIdate,COdate,GuestNum,RoomNum,RoomName} = req.body;
    try{
      const result = await usersCollection.updateOne(
      { _id: new ObjectId (req.session.user.id) }, // find the logged in user
      {
        $push: {
          bookings: {    
            _id: new ObjectId(),           
            CIdate,
            COdate,
            GuestNum,
            RoomNum,
            RoomName,
            createdAt: new Date()
          }
        }
      }
      )
      if(result.modifiedCount === 0){
         return res.status(400).json({ message: "User not found or booking not saved." });
      }
      res.json({
      message:"Booking received successfully!"
      })
    }catch(error){
      console.log(err);
      res.status(500).json({ message: "Booking failed" });
    }
});
app.delete("/delete-booking/:id", async (req, res) => {
  const { id } = req.params;

  if (!req.session.user) {
    return res.status(401).json({ message: "Not logged in" });
  }

  try {
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(req.session.user.id) },   // find logged user
      { $pull: { bookings: { _id: new ObjectId(id) } } } // remove booking
    );

    if (result.modifiedCount === 0) {
      return res.status(400).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking Deleted Successfully " });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Deletion failed " });
  }
});
app.post('/guest-login',(req,res)=>{
  req.session.user = {guest : true, name : "Guest"}
  res.json({ user:req.session.user });
})

app.listen(3001, () => console.log("Server running on port 3001"));
