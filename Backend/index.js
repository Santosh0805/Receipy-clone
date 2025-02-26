const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);

app.listen(5000, () => {
  console.log("server started");
  connectDB();
});

app.get("/api/recipes", async (req, res) => {
  try {
    const API_KEY = "b134c3f6c0074957a135975cd91d8092";
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?${API_KEY}`,
      {
        params: {
          number: 10,
          offset: 0,
          query: query,
          addRecipeInformation:true
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to My Backend file");
});

