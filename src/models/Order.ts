
import { query } from '../utils/db';

export interface OrderItem {
  id?: number;
  order_id: number;
  dish_id: number;
  quantity: number;
  price: number;
}

export interface Order {
  id?: number;
  user_id: number;
  restaurant_id: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  total_amount: number;
  order_date?: Date;
  items?: OrderItem[];
}

export async function getAllOrders() {
  return query(
    'SELECT * FROM orders ORDER BY order_date DESC'
  );
}

export async function getOrderById(id: number) {
  const orders = await query('SELECT * FROM orders WHERE id = ?', [id]);
  if (orders.length === 0) return null;
  
  const items = await query('SELECT * FROM order_items WHERE order_id = ?', [id]);
  orders[0].items = items;
  
  return orders[0];
}

export async function getOrdersByUserId(userId: number) {
  return query('SELECT * FROM orders WHERE user_id = ? ORDER BY order_date DESC', [userId]);
}

export async function createOrder(order: Order, items: OrderItem[]) {
  // Start a transaction
  const conn = await (await getConnection()).getConnection();
  await conn.beginTransaction();
  
  try {
    // Insert order
    const orderResult = await conn.execute(
      'INSERT INTO orders (user_id, restaurant_id, status, total_amount) VALUES (?, ?, ?, ?)',
      [order.user_id, order.restaurant_id, order.status, order.total_amount]
    );
    
    const orderId = orderResult[0].insertId;
    
    // Insert order items
    for (const item of items) {
      await conn.execute(
        'INSERT INTO order_items (order_id, dish_id, quantity, price) VALUES (?, ?, ?, ?)',
        [orderId, item.dish_id, item.quantity, item.price]
      );
    }
    
    await conn.commit();
    return { ...order, id: orderId };
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    conn.release();
  }
}

export async function updateOrderStatus(id: number, status: Order['status']) {
  return query('UPDATE orders SET status = ? WHERE id = ?', [status, id]);
}
