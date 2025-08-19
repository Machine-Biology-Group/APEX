import React, { FC } from 'react';
import clsx from "clsx";

export type FooterProps = {
    className?: string
}

export const Footer: FC<FooterProps> = ({className}) => {
    return (
        <>
            <div className={clsx("bg-gray-100 border-t border-gray-300 p-2 text-center", className)}>© 2023 The Trustees of the University of Pennsylvania. All Rights Reserved. Created by Dr. Cesar de la Fuente/Machine Biology Group/de la Fuente Lab.</div>
        </>
    )
};
