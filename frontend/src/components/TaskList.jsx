/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { getAllTasks, updateTaskStatus, deleteTask } from '../api/taskApi';
import TaskItem from './TaskItem';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    async function fetchTasks() {
        try {
            const data = await getAllTasks();
            setTasks(data);
        } catch (err) {
            setError('Failed to load tasks');
        } finally {
            setLoading(false);
        }
    }

    async function handleStatusChange(id, newStatus) {
        try {
            setLoading(true);
            const updatedTask = await updateTaskStatus(id, newStatus);

            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === id ? updatedTask : task
                )
            );
        } catch (err) {
            alert('Failed to update status');
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(id) {
        try {
            setLoading(true);
            await deleteTask(id);

            setTasks((prevTasks) =>
                prevTasks.filter((task) => task.id !== id)
            );
        } catch (err) {
            alert('Failed to delete task');
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onStatusChange={handleStatusChange}
                    onDelete={handleDelete}
                />
            ))}
        </>
    );
}

export default TaskList;
