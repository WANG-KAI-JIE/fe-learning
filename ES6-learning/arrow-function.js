// 箭头函数
// let sum = (num1, num2) => num1 + num2

// let sum = num => num + 10

// console.log([1,2,3].map(x => x*x));

// // es5
// [1,2,3].map(function (x){
//     return x*x;
// })

// let getNum = () => ({a: 1,b :2})
// let getNum = function(){
//     return ({a: 1,b: 2})
// }
// console.log(getNum());

let sum = (num1,num2 = 2) => num1 + num2;
console.log(sum(5,6));