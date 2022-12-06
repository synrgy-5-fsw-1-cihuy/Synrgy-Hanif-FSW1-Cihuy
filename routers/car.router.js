const express = require("express");
const router = express.Router();
const carController = require("../controllers/car.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");

// COMPONENTS
/**
 * @swagger
 * components:
 *      schemas:
 *          Car:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: Auto-generated id of the car
 *                  name:
 *                      type: string
 *                      description: The name of the car
 *                  price:
 *                      type: string
 *                      description: The price of the car
 *                  size:
 *                      type: string
 *                      description: The size of the car
 *                  photo:
 *                      type: string
 *                      description: The photo url of the car
 *                  createdAt:
 *                      type: timestamp
 *                      description: The date the data was created
 *                  updatedAt:
 *                      type: timestamp
 *                      description: The date the data was updated
 *                  deletedAt:
 *                      type: timestamp
 *                      description: The date the data was deleted
 *                  createdBy:
 *                      type: string
 *                      description: The user who created the data
 *                  updatedBy:
 *                      type: string
 *                      description: The user who updated the data
 *                  deletedBy:
 *                      type: string
 *                      description: The user who deleted the data
 */ 

/**
 * @swagger
 * components:
 *      schemas:
 *          CarReq:
 *              type: object
 *              required:
 *                  - name
 *                  - price
 *                  - size
 *                  - photo
 *              properties:
 *                  name:
 *                      type: string
 *                      description: The name of the car
 *                  price:
 *                      type: string
 *                      description: The price of the car
 *                  size:
 *                      type: string
 *                      description: The size of the car
 *                  photo:
 *                      type: string
 *                      format: binary
 *                      description: The photo url of the car
 */ 

/**
 * @swagger
 * components:
 *      schemas:
 *          CarGetAllRes:
 *              type: object
 *              properties:
 *                  status:
 *                      type: integer
 *                      description: HTTP status code
 *                  message:
 *                      type: string
 *                      description: The message response
 *                  data:
 *                      type: array
 *                      description: The data result
 *                      items:
 *                          $ref: '#/components/schemas/Car'
 */ 

/**
 * @swagger
 * components:
 *      schemas:
 *          CarGetByIdRes:
 *              type: object
 *              properties:
 *                  status:
 *                      type: integer
 *                      description: HTTP status code
 *                  message:
 *                      type: string
 *                      description: The message response
 *                  data:
 *                      description: The data result
 *                      $ref: '#/components/schemas/Car'
 */ 

/**
 * @swagger
 * components:
 *      schemas:
 *          CarCreateRes:
 *              type: object
 *              properties:
 *                  status:
 *                      type: integer
 *                      description: HTTP status code
 *                  message:
 *                      type: string
 *                      description: The message response
 *                  data:
 *                      description: The data result
 *                      $ref: '#/components/schemas/Car'
 */ 

/** 
 * @swagger
 * components:
 *      securitySchemes:
 *          bearerAuth:
 *              type: http
 *              scheme: bearer
 *              bearerFormat: JWT
*/

// GET ALL
/**
 * @swagger
 * /cars:
 *      get:
 *          summary: Get all Car data
 *          tags: [Car]
 *          security:
 *              -   bearerAuth: []
 *          responses:
 *              "200":
 *                  description: Retrieve all cars
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/CarGetAllRes'
 */ 
router.get("/api/cars", authMiddleware, carController.getAllCarHandler);

// GET BY ID
/**
 * @swagger
 * /cars/{id}:
 *      get:
 *          summary: Get Car data by id
 *          tags: [Car]
 *          security:
 *              -   bearerAuth: []
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  schema:
 *                      type: integer
 *                  required: true
 *                  description: The car id
 *          responses:
 *              "200":
 *                  description: Retrieve car by id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/CarGetByIdRes'
 *              "404":
 *                  description: Car not found
 */ 
router.get("/api/cars/:id", authMiddleware, carController.getCarByIdHandler);

// POST
/**
 * @swagger
 * /cars:
 *      post:
 *          summary: Create new car data
 *          tags: [Car]
 *          security:
 *              -   bearerAuth: []
 *          requestBody:
 *              description: Input for new car
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/CarReq'
 *          responses:
 *              "201":
 *                  description: Car successfully created
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/CarCreateRes'
 */ 
router.post("/api/cars", authMiddleware, carController.postCarHandler);

// PUT
/**
 * @swagger
 * /cars/{id}:
 *      put:
 *          summary: Update car data
 *          tags: [Car]
 *          security:
 *              -   bearerAuth: []
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  schema:
 *                      type: integer
 *                  required: true
 *                  description: The car id
 *          requestBody:
 *              description: Input for updating car
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/CarReq'
 *          responses:
 *              "201":
 *                  description: Car successfully updated
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/CarCreateRes'
 */ 
router.put("/api/cars/:id", authMiddleware, carController.putCarHandler);

// DELETE
/**
 * @swagger
 * /cars/{id}:
 *      delete:
 *          summary: Delete car data
 *          tags: [Car]
 *          security:
 *              -   bearerAuth: []
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  schema:
 *                      type: integer
 *                  required: true
 *                  description: The car id
 *          responses:
 *              "204":
 *                  description: Car successfully deleted
 */ 
router.delete("/api/cars/:id", authMiddleware, carController.deleteCarHandler);

module.exports = router;