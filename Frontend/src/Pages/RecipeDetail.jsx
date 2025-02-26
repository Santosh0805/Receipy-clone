import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./RecipeDetails.css";


function RecipeDetail() {
  const { id } = useParams();
  console.log("Prams", id)
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const func = async () =>{
      await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b62222adb6df497bbfdfb33ee7310462`)
      .then(response => {setRecipe(response.data); console.log(response)})
      .catch(error => console.error('Error fetching data:', error));      
    }
    func();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.title.id}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <h3> ₹{recipe.pricePerServing}</h3>
      {/* <p>{recipe.instructions}</p> */}
    </div>
  );
}

export default RecipeDetail;
