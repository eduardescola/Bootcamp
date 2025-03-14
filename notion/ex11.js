const drinksConsumed = [
    { nombre: 'Alice', bebida: '🍹', hora: '18:30:00' },
    { nombre: 'Bob', bebida: '🍷', hora: '19:15:00' },
    { nombre: 'Charlie', bebida: '🍹', hora: '20:00:00' },
    { nombre: 'Alice', bebida: '🍸', hora: '21:45:00' },
    { nombre: 'Bob', bebida: '🥂', hora: '22:30:00' },
    { nombre: 'Charlie', bebida: '🍵', hora: '23:15:00' },
    { nombre: 'Alice', bebida: '🍹', hora: '03:30:00' },
    { nombre: 'Bob', bebida: '🍺', hora: '04:15:00' },
    { nombre: 'Charlie', bebida: '🍸', hora: '05:00:00' },
  ];

function findFirstOccurrenceIndexAndPerson(array, targetDrink) {
	const firstOccurrenceIndex = array
		.map((item) => item.bebida)
		.indexOf(targetDrink);

	if (firstOccurrenceIndex !== -1) {
		const personName = array[firstOccurrenceIndex].nombre;
		console.log(
			`First occurrence of ${targetDrink} found by ${personName} at index: ${firstOccurrenceIndex}`
		);
	} else {
		console.log(`${targetDrink} not found in the array.`);
	}
}
findFirstOccurrenceIndexAndPerson(drinksConsumed, "🍹");
findFirstOccurrenceIndexAndPerson(drinksConsumed, "🥂");
findFirstOccurrenceIndexAndPerson(drinksConsumed, "☕");

function findLastOccurrenceIndexAndPerson(array, targetDrink) {
	const firstOccurrenceIndex = array
		.map((item) => item.bebida)
		.lastIndexOf(targetDrink);

	if (firstOccurrenceIndex !== -1) {
		const personName = array[firstOccurrenceIndex].nombre;
		console.log(
			`Last occurrence of ${targetDrink} found by ${personName} at index: ${firstOccurrenceIndex}`
		);
	} else {
		console.log(`${targetDrink} not found in the array.`);
	}
}
findLastOccurrenceIndexAndPerson(drinksConsumed, "🍸");