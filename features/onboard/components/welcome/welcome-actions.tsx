import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { setStep } from "../../slices/step.slice";
import { STEPS } from "../../constants/onboard.constants";
import { Steps } from "../../types/onboard.types";
import { SIGN_IN_HREF } from "../../constants/welcome.constants";

type PageProps = {
    onGoogleClick?: () => void;
    onAppleClick?: () => void;
};

export function WelcomeActions({ onGoogleClick, onAppleClick }: PageProps) {

    const dispatch = useAppDispatch();

    const nextStep = (step: Steps) => {
        dispatch(setStep(step));
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex w-full items-center gap-2 rounded-full bg-accent/10 border border-border p-2">
                <Button
                    type="button"
                    size="icon"
                    aria-label="Continue with Google"
                    onClick={onGoogleClick}
                    className="cursor-pointer size-11 shrink-0 rounded-full bg-white hover:bg-white/90"
                >
                    <FcGoogle className="size-5" />
                </Button>
                <Button
                    type="button"
                    size="icon"
                    aria-label="Continue with Apple"
                    onClick={onAppleClick}
                    className="cursor-pointer size-11 shrink-0 rounded-full bg-white text-black hover:bg-white/90"
                >
                    <FaApple className="size-5" />
                </Button>
                <Button
                    onClick={() => nextStep(STEPS.REGISTER)}
                    className="h-11 flex-1 rounded-full font-medium"
                >
                    Create Account
                </Button>
            </div>

            <p className="text-sm text-foreground">
                Already have an account?{" "}
                <Link href={SIGN_IN_HREF} className="font-medium text-primary">
                    Sign in
                </Link>
            </p>
        </div>
    );
}