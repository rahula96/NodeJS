const mike = {
    name: "Mike",
};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
};

const updateMike = update.bind(mike);

updateMike(1980, "police");

console.log(mike);


const user = {
    name: "Mike",
    showName: function () {
        console.log(`Hello, ${this.name}`);
    },
}

user.showName();

let fn = user.showName;

fn();
fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);

boundFn();