
let numbers = {};
const number_max_size = 10;

let numberObj = {
    'number_before': 0,
    'operator': '',
    'number_after': 0,
    'result': 0,
};

for (let i = 0; i < number_max_size; i++) {
    numbers[i] = document.getElementById('number_' + i);
    numbers[i].addEventListener('click', number_btn_listener);
    console.log(numbers[i]);
}

numbers[number_max_size] = document.getElementById('number_dot');
numbers[number_max_size].addEventListener('click', number_btn_listener);
console.log(numbers[number_max_size]);

function number_btn_listener(event) {
    // console.log(event.target.id);
    // console.log(event.target.innerText);

    number_click(event.target.innerText);
}

function number_click(params) {
    // alert(params);
    let express = document.getElementById('express').firstChild;

    express.appendData(params);
}

function ac_click(params) {
    // alert(params);
    document.getElementById('express').innerHTML = " ";
    document.getElementById('result').innerHTML = " ";

}

function result(params) {

    let express = document.getElementById('express').innerHTML;
    const strexpress = express.split(numberObj.operator);

    numberObj.number_before = strexpress[0] === null ? 0 : strexpress[0];
    numberObj.number_after = strexpress[1] === null ? 0 : strexpress[1];

    switch (numberObj.operator) {
        case '+':
            numberObj.result = numberObj.number_before + numberObj.number_after;
            break;
        case '-':
            numberObj.result = numberObj.number_before - numberObj.number_after;
            break;
        case '/':
            numberObj.result = numberObj.number_before / numberObj.number_after;
            break;
        case '*':
            numberObj.result = numberObj.number_before * numberObj.number_after;
            break;
        default:
            break;
    }

    document.getElementById('result').innerHTML = numberObj.result;

}

function calcu(params) {
    // alert(params);
    let express = document.getElementById('express').firstChild;

    numberObj.operator = params;

    express.appendData(params);
}