require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');

const app = express();
app.use(express.json());

app.use('/api', require('./routes/blogRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));