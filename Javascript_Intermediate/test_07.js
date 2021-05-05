// forEach

let arr = ["Mike", "Tom", "Jane"];

arr.forEach((name, index) => {
    console.log(`${index+1}, ${name}`)
})


// fine / findIndex

let arr1 = [1, 2, 3, 4, 5];

const result = arr1.find((item) => {
    return item % 2 === 0;
});

console.log(result);

let userList = [
    { name: "Mike", age:30},
    { name: "Jane", age:27},
    { name: "Tom", age:10},
]

const result1 = userList.find((user)=>{
    if (user.age < 19) {
        return true;
    }
    return false;
})

console.log(result1);


let arr2 = [1, 2, 3, 4, 5, 6];

const result2 = arr2.filter((item) => {
    return item % 2 === 0;
});

console.log(result2);


// arr.map


let userList2 = [
    { name: "Mike", age:30},
    { name: "Jane", age:27},
    { name: "Tom", age:10},
]

let newUserList = userList2.map((user, index) => {
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19,
    });
});

console.log(userList2);
console.log(newUserList);

// join, split

let arr3 = ["안녕", "나는", "철수야"];

let result3 = arr3.join("-");

console.log(result3);

let arr4 = "Mike,Jane,Tom,Tony";

let result4 = arr4.split(",");

console.log(result4);

let user3 = {
    name: "Mike",
    age: 30,
};

let userList3 = ["Mike", "Tom", "Jane"];

console.log(typeof user3);
console.log(typeof userList3);

console.log(Array.isArray(user3));
console.log(Array.isArray(userList3));