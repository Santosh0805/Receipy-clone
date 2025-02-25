const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
const express = require('express');
const cors = require('cors')
const userRoutes = require('./routes/user.routes');
const app = express();

app.use(cors())
app.use(express.json());
app.use("/user" , userRoutes);


app.listen(5000, () => {
  console.log('server started');
  connectDB();
});

app.get("/", (req, res) => {
  res.send("Welcome to My Backend World");
});


