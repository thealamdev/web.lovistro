import { User } from "lucide-react";
import { FieldInput } from "@/components/ui/field-input";
import { Button } from "@/components/ui/button";

import { ONBOARD_STEPS } from "@/features/onboard/constants/onboard.constants";
import Navigate from "../../common/Navigate";
import Progress from "../../common/Progress";
import PageHeader from "../../common/PageHeader";

type Props = {
    name: string;
    handleChange: (value: string) => void;
    onContinue: () => void;
};

export default function RootNameComponent({
    name,
    handleChange,
    onContinue,
}: Props) {
    return (
        <div className="w-full space-y-6 py-5">
            <Navigate
                to={ONBOARD_STEPS.GREETING}
                skip={ONBOARD_STEPS.BIRTHDAY}
            />

            <Progress percentage={10} />

            <PageHeader title="What Should We Call You?" />

            <FieldInput
                label="Your Name"
                type="text"
                placeholder="Enter your full name"
                icon={<User />}
                value={name}
                onChange={(e) => handleChange(e.target.value)}
            />

            <div className="sticky bottom-5">
                <Button
                    type="button"
                    disabled={!name.trim()}
                    onClick={onContinue}
                    className="w-full"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}