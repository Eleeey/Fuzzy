"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";



// CREATE
export async function createUser(user: any) {
  try {

    const newUser = await db.User.create({data:user});

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}

// READ
export async function getUserById(userId: string) {
  try {
    

    const user = await db.User.findOne({ clerkId: userId });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}

// UPDATE
export async function updateUser(clerkId: string, user: any) {
  try {
    
    const updatedUser = await db.User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
  }
}

// DELETE
export async function deleteUser(clerkId: string) {
  try {
    

    // Find user to delete
    const userToDelete = await db.user.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await db.user.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    console.log(error);
  }
}

