"use client";

import ExitXButton from "@/components/Cart/ExitXButton";
import {useFormState} from "react-dom";
import {handleSignup} from "@/lib/auth";
import FullName from "@/components/Auth/FullName";
import Email from "@/components/Auth/Email";
import Password from "@/components/Auth/Password";
import NewsLetterCheckbox from "@/components/Auth/NewsLetterCheckbox";
import Submit from "@/components/Auth/Submit";
import Errors from "@/components/Auth/Errors";
import AuthLink from "@/components/Auth/AuthLink";
import {useRouter} from "next/navigation";

export default function SignUp({style}: { style?: string }) {

    const initialState: any = {
        ok: null, errors: null, registrationToken: null
    };
    const [state, formAction] = useFormState(handleSignup, initialState);
    const router = useRouter();
    if (state?.ok)
        router.push(`/regsuccess/${state?.registrationToken}`);
    else
        return (
            <div className={`${style} bg-white rounded-lg shadow-xl w-full max-w-md`}>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">{`הרשמה`}</h2>
                        <ExitXButton/>
                    </div>
                    <form action={formAction} className="space-y-4">
                        {state.errors &&
                            <p className={"font-bold text-red-600"}>{`אירעה שגיאה, תקן את הפרטים החסרים`}</p>}
                        <FullName/>
                        <Email/>
                        <Password/>
                        <Password isConfirmPassword/>
                        <NewsLetterCheckbox/>
                        <Errors errors={state.errors}/>
                        <Submit isSignup/>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            {`כבר יש לך חשבון? `}
                            <AuthLink href="/login"/>
                        </p>
                    </div>
                </div>
            </div>
        );
}