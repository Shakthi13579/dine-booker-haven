
import { User, createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../models/User';

export async function handleGetAllUsers() {
  try {
    const users = await getAllUsers();
    return { success: true, data: users };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { success: false, error: 'Failed to fetch users' };
  }
}

export async function handleGetUser(id: number) {
  try {
    const user = await getUserById(id);
    if (!user) {
      return { success: false, error: 'User not found' };
    }
    return { success: true, data: user };
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    return { success: false, error: 'Failed to fetch user' };
  }
}

export async function handleCreateUser(userData: User) {
  try {
    // Here you would typically add validation and password hashing
    const result = await createUser(userData);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error creating user:', error);
    return { success: false, error: 'Failed to create user' };
  }
}

export async function handleUpdateUser(id: number, userData: Partial<User>) {
  try {
    const result = await updateUser(id, userData);
    return { success: true, data: result };
  } catch (error) {
    console.error(`Error updating user ${id}:`, error);
    return { success: false, error: 'Failed to update user' };
  }
}

export async function handleDeleteUser(id: number) {
  try {
    await deleteUser(id);
    return { success: true };
  } catch (error) {
    console.error(`Error deleting user ${id}:`, error);
    return { success: false, error: 'Failed to delete user' };
  }
}
