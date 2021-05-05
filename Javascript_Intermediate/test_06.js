let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];


let newList = [];

for(let i=0; i<list.length; i++) {
    newList.push(list[i].slice(4));
}

console.log(newList);

//금칙어 : 콜라
function hasCola(str) {
    // if(str.indexOf('콜라') > -1) {
    if(str.includes("콜라")) {
        console.log("금칙어가 있습니다.");
    }
    else {
        console.log("통과")
    }
}

hasCola("와 사이다가 짱이다!");
hasCola("무슨소리, 콜라가 최고");
hasCola("콜라");