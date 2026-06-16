import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.tsx";
import LandingPage from "../pages/LandingPage/LandingPage.tsx";
import AboutMePage from "../pages/AboutMe/AboutMe.tsx";
import Header from "../components/Header/Header.tsx";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.tsx";

const RouterApp: React.FC = () => {

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/about" element={<AboutMePage/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RouterApp;
