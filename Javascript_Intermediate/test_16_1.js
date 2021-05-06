const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    return new Promise((res, rej) => {
        console.log(message);
        setTimeout(() => {
            // res("2번 주문 완료")
            rej("xxxx");
        }, 3000);
    });
};

const f3 = (message) => {
    return new Promise((res, rej) => {
        console.log(message);
        setTimeout(() => {
            res("3번 주문 완료")
        }, 2000);
    })
};

// 프로세스 체이닝 (Promise chaining)
console.log('시작')

f1()
.then((res) => f2(res))
.then((res) => f3(res))
.then((res) => console.log(res))
.catch(console.log)
.finally(() => {
    console.log('끝')
})