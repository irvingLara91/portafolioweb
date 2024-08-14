"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var NotFoundPage_tsx_1 = require("../pages/NotFoundPage/NotFoundPage.tsx");
var LandingPage_tsx_1 = require("../pages/LandingPage/LandingPage.tsx");
var RouterApp = function () {
    return (<react_router_dom_1.BrowserRouter>
            <react_router_dom_1.Routes>
                <react_router_dom_1.Route path="/" element={<LandingPage_tsx_1.default />}/>
                <react_router_dom_1.Route path="/*" element={<NotFoundPage_tsx_1.default />}/>
            </react_router_dom_1.Routes>
        </react_router_dom_1.BrowserRouter>);
};
exports.default = RouterApp;
