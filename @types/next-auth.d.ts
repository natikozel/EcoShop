import {DefaultSession} from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            tokenUsed: number;
            role: string;
            userId: string;
        } & DefaultSession["user"];
    }
}