
const { Router } = require("express");

const userController = require("../controllers/userController");

const usersRouter = new Router();

//  @desc   Login Page
//  @route  GET /users/login
usersRouter.get("/login", userController.login);

//  @desc   Login Handle
//  @route  POST /users/login
usersRouter.post("/login", userController.handleLogin);


module.exports = usersRouter;
