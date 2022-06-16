import * as React from 'react';
import Recipe from '../models/recipe';
import RecipeItem from './RecipeItem';
import classes from './Recipes.module.css';

const Recipes: React.FC<{
  items: Recipe[];
  onRemoveRecipe: (id: string) => void;
}> = (props) => {
  if (props.items.length === 0) {
    return <h3 className={classes.noRecipes}>No recipe available!</h3>;
  }

  return (
    <ul className={classes.recipes}>
      {props.items.map((item) => (
        <RecipeItem
          key={item.id}
          recipeName={item.name}
          onRemoveRecipe={props.onRemoveRecipe.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Recipes;
