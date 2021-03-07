type MealConstructorData = {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegetarian: boolean;
  isVegan: boolean;
  isLactoseFree: boolean;
};

class Meal {
  public id: string;
  public categoryIds: string[];
  public title: string;
  public affordability: string;
  public complexity: string;
  public imageUrl: string;
  public duration: number;
  public ingredients: string[];
  public steps: string[];
  public isGlutenFree: boolean;
  public isVegetarian: boolean;
  public isVegan: boolean;
  public isLactoseFree: boolean;
  constructor({
    affordability,
    categoryIds,
    complexity,
    duration,
    id,
    imageUrl,
    ingredients,
    isGlutenFree,
    isLactoseFree,
    isVegetarian,
    isVegan,
    steps,
    title,
  }: MealConstructorData) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegetarian = isVegetarian;
    this.isVegan = isVegan;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
