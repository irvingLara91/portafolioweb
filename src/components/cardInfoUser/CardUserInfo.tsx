import banner from './../../assets/banner2.png'
import patter1 from './../../assets/pattern-1.svg'
import patter2 from './../../assets/pattern-2.svg'
import patter3 from './../../assets/pattern-3.svg'
import patter4 from './../../assets/pattern-4.svg'
import * as React from "react";
import './CardUser.css'
import {Box} from "@mui/material";
import RadarAnimated from "../ComponentsAnimated/RadarAnimated.tsx";


const CardUserInfo = () => {
    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            flexDirection: {xs: 'column-reverse', md:'row'},
            justifyContent: 'space-between',
            gap:{xs: 20, md:'0px'},
        }}>
            <Box>
                <RadarAnimated/>
            </Box>
            <Box>
                <div className="banner-img position-relative animate__animated animate__fadeIn">
                    <img src={banner} alt="Genz"
                         style={{objectFit: 'cover', filter: 'drop-shadow(0 0 0.75rem #0ea5ea)'}}/>
                    <div className="pattern-1">
                        <img src={patter1} alt="Genz"/>
                    </div>
                    <div className="pattern-2">
                        <img src={patter2} alt="Genz"/>
                    </div>
                    <div className="pattern-3">
                        <img src={patter3} alt="Genz"/>
                    </div>
                    <div className="pattern-4">
                        <img src={patter4} alt="Genz"/>
                    </div>
                </div>
            </Box>

        </Box>

    )
}
export default CardUserInfo;
