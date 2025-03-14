//Reverse
const dinner = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋']; 
console.log(dinner.reverse()); 

//Bucle + aux
const dinner2 = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋'];
const aux = []; 
for (let i = dinner2.length - 1; i >= 0; i--) {
    aux.push(dinner2[i]);
}
console.log(aux);

//Bucle sense aux
const dinner3 = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋']; 
for (let i = 0; i < Math.floor(dinner3.length / 2); i++) {
    const aux = dinner3[i];
    dinner3[i] = dinner3[dinner3.length - 1 - i];
    dinner3[dinner3.length - 1 - i] = aux;
}
console.log(dinner3);

//Foreach sense aux
const dinner4 = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋'];
dinner4.forEach((element, index, array) => {
	const reversedIndex = array.length - 1 - index;
	if (index < reversedIndex) {
		[array[index], array[reversedIndex]] = [array[reversedIndex], array[index]];
	}
});
console.log(dinner4);

//Unshift
const dinner5 = ['🧋', '🧋', '🍕', '🍟', '🍟', '🌭', '🍔'];
dinner5.unshift('🍸');
console.log(dinner5);