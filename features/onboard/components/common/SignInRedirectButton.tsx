import { useAppDispatch } from "@/redux/hooks";
import { setStep } from "../../slices/step.slice";
import { Steps } from "../../types/onboard.types";
import { STEPS } from "../../constants/onboard.constants";

export default function SignInRedirectButton() {
    const dispatch = useAppDispatch();

    const nextStep = (step: Steps) => {
        dispatch(setStep(step));
    }
    return (
        <p className="mt-6 text-center text-sm text-foreground">
            Already have an account?{" "}
            <button
                type="button"
                onClick={() => nextStep(STEPS.LOGIN)}
                className="font-medium text-primary cursor-pointer"
            >
                Sign in
            </button>
        </p>
    )
}