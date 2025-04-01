
import mysql from 'mysql2/promise';

// Database connection pool
let pool: mysql.Pool | null = null;

export async function getConnection() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'dinebooker',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }
  return pool;
}

// Helper function to execute queries
export async function query(sql: string, params?: any[]) {
  try {
    const conn = await getConnection();
    const [results] = await conn.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}
