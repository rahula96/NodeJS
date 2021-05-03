console.log(10>5);
console.log( 10 == 5)
console.log( 10 != 5);

const a = 1;
const b = "1";

console.log(a == b); // true로 나옴....===는 타입까지 비교
console.log(a === b); // 일치 언산자

// if, else, else if

const age = 30;

if(age > 19) {
    console.log('환영합니다.');
}

if(age <= 19) {
    console.log('안녕히 가세요.')
}

console.log('--------------------')


if(age > 19) {
    console.log('환영합니다.');
}
else if( age === 19) {
    console.log('수능 잘치세요.');
}
else {
    console.log('안녕히 가세요.')
}