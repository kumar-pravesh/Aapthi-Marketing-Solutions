const db = require('../config/db');
const initDB = require('../models/initDB');

const run = async () => {
    console.log("Starting manual database initialization...");
    try {
        await initDB();
        console.log("Manual initialization complete.");
        process.exit(0);
    } catch (error) {
        console.error("Manual initialization failed:", error);
        process.exit(1);
    }
};

run();
