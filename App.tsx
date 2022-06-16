import * as React from 'react';
import { useState } from 'react';
import Recipes from './components/Recipes';
import NewRecipe from './components/NewRecipe';
import Recipe from './models/recipe';
import './style.css';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const addRecipeHandler = (recipeName: string) => {
    const newRecipe = new Recipe(recipeName);
    setRecipes((prevRecipes) => {
      return prevRecipes.concat(newRecipe);
    });
  };

  const removeRecipeHandler = (recipeId: string) => {
    setRecipes((prevRecipes) => {
      return prevRecipes.filter((recipe) => recipe.id !== recipeId);
    });
  };

  return (
    <div>
      <NewRecipe onAddRecipe={addRecipeHandler} />
      <Recipes items={recipes} onRemoveRecipe={removeRecipeHandler} />
    </div>
  );
}

export default App;
