// //switch
// let day = "Sunday"
// switch (day) {
//     case "Monday":
//         console.log(1);
//         break;
// case
//     default:
//         break;
// }




//loops
// for loops

//initialization, condition, increament or decreament
//1,true
//2,true
//3,true
//4,true
//5,true
//6,false

// for(let i = 1; i<= 5; i++){
//     console.log(i);
    
// }

//while loop

let j=1 // initialization

while (j <= 5) {//condition
    console.log("Hello");
    j++ //increament or decreament
    
}
//for each loop


let numbers=[1,2,3,4,5]

numbers.forEach((num, index, array) => {
    console.log(num, index, array);
    
})

let friuts=["apple","Banana","mango"]
friuts.forEach((ccc) =>{
    console.log(ccc.toUpperCase());
    
    
});

let num = [2,4,5,]

let sum = 0
num.forEach((num)=>{
let square = 0
square = num*num
//sum = sum+square
sum += square
console.log(
    `The square of ${num} is ${square}`
);


})
console.log(`The sum of squares is ${sum}`);

let n = 5
let fact = 1

//n* (n-1)
//2! = 2*1
//3! = 3*2*1
//5! = 5*3*2*1

//i = 1
//fact = 1* 1 = 1

// i = 2
// fact = 1*2 = 2

// i = 3
// fact = 2*3 = 6

// i = 4
// fact = 6*4 = 24

// i = 5
// fact = 24*5 = 120

for(let i = 1; i<= n; i++){
    fact = fact * i
}
console.log(`factorial of ${n} is ${fact}`);
