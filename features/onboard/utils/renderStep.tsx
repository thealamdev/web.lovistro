import { Steps } from "../types/onboard.types";
import { STEPS } from "../constants/onboard.constants";
import RootWelcomeComponent from "../components/welcome/root.welcome";
import RootRegisterComponent from "../components/register/root.register";
import RootForgotPasswordComponent from "../components/forgot-password/root.forgot-password";
import RootLoginComponent from "../components/login/root.login";

export const renderStep = (step: Steps) => {
    switch (step) {
        case STEPS.WELCOME:
            return <RootWelcomeComponent />;

        case STEPS.REGISTER:
            return <RootRegisterComponent />;

        case STEPS.LOGIN:
            return <RootLoginComponent />;

        case STEPS.FORGOT_PASSWORD:
            return <RootForgotPasswordComponent />;

        default: {
            const _exhaustive: never = step;
            return _exhaustive;
        }
    }
};