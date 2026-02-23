const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default Route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'API is running smoothly.' });
});

const initDB_pg = require('./models/initDB_pg');
const contactRoutes = require('./routes/contactRoutes');
const careersRoutes = require('./routes/careersRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Initialize database (PostgreSQL)
initDB_pg();

app.use('/api/contact', contactRoutes);
app.use('/api/careers', careersRoutes);
app.use('/api/admin', adminRoutes);
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
