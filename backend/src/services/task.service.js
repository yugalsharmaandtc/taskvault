const taskModel=require('../models/task.model');




/* ---------- Helper Functions ---------- */



function isValidTaskTitle(title){
    return typeof title==="string"
    && title.trim().length>=3;
}

function normalizeTaskInput(data){
   return {
    title: data.title.trim(),
    description: data.description.trim(),
    status:data.status ?data.status.toUpperCase(): 'PENDING'
   }
}

function isValidTaskStatus(status){
    const allowedStatuses =['Pending','In_Progress','Completed'];
    return allowedStatuses.includes(status);
}

function canUpdateStatus(oldStatus,newStatus){
    const transitions={
        'PENDING':'IN_PROGRESS',
        'IN_PROGRESS':'COMPLETED'
};
    return transitions[oldStatus] === newStatus;
}
/* ---------- Service Functions ---------- */


async function createTaskService(taskData){
    const normalizeData=normalizeTaskInput(taskData);
    if(!isValidTaskTitle(normalizeData.title)){
        throw new Error('Invalid task title');
    }
    if(!isValidTaskStatus(normalizeData.status)){
        throw new Error('Invalid task status');
    }
    return await taskModel.insertTask(normalizeData);
}

async function getAllTasksService(){
    return await taskModel.getAllTasks();
}

async function getTaskByIdService(id){
    if(!Number.isInteger(id)){
        throw new Error('Invalid task id');
    }
    return await taskModel.getTaskById(id);
}

async function updateTaskStatusService(id,newtatus){
    if(!id && typeof id !=='number'){
        throw new Error('Invalid task id');
    }
    if(!isValidTaskStatus(newtatus)){
        throw new Error('Invalid task status');
    }
    const task=getTaskByIdService(id);
    if(!task){
        throw new Error('Task not found');
    }
    if(!canUpdateStatus(task.status,newtatus)){
        throw new Error('Invalid status transition');
    }
    return taskModel.updateTask(id,newtatus);
}

function deleteTaskService(id){
    const task=getTaskByIdService(id);
    if(!id && typeof id !=='number'){
        throw new Error('Invalid task id');
    }
    if(!task){
        throw new Error('Task not found');  
    }
    return taskModel.deleteTask(id);

    

}

module.exports={
    isValidTaskTitle,
    normalizeTaskInput,
    isValidTaskStatus,
    canUpdateStatus,
    createTaskService,
    getAllTasksService,
    getTaskByIdService,
    updateTaskStatusService,
    deleteTaskService

}
