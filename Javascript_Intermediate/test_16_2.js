const f1 = (callback) => {
    setTimeout(() => {
        console.log("1번 주문 완료");
        callback();
    }, 1000);
}

const f2 = (callback) => {
    setTimeout(() => {
        console.log("2번 주문 완료")
        callback();
    }, 3000);
}

const f3 = (callback) => {
    setTimeout(() => {
        console.log("3번 주문 완료")
        callback();
    }, 2000);
}

console.log('시작')
f1(function (paams) {
    f2(function () {
        f3(function () {
            console.log('끝')
        })
    })
})