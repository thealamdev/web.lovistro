import { TOTAL_STEPS } from "../../constants/welcome.constants";

type PageProps = {
    currentStep: number;
};

export function StepProgress({ currentStep }: PageProps) {
    return (
        <div className="relative z-10 grid grid-cols-3 items-center gap-2">
            {Array.from({ length: TOTAL_STEPS }, (_, index) => (
                <div
                    key={index}
                    className={`h-1.5 rounded-full transition-colors duration-300 ${index < currentStep ? "bg-primary" : "bg-muted"
                        }`}
                />
            ))}
        </div>
    );
}