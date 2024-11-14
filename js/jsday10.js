// ADVANCED ARRAY METHOD

// map-forEach

let numbers = [1,2,3,4,5]

numbers.forEach((x,y,z) => {


    console.log(x);


    document.write(x);
    
});


// numbers.map((num)=>{
//     return(
//         console.log(num)
        
//     )
// })


// numbers.map(num=> console.log(num)
// )


numbers.map((num)=>(
    console.log(num)
    
))

//filter

let oddNumbers = numbers.filter(x => x % 2 !== 0 )

console.log(oddNumbers);

//find

let two = numbers.find(x => x % 2=== 0)

console.log(two);


// let fruits = ["Mango", "Banana","Orange", "Peers","Cashew"]
let fruits = [56,100,34]



let sortedwords = fruits.sort(

    (a,b) => b - a   //b-a decending a-b acending
)
console.log(sortedwords);

let Ride = [14,32,2]


let result = Ride.map(x => x*x).filter(x=>x <= 10).sort(
    (a,b) => a-b
)

console.log(result);



