var fs = require('fs');
var co = require('co');

function readFilePromise(path){
	return new Promise(function(resolve, reject){;
	fs.readFile(path, {encoding: 'utf8'}, function(err, data){
		if(err){
			reject(err);
		}else{
			resolve(data);
		}
	});
  });
}

// co(function*(){
// 	var song2 = yield readFilePromise('./song2.txt');
// 	var song1 = yield readFilePromise('./song1.txt');
// 	var song3 = yield readFilePromise('./song3.txt');
// 	return[song1, song2, song3];
// }).then(function(value){
// 	console.log(value);
// }).catch(function(err){
// 	console.log(err);
// })

var readFile = co.wrap(function*(files){
	var values = yield files.map(function(file){
		return readFilePromise(file);
	});
	return values;
});

readFile(['song1.txt', 'song2.txt', 'song3.txt'])
.then(function(values){
	console.log(values);
});