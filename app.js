const a = 5;
const  b = 2;

let myName = "gyehwan";

console.log(a+b); 
console.log(a*b);
console.log("hello "+ myName);

myName = "gyegye";
console.log("your new name is "+ myName);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log(daysOfWeek);
daysOfWeek.push("extra_week");
console.log(daysOfWeek);

const player = {
    name: "Gyehwan",
    points: 10,
    handsome: true
};

console.log(player);
player.points = player.points + 15;
console.log(player.points);

function sayHello(name){
    console.log("Hello "+name);
}
sayHello("daeun");

//object
const calculator = {
    add: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    }
}

calculator.add(100,50);

const age = parseInt(prompt("How old are you"));
//parseInt(age);
//console.log(typeof parseInt(age));
console.log(age);
console.log(typeof age);