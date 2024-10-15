import {getServerSession} from "next-auth";
import LoggedOutAuthIcon from "@/components/Navbar/LoggedOutAuthIcon";
import LoggedInAuthIcon from "@/components/Navbar/LoggedInAuthIcon";
import {authOptions} from "@/app/options";

export default async function AuthIcon() {

    const session = await getServerSession(authOptions);
    return session ? <LoggedInAuthIcon/> : <LoggedOutAuthIcon/>;

}
