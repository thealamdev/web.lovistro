import { Steps } from "../types/onboard.types";
import { STEPS } from "../constants/onboard.constants";
import RootLoginComponent from "../components/login/root.login";
import RootWelcomeComponent from "../components/welcome/root.welcome";
import RootRegisterComponent from "../components/register/root.register";

export const renderStep = (step: Steps) => {
    switch (step) {
        case STEPS.WELCOME:
            return <RootWelcomeComponent />;

        case STEPS.REGISTER:
            return <RootRegisterComponent />;

        case STEPS.LOGIN:
            return <RootLoginComponent />

        default: {
            const _exhaustive: never = step;
            return _exhaustive;
        }
    }
};