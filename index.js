const express = require("express") ; 
const path = require("path") ; 
const port = 7777 ; 


const app = express() ; 

app.listen(port , function(error){
    if(error){
        console.error(`Server was unable to start due to: ${port}`) ; 
        return ; 
    }
    console.log(`The Server is up and running on port: ${port}`) ; 
    return ; 
})