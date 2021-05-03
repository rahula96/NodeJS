
// 함수 표현식 ==> error 
// 
// showError();

// let showError = function() {
//     console.log('error')
// }

// 함수 선언문 ==> OK
// showError();

// function showError () {
//     console.log('error')
// }

// 화살표 함수 ==> OK

// let showError = () => {
//     console.log('error')
// }

// showError();

// const sayHello = function (name) {
//     const msg = `Hello, ${name}`;
//     console.log(msg);
// }
//를 화살표 함수로...
const sayHello = (name) => {
    const msg = `Hello, ${name}`;
    console.log(msg);
}

sayHello('Mike');