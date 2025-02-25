import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div>
      <img src={recipe.image} alt={recipe.title} />
      <h4>{recipe.title}</h4>
      <Link to={`/recipe/${recipe.id}`}>View Details</Link>
    </div>
  );
}

export default RecipeCard;
