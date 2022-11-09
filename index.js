const express = require("express"); // Import lib express
const authToken = require("./middleware/auth_token");
const formidable = require("formidable");
const cloudinary = require("./config/cloudinary");

const PORT = 8001 || process.env.PORT;
const app = express(); // Initiate express instance

// Parser
app.use(express.json());

// Set view engine EJS
app.set("view engine", "ejs");

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
    // res.json({message: "Index"});
    res.render('index', {
        name: req.query.name
    });
});

// app.get('/api/users', (req, res) => {
//     res.json({
//         message: "Create user", 
//         body: req.body
//     });
// });

app.get('/api/users', authToken, (req, res) => {
    res.json({message: users});
})


// /:id => Path parameter
// ?id=&name=  = Query parameter
// request.body
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
// app.post('/api/users', (req, res) => {
//     res.json({message: "Create user"});
// });

app.post('/api/users', (req, res) => {
    res.json({
        message: "Create user", 
        body: req.body
    });
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

// Study case
app.get('/api/auth', authToken, (req, res) => {
    res.json({message: "Authorized"});
});

app.put('/api/auth', authToken, (req, res) => {
    res.json({message: "Authorized"});
});

app.post('/api/auth', authToken, (req, res) => {
    res.json({message: "Authorized"});
});

app.delete('/api/auth', authToken, (req, res) => {
    res.json({message: "Authorized"});
});

// Media handling
app.post('/upload', (req, res) => {
    const form = formidable({multiples: false});
    let uploadedFiles = "";

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }

        console.log(fields.name);
        console.log(files.files.filepath);
        
        
        cloudinary.uploader.upload(files.files.filepath, function(err, result) {
            uploadedFiles = result.secure_url;
            console.log(result);
            res.json({message: "uploaded success", body: result.secure_url});
        }).catch(err => {
            console.error(err);
        });
    })
});

// Listen PORT
app.listen(PORT, () => {
    console.log(`Application running at localhost: ${PORT}`);
});