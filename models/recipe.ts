class Recipe {
  id: string;
  name: string;

  constructor(recipeName: string) {
    this.name = recipeName;
    this.id = new Date().toISOString();
  }
}

export default Recipe;
