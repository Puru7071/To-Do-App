const mongoose = require("mongoose") ; 

mongoose.connect("mongodb://localhost/Tasks") ; 

const db = mongoose.connection ; 

db.on("error" , function(){
    console.log("Opps !! Error in connecting to the DataBase") ; 
    return ; 
})
db.once("open" , function(){
    console.log("Successfully connected to the Database") ; 
})