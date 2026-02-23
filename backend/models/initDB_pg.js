const db = require('../config/db_pg');

const initializeDatabase = async () => {
    try {
        // Careers Table (PostgreSQL)
        await db.query(`
      CREATE TABLE IF NOT EXISTS careers (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        type VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // Contact Inquiries Table (PostgreSQL)
        await db.query(`
      CREATE TABLE IF NOT EXISTS contact_inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // Resume Uploads Table (PostgreSQL)
        await db.query(`
      CREATE TABLE IF NOT EXISTS resume_uploads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        file_path VARCHAR(500) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        console.log("PostgreSQL Database tables verified/created successfully.");
    } catch (error) {
        console.error("Error initializing PostgreSQL database tables:", error);
    }
};

module.exports = initializeDatabase;
