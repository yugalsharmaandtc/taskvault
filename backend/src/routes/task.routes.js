const express = require('express');
const taskController= require('../controllers/task.controller');

const router = express.Router();

router.post('/tasks', taskController.createTaskController);
router.get('/tasks', taskController.getAllTasksController);
router.get('/tasks/:id', taskController.getTaskByIdController);
router.patch('/tasks/:id/status', taskController.updateTaskStatusController);
router.delete('/tasks/:id', taskController.deleteTaskController);

module.exports = router;

//