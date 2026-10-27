"use client";

import { useState, type FormEvent, type SVGProps } from "react";
import { ArrowLeft, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FieldInput } from "@/components/ui/field-input";
import { useAppDispatch } from "@/redux/hooks";
import { setStep } from "../../slices/step.slice";
import { STEPS } from "../../constants/onboard.constants";

function GoogleIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
            <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" />
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
        </svg>
    );
}

function AppleIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
        </svg>
    );
}

const socialButtonClass =
    "h-12 w-full gap-2 rounded-lg bg-[#333533] text-sm font-medium text-foreground hover:bg-[#3d3f3d]";

export default function RootRegisterComponent() {
    const [show, setShow] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: submit email + password
    };

    return (
        <div className="w-full py-5">
            <nav className="py-3">
                <button
                    type="button"
                    aria-label="Back"
                    className="cursor-pointer"
                    onClick={() => dispatch(setStep(STEPS.WELCOME))}
                >
                    <ArrowLeft size={24} className="text-foreground" />
                </button>
            </nav>

            <header className="mt-6 space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Sign up Using lovistro</h3>
                <p className="text-sm text-[#A8AEBF]">Unlock a world of connections with Lovistro</p>
            </header>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <FieldInput
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    icon={<Mail />}
                    autoComplete="email"
                />

                <FieldInput
                    label="Password"
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                    icon={<Lock />}
                    autoComplete="new-password"
                    endIcon={
                        <button
                            type="button"
                            onClick={() => setShow((s) => !s)}
                            aria-label={show ? "Hide password" : "Show password"}
                            className="cursor-pointer"
                        >
                            {show ? <Eye /> : <EyeOff />}
                        </button>
                    }
                />

                <Button type="submit" className="mt-2 h-12 w-full rounded-lg text-base font-semibold">
                    Sign up
                </Button>
            </form>

            <div className="my-6 flex items-center gap-4">
                <span className="h-px flex-1 bg-border" />
                <span className="text-sm text-foreground">or</span>
                <span className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-3">
                <Button type="button" className={socialButtonClass}>
                    <GoogleIcon className="size-5" />
                    Sign in with Google
                </Button>

                <Button type="button" className={socialButtonClass}>
                    <AppleIcon className="size-5" />
                    Sign in with Apple
                </Button>
            </div>

            <p className="mt-6 text-center text-sm text-foreground">
                Already have an account?{" "}
                <button type="button" className="cursor-pointer font-medium text-primary">
                    Sign in
                </button>
            </p>
        </div>
    );
}