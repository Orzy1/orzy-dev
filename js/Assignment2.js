const name=prompt("Enter your Name:");

let username=prompt("Enter your Username:");


const email=prompt("Enter your email adress:");

let password = "";
while (password.length < 8) {password = prompt("Enter your Password (must be at least 8 characters):");

    if (password.length<8) {alert("password must be at least 8 characters long.");}
}

console.log(`Name: ${name}`);

console.log(`Username: ${username.toLowerCase()}`);


console.log(`Email: ${email}`);

console.log(`Password: ${password}`);

//note we use let when we need to reassign variable but const when the variable is constant but sometimes we can use both for the same purpose


