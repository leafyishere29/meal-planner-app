export type MealType = 'breakfast' | 'lunch' | 'dinner';

export interface Meal {
  id: string;
  name: string;
  type: MealType;
  lastCooked?: Date;
}

export interface MealHistory {
  mealId: string;
  date: Date;
} 