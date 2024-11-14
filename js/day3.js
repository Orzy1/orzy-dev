//arrays memory that holds multiple items with different data types starts with[]
//just like variable holds single data type

let a = [12, 32, "hello", true, null]

    console.log(a);

    console.log(
        a[4]
    );

    console.log(
        a.push(3001), a
    );

    console.log(
        a.pop(), a
    );

    console.log(
        a.unshift(2001), a
    );

    console.log(
        a.includes("hello")// they are used to check if a particulr array
        //it gives a boolean value
    );

    //objects 

    let car = {
       name: "mc-laren xc",
       color: "White",
       engine: "V-12",
       brand: "Mc-Laren",
       size: "67kg"

    }

    console.log(car);

    console.log(car.engine);

    //functions

    function greet() {//defining our function
        console.log("Hello world!");
        
    }

    greet()  //calling our function
    //callback

    const greet2 = () => {
        console.log("Hello World 2");
        
    }

    greet2()

    //parameter and arguments

    let  greeting = (user)=>{
        console.log("Hello" + user  );
        
    }
    greeting(" Wick ")

    let greetings = () => {

        console.log(`welcome ${user} `);
         
    } 

    // let i = prompt("Enter your name:")

    // greeting(i)

  function greetuser( name ){ if (typeof name === 'string') {return `Hello ${name}!`;
        
    } else {
        return "Invalid input";
    }
   }

   let username = prompt("Please enter your name:");

   console.log(greetuser (
    username 
    ) ) ;

    
   
   
   

    
    
    
    
    
    