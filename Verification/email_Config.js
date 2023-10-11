const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'konum5437@gmail.com',
        pass: 'Benevolent',
    },
});

module.exports = transporter; 