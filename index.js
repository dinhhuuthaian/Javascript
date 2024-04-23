// //bai 11
// var myDog ={
//     weight: 5,
//     name : 'Johan',
//     age: 1,
//     bark: function(){
//         console.log('gau gau di',this.name);
//     },
//     eat: function(bone){
//         this.weight = this.weight + bone.weight;
//         return this;
//     }

// };
// var bone = {weight : 0.5};
// console.log('before eating', myDog.weight);
// myDog.eat(bone);
// console.log('after eating',myDog.weight);


// bai 13
// var  employee =[
//    {
//        name: 'Thai An',
//         tuoi: 5
//    },
//     {
//         name: 'An Dinh',
//        tuoi: 21
//    }
//  ];
// for(var i = 0; i < 3; i++){
//      console.log(employee[i].name, employee[i].tuoi);
// }

//bai 15
// var a = [5, 6, 8];
// var b = [4, 1, 7];
// var c = a.concat(b);
// // noi 2 mang voi nhau
// console.log(c);
// var e = 9;
// var d = a.push(2);
// // them mot phan tu vao cuoi mang roi tra ve length cua mang 
// console.log(d);
// console.log(a);
// var h= a.pop();
// // lay phan tu cuoi cua mang roi tra ve gia tri phan tu do
// console.log(h);
// console.log(a);
// var k = a.shift();
// // lay phan tu dau tien cua mang ra roi tra ve gia tri phan tu do
// console.log(k);
// console.log(a);
// var g = a.unshift(9);
// // them 9 vao vi tri dau tien cua mang roi tra ve length cua mang
// console.log(g);
// console.log(a);

//bai 16
// var coffeeMachine ={
//     makeCoffee: function(onFinish){
//         console.log("Making coffee.....")
//         onFinish();
//     }
// }
// var beep = function(){
//     console.log("Bips bips");
// }
// coffeeMachine.makeCoffee(beep);
// // call back "onfinish"

//bai17
// var rectacles = [
//     {w: 100, h: 5},
//     {w: 200, h: 10},
//     {w: 23,  h: 27}
// ];
// var circleRectacles = rectacles.map(function(x){
//     return x.w*x.h;
// })
// console.log(circleRectacles);


// //bai 18
// var a = [5 , 6 , 7];
// var b = a.filter(function(x){
//     return x % 2 === 0;
// })
// console.log(b);

