import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './RecipeDetail.css';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=092e26df7455448eb75c97c2cafea446`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.title.id}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
