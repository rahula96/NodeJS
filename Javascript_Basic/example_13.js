// 객체

const superman = {
    name : 'Clark',
    age : 30,
}

console.log(superman.name);
console.log(superman['age']);

console.log(superman);

superman.hairColor = 'black';
superman['hobby'] = 'fotball';

console.log(superman)

delete superman.age;
console.log(superman);

function makeObject(name, age) {
    return {
        name : name,
        age : age,
        hobby : 'football',
    }
}

// const Mike = makeObject('Mike', 30);
// console.log(Mike);

// console.log("age" in Mike);
// console.log("birthday" in Mike);

/* 
function isAdult(user) {
    // if(user.age < 20) {
    if(!('age' in user) || user.age < 20) {
        return false;
    }
    return true;
}

const Mike = {
    name : "Mike",
    age : 30,
};

const Jane = {
    name : "Jane"
};

console.log(isAdult(Mike))
console.log(isAdult(Jane)) */


const Mike = {
    name : "Mike",
    age : 30
};

for(x in Mike) {
    console.log(Mike[x])
}