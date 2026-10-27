import { Steps } from "../types/onboard.types";
import { STEPS } from "../constants/onboard.constants";
import RootWelcomeComponent from "../components/welcome/root.welcome";
import RootRegisterComponent from "../components/register/root.register";

export const renderStep = (step: Steps) => {
    switch (step) {
        case STEPS.WELCOME:
            return <RootWelcomeComponent />;

        case STEPS.REGISTER:
            return <RootRegisterComponent />;
            
        default: {
            const _exhaustive: never = step;
            return _exhaustive;
        }
    }
};