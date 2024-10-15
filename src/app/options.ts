import {NextAuthOptions, SessionStrategy} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {getDb} from "@/lib/dbClient";
import {verifyPassword} from "@/lib/hash";
import GoogleProvider from "next-auth/providers/google";
import {encode as defaultEncode, JWTEncodeParams} from "next-auth/jwt";
import {v4 as uuid} from "uuid";
import {PrismaAdapter} from "@next-auth/prisma-adapter";

const prisma = getDb();
const adapter = PrismaAdapter(prisma);

export const authOptions: NextAuthOptions = {
    adapter: adapter,
    session: {
        strategy: "database" as SessionStrategy,
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            id: "credentials",
            type: "credentials",
            name: 'התחברות',
            credentials: {
                email: {label: "אימייל", type: "email", placeholder: "you@example.com"},
                password: {label: "סיסמה", type: "password", placeholder: "••••••••"},
            },
            async authorize(credentials, req) {
                const {email, password}: any = credentials;

                if (!email || !password) {
                    throw new Error('אנא מלא את כל השדות');
                }

                const db = getDb();
                const user = await db.user.findFirst({where: {email}});
                if (!user)
                    throw new Error('משתמש לא נמצא');

                if (!user.password || !verifyPassword(user.password, password))
                    throw new Error('סיסמה שגויה');


                return {
                    id: user.id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role
                };

            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? ""
        }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID ?? "",
        //     clientSecret: process.env.FACEBOOK_SECRET ?? ""
        // })
    ],
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        async session(props: { token: any; session: any; }) {
            const {session} = props;


            const db = getDb();
            const user = await db.user.findFirst({
                where: {
                    email: session.user.email!
                }
            });

            session.user.role = user?.role!;
            session.user.userId = user?.id!;
            return session;
        },
        async jwt({token, account}: any) {
            if (account?.provider === "credentials") {
                token.credentials = true;
            }
            return token;
        }
    },
    jwt: {
        encode: async (params: JWTEncodeParams) => {

            if (!params.token?.credentials)
                return defaultEncode(params);

            if (!params.token.sub) {
                throw new Error("No user ID found in token");
            }
            const sessionToken = uuid();

            const createdSession = await adapter?.createSession?.({
                sessionToken: sessionToken,
                userId: params.token.sub,
                expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
            });

            if (!createdSession) {
                throw new Error("Failed to create session");
            }
            return sessionToken;

        }
    }
};