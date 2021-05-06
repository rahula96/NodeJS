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
            res("2번 주문 완료")
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

async function order() {
    try {
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f2(result2);
        console.log(result3);
    } catch (error) {
        console.log(error);
    }
    console.log('종료');
}

order();

// f1()
// .then((res) => f2(res))
// .then((res) => f3(res))
// .then((res) => console.log(res))
// .catch(console.log)
// .finally(() => {
//     console.log('끝')
// })