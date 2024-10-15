import NextAuth, {SessionStrategy} from "next-auth";
import {authOptions} from "@/app/options";

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};