// var arr1 = [1,2,3]
// var arr2 = [].concat(arr1)
// var arr3 = arr1.slice(0)
// arr1.push(4)

// // arr1.forEach(function(value){
// //     arr2.push(value)
// // })

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// let arr1 = [1,2,3]
// let arr2 = [...arr1]
// arr1.push(4)
// console.log(arr1);
// console.log(arr2);

// const obj = {a: 1, b: 2}
// let copyObj = { ...obj }
// console.log(obj)
// console.log(copyObj);

// const arr = [...'hello']
// console.log(arr);
// console.log(arr.length);

// var arr = 'hello'.split('')
// console.log(arr);

// const arr1 = [1,2]
// const arr2 = ['a',...arr1]
// const arr3 = [...arr1,...arr2]
// console.log(arr3);

function sum(x,y,z){
    return x+y+z;
}

const data = [1,2,3]
console.log(sum(...data));
