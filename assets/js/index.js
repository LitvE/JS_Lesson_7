//
/*
let userValue = prompt('userValue: ');
const test = 100; //переменная объявлена и инициализована в глобальной области видимости, поэтому она видна ниже
switch(userValue){
    case '1': {
        console.log(test);
    } 
    break;
    case '2': {
        console.log(test);
    } 
    break;
    case '3': {
        console.log(test);
    } 
    break;
    case '4': {
        console.log(test);
    } 
    break;
    default: {} break;
}
*/
/*
const test = 20; //переменная объявлена и инициализована в глобальной области видимости, поэтому она видна ниже
if(true){
    const test = 10; // переменная будет видна только в данных фигурных скобках, т.е. локальной области видимости
    console.log(test);
}
*/


/*
if(true){
    console.log(test);
    var test = 100000; //var прописывает переменную в глобальную переменную windows, но работает принцип синхронности, поэтому до объявления и инициализации переменной будет выводиться undefined
    console.log(test);
}
*/
/*
if(true){
    console.log(test);
    if(true){
        console.log(test);
        if(true){
            console.log(test);
            if(true){
                console.log(test);
                var test;
                test = 1000000;
                console.log(test);
            }
            console.log(test);
        }
        console.log(test);
    }
    console.log(test);
}
*/

//Замыкание
/*
const test = 10;
function myFunction(){
    console.log(test);
};

const result = myFunction();
console.log(result);
*/
/*
function f(){
    return function(){
        console.log(Hello);
    };
};

const result2 = f();
result2();*/
/*
function f(){
    const x = 10;
    return function(){

        return console.log(x);
    };
};

const result2 = f();
result2();*/
/*
function f(){
    let x = 10;
    return function(){

        return x++;
    };
};

const resultFunction = f(); 
console.log(resultFunction());
console.log(resultFunction());
console.log(resultFunction());
console.log(resultFunction());
console.log(resultFunction());
console.log('----------------');
const resultFunction2 = f(); // при присвоении переменной функции каждый раз создается свое лексическое окружение этой функции
console.log(resultFunction2());
console.log(resultFunction2());
console.log(resultFunction2());
console.log(resultFunction2());
console.log(resultFunction2());
//замыкание
function test(){
    let x = 10;
    return function(){
        test();
        return x++;
    };
};
*/
/*
function f(){
    var x = 0;
};

if(false){
    var x = 0;
}

f();
*/
// каждый раз при вызове функции создается новое лексическое окружение
/*
const test = 0;

function f(){
    if(true){
        var value = test;
    }
};

f();
*/

//Рекурсия
//Решение без рекурсии
/*
function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
}
*/
//Решение с рекурсией
/*
function pow2(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow2(x, n - 1);
    }
}

console.log(pow(2,5));
console.log(pow2(2,5));
*/
/*
function fib(n) {
    if(n <= 1){
        return n;
    }else {
        return fib(n - 1) + fib(n - 2);
    }
    //return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(8));
*/

//Заморозка Объекта - Object.freeze()
/*
const user = Object.freeze({
    name: 'John',
    surname: 'Fox',
    age: 20,
    isMarried: false,
});
*/
//назначение прав доступа

const ROLES = Object.freeze({
    ADMIN: 'ADMIN',
    MODERATOR: 'MODERATOR',
    USER: 'USER',
});

const ACTIONS = Object.freeze({
    READ: 'READ',
    CREAT: 'CREAT',
    MODIFY: 'MODIFY',
    DELETE: 'DELETE',
});
/*
const user1 = {
    login: 'user1',
    role_access: ROLES.USER,
    action: ACTIONS.READ
}
*/
/*
let rights = new Map();

rights.set(ROLES.USER, [ACTIONS.READ]);
rights.set(ROLES.MODERATOR, [ACTIONS.READ, ACTIONS.MODIFY]);
rights.set(ROLES.ADMIN, [ACTIONS.READ, ACTIONS.CREAT, ACTIONS.MODIFY, ACTIONS.DELETE]);
*/
/*
rights.set(ACTIONS.READ, ...ROLES);
rights.set(ACTIONS.MODIFY, [ROLES.MODERATOR, ROLES.ADMIN]);
rights.set(ACTIONS.CREAT, [ROLES.ADMIN]);
rights.set(ACTIONS.DELETE, [ROLES.ADMIN]);
*/
/*
function checkPermission (role){
    if(rights.has(role)){
        return rights.values(role);
    }
    return false;
}
*/
/*
function checkPermission2(action, role){
    if(rights.has(action)){
        return rights.get(action).includes(role);
    }
    return false;
}*/

const arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [el1, el2, ...rest] = arr;

const arr2 = [1, 2, [3, 4, 5, 6], 7, 8, 9, 10];
const [,,[,, el5]] = arr2;

//Odjects
/*
const user = {
    name: 'Tom',
    surname: 'Fox',
    age: 20,
    book:{
        cover:{
            pages: 200,
            format: "20x45",
            copies: 2000,
        },
        bookName: "JS",
        year: "2010", 
    },
}*/
/*
const {name} = user;
console.log(name);
const{book:{cover:{pages}}} = user;
console.log(pages);
console.log(user.book.cover.pages);
*/
/*
function getUserFullName1 (user){
    return `${user.name} ${user.surname}`;
}

function getUserFullName2 (user){
    const {name, surname} = user;
    return `${name} ${surname}`;
}

console.log(getUserFullName1(user));
console.log(getUserFullName2(user));
*/
/*
const user = {
    name: 'Tom',
    surname: 'Fox',
    age: 20,
    lang:['ukr', 'rus', 'eng'],
    car: {
        name: 'Toyota',
        model: 'Camry',
        year: 2019,
    },
    greeting1: function () {
        console.log('Hello!');
    },
    greeting2: function () {
        console.log(`Hello, ${this.name}!`);
    },
}
user.greeting1();
user.greeting2();

function stud(name, surname){
    this.name = name;
    this.surname = surname;
}

const student1 = new stud('Vasya', 'Petrov');
const student2 = new stud('Masha', 'Sidorova');
const student3 = new stud('Petya', 'Ivanov');

console.log(student1);
console.log(student2);
console.log(student3);

function rect(size1, size2){
    this.a = size1;
    this.b = size2;
    this.square = function(){
        return this.a * this.b;
    };
};

const rect1 = new rect(2, 5);
console.log(rect1);
console.log(rect1.square());


function purchase (count, price){
    this.count = count;
    this.price = price;
    this.sum = 0;
    this.sale = function(totalSum, percent){
        this.sum = this.count * this.price;
        if(this.sum > totalSum){
            return (this.count * this.price * (1 - (percent/100)));
        }
        else{
            return this.sum;
        }
    };
};

const purchase1 = new purchase(5,200);
console.log(purchase1.sale(500, 3));
*/

// Классы
/*
class cat {
    constructor(name){
        this.name = name;
    }
}

const Barsik = new cat('Barsik');
const Murka = new cat('Murka');

console.log(Barsik);
console.log(Murka);

class Student {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    printFullName(){
        console.log(`${this.name} ${this.surname}`);
    };
}

const stud1 = new Student('Ivan', 'Ivanov', 21);
stud1.printFullName();
*/

class Triangle {
    constructor(a,  h){
        this.a = a;
        this.h = h;

    }

    getArea(){
        return (1/2)*(this.a * this.h);
    };
}

const tr1 = new Triangle(5, 2);
console.log(tr1.getArea());