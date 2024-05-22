const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
// const team = players.slice();
// const team1 = players;
const team = players; //reference to players
const team1 = players.slice(); //copy of players
const cap1 = Object.assign({}, person);//copy of person


window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
