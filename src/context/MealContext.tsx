import React, { createContext, useContext, useState, useEffect } from 'react';
import type { UserMeal, MealType, MealHistory } from '../types/meal';
import { subDays, isAfter } from 'date-fns';

interface MealContextType {
  meals: UserMeal[];
  mealHistory: MealHistory[];
  addMeal: (meal: Omit<UserMeal, 'id'>) => void;
  removeMeal: (id: string) => void;
  markAsCooked: (mealId: string) => void;
  getSuggestions: (type: MealType) => UserMeal[];
  getNextSuggestion: (type: MealType) => UserMeal | null;
}

const MealContext = createContext<MealContextType | undefined>(undefined);

export const MealProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [meals, setMeals] = useState<UserMeal[]>(() => {
    const savedMeals = localStorage.getItem('meals');
    return savedMeals ? JSON.parse(savedMeals) : [];
  });

  const [mealHistory, setMealHistory] = useState<MealHistory[]>(() => {
    const savedHistory = localStorage.getItem('mealHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem('meals', JSON.stringify(meals));
  }, [meals]);

  useEffect(() => {
    localStorage.setItem('mealHistory', JSON.stringify(mealHistory));
  }, [mealHistory]);

  const addMeal = (meal: Omit<UserMeal, 'id'>) => {
    const newMeal: UserMeal = {
      ...meal,
      id: Math.random().toString(36).substr(2, 9),
    };
    setMeals([...meals, newMeal]);
  };

  const removeMeal = (id: string) => {
    setMeals(meals.filter(meal => meal.id !== id));
  };

  const markAsCooked = (mealId: string) => {
    const newHistory: MealHistory = {
      mealId,
      date: new Date(),
    };
    setMealHistory([...mealHistory, newHistory]);
  };

  const getSuggestions = (type: MealType): UserMeal[] => {
    const sevenDaysAgo = subDays(new Date(), 7);
    return meals.filter(meal => {
      if (meal.type !== type) return false;
      const lastCooked = mealHistory
        .filter(h => h.mealId === meal.id)
        .sort((a, b) => b.date.getTime() - a.date.getTime())[0];
      return !lastCooked || !isAfter(lastCooked.date, sevenDaysAgo);
    });
  };

  const getNextSuggestion = (type: MealType): UserMeal | null => {
    const suggestions = getSuggestions(type);
    return suggestions[0] || null;
  };

  return (
    <MealContext.Provider
      value={{
        meals,
        mealHistory,
        addMeal,
        removeMeal,
        markAsCooked,
        getSuggestions,
        getNextSuggestion,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export const useMeal = () => {
  const context = useContext(MealContext);
  if (context === undefined) {
    throw new Error('useMeal must be used within a MealProvider');
  }
  return context;
}; 