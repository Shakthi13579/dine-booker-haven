
import { Order, OrderItem, createOrder, getAllOrders, getOrderById, getOrdersByUserId, updateOrderStatus } from '../models/Order';

export async function handleGetAllOrders() {
  try {
    const orders = await getAllOrders();
    return { success: true, data: orders };
  } catch (error) {
    console.error('Error fetching orders:', error);
    return { success: false, error: 'Failed to fetch orders' };
  }
}

export async function handleGetOrder(id: number) {
  try {
    const order = await getOrderById(id);
    if (!order) {
      return { success: false, error: 'Order not found' };
    }
    return { success: true, data: order };
  } catch (error) {
    console.error(`Error fetching order ${id}:`, error);
    return { success: false, error: 'Failed to fetch order' };
  }
}

export async function handleGetUserOrders(userId: number) {
  try {
    const orders = await getOrdersByUserId(userId);
    return { success: true, data: orders };
  } catch (error) {
    console.error(`Error fetching orders for user ${userId}:`, error);
    return { success: false, error: 'Failed to fetch user orders' };
  }
}

export async function handleCreateOrder(orderData: Order, items: OrderItem[]) {
  try {
    const result = await createOrder(orderData, items);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error creating order:', error);
    return { success: false, error: 'Failed to create order' };
  }
}

export async function handleUpdateOrderStatus(id: number, status: Order['status']) {
  try {
    await updateOrderStatus(id, status);
    return { success: true };
  } catch (error) {
    console.error(`Error updating order ${id} status:`, error);
    return { success: false, error: 'Failed to update order status' };
  }
}
