const express = require("express");

const carRouter = require("./routers/car.router.js");
const userRouter = require("./routers/user.router.js");

const PORT = 8005 || process.env.PORT;
const app = express();

app.use(carRouter);
app.use(userRouter);

app.listen(PORT, () => {
    console.log(`Application running at localhost: ${PORT}`);
});