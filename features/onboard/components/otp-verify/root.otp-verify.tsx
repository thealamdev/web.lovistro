import Navigate from "../common/Navigate";
import OtpVerifyForm from "./otp-verify-form";
import PageHeader from "../common/PageHeader";
import { useAppDispatch } from "@/redux/hooks";
import { useState, type FormEvent } from "react";
import { OtpStatus } from "../../types/otp.types";
import { setStep } from "../../slices/step.slice";
import { STEPS } from "../../constants/onboard.constants";

export default function RootOtpVerifyComponent() {
    const demoOtp = "123456";
    const dispatch = useAppDispatch();
    const [status, setStatus] = useState<OtpStatus>('idle')
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const otp = String(new FormData(e.currentTarget).get('otp'))
        const ok = demoOtp === otp;
        // const ok = await verifyOtp(otp) // your API call
        setStatus(ok ? 'success' : 'error')
        if (ok) {
            dispatch(setStep(STEPS.RESET_PASSWORD))
        }
    };

    return (
        <div className="w-full py-5">
            <Navigate to={STEPS.FORGOT_PASSWORD} />

            <PageHeader
                title="We just sent you and SMS"
                description="Enter the Code that we have sent to example@gmail.com"
            />

            <OtpVerifyForm
                handleSubmit={handleSubmit}
                status={status}
                onInputChange={() => setStatus('idle')}
            />
        </div>
    )
}


