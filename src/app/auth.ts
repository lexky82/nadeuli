import NextAuth, { Session, User as NextAuthUser } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios, { Axios, AxiosError } from "axios";
import { JWT } from "next-auth/jwt";

interface User extends NextAuthUser {
  nickname?: string;
  accessToken?: string;
  refreshToken?: string;
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
          const res = await axios.post("http://localhost:4000/api/auth/login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          if (res.status === 200 && res.data) {
            return res.data; // 사용자 정보 반환
          }

          return null;
        } catch (error: any) {
          if (error.response && error.response.status === 400) {
            throw new Error(error.response.data.message);
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
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = Date.now() + 3600 * 1000;
      }

      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
        return token;
      }

      const refreshedToken = await refreshAccessToken(token);
      return refreshedToken;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.accessTokenExpires = token.accessTokenExpires;
      return session;
    },
  },
});

const refreshAccessToken = async (token: JWT) => {
  try {
    const res = await axios.post(
      "http://localhost:4000/api/auth/refresh",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.refreshToken}`,
        },
      }
    );

    const refreshedTokens = res.data;

    if (res.status !== 200) {
      throw new Error("Failed to refresh access token");
    }

    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      accessTokenExpires: Date.now() + 3600 * 1000,
      refreshToken: refreshedTokens.refreshToken ?? token.refreshToken,
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};
