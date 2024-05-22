const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
<<<<<<< HEAD
// const team = players.slice();
// const team1 = players;
const team = players; //reference to players
const team1 = players.slice(); //copy of players
const cap1 = Object.assign({}, person);//copy of person

=======
const team = players; //reference to players
const team1 = players.slice(); //copy of players
const cap1 = Object.assign({}, person);//copy of person
>>>>>>> 282a9387368e7f225bf36a7fb9b2c2433248fdcc

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
