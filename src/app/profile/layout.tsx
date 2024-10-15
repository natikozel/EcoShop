
import {redirect} from "next/navigation";
import {AuthGuard} from "@/lib/AuthGuard";

export default async function ProfileLayout(props: any) {

    if (!await AuthGuard())
        return redirect('/')

    return (
        <>
            {props.children}
        </>
    );
}