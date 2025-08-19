import {FC, ReactNode} from 'react';
import clsx from "clsx";

export type ButtonProps = {
    children: ReactNode
    onClick?: (event: any) => void
    disabled?: boolean
    className?: string
}

export const ButtonSecondary: FC<ButtonProps> = ({className, onClick, children, disabled}) => {
    return (
        <>
            <button
                className={clsx ("rounded-md mx-auto border font-bold bg-accent-500",
                    className
                )}
                onClick={onClick}
                disabled={disabled}>
                {children}
            </button>
        </>
    )
};
