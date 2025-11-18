CREATE TABLE IF NOT EXISTS joins (
                                     id SERIAL PRIMARY KEY,
                                     json TEXT NOT NULL,
                                     created_at TIMESTAMP DEFAULT NOW()
    );