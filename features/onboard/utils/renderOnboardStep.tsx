import { ONBOARD_STEPS, OnboardSteps } from '../constants/onboard.constants';
import { OnboardFormState } from '../types/onboard-form.types';

import RootGreetingComponent from '../components/greeting/root.greeting';
import RootNameComponent from '../components/onboard-form/name/root.name';
import RootBirthdayComponent from '../components/onboard-form/birthday/root.birthday';

type Props = {
    step: OnboardSteps;
    form: OnboardFormState;
    handleChange: <K extends keyof OnboardFormState>(
        field: K,
        value: OnboardFormState[K]
    ) => void;
    onContinue: (step: OnboardSteps) => void;
};

export const renderOnboardStep = ({
    step,
    form,
    handleChange,
    onContinue,
}: Props) => {
    switch (step) {
        case ONBOARD_STEPS.GREETING:
            return (
                <RootGreetingComponent />
            );

        case ONBOARD_STEPS.NAME:
            return (
                <RootNameComponent
                    name={form.name}
                    handleChange={(value) => handleChange('name', value)}
                    onContinue={() => onContinue(ONBOARD_STEPS.BIRTHDAY)}
                />
            );

        case ONBOARD_STEPS.BIRTHDAY:
            return (
                <RootBirthdayComponent
                    birthday={form.birthday}
                    handleChange={(value) => handleChange('birthday', value)}
                    onContinue={() => onContinue(ONBOARD_STEPS.PHONE)}
                />
            );

        case ONBOARD_STEPS.PHONE:
            return null;

        case ONBOARD_STEPS.GENDER:
            return null;

        case ONBOARD_STEPS.RELIGION:
            return null;

        default:
            return <RootGreetingComponent />;
    }
};