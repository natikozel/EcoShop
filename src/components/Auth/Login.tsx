"use client";
import ExitXButton from "@/components/Cart/ExitXButton";
import ExternalAuth from "@/components/Auth/ExternalAuth";
import {FieldError, useForm} from "react-hook-form";
import Link from "next/link";
import Submit from "@/components/Auth/Submit";
import AuthLink from "@/components/Auth/AuthLink";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {signIn, useSession} from "next-auth/react";
import {useState} from "react";
import Errors from "@/components/Auth/Errors";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useRouter} from "next/navigation";

const FormSchema = z.object({
    email: z.string().email({message: "אימייל לא תקין"}),
    password: z.string().min(8, {message: "הסיסמא חייבת להכיל לפחות 8 תווים"})
});

export default function Login({style}: { style?: string }) {

    const [errors, setErrors] = useState<FieldError | undefined>(undefined);
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    type FormData = z.infer<typeof FormSchema>;

    const onInvalidSubmit = async (data: FieldError | any) => {
        setErrors(data);
    };

    const onSubmit = async (data: FormData) => {
        const {email, password} = data;
        const res = await signIn('credentials', {email, password, redirect: false, callbackUrl: '/'});

        if (res?.ok)
            router.replace('/');
        else
            setErrors((prevState: any): any => {
                return [
                    {message: res?.error ?? 'אימייל או סיסמה שגויים'}
                ];
            });
    };

    return (
        <div className={`${style} login bg-white rounded-lg shadow-xl w-full max-w-md`}>
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">התחברות</h2>
                    <ExitXButton/>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit, onInvalidSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>אימייל</FormLabel>
                                    <FormControl>
                                        <Input placeholder="you@gmail.com" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>סיסמא</FormLabel>
                                    <FormControl>
                                        <Input placeholder="********" {...field}
                                               type={"password"}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        {errors && <Errors errors={Object.values(errors!).map((err: any) => err?.message)}/>}
                        <div className="flex justify-start">
                            <AuthLink href="/forgotpassword"/>
                        </div>
                        <Submit/>
                    </form>
                </Form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">או המשך באמצעות</span>
                        </div>
                    </div>
                    <ExternalAuth/>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        {"אין לך משתמש?     "}
                        <AuthLink href="/signup"/>
                    </p>
                </div>
            </div>
        </div>
    );

}