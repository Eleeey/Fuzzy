"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "../db";

export const getUserImage = async () => {
  const authUser = await currentUser();

  !authUser && ("no authenticated user found")

  const user = await db.user.findUnique({ where: { clerkId: authUser?.id } });
  !user && ("no user")
  return user?.profileImage
};

export const removeProfileImage = async () => {
  try {
    const authUser = await currentUser();

    if (!authUser) {
      console.log("no user found");
    }
    const response = await db.user.update({
      where: {
        clerkId: authUser?.id,
      },
      data: {
        profileImage: "",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const uploadProfileImage = async (image: string) => {
  try {
    const authUser = await currentUser();
    if (!authUser) {
      console.log("no user found");
    }
    const id = authUser?.id;
    const response = await db.user.update({
      where: {
        clerkId: id,
      },
      data: {
        profileImage: image,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
