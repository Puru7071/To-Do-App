const taskList = require("../models/TaskSchema") ; 

module.exports.renderHomePage = function(request , response){
    taskList.find({}, function (error, Tasks) {
        if(error){
            console.log(`Opps !! Unable to Render the App due to: ${error}`) ; 
            return ; 
        }
        let obj = {
            tasksToDo : Tasks , 
            number : Tasks.length
        }
        return response.render("home",obj) ; 
    });
}