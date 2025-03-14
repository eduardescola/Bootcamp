//Concat
const ticket01 = ['🍺', '🍺', '🥜'];
const ticket02 = ['🍺', '🥪', '🥙'];
const combinedTicket = ticket01.concat(ticket02);
console.log(combinedTicket);

//Spread operator
const ticket03 = ["🍺", "🍺", "🥜"];
const ticket04 = ["🍺", "🥪", "🥙"];
const combinedTicket2 = [...ticket03, ...ticket04];
console.log(combinedTicket2);

//Push
const ticket05 = ['🍺', '🍺', '🥜'];
const ticket06 = ['🍺', '🥪', '🥙'];
const combinedTicket3 = [];
combinedTicket.push.apply(combinedTicket3, ticket05);
combinedTicket.push.apply(combinedTicket3, ticket06);
console.log(combinedTicket3);

//Bucles for
const ticket07 = ['🍺', '🍺', '🥜'];
const ticket08 = ['🍺', '🥪', '🥙'];
const combinedTicket4 = [];
for (let i = 0; i < ticket07.length; i++) {
	combinedTicket4.push(ticket07[i]);
}
for (let i = 0; i < ticket08.length; i++) {
	combinedTicket4.push(ticket08[i]);
}
console.log(combinedTicket4);

//Foreach
const ticket09 = ["🍺", "🍺", "🥜"];
const ticket10 = ["🍺", "🥪", "🥙"];
const combinedTicket5 = [];
ticket09.forEach((element) => combinedTicket5.push(element));
ticket10.forEach((element) => combinedTicket5.push(element));
console.log(combinedTicket5);