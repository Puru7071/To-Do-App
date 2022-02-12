const express = require("express") ; 
const path = require("path") ; 
const port = 7777 ; 

const db = require("./config/mongoose") ; 

const app = express() ; 

app.set("view engine" , "ejs") ; 
app.set("views" , path.join(__dirname , "views")) ; 

app.use(express.static("assets")) ;
app.use(express.urlencoded()) ; 

app.use("/" , require("./routes/mainRouter")) ;

app.listen(port , function(error){
    if(error){
        console.error(`Server was unable to start due to: ${port}`) ; 
        return ; 
    }
    console.log(`The Server is up and running on port: ${port}`) ; 
    return ; 
})