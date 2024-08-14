import {Box, Container} from "@mui/material";
import * as React from "react";
import './Landing.css';
import banner from './../../assets/banner2.png'
import patter1 from './../../assets/pattern-1.svg'
import patter2 from './../../assets/pattern-2.svg'
import patter3 from './../../assets/pattern-3.svg'
import patter4 from './../../assets/pattern-4.svg'

const LandingPage = () => {

    return (<Box>
        <Container>
            <div className="banner-img position-relative animate__animated animate__fadeIn">
                <img src={banner} alt="Genz" style={{objectFit:'cover',filter: 'drop-shadow(0 0 0.75rem #0ea5ea)'}}/>
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
            <Box sx={{my: 2, color: 'white'}}>
                {[...new Array(100)]
                    .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')}
            </Box>

        </Container>

    </Box>)
}
export default LandingPage;
