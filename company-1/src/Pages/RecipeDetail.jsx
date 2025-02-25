import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=2f32557e862049a99ca0f4d0336dfbfa`)
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
