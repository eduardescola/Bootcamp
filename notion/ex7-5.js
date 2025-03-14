import foods from './foods.mjs';
const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];
const calculateTotalTicket = (ticket, foods) => ticket
		.map((item) => foods.find((food) => food.icon === item)) 
		.filter(Boolean) 
		.reduce((total, food) => total + food.price, 0); 

const totalTicket = calculateTotalTicket(ticket, foods);
console.log(
	`Total of the ticket: ${JSON.stringify(ticket)} is $${totalTicket.toFixed(2)}`
);