const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Using PG_ prefixed environment variables to keep existing MySQL data unmodified
const pool = new Pool({
    host: process.env.PG_HOST || '127.0.0.1',
    port: process.env.PG_PORT || 5432,
    user: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASSWORD || '',
    database: process.env.PG_NAME || 'aapthi_marketing',
    ssl: process.env.PG_SSL === 'true'
        ? { rejectUnauthorized: false }
        : false,
    max: 10,
});

pool.on('connect', () => {
    console.log('✅ Connected to PostgreSQL Cloud');
});

pool.on('error', (err) => {
    console.error('❌ Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;
