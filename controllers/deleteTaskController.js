const taskList = require("../models/TaskSchema")

module.exports.deleteTasks = function(request , response){
    taskList.findByIdAndDelete(request.params.id , function(error){
        if(error){
            console.error(`Error in deleting the Task: ${error}`) ; 
            return ; 
        }
        console.log(`Task Deleted Successfully !!`) ; 
    }) ; 
    return response.redirect("back") ; 
}