const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static('public'));

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Example: Save report metadata
app.post('/api/reports', async (req, res) => {
    const { ref_number, passport_number, resident_id, full_name, cloudinary_url } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO reports (ref_number, passport_number, resident_id, full_name, cloudinary_url) VALUES ($1,$2,$3,$4,$5) RETURNING id',
            [ref_number, passport_number, resident_id, full_name, cloudinary_url]
        );
        res.json({ success: true, id: result.rows[0].id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
