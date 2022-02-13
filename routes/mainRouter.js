const express = require("express") ; 
const taskList = require("../models/TaskSchema") ; 

const router = express.Router() ; 
router.get("/" , require("../controllers/homeController").renderHomePage) ; 
router.post("/add-Task" , require("../controllers/addTaskController").addTask) ; 
router.get("/delete-task/:id" , require("../controllers/deleteTaskController").deleteTasks) ; 
module.exports = router ; 