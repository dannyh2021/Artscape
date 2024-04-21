console.log('testing hello world');
const express = require('express');
const { Client } = require('pg');
// const cors = require('cors');

const port = process.env.PORT || 4000;
const app = express();

const client = new Client({
    user: 'postgres',
    password: '123',
    host: 'localhost', 
    port:'5432',
    database: 'postgres' })

client
.connect()
.then(() => {
    console.log('Connected to PostgreSQL database');
})
.catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
}); 

// app.use(helmet());
// app.use(cors());

app.get('/', (req, res) => res.send('testing'));
app.listen({ port }, () => console.log(`listening on port ${port}`));