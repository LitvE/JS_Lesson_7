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

function test(){
    let x = 10;
    return function(){
        test();
        return x++;
    };
};
*/

function f(){
    var x = 0;
};

if(false){
    var x = 0;
}

f();

// каждый раз при вызове функции создается новое лексическое окружение

const test = 0;

function f(){
    if(true){
        var value = test;
    }
};

f();