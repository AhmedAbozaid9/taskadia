/* eslint-disable no-undef */
import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
};
