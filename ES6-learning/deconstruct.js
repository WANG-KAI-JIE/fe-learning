/* 解构赋值 */
/* 1-数组解构赋值 */
// var arr = [1,2,3]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// let [a,b,c] = [1,2,3]
// console.log(a);
// console.log(b);
// console.log(c);

// let [a = 9, b = 10] = [1]
// console.log(a);
// console.log(b);

// let [a,b = 1] = [10,'hello']
// console.log(a);
// console.log(b);
// let [x,y = 1] =[10,undefined]
// console.log(x);
// console.log(y);

// let [a = 1] = [null]
// console.log(a);

// console.log(null == undefined)
// console.log(null === undefined)

// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b,a]
// console.log(a);
// console.log(b);

// let[a, , ,b] = [1,2,3,4]
// console.log(b);

/* 2-对象解构赋值 */
// var obj = {name:'zhangsan',age:22}
// var name = obj.name
// var agr = obj.age

// let obj = {name: 'zhangsan',age: 22}
// let {name,age} = obj;
// console.log(name);
// console.log(age);

// let {a = 10,b = 5} = {a: 3} // a=3,b=5
// let {a = 10,b = 5} ={a: 3,b: undefined} // a=3,b=5
// let {a = 10,b = 5} ={a: 3,b: null} // a=3,b=null

// 重命名属性
// let { a: x = 8, b: y = 3 } = { a: 2 }
// console.log(x);
// console.log(y);

// 解构字符串
// const [a,b,c] = 'xyz'
// console.log(a + ',' + b + ','+ c + ',');
// console.log(typeof a);

// let { length: len } = 'hello'
// console.log(len);

// 解构复杂类型
let data = {
    code: 1,
    list: [
        {
            name: 'zhangsan',
            age: 22
        }
    ]
}

let {
    code: newCode,
    list: [
        {
            name: newName,
            age: newAge
        }
    ]
} = data
console.log(newCode);
console.log(newName);
console.log(newAge);