const express = require("express"); // Import lib express
// const {PORT = 8001} = process.env;
const PORT = 8001 || process.env.PORT;
const app = express(); // Initiate express instance

// Sample data array
const users = [
    {name: "Roni", city: "Bandung"},
    {name: "Agus", city: "Jakarta"}
];

const product = [
    {name: "spoon", quantity: 40},
    {name: "fork", quantity: 36},
    {name: "plate", quantity: 44}
];

// Routing handler
// GET = ambil data
app.get('/', (req, res) => {
    res.json({message: "Index"});
});

app.get('/api/users', (req, res) => {
    res.json({data: users});
});

app.get('/api/users/:id', (request, response) => {
    response.json({message: "user by id"});
});  

app.get('/api/product', (req, res) => {
    console.log("List Product");
    res.json({data: product});
});

app.get('/api/product/:id', (req, res) => {
    res.send("Product 1");
});

// POST = buat data
app.post('/api/users', (req, res) => {
    res.json({message: "Create user"});
});

app.post('/api/product', (req, res) => {
    res.json({message: "Create product"});
});

// PUT/PATCH = ubah data
app.put('/api/users/:id', (req, res) => {
    res.json({message: "Update user"});
});

app.put('/api/product/:id', (req, res) => {
    // res.json({message: "Product Updated"});
    res.send("Product Updated");
});

// DELETE = hapus data
app.delete('/api/users/:id', (req, res) => {
    res.json({message: "Delete user"});
});

app.delete('/api/product/:id', (req, res) => {
    // res.json({message: "Product Deleted"});
    res.send("Product Deleted");
});


// Listen PORT
app.listen(PORT, () => {
    console.log(`Application running at localhost: ${PORT}`);
});