import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

type InputProps = React.ComponentProps<"input"> & {
    icon?: React.ReactNode
    endIcon?: React.ReactNode
    containerClassName?: string
}

function Input({
    className,
    containerClassName,
    type,
    icon,
    endIcon,
    ...props
}: InputProps) {
    return (
        <div className={cn("relative w-full", containerClassName)}>
            {icon && (
                <span className="pointer-events-none absolute left-3 top-1/2 flex -translate-y-1/2 items-center text-[#767C8C] [&_svg]:size-5">
                    {icon}
                </span>
            )}

            <InputPrimitive
                type={type}
                data-slot="input"
                className={cn(
                    "h-12 w-full min-w-0 rounded-lg border-0 bg-[#333533] px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#767C8C] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
                    icon && "pl-10",
                    endIcon && "pr-10",
                    className
                )}
                {...props}
            />

            {endIcon && (
                <span className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center text-[#767C8C] [&_svg]:size-5">
                    {endIcon}
                </span>
            )}
        </div>
    )
}

export { Input }
