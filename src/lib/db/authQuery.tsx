import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUserExists = async () => {
  const user = await currentUser();

  if (!user) return null;

  //   check user already exusts
  const loggedUser = await db.user.findUnique({ where: { clerk_id: user.id } });

  //   if user found then return user
  if (loggedUser) {
    return loggedUser;
  } else {
    const newUser = await db.user.create({
      data: {
        clerk_id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  }
};

export const getUserByClerkID = async (userId: string) => {
  if (!userId) return null;

  try {
    const userData = await db.user.findUnique({ where: { clerk_id: userId } });

    return userData;
  } catch (error) {
    return error;
  }
};
