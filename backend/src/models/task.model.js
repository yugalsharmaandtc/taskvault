const { pool } = require('../config/db');

async function InsertTask(taskData){
    const query = `Insert into tasks (title,description,status) values ($1,$2,$3) RETURNING *;`;
    const taskData = [title,description,status];
    const results = await pool.query(query,taskData);
    return results.rows[0];
}

async function getAllTasks(){
    const query = `SELECT * FROM tasks
    ORDER BY created_at DESC`;
    const results =await pool.query(query);
    return results.rows;
}

async function getTaskById(id){
    const query = `SELECT * FROM tasks WHERE id=$1`;
    const results = await pool.query(query,[id]);
    return results.rows[0] || null;
}

async function updateTask(id,status){
    const query= `UPDATE tasks SET status=$1 WHERE id=$2 RETURNING *`;
    const results = await pool.query(query,[status,id]);
    return results.rows[0] || null;
}

async function deleteTask(id){
    const query =` DELETE FROM tasks WHERE id=$1 RETURNING *`;
    const results = await pool.query(query,[id]);
    return results.rows[0]|| null;
}

module.exports = {
    InsertTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};