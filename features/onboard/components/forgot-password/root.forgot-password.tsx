import { FieldInput } from "@/components/ui/field-input";
import { STEPS } from "../../constants/onboard.constants";
import Navigate from "../common/Navigate";
import PageHeader from "../common/PageHeader";
import { type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RootForgotPasswordComponent() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: submit email
    };

    return (
        <div className="w-full py-5">
            <Navigate to={STEPS.LOGIN} />

            <PageHeader
                title="Forgot Password"
                description="Enter your email to reset your new password"
            />

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <FieldInput
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    icon={<Mail />}
                    autoComplete="email"
                />

                <Button type="submit" className="mt-40 h-12 w-full rounded-lg text-base font-semibold">
                    Send Verification OTP
                </Button>
            </form>

        </div>
    )
}
