import React, { FC } from 'react';
import clsx from "clsx";
import {appTexts} from "../../texts";

export type FooterProps = {
    className?: string
}

export const Footer: FC<FooterProps> = ({className}) => {
    return (
        <>
            <div className={clsx("bg-gray-100 border-t border-gray-300 p-2 text-center", className)}>{appTexts.footerTexts.copyright}</div>
        </>
    )
};
