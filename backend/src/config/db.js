const {Pool} = require('pg');

function createDbPool(){

return new Pool({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'yugal@12345',
    database:'taskvault'
})

}

async function testDbConnection(pool){
    try{
        await pool.query('SELECT 1');
        console.log('Database connection successful');

    }catch(error){
        console.error('Database connection failed', error);
    }

}

const pool=createDbPool();

pool.on('connect',()=>{
    console.log('Connected to the database');
});

pool.on('error',(error)=>{
    console.error('Unexpected error on idle client',error);
});

module.exports={pool,testDbConnection};     