function getGrade() {
    let score = prompt("Enter your Score:");
        score = Number(score);

        if(score>= 70 && score <= 100)
            {
                console.log("A");
                
            }
            else if(score >=60 && score < 70  )
            {
                console.log("b");
                
            }
            else if(score >=50 && score < 60)
            {
                console.log("C");
                
            }
            else if(score >= 45 && score < 50)
            {
                console.log("D");
                
            }
            else if(score >= 40 && score < 45)
            {
                console.log("E");
                
            }
            else if(score >=0 && score < 40)
            {
                console.log("F");
                
            }
            else{
                console.log("Invalid Score");
                
            }

    
}
getGrade()