import {redirect} from "next/navigation";
import {AuthGuardAdmin} from "@/lib/AuthGuard";

export default async function AdminLayout(props: any) {

    if (!await AuthGuardAdmin())
        return redirect('/')

    return (
        <>
            {props.children}
        </>
    );
}