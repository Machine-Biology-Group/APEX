import React, {FC} from 'react';
import clsx from 'clsx';

export type HeaderProps = {
    className?: string
}

export const ApexDbHeader: FC<HeaderProps> = ({className}) => {
    return (
        <div className={clsx("sm:flex sm:items-center mb-10", className)}>
            <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-gray-900">Peptides</h1>
                <p className="mt-2 text-gray-800">
                    A list of all the peptides we have processed so far.
                </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0">
                <a
                    href="/APEXDB.csv"
                    download
                    className="inline-flex items-center rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-300"
                >
                    Download Database.csv
                </a>
            </div>
        </div>
    )
};
