import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Chip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useMeal } from '../context/MealContext';
import type { MealType } from '../types/meal';

export const MealList: React.FC = () => {
  const { meals, addMeal, removeMeal } = useMeal();
  const [newMealName, setNewMealName] = useState('');
  const [newMealType, setNewMealType] = useState<MealType>('breakfast');

  const handleAddMeal = () => {
    if (newMealName.trim()) {
      addMeal({
        name: newMealName.trim(),
        type: newMealType,
      });
      setNewMealName('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAddMeal();
    }
  };

  const mealTypes: MealType[] = ['breakfast', 'lunch', 'dinner'];
  const mealsByType = mealTypes.reduce((acc, type) => {
    acc[type] = meals.filter(meal => meal.type === type);
    return acc;
  }, {} as Record<MealType, typeof meals>);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Add New Meal
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          <TextField
            label="Meal Name"
            value={newMealName}
            onChange={(e) => setNewMealName(e.target.value)}
            onKeyPress={handleKeyPress}
            fullWidth
            placeholder="Enter meal name..."
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={newMealType}
              label="Type"
              onChange={(e) => setNewMealType(e.target.value as MealType)}
            >
              {mealTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={handleAddMeal}
            disabled={!newMealName.trim()}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Box>

        <Typography variant="h5" component="div" gutterBottom>
          Your Meals
        </Typography>
        {mealTypes.map((type) => (
          <Box key={type} sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="h6" color="primary">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Typography>
              <Chip
                label={mealsByType[type].length}
                size="small"
                sx={{ ml: 1 }}
              />
            </Box>
            <List>
              {mealsByType[type].map((meal, index) => (
                <React.Fragment key={meal.id}>
                  {index > 0 && <Divider />}
                  <ListItem>
                    <ListItemText primary={meal.name} />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => removeMeal(meal.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </React.Fragment>
              ))}
              {mealsByType[type].length === 0 && (
                <Typography color="text.secondary" sx={{ pl: 2, fontStyle: 'italic' }}>
                  No meals added yet
                </Typography>
              )}
            </List>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}; 