import { useState } from "react";
import { type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { FieldInput } from "@/components/ui/field-input";
import { useAppDispatch } from "@/redux/hooks";
import { setStep } from "../../slices/step.slice";
import { Steps } from "../../types/onboard.types";
import { STEPS } from "../../constants/onboard.constants";

type PageProps = {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function LoginForm({
    handleSubmit
}: PageProps) {

    const dispatch = useAppDispatch();
    const [show, setShow] = useState<boolean>(false);

    const nextStep = (step: Steps) => {
        dispatch(setStep(step));
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <FieldInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                icon={<Mail />}
                autoComplete="email"
            />

            <div className="space-y-1">
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
                <button
                    type="button"
                    onClick={() => nextStep(STEPS.FORGOT_PASSWORD)}
                    className="cursor-pointer hover:underline w-full block text-primary text-sm font-medium leading-5.5 text-end"
                >
                    Forgot password
                </button>
            </div>

            <Button type="submit" className="mt-2 h-12 w-full rounded-lg text-base font-semibold">
                Sign In
            </Button>
        </form>
    )
}
