// SYNCHRONOUS, ASYCHRONOUS-ASYNC,CLIENT,SERVER,API,JSON,REQUEST,AWAIT,PROMISE

//API - ENDPOINT - URL

// function to display products

const fetchdisplayproduct = async () => {
    const URL = 'https://fakestoreapi.com/products'
    try {// runs when fetch is successful
        const response = await fetch(URL)

        const products = response.json()


    }catch (error) {
        console.log("Error message", error);
        alert("Error displaying products, check console for more information")
        
    }

}

//
