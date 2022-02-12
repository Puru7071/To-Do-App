const { Module } = require("module");
const mongoose = require("mongoose") ; 

const taskSchema = new mongoose.Schema({
    Name : {
        type: String , 
        required : true 
    } , 
    Description : {
        type : String , 
        required : true 
    } , 
    deadline : {
        type : String , 
        required : true 
    } , 
    category : {
        type : String , 
        required : true 
    } , 
    isDone : {
        type : Boolean , 
        required : false 
    }
}) ; 

const taskList = mongoose.model("taskList" , taskSchema) ; 

module.exports = taskList ; 