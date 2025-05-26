import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useMeal } from '../context/MealContext';
import type { MealType } from '../types/meal';

interface MealSuggestionProps {
  type: MealType;
}

export const MealSuggestion: React.FC<MealSuggestionProps> = ({ type }) => {
  const { getSuggestions, markAsCooked } = useMeal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const suggestions = getSuggestions(type);

  if (suggestions.length === 0) {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <RestaurantIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h5" component="div">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Typography>
          </Box>
          <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
            No suggestions available. Add some meals to your collection first.
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const currentMeal = suggestions[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % suggestions.length);
  };

  const handleCook = () => {
    if (currentMeal) {
      markAsCooked(currentMeal.id);
      setCurrentIndex(0);
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <RestaurantIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h5" component="div">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Typography>
          <Chip
            label={`${currentIndex + 1}/${suggestions.length}`}
            size="small"
            sx={{ ml: 2 }}
          />
        </Box>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {currentMeal?.name}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCook}
            startIcon={<RestaurantIcon />}
            sx={{ flexGrow: 1 }}
          >
            Cook This
          </Button>
          <Tooltip title="Next suggestion">
            <IconButton
              color="primary"
              onClick={handleNext}
              sx={{ border: 1, borderColor: 'primary.main' }}
            >
              <NavigateNextIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
}; 