
import { query } from '../utils/db';

export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  created_at?: Date;
}

export async function getAllUsers() {
  return query(
    'SELECT id, username, email, created_at FROM users ORDER BY created_at DESC'
  );
}

export async function getUserById(id: number) {
  const users = await query('SELECT id, username, email, created_at FROM users WHERE id = ?', [id]);
  return users[0];
}

export async function createUser(user: User) {
  const result = await query(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [user.username, user.email, user.password]
  );
  return result;
}

export async function updateUser(id: number, user: Partial<User>) {
  const fields = Object.keys(user).map(key => `${key} = ?`).join(', ');
  const values = Object.values(user);
  
  const result = await query(
    `UPDATE users SET ${fields} WHERE id = ?`,
    [...values, id]
  );
  return result;
}

export async function deleteUser(id: number) {
  return query('DELETE FROM users WHERE id = ?', [id]);
}
