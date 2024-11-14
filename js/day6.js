// DOM
// Document object model, allows us to add something to our html file

document.write("Hello")

console.log(
    document.getElementsByTagName('H1')
);

let x = document.getElementsByTagName('H1')
console.log(x);

console.log(
    document.getElementsByClassName('one')
);

console.log(
    document.getElementById('two')
);

let y = document.querySelector('h1')

// console.log(y);

y.classList.add('box')

console.log(y);

y.classList.toggle('box')

let z =  document.getElementsByClassName('one')

console.log(z);//  array

let z0 = z[0]// object

console.log(z0);

let z1 = z0.innerText

console.log(z1);

console.log(
    z[0].innerText
);

let p = document.querySelector('.four')

p.textContent = "Updated text"

p.innerHTML = `<span>Hello Again</span>`

console.log(p);

// Date constructor

console.log(
    new Date().getDay()
);
p.innerHTML = new Date()









