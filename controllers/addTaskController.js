const taskList = require("../models/TaskSchema")

module.exports.addTask = function(request , response){
    taskList.create({
        Name : request.body.Task_Name , 
        Description : request.body.Task_Description , 
        deadline : request.body.deadline , 
        category : request.body.category , 
        isDone : false 
    } , function(error , newRecord){
        if(error){
            console.error(`New task was not added due to: ${error}`) ; 
            return ; 
        }
        console.log(`New Record is: ${newRecord}`) ; 
        return ;
    }) ; 
    return response.redirect("back") ; 
}