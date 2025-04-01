
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

// Helper function to execute queries with generic type support
export async function query<T>(sql: string, params?: any[]): Promise<T> {
  try {
    const conn = await getConnection();
    const [results] = await conn.execute<T>(sql, params);
    return results;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}
