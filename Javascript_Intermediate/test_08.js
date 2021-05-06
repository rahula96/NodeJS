/*
    arr.sort()
    배열 재정렬
    주의! 배열자체가 변경됨
    인수로 정렬 로직을 담은 함수를 받음
*/

let arr = [ 1, 5, 4, 2, 3];

arr.sort();

console.log(arr);

let arr1 = [ "a", "c", "d", "e", "b"];

arr1.sort();

console.log(arr1);

let arr2 = [ 27, 8, 5, 13];

arr2.sort();

console.log(arr2);

let arr3 = [ 27, 8, 5, 13];

function fn(a, b) {
    return a - b;
}

arr3.sort(fn);

console.log(arr3);
/* 
    arr.reduce()
    인수로 함수를 받음
    (누적 계산값, 현재값) ==> {return 계산값}
 */

let arr5 = [1, 2, 3, 4, 5];

let result5 = 0;
arr5.forEach((num) => {
    result5 += num;
});

console.log(result5);

let arr6 = [1, 2, 3, 4, 5];

let result6 = arr6.reduce((prev, cur) => {
    return prev+cur;
}, 0);

console.log(result6);

let userList4 = [
    { name: "Mike", age: 30 },
    { name: "Tom", age: 10 },
    { name: "Jane", age: 27 },
    { name: "Sue", age: 26 },
    { name: "Marry", age: 42 },
    { name: "Steve", age: 60 },
];

let result7 = userList4.reduce((prev, cur)=>{
    if(cur.age > 19) {
        prev.push(cur.name);
    }
    return prev;
}, []);

console.log(result7);