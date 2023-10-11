const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./authRoutes');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log('server is running on port ${PORT}');
});