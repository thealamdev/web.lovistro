import { useAppDispatch } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { Steps } from "../../types/landing.types";
import { setStep } from "../../slices/step.slice";
import AppleIcon from "@/components/icons/AppleIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import { STEPS } from "../../constants/landing.constants";
import SignInRedirectButton from "../common/SignInRedirectButton";

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
        <div className="flex flex-col items-center">
            <div className="flex w-full items-center gap-2 rounded-full bg-accent/10 border border-border p-2">
                <Button
                    type="button"
                    size="icon"
                    aria-label="Continue with Google"
                    onClick={onGoogleClick}
                    className="cursor-pointer size-11 shrink-0 rounded-full bg-white hover:bg-white/90"
                >
                    <GoogleIcon className="size-5" />
                </Button>
                <Button
                    type="button"
                    size="icon"
                    aria-label="Continue with Apple"
                    onClick={onAppleClick}
                    className="cursor-pointer size-11 shrink-0 rounded-full bg-white text-black hover:bg-white/90"
                >
                    <AppleIcon className="size-5" />
                </Button>
                <Button
                    onClick={() => nextStep(STEPS.REGISTER)}
                    className="h-11 flex-1 rounded-full font-medium"
                >
                    Create Account
                </Button>
            </div>

            <SignInRedirectButton />
        </div>
    );
}