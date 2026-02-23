const db = require('../config/db_pg');

// Handle contact inquiry submission
exports.submitInquiry = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Name, email, and message are required' });
        }

        // Insert into DB
        const result = await db.query(
            'INSERT INTO contact_inquiries (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING id',
            [name, email, phone, message]
        );

        // Email will be handled on the frontend using EmailJS; backend no longer sends SMTP emails.
        res.status(201).json({ message: 'Inquiry submitted successfully', id: result.rows[0].id });
    } catch (error) {
        console.error('Error submitting inquiry:', error);
        res.status(500).json({ error: 'Failed to submit inquiry' });
    }
};
