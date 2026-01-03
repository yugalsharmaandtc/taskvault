const app = require('./app');
const { testDbConnection } = require('./config/db');

const PORT = 5000;

async function startServer() {
    await testDbConnection();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer();
