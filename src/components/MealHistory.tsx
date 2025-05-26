import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Chip,
} from '@mui/material';
import { format, subDays, isToday, isYesterday } from 'date-fns';
import { useMeal } from '../context/MealContext';
import type { Meal, MealType } from '../types/meal';

const MealHistory: React.FC = () => {
  const { meals, mealHistory } = useMeal();

  // Get the last 7 days
  const lastSevenDays = Array.from({ length: 7 }, (_, i) => subDays(new Date(), i));

  // Create a map of meal history by date
  const historyByDate = mealHistory.reduce((acc, history) => {
    const date = new Date(history.date).toDateString();
    if (!acc[date]) {
      acc[date] = {
        breakfast: undefined,
        lunch: undefined,
        dinner: undefined
      };
    }
    const meal = meals.find(m => m.id === history.mealId);
    if (meal) {
      acc[date][meal.type] = meal;
    }
    return acc;
  }, {} as Record<string, Record<MealType, typeof meals[0] | undefined>>);

  const getDayLabel = (date: Date): string => {
    if (isToday(date)) return 'Today';
    if (isYesterday(date)) return 'Yesterday';
    return format(date, 'EEEE');
  };

  const mealTypes: MealType[] = ['breakfast', 'lunch', 'dinner'];

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Last 7 Days
        </Typography>
        {lastSevenDays.map((date, index) => {
          const dateStr = date.toDateString();
          const dayMeals = historyByDate[dateStr] || {};

          return (
            <Box key={dateStr} sx={{ mb: index < 6 ? 3 : 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography variant="h6" color="primary">
                  {getDayLabel(date)}
                </Typography>
                <Chip
                  label={format(date, 'MMM d')}
                  size="small"
                  sx={{ ml: 1 }}
                />
              </Box>
              <Box sx={{ pl: 2 }}>
                {mealTypes.map((type) => {
                  const meal = dayMeals[type as keyof typeof dayMeals] as Meal;
                  return (
                    <Box key={type} sx={{ mb: 1 }}>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <Box
                          component="span"
                          sx={{
                            width: 100,
                            color: 'text.primary',
                            fontWeight: 500,
                          }}
                        >
                          {type.charAt(0).toUpperCase() + type.slice(1)}:
                        </Box>
                        {meal ? (
                          <Box component="span">{meal?.name}</Box>
                        ) : (
                          <Box
                            component="span"
                            sx={{ fontStyle: 'italic', color: 'text.disabled' }}
                          >
                            No meal recorded
                          </Box>
                        )}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
              {index < 6 && <Divider sx={{ mt: 2 }} />}
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default MealHistory;