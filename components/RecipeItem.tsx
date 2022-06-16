import * as React from 'react';
import classes from './RecipeItem.module.css';

const RecipeItem: React.FC<{
  recipeName: string;
  onRemoveRecipe: () => void;
}> = (props) => {
  return (
    <li className={classes.recipeItem}>
      <span>{props.recipeName}</span>
      <span className={classes.removeIcon} onClick={props.onRemoveRecipe}>
        X
      </span>
    </li>
  );
};

export default RecipeItem;
