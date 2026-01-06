import GoogleProvider from "next-auth/providers/google";
import InstagramProvider from "next-auth/providers/instagram";
import EmailProvider from "next-auth/providers/email";
import { NextAuthOptions } from "next-auth";


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID!,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER!,
      from: process.env.EMAIL_FROM!
    })
  ],
  pages: {
    signIn: "/login"
  },
  callbacks: {
    async session({ session, user }) {
      // Add user ID to session for API calls
      session.user.id = user.id;
      return session;
    }
  }
};
