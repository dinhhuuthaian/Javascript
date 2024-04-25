
var readlineSync = require('readline-sync');
var students = [];
var student = {};
var ttuc = true;
var fs = require("fs");

do {
  var key = parseInt(readlineSync.question("chon 1, 2 hoac 3: "));
  switch (key) {
    case 1:
      var read = fs.readFileSync("./data.json", "utf-8");
      read = JSON.parse(read);
      console.log(read);
      break;
    case 2:
      console.log("tao sinh vien moi: ");
      student.name = readlineSync.question("name: ");
      student.age = readlineSync.question("age: ");
      students.push(student);

      //chuyen object thanh string de luu vao file data.json
      students = JSON.stringify(students);
      var write = fs.writeFileSync("./data.json", students);

      //sau khi luu vao file xong phai chuyen lai thanh object de su dung duoc voi method push()
      //vi neu string thi khong push object moi duoc
      students = JSON.parse(students);
      break;
    case 3:
      //thoat
      ttuc = false;
      break;

    default:
      console.log("vui long chon 1, 2 hoac 3!");
      break;
  }
} while (ttuc);
