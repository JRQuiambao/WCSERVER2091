const express = require('express');
const app = express();

const dishes = [
{type: 'Sisig', province: 'Pampanga', price: 220},
{type: 'Adobo', province: 'Batangas', price: 180},
{type: 'Kare-Kare', province: 'Pampanga', price: 250},
{type: 'Lechon', province: 'Cebu', price: 300},
];

// Route to display all records
app.get('/dishes', (req, res) => {
res.json(dishes);
});

// Route to display a specific record based on the dish type
app.get('/dishes/:type', (req, res) => {
const dishType = req.params.type;
const dish = dishes.find(d => d.type.toLowerCase() === dishType.toLowerCase());

if (dish) {
res.json(dish);
} else {
res.status(404).send('Record not found');
}
});

// Route for undefined routes
app.use((req, res) => {
res.status(404).send('Record not found');
});

// Start server
app.listen(3000, () => {
console.log('Server started on port 3000');
});