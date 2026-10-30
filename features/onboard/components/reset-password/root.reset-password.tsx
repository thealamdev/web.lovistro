import { type FormEvent } from "react";
import Navigate from '../common/Navigate'
import PageHeader from '../common/PageHeader'
import ResetPasswordForm from './reset-password-form'
import { STEPS } from '../../constants/onboard.constants'

export default function RootResetPasswordComponent() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: submit email + password
    };

    return (
        <div className="w-full py-5">
            <Navigate to={STEPS.OTP_VERIFY} />

            <PageHeader
                title="Reset Password"
                description="Add new password for reset your password"
            />

            <ResetPasswordForm
                handleSubmit={handleSubmit}
            />
        </div>
    )
}
