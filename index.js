const express = require("express");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const formidableMiddleware = require("formidable");

const carRouter = require("./router/car.router.js");
const userRouter = require('./router/user.router.js');

const PORT = 8005 || process.env.PORT;
const app = express();

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Binar Synrgy Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Binar Synrgy",
          url: "https://binaracademy.com",
          email: "binaracademy.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000/posts",
        },
      ],
    },
    apis: [
        "./router/car.router.js"
    ],
};
const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(carRouter);
app.use(userRouter);

app.listen(PORT, () => {
    console.log(`Application running at localhost: ${PORT}`);
});