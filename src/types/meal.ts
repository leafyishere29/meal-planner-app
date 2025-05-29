export type MealType = "breakfast" | "lunch" | "dinner";

export interface UserMeal {
  id: string;
  name: string;
  type: MealType;
  lastCooked?: Date;
}

export interface MealHistory {
  mealId: string;
  date: Date;
}

export enum MealAttributeKey {
  CALORIES_KCAL_PER_PORTION = "calories_kcal_per_portion",
  CUISINE = "cuisine",
  CATEGORY = "category",
  INGREDIENTS = "ingredients",
  PREPARATION_TIME_MINUTES = "preparation_time_minutes",
  DIET_CATEGORY = "diet_category",
}

export enum DietCategoryKey {
  VEGETARIAN = "vegetarian",
  VEGAN = "vegan",
  NON_VEGETARIAN = "non_vegetarian",
}

export enum MealCategoryKey {
  HEALTHY = "healthy",
  CLASSIC = "classic",
  SWEET = "sweet",
  SAVORY = "savory",
}

export enum MealCuisineKey {
  MEDITERRANEAN = "mediterranean",
  ASIAN = "asian",
  MEXICAN = "mexican",
  ITALIAN = "italian",
  SEAFOOD = "seafood",
  INDIAN = "indian",
}

interface MealAttribute {
  attributeKey: MealAttributeKey;
  value: string;
}

export interface PredefinedMeal {
  name: string;
  type: MealType;
  attributes: MealAttribute[];
}
