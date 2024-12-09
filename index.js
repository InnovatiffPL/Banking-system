// 1. Import Express
const express = require('express');

// Initialise the app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to my simple Node.js backend!');
});

// Define another route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Here is some data', data: [1, 2, 3, 4] });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// 2. Create more routes to include more endpoints:
// POST route to create data
app.post('/api/data', (req, res) => {
    const newData = req.body; // Expect JSON input
    res.json({ message: 'Data received', data: newData });
});

// DELETE route to delete data
app.delete('/api/data/:id', (req, res) => {
    const id = req.params.id; // Access the ID from the URL
    res.json({ message: `Data with ID ${id} deleted` });
});

// 3. Integrate the database to fetch or store data:

const { Client } = require('pg');

// Database connection configuration
const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '20Europeo!',
    database: 'postgres'
});

// Connect to the database
client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');

        // Query the version
        return client.query('SELECT version();');
    })
    .then((result) => {
        console.log('PostgreSQL Version:', result.rows[0].version);
    })
    .catch((err) => {
        console.error('Error connecting to PostgreSQL:', err.stack);
    })
    .finally(() => {
        client.end(); // Close the connection
        process.exit(); // Forcefully exit the Node.js process
        // - without this second line the process will run endlessly, can only be terminated in git bash with ctrl+c
    });