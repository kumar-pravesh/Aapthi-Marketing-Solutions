const db = require('../config/db');
const nodemailer = require('nodemailer');

// Handle contact inquiry submission
exports.submitInquiry = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Name, email, and message are required' });
        }

        // Insert into DB
        const [rows, result] = await db.execute(
            'INSERT INTO contact_inquiries (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING id',
            [name, email, phone, message]
        );

        // Optional: Send Email Notification to admin
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            await transporter.sendMail({
                from: process.env.EMAIL_FROM,
                to: process.env.EMAIL_FROM, // Send to self as notification
                subject: `New Corporate Inquiry from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
            });
        } catch (mailError) {
            console.error('Email sending failed:', mailError);
        }

        res.status(201).json({ message: 'Inquiry submitted successfully', id: result.insertId });
    } catch (error) {
        console.error('Error submitting inquiry:', error);
        res.status(500).json({ error: 'Failed to submit inquiry' });
    }
};
