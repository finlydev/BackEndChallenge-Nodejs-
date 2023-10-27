const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000;
const corsOptions = { credentials: true, origin: process.env.URL || '*' };

app.use(cors(corsOptions));
app.use(cookieParser());

// Routes
app.use('/api', require('./api/v.1/routes/index'));

app.use((req, res, next) => {
    res.status(404).json({message: 'Not Found', code: 404})
})

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
module.exports = app;
