"use client";
import {useFormStatus} from "react-dom";

export default function Submit({isSignup, isForgotPassword}: { isSignup?: boolean, isForgotPassword?: boolean }) {


    const {pending} = useFormStatus();

    let buttonText;
    switch (true) {
        case isSignup && pending:
            buttonText = 'מבצע רישום...';
            break;
        case isSignup:
            buttonText = 'הירשם';
            break;
        case isForgotPassword && pending:
            buttonText = 'שולח בקשה...';
            break;
        case isForgotPassword:
            buttonText = 'שלח בקשה';
            break;
        case pending:
            buttonText = 'מתחבר...';
            break;
        default:
            buttonText = 'התחבר';
    }


    return (
        <div>
            <button
                disabled={pending}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                {buttonText}
            </button>
        </div>
    );
}