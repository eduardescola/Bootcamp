//Sort
const numbers = [1, 100000, 21, 30, 4];
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

//Bucle for
const numbers2 = [1, 100000, 21, 30, 4];
function bubbleSort(arr) {
	const n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}
console.log(bubbleSort(numbers2));

//Spread operator
const numbers3 = [1, 100000, 21, 30, 4];
const sortedNumbers2 = [...numbers3].sort((a, b) => a - b);
console.log(sortedNumbers2);