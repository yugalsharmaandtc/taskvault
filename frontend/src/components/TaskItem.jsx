import {
    Card,
    CardContent,
    Typography,
    Select,
    MenuItem,
    Button,
    Box
} from '@mui/material';

function TaskItem({ task, onStatusChange, onDelete }) {

    const handleStatusChange = (event) => {
        const newStatus = event.target.value;
        onStatusChange(task.id, newStatus);
    };

    const handleDelete = () => {
        onDelete(task.id);
    };

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6">
                    {task.title}
                </Typography>

                <Typography variant="body2" sx={{ mb: 1 }}>
                    {task.description}
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Select
                        value={task.status}
                        onChange={handleStatusChange}
                        size="small"
                    >
                        <MenuItem value="PENDING">PENDING</MenuItem>
                        <MenuItem value="IN_PROGRESS">IN_PROGRESS</MenuItem>
                        <MenuItem value="COMPLETED">COMPLETED</MenuItem>
                    </Select>

                    <Button
                        variant="outlined"
                        color="error"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default TaskItem;
