const db = require('../config/db_pg');

// Get all open career positions
exports.getCareers = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM careers ORDER BY created_at DESC');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching careers:', error);
        res.status(500).json({ error: 'Failed to fetch careers' });
    }
};

// Handle resume upload
exports.uploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const { name } = req.body;
        const filePath = req.file.path;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        // Insert into DB
        const result = await db.query(
            'INSERT INTO resume_uploads (name, file_path) VALUES ($1, $2) RETURNING id',
            [name, filePath]
        );

        res.status(201).json({ message: 'Resume uploaded successfully', id: result.rows[0].id });
    } catch (error) {
        console.error('Error uploading resume:', error);
        res.status(500).json({ error: 'Failed to upload resume' });
    }
};
