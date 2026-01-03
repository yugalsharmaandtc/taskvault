/*

const taskService = require('../services/task.service');


async function createTaskController(req, res) {
    try {
    const taskData = req.body;
    const newTask = await taskService.createTaskService(taskData);
    res.status(201).json(newTask);
    } catch (error) {
    res.status(400).json({ message: error.message });
}
}

async function getAllTasksController(req, res) {

    try {
    const tasks = await taskService.getAllTasksService();
    res.status(200).json(tasks);
    } catch (error) {
    res.status(500).json({ message: error.message });
}
}

async function getTaskByIdController(req, res) {
    const { id } = req.params.id;
    try {
    const tasks = await taskService.getTaskByIdService(id);
    res.status(200).json(tasks);
    } catch (error) {
    res.status(500).json({ message: error.message });
}
}

async function updateTaskStatusController(req, res) {
    const { id } = req.params.id;
    const { newStatus } = req.body.newStatus;
    try {
    const updatedTask = await taskService.updateTaskStatusService(id, newStatus);
    res.status(200).json(updatedTask);
    } catch (error) {
    res.status(500).json({ message: error.message });
}
}

async function deleteTaskController(req, res) {
    const { id } = req.params.id;
    try {
    const deletedTask = await taskService.deleteTaskService(id);
    res.status(200).json(deletedTask);
    } catch (error) {
    res.status(500).json({ message: error.message });
}
}

module.exports = {
  createTaskController,
  getAllTasksController,
  getTaskByIdController,
  updateTaskStatusController,
  deleteTaskController
};

*/

// Above is my written code for the task.controller.js file.Below is updated using ai

const taskService = require('../services/task.service');

async function createTaskController(req, res) {
    try {
        const taskData = req.body;
        const newTask = await taskService.createTaskService(taskData);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function getAllTasksController(req, res) {
    try {
        const tasks = await taskService.getAllTasksService();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getTaskByIdController(req, res) {
    try {
        const id = Number(req.params.id);
        const task = await taskService.getTaskByIdService(id);
        res.status(200).json(task);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

async function updateTaskStatusController(req, res) {
    try {
        const id = Number(req.params.id);
        const { status } = req.body;

        const updatedTask = await taskService.updateTaskStatusService(id, status);
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function deleteTaskController(req, res) {
    try {
        const id = Number(req.params.id);
        const deletedTask = await taskService.deleteTaskService(id);
        res.status(200).json(deletedTask);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    createTaskController,
    getAllTasksController,
    getTaskByIdController,
    updateTaskStatusController,
    deleteTaskController
};
