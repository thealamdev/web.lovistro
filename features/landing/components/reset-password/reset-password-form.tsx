import { useState } from 'react';
import { type FormEvent } from "react";
import { Button } from '@/components/ui/button'
import { Eye, EyeOff, Lock } from 'lucide-react'
import { FieldInput } from '@/components/ui/field-input'

type PageProps = {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function ResetPasswordForm({
    handleSubmit
}: PageProps) {
    const [show, setShow] = useState<boolean>(false);
    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">

            <div className="space-y-1">
                <FieldInput
                    label="New Password"
                    type={show ? "text" : "password"}
                    placeholder="Enter new password"
                    icon={<Lock />}
                    autoComplete="new-password"
                    endIcon={
                        <button
                            type="button"
                            onClick={() => setShow((s) => !s)}
                            aria-label={show ? "Hide password" : "Show password"}
                            className="cursor-pointer"
                        >
                            {show ? <Eye /> : <EyeOff />}
                        </button>
                    }
                />
            </div>

            <div className="space-y-1">
                <FieldInput
                    label="Confirm New Password"
                    type={show ? "text" : "password"}
                    placeholder="Enter confirm confirm password"
                    icon={<Lock />}
                    autoComplete="confirm-password"
                    endIcon={
                        <button
                            type="button"
                            onClick={() => setShow((s) => !s)}
                            aria-label={show ? "Hide password" : "Show password"}
                            className="cursor-pointer"
                        >
                            {show ? <Eye /> : <EyeOff />}
                        </button>
                    }
                />
            </div>

            <Button type="submit" className="mt-14 h-12 w-full rounded-lg text-base font-semibold">
                Reset Password
            </Button>
        </form>
    )
}
