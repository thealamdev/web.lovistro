import { CalendarDays } from "lucide-react";
import { FieldInput } from "@/components/ui/field-input";
import { Button } from "@/components/ui/button";

import { ONBOARD_STEPS } from "@/features/onboard/constants/onboard.constants";
import Navigate from "../../common/Navigate";
import Progress from "../../common/Progress";
import PageHeader from "../../common/PageHeader";

type Props = {
    birthday: string;
    handleChange: (value: string) => void;
    onContinue: () => void;
};

export default function RootBirthdayComponent({
    birthday,
    handleChange,
    onContinue,
}: Props) {
    return (
        <div className="w-full space-y-6 py-5">
            <Navigate
                to={ONBOARD_STEPS.NAME}
                skip={ONBOARD_STEPS.PHONE}
            />

            <Progress percentage={20} />

            <PageHeader title="When's Your Birthday?" />

            <FieldInput
                label="Date of Birth"
                type="date"
                placeholder="MM/DD/YYYY"
                value={birthday}
                onChange={(e) => handleChange(e.target.value)}
            />

            <div className="sticky bottom-5">
                <Button
                    type="button"
                    onClick={onContinue}
                    disabled={!birthday}
                    className="w-full"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}