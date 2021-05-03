// 함수 작성

function showError() {
    console.log("에러가 발생했습니다. 다시 시도해 주세요.")
}

showError();

function sayHello(name) {
    let msg = `Hello, `
    if(name) {
        msg = `Hello ${name}`;
    }
    console.log(msg)
}

sayHello('Mike');
sayHello('Tom')
sayHello('Jane')
// sayHello();

function add(num1, num2) {
    return num1 + num2;
}

const result = add(2, 3);

console.log(result)