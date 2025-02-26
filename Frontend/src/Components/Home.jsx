import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../Pages/RecipeCard";
import "./Home.css";

// const API_KEY = "092e26df7455448eb75c97c2cafea446","b62222adb6df497bbfdfb33ee7310462";
function Home() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/recipes`
        )
        console.log(response);
        
        if (response.data && response.data.results) {
          setRecipes(response.data.results);
        } else {
          setRecipes([]); 
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setRecipes([]);
      }
    };
    fetchRecipes();
  }, [query, limit]);

  return (
    <div>
      <section className="recipes-section">
        <h2 className="section-title">Featured Recipes</h2>
        <div className="recipes-grid">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
          <p className="loading-text">Loading recipes...</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
