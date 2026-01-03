const { Pool } = require('pg');

function createDbPool() {
    return new Pool({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'yugal@12345',
        database: 'taskvault_db'
    });
}

const pool = createDbPool();

async function testDbConnection() {
    try {
        await pool.query('SELECT 1');
        console.log('Database connection successful');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
}

pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.error('Unexpected error on idle client', error);
});

module.exports = {
    pool,
    testDbConnection
};
