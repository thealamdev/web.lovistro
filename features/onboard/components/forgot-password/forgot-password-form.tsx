import { Button } from "@/components/ui/button";
import { FieldInput } from "@/components/ui/field-input";
import { Mail } from "lucide-react";
import { type FormEvent } from "react";

type PageProps = {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function ForgotPasswordForm({
    handleSubmit
}: PageProps) {
    
    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <FieldInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                icon={<Mail />}
                autoComplete="email"
            />

            <Button
                type="submit"
                className="mt-40 h-12 w-full rounded-lg text-base font-semibold"
            >
                Send Verification OTP
            </Button>
        </form>
    )
}
