const express = require('express');

const { getAllTasks, addNewTasks, updateTaskbyID, deleteTaskByID, updateStatus } = require('../Controllers/todolist_controllers');

const router = express.Router();

//Get all the tasks
router.get('/',getAllTasks);

//Add a new tasks
router.post('/',addNewTasks);

//Update the task by its ID
router.put('/:id',updateTaskbyID);

//Delete a task by its ID
router.delete('/:id',deleteTaskByID);

//Update the status
router.put('/status/:id',updateStatus);

const Task = router;
module.exports = Task