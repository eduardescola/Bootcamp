import foods from "./foods.mjs";
const getAllCategories = [...new Set(foods.map(food => food.category))];
const checkItExistsCategory = (category) => getAllCategories.includes(category);
console.log(checkItExistsCategory("Mexican"));
console.log(checkItExistsCategory("Russian"));