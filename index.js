// Import express module
const express = require('express');

// Initialize the app
const app = express();

// Set the port
const PORT = process.env.PORT || 3000;

// Sample data for recreation places and their ticket prices
const recreationPlaces = [
    { id: 1, name: 'Water Park', price: 50000 },
    { id: 2, name: 'Theme Park', price: 75000 },
    { id: 3, name: 'Zoo', price: 30000 },
    { id: 4, name: 'Museum', price: 20000 }
];

// GET endpoint to fetch all ticket prices of recreation places
app.get('/harga-tiket', (req, res) => {
    res.json(recreationPlaces);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
