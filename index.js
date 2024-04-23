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

//bai17 map
// var rectacles = [
//     {w: 100, h: 5},
//     {w: 200, h: 10},
//     {w: 23,  h: 27}
// ];
// var circleRectacles = rectacles.map(function(x){
//     return x.w*x.h;
// })
// console.log(circleRectacles);


// //bai 18 filter
// var a = [5 , 6 , 7];
// var b = a.filter(function(x){
//     return x % 2 === 0;
// })
// console.log(b);


//bai 19 find
// var a = [ 1, 4, 7, 8];
// var b = a.find(function(x){
//     return x % 2 === 0;
// })
// console.log(b);
// // chay qua tung phan tu mot den khi co phan tu thoa dk no se tra ve phan tu do va khong tim kiem nua 


//bai 20 reduce
// var orders = [
//     { name: "A", quantity: 2, price: 100 },
//     { name: "B", quantity: 1, price: 200 },
//     { name: "C", quantity: 5, price: 150 }
//   ];
  
  
//   var orderNames = orders.map(function(x) {
//     return x.quantity * x.price;
//   });
//   var sumOrder = orderNames.reduce(function(x, y) {
//     return x + y;
//   });
//   console.log(sumOrder);

//bai 21
// var product = [
//     { name : 'A', unitPrice : 100, quantity: 20, category: 'Electric good'},
//     { name : 'B', unitPrice : 110, quantity: 12, category: 'Electric bad'},
//     { name : 'C', unitPrice : 200, quantity: 40, category: 'Electric good'},
//     { name : 'D', unitPrice : 10, quantity: 60, category: 'Electric bad'},
//     { name : 'E', unitPrice : 600, quantity: 10, category: 'Electric good'}
// ];
// var orderPrice = product.map(function(x){
//     return x.unitPrice * x.quantity
// })
// var sumPrice = orderPrice.reduce(function(x, y){
//     return x + y;
// })
// console.log(sumPrice);


//bai 22
// var items = [
//     'Tom', 'bill', 'kim'
// ];
// var queName = items.reduce(function(x,y){
//     return  x  + '<' + y +'>';
// },"");
// console.log(queName);

// var queNameMap = items.map(function(x){
//     return '<'+ x + '>'
// });
// var allName = queNameMap.join('');
// console.log(allName);



//bai 23
// var products= [
//     { name : 'A', price: 50, stock: 10 },
//     { name : 'B', price: 100, stock: 2 },
//     { name : 'C', price: 20, stock: 1 }
// ];
// var expPrice = products.sort(function(a,b){
//     return b.price - a.price;
// })
// console.log(expPrice);
// var priceStock = products.map(function (x) {
// 	return x.price*x.stock;
// });
// var orders = priceStock.sort(function (a, b) {
// 	return a-b;
// });
// console.log(orders);


//bai24
// function rolllADie(){
//     var random = Math.random();
//     var xucsac = Math.ceil(random * 6);
//     return xucsac;
//    }
//   console.log(rolllADie()); 


  
  
