let date = new Date()
console.log(date);

console.log(
    date.getFullYear()
);

console.log(
    date.getMonth()
);

console.log(
    date.getDate()
);

console.log(
    date.getDay()
);

console.log(
    date.getMilliseconds()
);

// Timestampt, jan1 1970

let Timestamp = date.getTime()

console.log(Timestamp);

let date2 = new Date(1730297515096)

console.log(date2);

//timeout,  intervals

// setTimeout(()=>{
//   console.log("Set timeout");

// }, 3000)

// const interval1 = setInterval(()=>{
//   console.log("interval");
  
// }, 4000)

// setTimeout(()=>{
//    clearInterval(interval1)
//    console.log('interval Cleared');
   
// },10000)

let DateR = new Date()
setTimeout(()=>{

console.log(DateR);

},5000)





