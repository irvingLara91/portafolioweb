import banner from './../../assets/banner2.png'
import patter1 from './../../assets/pattern-1.svg'
import patter2 from './../../assets/pattern-2.svg'
import patter3 from './../../assets/pattern-3.svg'
import patter4 from './../../assets/pattern-4.svg'
import React from "react";
import './CardUser.css'
import {Box} from "@mui/material";
import RadarAnimated from "../ComponentsAnimated/RadarAnimated.tsx";


const CardUserInfo = () => {
    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            flexDirection: {xs: 'column-reverse', md: 'row'},
            justifyContent: 'space-between',
            gap: {xs: 20, md: '0px'},
        }}>
            <Box sx={{width: '100%'}}>
                <RadarAnimated/>
            </Box>
            <Box sx={{width: '100%'}}>
                <div className="banner-img position-relative animate__animated animate__fadeIn">
                    <Box sx={{
                        filter: 'drop-shadow(0 0 0.75rem #0ea5ea)',
                    }}>
                        <Box component={'img'} src={banner as string} alt="Genz"
                             sx={{
                                 display:'flex',
                                 width:'76%',
                                 clipPath: "ellipse(69% 50% at 50% 27%)",
                                 objectFit: 'cover',
                                 filter: 'drop-shadow(0 0 0.75rem #0ea5ea)',
                             }}/>
                    </Box>

                    <div className="pattern-1">
                        <img src={patter1 as string} alt="Genz"/>
                    </div>
                    <div className="pattern-2">
                        <img src={patter2 as string} alt="Genz"/>
                    </div>
                    <div className="pattern-3">
                        <img src={patter3 as string} alt="Genz"/>
                    </div>
                    <div className="pattern-4">
                        <img src={patter4 as string} alt="Genz"/>
                    </div>
                </div>
            </Box>

        </Box>

    )
}
export default CardUserInfo;
