var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function loadData(){
	var fileContent = fs.readFileSync('./data.json');
	students = JSON.parse(fileContent);
}

function menu(){
	console.log('1. Show all student');
	console.log('2. create a student');
	console.log('3. Save and Exit');

	var option = readlineSync.question('>');
	switch(option){
		case '1':{
			showallStudent();
			break;
		}
		case '2':{
			showCreateStudent();
			break;
		}
		case '3':{
			saveAndExit();
			break;
		}
		default:
			console.log('wrong option');
			menu();
			break;
	}

}
function showallStudent(){
	for(var student of students)
	console.log(student.name, student.age);
};
function showCreateStudent(){
	var name = readlineSync.question('Name: ');
	var age = readlineSync.question('Age: ');
	var student = {
		name: name,
		age: parseInt(age)
	};
	students.push(student);
}

function saveAndExit(){
	var content = JSON.stringify(students);
	fs.writeFileSync('./data.json', content,{encoding: 'utf8'});
}

function main(){
	loadData();
	menu();
}
main();