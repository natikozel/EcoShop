"use client";
import ExitXButton from "@/components/Cart/ExitXButton";
import {FieldError, useForm} from "react-hook-form";
import Link from "next/link";
import Submit from "@/components/Auth/Submit";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {useState} from "react";
import Errors from "@/components/Auth/Errors";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useRouter} from "next/navigation";
import AuthLink from "@/components/Auth/AuthLink";

const FormSchema = z.object({
    email: z.string().email({message: "אימייל לא תקין"})
});

export default function ForgotPassword({style}: { style?: string }) {
    const [errors, setErrors] = useState<FieldError | undefined>(undefined);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: ''
        }
    });

    type FormData = z.infer<typeof FormSchema>;

    const onInvalidSubmit = async (data: FieldError | any) => {
        setErrors(data);
    };

    const onSubmit = async (data: FormData) => {
        const {email} = data;
        // Implement forgot password logic here
        setSuccess(true);
    };


    return (

        <div className={`${style} bg-white rounded-lg shadow-xl w-full max-w-md`}>
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">שכחתי סיסמא</h2>
                    <ExitXButton/>
                </div>
                {!success ? (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit, onInvalidSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>אימייל</FormLabel>
                                        <FormControl>
                                            <Input placeholder="you@example.com" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            {errors && <Errors errors={Object.values(errors!).map((err: any) => err?.message)}/>}
                            <Submit isForgotPassword/>
                        </form>
                    </Form>
                ) : (
                    <div className="text-center">
                        <p className="text-green-600 mb-4">
                            הוראות לשחזור סיסמא נשלחו לכתובת האימייל שלך
                        </p>
                        <Submit/>
                    </div>
                )}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        {`זוכר את הסיסמא? `}
                        <AuthLink href="/login"/>
                    </p>
                </div>
            </div>
        </div>
    );
}