import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.tsx";
import LandingPage from "../pages/LandingPage/LandingPage.tsx";

const RouterApp: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RouterApp;
