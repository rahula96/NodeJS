async function getName() {
    // return "Mike";
    return Promise.resolve("Tom");
}

// console.log(getName());
getName().then((name) => {
    console.log(name);
})