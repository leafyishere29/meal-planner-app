import { useState, useCallback } from 'react';
import { useMeal } from '../context/MealContext';
import type { MealType } from '../types/meal';
import { predefinedMeals } from '../data/predefinedMeals';

export const useMealManagement = () => {
  const { meals, addMeal, removeMeal } = useMeal();
  const [newMealName, setNewMealName] = useState('');
  const [newMealType, setNewMealType] = useState<MealType>('breakfast');

  const handleAddMeal = useCallback((mealName: string) => {
    if (mealName.trim()) {
      addMeal({
        name: mealName.trim(),
        type: newMealType,
      });
      setNewMealName('');
    }
  }, [addMeal, newMealType]);

  const handleRemoveMeal = useCallback((mealId: string) => {
    removeMeal(mealId);
  }, [removeMeal]);

  const getFilteredPredefinedMeals = useCallback((type: MealType) => {
    return predefinedMeals.filter(meal => meal.type === type);
  }, []);

  const getMealsByType = useCallback((type: MealType) => {
    return meals.filter(meal => meal.type === type);
  }, [meals]);

  return {
    newMealName,
    setNewMealName,
    newMealType,
    setNewMealType,
    handleAddMeal,
    handleRemoveMeal,
    getFilteredPredefinedMeals,
    getMealsByType,
  };
}; 