import { ArrowLeft } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks"
import { Button } from "@/components/ui/button";
import { setOnboardStep } from "../../slices/onboard-form-step.slice";
import { ONBOARD_STEPS, OnboardSteps } from "../../constants/onboard.constants";

type PageProps = {
    to: OnboardSteps;
    skip?: OnboardSteps;
}

export default function Navigate({
    to,
    skip
}: PageProps) {

    const dispatch = useAppDispatch();

    return (
        <nav className="flex justify-between items-center py-3">
            <button
                type="button"
                aria-label="Back"
                className="cursor-pointer"
                onClick={() => dispatch(setOnboardStep(to))}
            >
                <ArrowLeft size={24} className="text-foreground" />
            </button>

            <Button
                type="button"
                onClick={() => dispatch(setOnboardStep(skip ?? ONBOARD_STEPS.GREETING))}
                className="px-4 py-2 rounded-full"
            >
                Skip
            </Button>
        </nav>
    )
}
