const express = require("express");
const formidableMiddleware = require("formidable");

const carRouter = require("./router/car.router.js");
const userRouter = require('./router/user.router.js');

const PORT = 8005 || process.env.PORT;
const app = express();

app.use(carRouter);
app.use(userRouter);

app.listen(PORT, () => {
    console.log(`Application running at localhost: ${PORT}`);
});