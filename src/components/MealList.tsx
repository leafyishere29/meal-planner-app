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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { useMeal } from '../context/MealContext';
import type { MealType } from '../types/meal';
import { predefinedMeals, type PredefinedMeal } from '../data/predefinedMeals';

export const MealList: React.FC = () => {
  const { meals, addMeal, removeMeal } = useMeal();
  const [newMealName, setNewMealName] = useState('');
  const [newMealType, setNewMealType] = useState<MealType>('breakfast');
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  const handleAddPredefinedMeal = (meal: PredefinedMeal) => {
    addMeal({
      name: meal.name,
      type: meal.type,
    });
    setSearchDialogOpen(false);
    setSearchQuery('');
    setSelectedCategory(null);
  };

  const mealTypes: MealType[] = ['breakfast', 'lunch', 'dinner'];
  const mealsByType = mealTypes.reduce((acc, type) => {
    acc[type] = meals.filter(meal => meal.type === type);
    return acc;
  }, {} as Record<MealType, typeof meals>);

  const categories = Array.from(new Set(predefinedMeals.map(meal => meal.category))).filter(Boolean);

  const filteredPredefinedMeals = predefinedMeals.filter(meal => {
    const matchesSearch = meal.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || meal.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
          <Button
            variant="outlined"
            onClick={() => setSearchDialogOpen(true)}
            startIcon={<SearchIcon />}
          >
            Browse Meals
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

        <Dialog
          open={searchDialogOpen}
          onClose={() => setSearchDialogOpen(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Browse Predefined Meals</DialogTitle>
          <DialogContent>
            <Box sx={{ mb: 2, mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <TextField
                    fullWidth
                    label="Search meals"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type to search..."
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                      value={selectedCategory || ''}
                      label="Category"
                      onChange={(e) => setSelectedCategory(e.target.value || null)}
                    >
                      <MenuItem value="">All Categories</MenuItem>
                      {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <List>
              {filteredPredefinedMeals.map((meal, index) => (
                <React.Fragment key={`${meal.name}-${meal.type}`}>
                  {index > 0 && <Divider />}
                  <ListItem
                    component="div"
                    onClick={() => handleAddPredefinedMeal(meal)}
                    sx={{ cursor: 'pointer' }}
                  >
                    <ListItemText
                      primary={meal.name}
                      secondary={
                        <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                          <Chip
                            label={meal.type}
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                          {meal.category && (
                            <Chip
                              label={meal.category}
                              size="small"
                              color="secondary"
                              variant="outlined"
                            />
                          )}
                        </Box>
                      }
                    />
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setSearchDialogOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
}; 