//For importing all dependancies 
const { prismaClient } = require('@prisma/client');

const { signToken } = require('../utils/usertoken');

const prisma = new prismaClient();

// Login function for Users/admins.
const login = async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const users = await prisma.user.findFirst({
            where: {
                email,
                password,
            },
        });
        console.log(users);
        if (!users) {
            res.status(400).json({
               message: 'Invalid Password', 
            });
        } else {
            const token = signToken(users.id);
            res.status(200).json({
                token,
            });
        }
    }catch (error) {
        console.log(error);
        next(new HttpException(422, error.message));
    }
};

// loading all users 
const getAllUsers = async (req, res, next) => {
    try {
        const user = await prisma.user.findMany({});
        res.status(200).json({
            user,
        });
    } catch (error) {
        next(new HttpException(400, error.message));
    }
};

// saving a user
const saveUser = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).json({
            error:error.array(),
        });
    }
    try {
        const data = req.body;
        const user = await prisma.user.create({
            data,
        });
        res.status(201).json({
            user,
        });
    } catch (error) {
        console.log(error);
        next(new HttpException(422, error.message));
    }
};

module.exports = {
login,
getAllUsers,
saveUser,
}