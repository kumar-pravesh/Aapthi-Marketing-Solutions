const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'aapthi_marketing',
    ssl: { rejectUnauthorized: false }
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    // Wrapper to mimic mysql2 return [rows, fields]
    execute: async (text, params) => {
        const res = await pool.query(text, params);
        // Map rows for compatibility, add rows[0].id as insertId if available
        const result = {
            ...res,
            insertId: res.rows.length > 0 ? res.rows[0].id : null
        };
        return [res.rows, result];
    },
    pool: pool
};
