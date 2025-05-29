import React from 'react';
import {
  Card,
  CardContent,
  Typography,
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
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { useMealManagement } from '../../hooks/useMealManagement';
import { MEAL_TYPES, MEAL_TYPE_LABELS } from '../../constants/meals';
import type { MealType } from '../../types/meal';

export const MealList: React.FC = () => {
  const {
    newMealName,
    setNewMealName,
    newMealType,
    setNewMealType,
    handleAddMeal,
    handleRemoveMeal,
    getFilteredPredefinedMeals,
    getMealsByType,
  } = useMealManagement();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Add New Meal
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          <Autocomplete
            freeSolo
            options={getFilteredPredefinedMeals(newMealType)}
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
              <Input
                {...params}
                label="Meal Name"
                placeholder="Type or select a meal..."
                sx={{ minWidth: 400 }}
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
              {MEAL_TYPES.map((type) => (
                <MenuItem key={type} value={type}>
                  {MEAL_TYPE_LABELS[type]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="primary"
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
        {MEAL_TYPES.map((type) => (
          <Box key={type} sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="h6" color="primary">
                {MEAL_TYPE_LABELS[type]}
              </Typography>
              <Chip
                label={getMealsByType(type).length}
                size="small"
                sx={{ ml: 1 }}
              />
            </Box>
            <List>
              {getMealsByType(type).map((meal, index) => (
                <React.Fragment key={meal.id}>
                  {index > 0 && <Divider />}
                  <ListItem>
                    <ListItemText primary={meal.name} />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleRemoveMeal(meal.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </React.Fragment>
              ))}
              {getMealsByType(type).length === 0 && (
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