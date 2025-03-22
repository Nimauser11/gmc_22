import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg;

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER || 'kpix_user',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'kpix_db',
  password: process.env.DB_PASSWORD || 'kpix_password',
  port: parseInt(process.env.DB_PORT || '5432'),
});

// Test the connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client:', err.stack);
  }
  console.log('Successfully connected to PostgreSQL database');
  release();
});

export default pool; 