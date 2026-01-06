// import { useState } from 'react';
// import { Box, TextField, Button, Select, MenuItem, Typography } from '@mui/material';
// import { createTask } from '../api/taskApi';

// function TaskForm({ onTaskCreated }) {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [status, setStatus] = useState('PENDING');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // validate title
//         if (!title.trim()) {
//             setError('Title is required');
//             return;
//         }
//         // validate description
//         if (!description.trim()) {
//             setError('Description is required');
//             return;
//         }
//         setError('');
//         setLoading(true);
//         const taskData = { title, description, status };    
//         // call createTask
//         try {
//             const newTask = await createTask(taskData);
//             onTaskCreated(newTask);
//             setTitle('');
//             setDescription('');
//             setStatus('PENDING');
//         } catch (err) {
//             setError('Failed to create task. Please try again.');
//         }
//         // handle success
//         setLoading(false);

//         // handle error


//     };

//     return (
//         <Box>
//             {/* heading */}
//             {/* error message */}
//             <form onSubmit={handleSubmit}>
//                 {/* title field */}
//                 {/* description field */}
//                 {/* status select */}
//                 {/* submit button */}
//             </form>
//         </Box>
//     );
// }

// export default TaskForm;



// This above is the old version of the code. Written by me now I will provide you the new version of the code written by chatgpt.

import { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Select,
    MenuItem,
    Typography
} from '@mui/material';
import { createTask } from '../api/taskApi';

function TaskForm({ onTaskCreated }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('PENDING');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            setError('Title is required');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const newTask = await createTask({
                title,
                description,
                status
            });

            onTaskCreated(newTask);

            setTitle('');
            setDescription('');
            setStatus('PENDING');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create task');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
                Create New Task
            </Typography>

            {error && (
                <Typography color="error" sx={{ mb: 2 }}>
                    {error}
                </Typography>
            )}

            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                />

                <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    multiline
                    rows={3}
                    margin="normal"
                />

                <Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    fullWidth
                    margin="normal"
                    sx={{ mt: 2 }}
                >
                    <MenuItem value="PENDING">PENDING</MenuItem>
                    <MenuItem value="IN_PROGRESS">IN_PROGRESS</MenuItem>
                    <MenuItem value="COMPLETED">COMPLETED</MenuItem>
                </Select>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2 }}
                    disabled={loading}
                >
                    {loading ? 'Creating...' : 'Create Task'}
                </Button>
            </form>
        </Box>
    );
}

export default TaskForm;



