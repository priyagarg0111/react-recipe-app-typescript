import * as React from 'react';
import { useRef } from 'react';
import classes from './NewRecipe.module.css';

const NewRecipe: React.FC<{ onAddRecipe: (text: string) => void }> = (
  props
) => {
  const recipeInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = recipeInputRef.current?.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddRecipe(enteredText);
    recipeInputRef.current.value = '';
  };

  return (
    <form onSubmit={submitHandler} className={classes.recipeForm}>
      <input
        type="text"
        ref={recipeInputRef}
        placeholder="Enter recipe name..."
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default NewRecipe;
