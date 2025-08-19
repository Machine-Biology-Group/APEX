import React, {FC} from 'react';
import {ApexDbTable} from "@components/ApexDb/ApexDbTable.tsx";
import {ApexDbFilters} from "@components/ApexDb/ApexDbFilters.tsx";
import {useApexDbContext} from "@components/ApexDb/apexDbContext.tsx";
import Pagination from "@components/ApexDb/Pagination.tsx";
import {ApexDbHeader} from "@components/ApexDb/ApexDbHeader.tsx";

export type SearchTableProps = {}

export const ApexDbPage: FC<SearchTableProps> = ({}) => {
    const {allEntries} = useApexDbContext();

    return (
        <div className="flex min-w-[1000px] border-t-2 border-top-gray-300">
            <div className="w-[300px] px-4 py-10 border-r-gray-300 border-r-2">
                <ApexDbFilters/>
            </div>

            <div className="px-4 py-10 grow">
                <ApexDbHeader/>
                <Pagination className="z-20 relative"/>
                <ApexDbTable className="mb-8"/>
                <Pagination/>
            </div>
        </div>
    )
};
