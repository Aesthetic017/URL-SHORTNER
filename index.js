const express = require("express");
const urlRoute = require("./routes");
const staticRoute = require("./staticRouter");
const { connectMongoDB } = require("./connection");
const path = require("path");
const URL = require("./schema");
const userRoute = require("./userRoute");


const cookieParser = require('cookie-parser');   // use proper name
const { loggedInUser, checkAuth } = require('./middlewareAuth');

const app = express();       
const PORT = 8001;

// Middlewares
app.use(cookieParser());     
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/url", loggedInUser, urlRoute);
app.use("/user",  userRoute);
app.use("/",checkAuth, staticRoute);



// EJS
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// MongoDB connection
connectMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));


// Redirect short URL
app.get("/url/:shortID", async (req, res) => {
  const shortID = req.params.shortID;
  const entry = await URL.findOneAndUpdate(
    { shortID },
    { $push: { visitHistory: { timestamp: new Date() } } },
    { new: true }
  );

  if (!entry) return res.status(404).json({ error: "Short URL not found" });
  return res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
