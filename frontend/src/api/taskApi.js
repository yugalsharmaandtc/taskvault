/*

import axios from 'axios';

const BASE_URL='http://localhost:5000/api/'

export async function createTask(taskData) {
    try {
        const response = await axios.post(`${BASE_URL}tasks`, taskData);
        return response.data;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
}

export async function getAllTasks() {
    try {
        const response = await axios.get(`${BASE_URL}tasks`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}

export async function getTaskById(id){
    try {
        const response = await axios.get(`${BASE_URL}tasks/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching task:', error);
        throw error;
    }

}
export async function updateTaskStatus(id,status) {

    try {
        const response = await axios.put(`${BASE_URL}tasks/${id}`, {status});
        return response.data;

    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }

}

export async function deleteTask(id) {
    try {
        const response = await axios.delete(`${BASE_URL}tasks/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
}

*/


// Above is my written and needed some improvements and below is the improved version of the same code

import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export async function createTask(taskData) {
    const response = await axios.post(`${BASE_URL}/tasks`, taskData);
    return response.data;
}

export async function getAllTasks() {
    const response = await axios.get(`${BASE_URL}/tasks`);
    return response.data;
}

export async function getTaskById(id) {
    const response = await axios.get(`${BASE_URL}/tasks/${id}`);
    return response.data;
}

export async function updateTaskStatus(id, status) {
    const response = await axios.patch(
        `${BASE_URL}/tasks/${id}/status`,
        { status }
    );
    return response.data;
}

export async function deleteTask(id) {
    const response = await axios.delete(`${BASE_URL}/tasks/${id}`);
    return response.data;
}
