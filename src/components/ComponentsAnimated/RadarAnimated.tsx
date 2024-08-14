import React from "react";
import './RadarAnimated.css';
import {Box} from "@mui/material";
const RadarAnimated =()=>{
    return (
        <Box sx={{width: '100%', display: 'flex', height: '100%',justifyContent:'center',alignItems:'center',marginBottom:10}}>
            <div className="cube-loader-container">
                <div className="cube-loader">
                    <div className="cube-top">
                        <svg
                            style={{width: "inherit" ,height:"inherit"}}
                        >
                            <rect
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                                filter="url(#waterCaustic)"
                            ></rect>
                        </svg>
                    </div>
                    <div className="cube-wrapper">
                        <span  style={{ "--i": 4 } as React.CSSProperties} className=" cube-span"> </span>
                        <span  style={{ "--i": 3 } as React.CSSProperties} className=" cube-span"></span>
                        <span  style={{ "--i": 2 } as React.CSSProperties} className=" cube-span"></span>
                        <span   style={{ "--i": 1 } as React.CSSProperties} className=" cube-span"></span>
                    </div>
                </div>

                <svg style={{display:"none"}}>
                    <defs>
                        <filter id="waterCaustic">
                            <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.09"
                                numOctaves="1"
                                result="turbulence"
                            ></feTurbulence>
                            <feDisplacementMap
                                in="SourceGraphic"
                                in2="turbulence"
                                scale="600"
                                xChannelSelector="R"
                                yChannelSelector="G"
                            ></feDisplacementMap>
                        </filter>
                    </defs>
                </svg>
            </div>
        </Box>

    )
}
export default RadarAnimated;
