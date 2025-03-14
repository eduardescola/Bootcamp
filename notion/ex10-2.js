//Slice
const ticket02 = ['🍹', '🥖', '☕', '🥯', '🍵', '🥐', '🥪'];
const person1Consumption = ['☕', '🥐'];
const person2Consumption = ['🍵', '🥖', '🥯'];
const person3Consumption = ['🍹', '🥪'];
const createIndividualTicket = (ticket, consumption) => {
  const individualTicket = [];
  for (const item of consumption) {
    const index = ticket.indexOf(item);
    if (index !== -1) {
      individualTicket.push(item);
    }
  }
  return individualTicket;
};
const person1Ticket = createIndividualTicket(ticket02.slice(), person1Consumption);
const person2Ticket = createIndividualTicket(ticket02.slice(), person2Consumption);
const person3Ticket = createIndividualTicket(ticket02.slice(), person3Consumption);
console.log('Person 1 Ticket:', person1Ticket);
console.log('Person 2 Ticket:', person2Ticket);
console.log('Person 3 Ticket:', person3Ticket);
console.log('Original ticket:', ticket02);

//Splice
const ticket03 = ['🍹', '🥖', '☕', '🥯', '🍵', '🥐', '🥪'];

// Consumption of each person
const person1Consumption2 = ['☕', '🥐'];
const person2Consumption2 = ['🍵', '🥖', '🥯'];
const person3Consumption2 = ['🍹', '🥪'];

// Function to create individual tickets using splice
const createIndividualTicket2 = (ticket, consumption) => {
  const individualTicket = [];
  for (const item of consumption) {
    const index = ticket.indexOf(item);
    if (index !== -1) {
      individualTicket.push(ticket.splice(index, 1)[0]);
    }
  }
  return individualTicket;
};

// Create individual tickets
const person1Ticket2 = createIndividualTicket2(ticket03, person1Consumption2);
const person2Ticket2 = createIndividualTicket2(ticket03, person2Consumption2);
const person3Ticket2 = createIndividualTicket2(ticket03, person3Consumption2);

console.log('Person 1 Ticket:', person1Ticket2);
console.log('Person 2 Ticket:', person2Ticket2);
console.log('Person 3 Ticket:', person3Ticket2);
console.log('Remaining items in the original ticket:', ticket03);