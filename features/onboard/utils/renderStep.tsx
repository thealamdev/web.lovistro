import { Steps } from "../types/onboard.types";
import { STEPS } from "../constants/onboard.constants";
import RootLoginComponent from "../components/login/root.login";
import RootWelcomeComponent from "../components/welcome/root.welcome";
import RootRegisterComponent from "../components/register/root.register";
import RootOtpVerifyComponent from "../components/otp-verify/root.otp-verify";
import RootForgotPasswordComponent from "../components/forgot-password/root.forgot-password";
import RootResetPasswordComponent from "../components/reset-password/root.reset-password";

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

        case STEPS.OTP_VERIFY:
            return <RootOtpVerifyComponent />;

        case STEPS.RESET_PASSWORD:
            return <RootResetPasswordComponent />

        default: {
            const _exhaustive: never = step;
            return _exhaustive;
        }
    }
};