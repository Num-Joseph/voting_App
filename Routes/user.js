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

userRouter.post(
    '/',
    [...userScheme],
    validation.checkUserExists,
    user.saveUser,
);
userRouter.get('/', verification.userToken, user.getAllUsers);

userRouter.get('/:id', verification.userToken, user.getSingleUser);

// Generating verification codes.
const crypto = require('crypto');

router.post('/register', async (req, res) => {
const { userName, password } = req.body;

const verificationCode = crypto.randomBytes(20).toString('hex');

const newUser = new User({ userName, password, verificationCode});

});

// Sending verification Email.
const transporter = require('./email_config');

router.post('/register', async (req, res) => {
    const { userName, password } = req.body;
    const verificationCode = crypto.randomBytes(20).toString('hex');

    const newUser = new User({ userName, password, verificationCode});

    const mailOptions = {
        from: 'konum5437@gmail.com',
        to: newUser.userName,
        subject: 'Verify Your Email',
        text: 'Your verification code is: ${verificationCode}',
    };

    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Email sending failed'});
        }
    });
});


module.exports = userRouter;


