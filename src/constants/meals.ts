import type { MealType } from '../types/meal';

export const MEAL_TYPES: MealType[] = ['breakfast', 'lunch', 'dinner'];

export const MEAL_TYPE_LABELS: Record<MealType, string> = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner',
}; 