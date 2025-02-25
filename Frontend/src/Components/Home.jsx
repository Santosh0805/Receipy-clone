import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../Pages/RecipeCard";
import "./Home.css";

// b62222adb6df497bbfdfb33ee7310462
function Home() {
  const [recipes, setRecipes] = useState([]);
  const API_KEY = "b62222adb6df497bbfdfb33ee7310462";
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&addRecipeInformation=true&number=${limit}&offset=0`
        );

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
