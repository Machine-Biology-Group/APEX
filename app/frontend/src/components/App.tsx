import React, { useEffect, useState } from 'react';
import { RouterProvider } from "react-router-dom";
import { Database } from "../logic/models";
import { router } from "./router";
import dbService from "../logic/db-service";
import { ApexDbContextProvider } from "@components/ApexDb/apexDbContext.tsx";
import ScrollToTop from "@components/ScrollToTop.tsx";

function App() {


    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
