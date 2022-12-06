const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");

// COMPONENTS
/**
 * @swagger
 * components:
 *      schemas:
 *          User:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: Auto-generated id of the User
 *                  name:
 *                      type: string
 *                      description: The user's name
 *                  email:
 *                      type: string
 *                      description: The user's email
 *                  password:
 *                      type: string
 *                      description: The user's password
 *                  role:
 *                      type: string
 *                      description: The user's role
 *                  createdAt:
 *                      type: timestamp
 *                      description: The date the data was created
 *                  updatedAt:
 *                      type: timestamp
 *                      description: The date the data was updated
 */ 

/**
 * @swagger
 * components:
 *      schemas:
 *          UserRequest:
 *              type: object
 *              required:
 *                  - name
 *                  - email
 *                  - password
 *              properties:
 *                  name:
 *                      type: string
 *                      description: The user's name
 *                  email:
 *                      type: string
 *                      description: The user's email
 *                  password:
 *                      type: string
 *                      description: The user's password
 */ 

/**
 * @swagger
 * components:
 *      schemas:
 *          UserResponse:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                      description: The user's email
 *                  role:
 *                      type: string
 *                      description: The user's role
 */ 

/**
 * @swagger
 * components:
 *      schemas:
 *          RegisterResponse:
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
 *                      $ref: '#/components/schemas/UserResponse'
 */ 

/**
 * @swagger
 * components:
 *      schemas:
 *          LoginRequest:
 *              type: object
 *              required:
 *                  - email
 *                  - password
 *              properties:
 *                  email:
 *                      type: string
 *                      description: The user's email
 *                  password:
 *                      type: string
 *                      description: The user's password
 */ 

/**
 * @swagger
 * components:
 *      schemas:
 *          LoginResponse:
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
 *                      type: object
 *                      properties:
 *                          Token:
 *                              type: string
 *                              description: The user's access token
 */ 

/**
 * @swagger
 * components:
 *      schemas:
 *          ProfileResponse:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The user's id
 *                  email:
 *                      type: string
 *                      description: The user's email
 *                  role:
 *                      type: string
 *                      description: The user's role
 *                  createdAt:
 *                      type: timestamp
 *                      description: The date the data was created
 *                  updatedAt:
 *                      type: timestamp
 *                      description: The date the data was updated
 */ 

// Register Member
/**
 * @swagger
 * /register/member:
 *      post:
 *          summary: Register new member
 *          tags: [User]
 *          requestBody:
 *              description: Input for new member
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/UserRequest'
 *          responses:
 *              "201":
 *                  description: User successfully registered
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/UserResponse'
 */ 
router.post("/api/register/member", userController.registerMemberHandler);

// Register Admin
/**
 * @swagger
 * /register/admin:
 *      post:
 *          summary: Register new admin
 *          tags: [User]
 *          requestBody:
 *              description: Input for new admin
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/UserRequest'
 *          responses:
 *              "201":
 *                  description: User successfully registered
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/UserResponse'
 */ 
router.post("/api/register/admin", userController.registerAdminHandler);

// Login
/**
 * @swagger
 * /login:
 *      post:
 *          summary: Login for user
 *          tags: [User]
 *          requestBody:
 *              description: Input for login
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/LoginRequest'
 *          responses:
 *              "200":
 *                  description: Logged successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/LoginResponse'
 */ 
router.post("/api/login", userController.loginHandler);

// Current User
/**
 * @swagger
 * /profile:
 *      post:
 *          summary: Check current user
 *          tags: [User]
 *          security:
 *              -   bearerAuth: []
 *          responses:
 *              "200":
 *                  description: Current User
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 */ 
router.post("/api/profile", userController.getProfileHandler);

module.exports = router;