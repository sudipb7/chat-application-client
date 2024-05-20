import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { createUser, getUserByEmail } from "@/lib/api";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  providers: [Google],
  callbacks: {
    async jwt({ token }) {
      if (!token.email) {
        return token;
      }

      const {
        data: { user },
      } = await getUserByEmail(token.email);
      if (user) {
        token.sub = user.id;
        token.id = user.id;
        token.name = user.name;
        token.picture = user.image;
      }

      return token;
    },
    async session({ session, token }) {
      if (!session.user) {
        return session;
      }

      if (token.sub) {
        session.user.id = token.sub;
        session.userId = token.sub;
      }

      if (token.email) {
        session.user.email = token.email;
      }

      if (token.name) {
        session.user.name = token.name;
      }

      if (token.picture) {
        session.user.image = token.picture;
      }

      return session;
    },
    async signIn({ profile }) {
      try {
        if (!profile?.email || !profile?.picture) return false;

        const {
          data: { user },
        } = await getUserByEmail(profile.email);
        if (!user) {
          if (!profile.email) return false;

          await createUser({
            email: profile.email,
            name: profile.name || profile.email.split("@")[0],
            image: profile.picture,
          });

          return true;
        }

        return true;
      } catch (error) {
        console.log("Error signing in: ", error);
        return false;
      }
    },
  },
  pages: { signIn: "/sign-in" },
  session: { strategy: "jwt" },
  debug: process.env.NODE_ENV !== "production",
});
