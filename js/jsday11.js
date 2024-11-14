let Car = {
Brand: "Mazda",
Color: "Red",
Engine: "V6"

}


let Person = {
    Name: "Wick",
    Age: "43",
    Sex: "Male"

}

let Book = {
Name: "Bumble",
Pages: "56",

}
const {color, Engine} = Car
console.log(Car.Brand)
console.log(color)
console.log(Engine);




let R = [12,null,{name:"John Wick", Dog: true, Age: 30}, "hello"]

const {name,Dog,Age} = R[2]

console.log(name);

const x =[12,null,{name:"John Wick", Dog: true, Age: 30}, "hello"]

const [a, ,z] = x

console.log(a,z);


let V = [1,4,3,2]


let array3=[...x,...V]
console.log(V);


export let num = 14

const greet  = "Hello"
export default  greet







