import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function Home() {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleTaskCreated = () => {
        setRefreshKey((prev) => prev + 1);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" sx={{ mb: 3 }}>
                TaskVault
            </Typography>

            <TaskForm onTaskCreated={handleTaskCreated} />

            <TaskList key={refreshKey} />
        </Container>
    );
}

export default Home;
