import * as React from "react"
import { cn } from "cn"
import { Input } from "@/components/ui/input"

type FieldInputProps = React.ComponentProps<typeof Input> & {
    label: string
    hint?: string
    error?: string
    icon?: React.ReactNode
    endIcon?: React.ReactNode
    wrapperClassName?: string
    labelClassName?: string
}

function FieldInput({
    label,
    hint,
    error,
    icon,
    endIcon,
    id,
    required,
    wrapperClassName,
    labelClassName,
    containerClassName,
    ...props
}: FieldInputProps) {
    const generatedId = React.useId()
    const inputId = id ?? generatedId
    const hintId = `${inputId}-hint`
    const errorId = `${inputId}-error`

    const describedBy = error ? errorId : hint ? hintId : undefined

    return (
        <div className={cn("flex w-full flex-col gap-2", wrapperClassName)}>
            <label
                htmlFor={inputId}
                className={cn("text-sm font-medium text-foreground", labelClassName)}
            >
                {label}
                {required && <span className="ml-0.5 text-destructive">*</span>}
            </label>

            <Input
                id={inputId}
                icon={icon}
                endIcon={endIcon}
                required={required}
                aria-invalid={!!error || undefined}
                aria-describedby={describedBy}
                containerClassName={containerClassName}
                {...props}
            />

            {error ? (
                <p id={errorId} role="alert" className="text-xs text-destructive">
                    {error}
                </p>
            ) : hint ? (
                <p id={hintId} className="text-xs text-muted-foreground">
                    {hint}
                </p>
            ) : null}
        </div>
    )
}

export { FieldInput }