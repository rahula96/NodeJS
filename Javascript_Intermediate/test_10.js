/* 
나머지 매개변수
전달 받은 모든 수를 더해야함
 */

function add(...number) {
    /* let result = 0;
    number.forEach((num) => {
        result += num;
    });
 */
    let result = number.reduce((prev, cur)=> {
        return prev += cur;
    }, 0);
    console.log(result);
}

add(1, 2, 3);
add(1, 2 ,3, 4, 5, 6, 7, 8, 9, 10);

/* 
나머지 매개변수
user 객체를 받아주는 생성자 함수를 만듭니다. 
*/

function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', "React");
const user3 = new User('Jane', 10, 'English');

console.log(user1);
console.log(user2);
console.log(user3);