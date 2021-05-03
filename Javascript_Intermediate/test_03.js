let n = "name";
let a = "age";

const user = {
    [n]: 'Mike',
    [a]: 30,
    [1+4]: 5,
};

console.log(user);


function makeObj(key, val) {
    return {
        [key] : val,
    }
}

const obj = makeObj("이름", 33);

console.log(obj);

const user2 = Object.assign({}, user);

user2.name = "Tom"


console.log(user);
console.log(user2);

const result = Object.keys(user);

console.log(result);