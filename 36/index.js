var readlineSync = require('readline-sync');

var students = [];

do {
    var que = readlineSync.question('1. Display list of students\n2. Create a new student\n3. Save and exit\n');
    var ques = parseInt(que);
    switch (ques) {
        case 1:
            console.log(students);
            break;
        case 2:
            var name = readlineSync.question('Name: ');
            var age = readlineSync.question('Age: ');
            var gender = readlineSync.question('Gender: ');

            var newStudent = new Student(name, parseInt(age), gender);

            students.push(newStudent);
            break;
        case 3:
            ques = 0;
        default:
            break;
    }
} while(ques > 0 && ques < 4);
