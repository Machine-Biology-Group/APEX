import {createHashRouter} from "react-router-dom";
import React from "react";
import {PeptideDetails} from "./pages/PeptideDetails";
import {ApexDbPage} from "./pages/ApexDbPage.tsx";
import {Stats} from "./pages/Stats";
import {GlobalLayout} from "./layout/GlobalLayout";
import {About} from "./pages/About";
import HomePageNewPage from "./pages/Home.tsx";
import Publications from "./pages/Publications.tsx";
import Home from "./pages/Home.tsx";

export const router = createHashRouter([
    {
        path: "/",
        element: <GlobalLayout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "/database",
                element: <ApexDbPage/>,
            },
            {
                path: "/ApexDb/:id",
                element: <PeptideDetails/>,
            },
            {
                path: "/stats",
                element: <Stats/>,
            },
            {
                path: "/about",
                element: <About/>,
            },            
            {
                path: "/home",
                element: <HomePageNewPage/>,
            },
            {
                path: "/publications",
                element: <Publications/>,
            },
        ]
    },

]);
