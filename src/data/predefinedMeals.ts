import type { MealType } from '../types/meal';

export interface PredefinedMeal {
  name: string;
  type: MealType;
  category?: string;
}

export const predefinedMeals: PredefinedMeal[] = [
  // Breakfast
  { name: 'Oatmeal with Fruits', type: 'breakfast', category: 'Healthy' },
  { name: 'Scrambled Eggs with Toast', type: 'breakfast', category: 'Classic' },
  { name: 'Pancakes with Maple Syrup', type: 'breakfast', category: 'Sweet' },
  { name: 'Avocado Toast', type: 'breakfast', category: 'Healthy' },
  { name: 'Breakfast Burrito', type: 'breakfast', category: 'Savory' },
  { name: 'Yogurt Parfait', type: 'breakfast', category: 'Healthy' },
  { name: 'French Toast', type: 'breakfast', category: 'Sweet' },
  { name: 'Breakfast Sandwich', type: 'breakfast', category: 'Classic' },

  // Lunch
  { name: 'Caesar Salad', type: 'lunch', category: 'Healthy' },
  { name: 'Chicken Sandwich', type: 'lunch', category: 'Classic' },
  { name: 'Vegetable Stir Fry', type: 'lunch', category: 'Healthy' },
  { name: 'Pasta Primavera', type: 'lunch', category: 'Italian' },
  { name: 'Quinoa Bowl', type: 'lunch', category: 'Healthy' },
  { name: 'Burrito Bowl', type: 'lunch', category: 'Mexican' },
  { name: 'Greek Salad', type: 'lunch', category: 'Mediterranean' },
  { name: 'Sushi Roll', type: 'lunch', category: 'Asian' },

  // Dinner
  { name: 'Grilled Salmon', type: 'dinner', category: 'Seafood' },
  { name: 'Beef Stir Fry', type: 'dinner', category: 'Asian' },
  { name: 'Vegetable Curry', type: 'dinner', category: 'Indian' },
  { name: 'Chicken Parmesan', type: 'dinner', category: 'Italian' },
  { name: 'Tacos', type: 'dinner', category: 'Mexican' },
  { name: 'Roast Chicken', type: 'dinner', category: 'Classic' },
  { name: 'Pasta Carbonara', type: 'dinner', category: 'Italian' },
  { name: 'Vegetable Lasagna', type: 'dinner', category: 'Italian' },
]; 