// function countFrom(a,b){
//  return new Promise(function(resolve,reject){
//   var setIntervalID = setInterval(function(){
//   console.log(a);
//   ++a;
//   if(a>b){
//    clearInterval(setIntervalID);
//    resolve(); 
//   }

//  },1000) 
   
// })}

// countFrom(1,10).then(function(){
//  console.log('Done');
// })

var i = 0;
var setIntervalID = setInterval(function () { 
    i++;
    console.log(i);
    if (i > 4) {
    clearInterval(setIntervalID);
}
}, 1000);