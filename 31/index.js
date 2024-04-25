var readlineSync = require('readline-sync');

// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

// var languages = [];

// var language = readlineSync.question("What is you languages?: ");
// languages.push(languages)
// console.log(languages);


var pet ={};

var name = readlineSync.question('your pet name ?: ');
var gender = readlineSync.question('pet gender ?: ');

pet.name = name;
pet.gender = gender;

console.log(pet);