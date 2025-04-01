
import { getConnection } from './db';

// SQL statements to create the database schema
const CREATE_USERS_TABLE = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

const CREATE_ORDERS_TABLE = `
CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  restaurant_id INT NOT NULL,
  status ENUM('pending', 'confirmed', 'completed', 'cancelled') DEFAULT 'pending',
  total_amount DECIMAL(10, 2) NOT NULL,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
)`;

const CREATE_ORDER_ITEMS_TABLE = `
CREATE TABLE IF NOT EXISTS order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  dish_id INT NOT NULL,
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
)`;

export async function setupDatabase() {
  const conn = await getConnection();
  try {
    console.log('Setting up database tables...');
    await conn.execute(CREATE_USERS_TABLE);
    await conn.execute(CREATE_ORDERS_TABLE);
    await conn.execute(CREATE_ORDER_ITEMS_TABLE);
    console.log('Database setup completed successfully.');
  } catch (error) {
    console.error('Error setting up database:', error);
    throw error;
  }
}

// Call this function when your application starts
// setupDatabase().catch(console.error);
