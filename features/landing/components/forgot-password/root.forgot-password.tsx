import { type FormEvent } from "react";
import Navigate from "../common/Navigate";
import PageHeader from "../common/PageHeader";
import { useAppDispatch } from "@/redux/hooks";
import { setStep } from "../../slices/step.slice";
import ForgotPasswordForm from "./forgot-password-form";
import { STEPS } from "../../constants/landing.constants";

export default function RootForgotPasswordComponent() {

    const dispatch = useAppDispatch();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        dispatch(setStep(STEPS.OTP_VERIFY))
    };

    return (
        <div className="w-full py-5">
            <Navigate to={STEPS.LOGIN} />

            <PageHeader
                title="Forgot Password"
                description="Enter your email to reset your new password"
            />

            <ForgotPasswordForm
                handleSubmit={handleSubmit}
            />
        </div>
    )
}
