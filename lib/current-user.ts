import { auth } from "@/auth";
import { getUserByEmail } from "./api";

export const currentUser = async () => {
  try {
    const session = await auth();
    if (!session?.user?.email) return null;

    return await getUserByEmail(session.user.email).then(({ data }) => data.user);
  } catch (error) {
    return null;
  }
};
