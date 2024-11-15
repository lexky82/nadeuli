import NextAuth, { Session, User as NextAuthUser } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios, { Axios, AxiosError } from "axios";
import { JWT } from "next-auth/jwt";

export interface User extends NextAuthUser {
  accessToken?: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post(
            "http://localhost:4000/api/authentication/login",
            {
              email: credentials?.email,
              password: credentials?.password,
            },
            { withCredentials: true }
          );

          if (res.status === 200 && res.data) {
            return res.data;
          }

          return null;
        } catch (error: any) {
          if (error.response && error.response.status === 400) {
            throw new Error(error.response.data.message);
          }

          if (error.response && error.response.status === 500) {
            throw new Error("존재하지 않는 계정입니다.");
          }

          throw new Error(error.message || "서버와의 통신을 실패했습니다. 관리자에게 문의하세요.");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.accessTokenExpires = Date.now() + 3600 * 1000;
      }

      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
        return token;
      }

      const refreshedToken = await refreshAccessToken(token);
      return refreshedToken;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      const updatedUser = await fetchUserFromDatabase(token);

      session.accessToken = token.accessToken;
      session.accessTokenExpires = token.accessTokenExpires;

      session.user = {
        ...session.user,
        name: updatedUser.user.name,
        email: updatedUser.user.email,
      };
      return session;
    },
  },
});

const refreshAccessToken = async (token: JWT) => {
  try {
    const res = await axios.post(
      "http://localhost:4000/api/authentication/refresh",
      {},
      { withCredentials: true }
    );

    const refreshedTokens = res.data;

    if (res.status !== 200) {
      throw new Error("Failed to refresh access token");
    }

    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      accessTokenExpires: Date.now() + 3600 * 1000,
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);

    return null;
  }
};

const fetchUserFromDatabase = async (token: JWT) => {
  try {
    const res = await axios.post("http://localhost:4000/api/profile/profile", {
      email: token.email,
    });

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error("Error refreshing access token:", error);

    return null;
  }
};
