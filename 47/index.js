var fs = require('fs');
var moment = require('moment');


// var now = new Date();
// var myBirthDay = new Date(2002, 8, 2);

// console.log(now.getTime());
// console.log(myBirthDay.getTime());


var now = moment('2024-04-26 06:00');
console.log(now.fromNow());
console.log(now.from('2024-04-26 08:00'));
console.log(now.format('2024-04-26 08:00'));
