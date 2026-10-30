import { useState } from "react";
import { type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { FieldInput } from "@/components/ui/field-input";

type PageProps = {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function RegisterForm({
    handleSubmit
}: PageProps) {

    const [show, setShow] = useState<boolean>(false);

    return (
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
    )
}
