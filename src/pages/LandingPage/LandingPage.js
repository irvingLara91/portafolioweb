"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var React = require("react");
require("./Landing.css");
var banner2_png_1 = require("./../../assets/banner2.png");
var pattern_1_svg_1 = require("./../../assets/pattern-1.svg");
var pattern_2_svg_1 = require("./../../assets/pattern-2.svg");
var pattern_3_svg_1 = require("./../../assets/pattern-3.svg");
var pattern_4_svg_1 = require("./../../assets/pattern-4.svg");
var LandingPage = function () {
    return (<material_1.Box>
        <material_1.Container>
            <div className="banner-img position-relative animate__animated animate__fadeIn">
                <img src={banner2_png_1.default} alt="Genz" style={{ objectFit: 'cover', filter: 'drop-shadow(0 0 0.75rem #0ea5ea)' }}/>
                <div className="pattern-1">
                    <img src={pattern_1_svg_1.default} alt="Genz"/>
                </div>
                <div className="pattern-2">
                    <img src={pattern_2_svg_1.default} alt="Genz"/>
                </div>
                <div className="pattern-3">
                    <img src={pattern_3_svg_1.default} alt="Genz"/>
                </div>
                <div className="pattern-4">
                    <img src={pattern_4_svg_1.default} alt="Genz"/>
                </div>
            </div>
            <material_1.Box sx={{ my: 2, color: 'white' }}>
                {__spreadArray([], new Array(100), true).map(function () { return "Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et."; })
            .join('\n')}
            </material_1.Box>

        </material_1.Container>

    </material_1.Box>);
};
exports.default = LandingPage;
