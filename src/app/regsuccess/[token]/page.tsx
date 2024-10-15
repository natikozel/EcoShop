import RegistrationSuccess from "@/components/Auth/RegistrationSuccess";
import {verifyRegistrationToken} from "@/lib/hash";
import {notFound} from "next/navigation";

export default async function RegSuccess({params}: { params: { token: string } }) {

    const {token} = params;
    if (!(await verifyRegistrationToken(token))) {
        return notFound();
    }

    return (
        <RegistrationSuccess/>
    );
}