import React, {useEffect, useState} from 'react';
import {RouterProvider} from "react-router-dom";
import {Database} from "../logic/models";
import {router} from "./router";
import dbService from "../logic/db-service";
import {ApexDbContextProvider} from "@components/ApexDb/apexDbContext.tsx";
import ScrollToTop from "@components/ScrollToTop.tsx";

function App() {
    const [db, setDb] = useState<Database>()

    useEffect(() => {
        dbService.loadDb().then((db) => {
            setDb(db)
        });
    }, [])

    return (
        <>
            {db &&
                <ApexDbContextProvider initialDb={db}>
                    <RouterProvider router={router}/>
                </ApexDbContextProvider>
            }
        </>
    );
}

export default App;
