import NextAuth from "next-auth";
import google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [google],

  /* Extending the session with JWT */
  // callbacks: {
  //   jwt({ token, user }) {
  //     if (user) {
  //       // User is available during sign-in
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  //   session({ session, token }) {
  //     session.user.id = token.id;
  //     return session;
  //   },
  // },

  /* Extending the session with database */
  // callbacks: {
  //   session({ session, user }) {
  //     session.user.id = user.id;
  //     return session;
  //   },
  // },
});
