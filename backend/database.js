const { Client } = require('pg');

const initializeDatabase = () => {
    const client = new Client({
        user: 'postgres',
        password: '123',
        host: 'localhost',
        port:'5432',
        database: 'postgres'
    });
    
    client
        .connect()
        .then(() => {
            console.log('Connected to PostgreSQL database');
        })
        .catch((err) => {
            console.error('Error connecting to PostgreSQL database', err);
        });
};

module.exports = { initializeDatabase } ;