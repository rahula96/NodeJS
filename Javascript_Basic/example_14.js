
let boy = {
    name : "Mike",
    showNmae : function () {
        // console.log(boy.name)
        console.log(this)
    }
}

// boy.showNmae()

let man = boy;

man.name = "Tom"

console.log(boy.name)
man.showNmae();

boy = null;

man.showNmae()