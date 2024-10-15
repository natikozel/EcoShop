
import {redirect} from "next/navigation";
import {AuthGuard} from "@/lib/AuthGuard";

export default async function ForgotPasswordLayout(props: any) {

    if (!await AuthGuard())
        return redirect('/')

    return (
        <>
            {props.children}
        </>
    );
}