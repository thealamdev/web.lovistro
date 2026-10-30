import { ArrowLeft } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks"
import { setStep } from "../../slices/step.slice";
import { Steps } from "../../types/landing.types";

type PageProps = {
    to: Steps;
}

export default function Navigate({
    to
}: PageProps) {

    const dispatch = useAppDispatch();

    return (
        <nav className="py-3">
            <button
                type="button"
                aria-label="Back"
                className="cursor-pointer"
                onClick={() => dispatch(setStep(to))}
            >
                <ArrowLeft size={24} className="text-foreground" />
            </button>
        </nav>
    )
}
