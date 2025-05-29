import {
  DietCategoryKey,
  MealAttributeKey,
  MealCategoryKey,
  MealCuisineKey,
  type PredefinedMeal,
} from "../types/meal";

export const predefinedMeals: PredefinedMeal[] = [
  // Breakfast
  {
    name: "Poha",
    type: "breakfast",
    attributes: [
      { attributeKey: MealAttributeKey.CUISINE, value: MealCuisineKey.INDIAN },
      {
        attributeKey: MealAttributeKey.CATEGORY,
        value: MealCategoryKey.HEALTHY,
      },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.VEGAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "flattened rice, mustard seeds, turmeric, onions, peas",
      },
    ],
  },
  {
    name: "Idli with Sambar",
    type: "breakfast",
    attributes: [
      { attributeKey: MealAttributeKey.CUISINE, value: MealCuisineKey.INDIAN },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.VEGETARIAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "rice, urad dal, sambar (lentils, vegetables)",
      },
    ],
  },
  {
    name: "Paratha with Curd",
    type: "breakfast",
    attributes: [
      {
        attributeKey: MealAttributeKey.CATEGORY,
        value: MealCategoryKey.CLASSIC,
      },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.VEGETARIAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "whole wheat flour, curd, ghee, potato or paneer filling",
      },
    ],
  },
  {
    name: "Upma",
    type: "breakfast",
    attributes: [
      { attributeKey: MealAttributeKey.CUISINE, value: MealCuisineKey.INDIAN },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.VEGETARIAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "semolina, mustard seeds, curry leaves, vegetables",
      },
    ],
  },
  {
    name: "Masala Dosa",
    type: "breakfast",
    attributes: [
      { attributeKey: MealAttributeKey.CUISINE, value: MealCuisineKey.INDIAN },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.VEGETARIAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "rice, urad dal, potato filling",
      },
    ],
  },

  // Lunch
  {
    name: "Rajma Chawal",
    type: "lunch",
    attributes: [
      { attributeKey: MealAttributeKey.CUISINE, value: MealCuisineKey.INDIAN },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.VEGAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "kidney beans, rice, tomatoes, onions, spices",
      },
    ],
  },
  {
    name: "Chole Bhature",
    type: "lunch",
    attributes: [
      {
        attributeKey: MealAttributeKey.CATEGORY,
        value: MealCategoryKey.CLASSIC,
      },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.VEGETARIAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "chickpeas, flour, spices",
      },
    ],
  },
  {
    name: "Vegetable Pulao with Raita",
    type: "lunch",
    attributes: [
      {
        attributeKey: MealAttributeKey.CATEGORY,
        value: MealCategoryKey.HEALTHY,
      },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.VEGETARIAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "rice, mixed vegetables, curd, spices",
      },
    ],
  },
  {
    name: "Sambar Rice",
    type: "lunch",
    attributes: [
      { attributeKey: MealAttributeKey.CUISINE, value: MealCuisineKey.INDIAN },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.VEGAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "lentils, tamarind, vegetables, rice",
      },
    ],
  },
  {
    name: "Fish Curry with Rice",
    type: "lunch",
    attributes: [
      { attributeKey: MealAttributeKey.CUISINE, value: MealCuisineKey.SEAFOOD },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.NON_VEGETARIAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "fish, coconut milk, tamarind, rice, spices",
      },
    ],
  },

  // Dinner
  {
    name: "Palak Paneer with Roti",
    type: "dinner",
    attributes: [
      { attributeKey: MealAttributeKey.CUISINE, value: MealCuisineKey.INDIAN },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.VEGETARIAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "spinach, paneer, spices, wheat flour",
      },
    ],
  },
  {
    name: "Chicken Curry with Rice",
    type: "dinner",
    attributes: [
      {
        attributeKey: MealAttributeKey.CATEGORY,
        value: MealCategoryKey.CLASSIC,
      },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.NON_VEGETARIAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "chicken, onions, tomatoes, spices, rice",
      },
    ],
  },
  {
    name: "Dal Tadka with Jeera Rice",
    type: "dinner",
    attributes: [
      {
        attributeKey: MealAttributeKey.CATEGORY,
        value: MealCategoryKey.HEALTHY,
      },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.VEGAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "lentils, cumin, garlic, rice",
      },
    ],
  },
  {
    name: "Baingan Bharta with Roti",
    type: "dinner",
    attributes: [
      { attributeKey: MealAttributeKey.CUISINE, value: MealCuisineKey.INDIAN },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.VEGAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "eggplant, onions, tomatoes, wheat flour",
      },
    ],
  },
  {
    name: "Paneer Butter Masala with Naan",
    type: "dinner",
    attributes: [
      {
        attributeKey: MealAttributeKey.CATEGORY,
        value: MealCategoryKey.CLASSIC,
      },
      {
        attributeKey: MealAttributeKey.DIET_CATEGORY,
        value: DietCategoryKey.VEGETARIAN,
      },
      {
        attributeKey: MealAttributeKey.INGREDIENTS,
        value: "paneer, cream, butter, tomatoes, naan",
      },
    ],
  },
];
