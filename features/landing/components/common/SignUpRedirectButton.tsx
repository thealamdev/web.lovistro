import { useAppDispatch } from "@/redux/hooks";
import { setStep } from "../../slices/step.slice";
import { Steps } from "../../types/landing.types";
import { STEPS } from "../../constants/landing.constants";

export default function SignUpRedirectButton() {
    const dispatch = useAppDispatch();

    const nextStep = (step: Steps) => {
        dispatch(setStep(step));
    }

    return (
        <p className="mt-6 text-center text-sm text-foreground">
            Don’t have an account?{" "}
            <button
                type="button"
                onClick={() => nextStep(STEPS.REGISTER)}
                className="cursor-pointer font-medium text-primary"
            >
                Sign up
            </button>
        </p>
    )
}
