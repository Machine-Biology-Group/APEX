import {FC, ReactNode} from 'react';
import clsx from "clsx";

export type ButtonProps = {
    children: ReactNode
    onClick?: (event: any) => void
    disabled?: boolean
    className?: string
}

export const ButtonPrimary: FC<ButtonProps> = ({className, onClick, children, disabled}) => {
    return (
        <>
            <button
                className={clsx ("p-4 text-white font-bold rounded-md bg-primary-500 hover:bg-primary-700",
                    className
                )}
                onClick={onClick}
                disabled={disabled}>
                {children}
            </button>
        </>
    )
};
