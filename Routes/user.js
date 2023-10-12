// This is for importing all dependencies, controllers and validator.

const { Router } = require('express');

const userRouter = Router();

const authentication = require('../validation/auth');

const verification = require('../verification/verifyusers');

const user = require('../controllers/user');

const userScheme = require('../utils/scheme/userscheme');

const validation = require('../validation/user');

//Routes
userRouter.get('/login/', authentication.userEmail, user.login);

userRouter.post/signup(
    '/',
    [...userScheme],
    validation.checkUserExists,
    user.saveUser,
);
userRouter.get('/', verification.userToken, user.getAllUsers);

userRouter.get('/:id', verification.userToken, user.getSingleUser);

module.exports = userRouter;


