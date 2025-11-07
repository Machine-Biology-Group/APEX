import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import {useApexDbContext} from "@components/ApexDb/apexDbContext.tsx";
import {DbEntry} from "@logic/models.ts";
import {appTexts} from "../../texts";

export type PeptideDetailsProps = {}

export const PeptideDetails: FC<PeptideDetailsProps> = ({}) => {
    let {id} = useParams();
    const {allEntries, headers} = useApexDbContext();

    if (!id) throw new Error("no id provided");

    const peptide = allEntries.find((entry: DbEntry) => entry.id === +id);

    if (!peptide) return <></>;

    const peptideFields = Object.values(peptide) ?? [];

    return (
        <div className="section-wrapper">
            <p className="my-5">{appTexts.peptideDetailsTexts.detailsIntro}</p>
            <div>
                {peptideFields.map((entry: string, index: number) =>
                    <div className="flex w-full justify-between border-b border-gray-300 even:bg-gray-50 px-2" key={index}>
                        <span className="basis-1/2 p-2">{headers[index]}</span>
                        <span className="p-2">{entry}</span>
                    </div>
                )}
            </div>

        </div>
    )
};
