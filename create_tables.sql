CREATE TABLE IF NOT EXISTS reports (
    id SERIAL PRIMARY KEY,
    ref_number VARCHAR(50) UNIQUE NOT NULL,
    issue_date DATE,
    passport_number VARCHAR(50),
    resident_id VARCHAR(50),
    resident_status VARCHAR(20),
    full_name TEXT,
    nationality TEXT,
    uploaded_at TIMESTAMPTZ DEFAULT NOW(),
    cloudinary_url TEXT
);
CREATE TABLE IF NOT EXISTS sessions (
    id SERIAL PRIMARY KEY,
    session_token TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
