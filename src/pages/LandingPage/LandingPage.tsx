import {Box, Container} from "@mui/material";
import * as React from "react";
import CardUserInfo from "../../components/cardInfoUser/CardUserInfo.tsx";
import MyLatestProjects from "../../components/MyLatestProjects/MyLatestProjects.tsx";

const LandingPage = () => {

    return (<Box sx={{display:'flex',width:'100%'}}>
        <Container sx={{gap:2}}>
            <CardUserInfo/>
            <MyLatestProjects/>
        </Container>

    </Box>)
}
export default LandingPage;
