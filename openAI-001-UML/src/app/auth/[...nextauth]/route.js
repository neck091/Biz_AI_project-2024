import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers/credentials";

const hander = NextAuth({
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/auth/error",
    verifyRequest: "/auth-veryfy-request",
    newUser: "/join",
  },

  providers: [
    CredentialsProvider({
      name: "Email and Password",

      credentials: {
        email: {
          label: "이메일",
          type: "email",
          placeholder: "이메일 입력",
        },
        password: {
          label: "비밀번호",
          type: "password",
          placeholder: "비번 입력",
        },
      },
      async authorize(_, req) {
        const user = {
          id: "1",
          name: "callor",
          email: "callor@callor.com",
          password: "12345",
        };
        if (user) return user;
        else return null;
      },
    }),
  ],
});

export { hander as GET, hander as POST };
