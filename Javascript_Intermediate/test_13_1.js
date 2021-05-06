const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}

showThisName();
showThisName.call(mike);
showThisName.call(tom);

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
};


update.apply(mike, [1999, 'singer']);
console.log(mike);


update.apply(tom, [2002, 'teacher']);
console.log(tom);

const nums = [3, 10, 1, 6, 4];

// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);

const minNum = Math.min.apply(null, nums);
// const maxNum = Math.max.apply(null, nums);
const maxNum = Math.max.call(null, ...nums);

console.log(minNum);
console.log(maxNum);