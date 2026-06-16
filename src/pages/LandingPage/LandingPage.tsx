import {Box, Container} from "@mui/material";
import * as React from "react";
import MyLatestProjects from "../../components/MyLatestProjects/MyLatestProjects.tsx";
import HeroSection from "../../components/HeroSection/HeroSection.tsx";
import TechStack from "../../components/TechStack/TechStack.tsx";
import ContactForm from "../../components/ContactForm.tsx";

const LandingPage = () => {

    return (  <Box
        sx={{
            position: 'relative',
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            py: 4,
        }}
    >
        {/* Fondo con grid animado */}
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `
                        linear-gradient(to right, rgba(0, 229, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0, 229, 255, 0.05) 1px, transparent 1px)
                    `,
                backgroundSize: '40px 40px',
                animation: 'gridPan 60s linear infinite',
                zIndex: 0,
                '@keyframes gridPan': {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '400px 400px' },
                },
            }}
        />
        <Container maxWidth="xl">
            <HeroSection />
            <TechStack />
            <MyLatestProjects />
            <ContactForm />
        </Container>
    </Box>)
}
export default LandingPage;
