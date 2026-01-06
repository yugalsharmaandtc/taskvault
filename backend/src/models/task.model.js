/*

const { pool } = require('../config/db');

async function insertTask(taskData){
    const query = `Insert into tasks (title,description,status) values ($1,$2,$3) RETURNING *;`;
    const { title, description, status } = taskData;
    const results = await pool.query(query,[title,description,status]);
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
    insertTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};

*/

const { pool } = require('../config/db');

/**
 * Inserts a new task into the database
 */
async function insertTask(taskData) {
    const { title, description, status } = taskData;

    const query = `
        INSERT INTO tasks (title, description, status)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;

    const result = await pool.query(query, [title, description, status]);
    return result.rows[0];
}

/**
 * Fetches all tasks
 */
async function getAllTasks() {
    const query = `
        SELECT *
        FROM tasks
        ORDER BY created_at DESC;
    `;

    const result = await pool.query(query);
    return result.rows;
}

/**
 * Fetches a task by ID
 */
async function getTaskById(id) {
    const query = `
        SELECT *
        FROM tasks
        WHERE id = $1;
    `;

    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
}

/**
 * Updates task status
 */
async function updateTaskStatus(id, status) {
    const query = `
        UPDATE tasks
        SET status = $1
        WHERE id = $2
        RETURNING *;
    `;

    const result = await pool.query(query, [status, id]);
    return result.rows[0] || null;
}

/**
 * Deletes a task
 */
async function deleteTaskById(id) {
    const query = `
        DELETE FROM tasks
        WHERE id = $1
        RETURNING *;
    `;

    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
}

module.exports = {
    insertTask,
    getAllTasks,
    getTaskById,
    updateTaskStatus,
    deleteTaskById
};
