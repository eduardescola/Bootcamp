import foods from "./foods.mjs";
const getAllCategories = [...new Set(foods.map(food => food.category))];
console.log(getAllCategories);