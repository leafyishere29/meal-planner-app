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
  Autocomplete,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useMeal } from '../context/MealContext';
import type { MealType } from '../types/meal';
import { predefinedMeals } from '../data/predefinedMeals';

export const MealList: React.FC = () => {
  const { meals, addMeal, removeMeal } = useMeal();
  const [newMealName, setNewMealName] = useState('');
  const [newMealType, setNewMealType] = useState<MealType>('breakfast');

  const handleAddMeal = (mealName: string) => {
    if (mealName.trim()) {
      addMeal({
        name: mealName.trim(),
        type: newMealType,
      });
      setNewMealName('');
    }
  };

  const mealTypes: MealType[] = ['breakfast', 'lunch', 'dinner'];
  const mealsByType = mealTypes.reduce((acc, type) => {
    acc[type] = meals.filter(meal => meal.type === type);
    return acc;
  }, {} as Record<MealType, typeof meals>);

  const filteredPredefinedMeals = predefinedMeals.filter(meal => meal.type === newMealType);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Add New Meal
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          <Autocomplete
            freeSolo
            options={filteredPredefinedMeals}
            getOptionLabel={(option) => 
              typeof option === 'string' ? option : option.name
            }
            renderOption={(props, option) => (
              <li {...props}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography>{option.name}</Typography>
                  {option.category && (
                    <Typography variant="caption" color="text.secondary">
                      {option.category}
                    </Typography>
                  )}
                </Box>
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Meal Name"
                placeholder="Type or select a meal..."
                fullWidth
                sx={{ minWidth: 400 }}
                onChange={(e) => setNewMealName(e.target.value)}
              />
            )}
            value={newMealName}
            onChange={(_, newValue) => {
              if (typeof newValue === 'string') {
                setNewMealName(newValue);
              } else if (newValue) {
                setNewMealName(newValue.name);
              }
            }}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleAddMeal(newMealName);
              }
            }}
            disableClearable={false}
            selectOnFocus={false}
            clearOnBlur={false}
            handleHomeEndKeys={false}
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
            onClick={() => handleAddMeal(newMealName)}
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