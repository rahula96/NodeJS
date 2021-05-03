
let boy = {
    name : "Mike",
    sayThis : () => {  // 객체안에 메소드는 화살표로 만들지 마라...
        console.log(this)
    }
}

boy.sayThis();