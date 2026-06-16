import React from 'react';
import { Box, Typography, Button, Chip, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';
import banner from '../../assets/banner2.png';
import {eventScrollDown} from "../../lib/constants.ts";

const HeroSection = () => {
    const { t, i18n } = useTranslation();

    // Badges principales del stack
    const mainTech = ['React', 'Next.js', 'NestJS', 'React Native', 'TypeScript', 'Node.js'];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 4,
                py: { xs: 4, md: 8 },
                width: '100%',
            }}
        >
            {/* Texto e información */}
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        color: 'white',
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                        background: 'linear-gradient(90deg, #00E5FF, #B388FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 2,
                    }}
                >
                    {t('heroTitle')}
                </Typography>

                <TypeAnimation
                    key={i18n.language}
                    sequence={[
                        t('heroSubtitle'), 2500,
                        t('aboutMeSubtitle'), 2500,
                        t('computerSystemsEngineer'), 2500,
                    ]}
                    wrapper="h5"
                    speed={50}
                    style={{
                        color: '#94a9c9',
                        fontSize: '1.25rem',
                        height: '50px',
                        display: 'inline-block',
                    }}
                    repeat={Infinity}
                />

                <Stack
                    direction="row"
                    spacing={2}
                    sx={{ mt: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}
                >
                    <Button
                        variant="contained"
                        onClick={() => {
                            eventScrollDown("section-work", "start")
                        }}

                        sx={{
                            background: 'linear-gradient(90deg, #00E5FF, #B388FF)',
                            color: '#0B0F19',
                            fontWeight: 700,
                            px: 4,
                            py: 1.5,
                            borderRadius: 30,
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 0 25px #00E5FF',
                            },
                        }}
                    >
                        {t('heroCta')}
                    </Button>
                    <Button
                        variant="outlined"

                        onClick={() => {
                            eventScrollDown("section-contact", "start")
                        }}
                        sx={{
                            borderColor: '#00E5FF',
                            color: 'white',
                            px: 4,
                            py: 1.5,
                            borderRadius: 30,
                            '&:hover': {
                                borderColor: '#B388FF',
                                boxShadow: '0 0 20px #B388FF',
                            },
                        }}
                    >
                        {t('heroCtaContact')}
                    </Button>
                </Stack>

                {/* Badges */}
                <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    {mainTech.map((tech) => (
                        <Chip
                            key={tech}
                            label={tech}
                            sx={{
                                color: 'white',
                                borderColor: '#00E5FF',
                                background: 'rgba(0, 229, 255, 0.1)',
                                fontWeight: 500,
                                '&:hover': {
                                    background: 'rgba(0, 229, 255, 0.25)',
                                    transform: 'scale(1.05)',
                                },
                            }}
                            variant="outlined"
                        />
                    ))}
                </Box>
            </Box>

            {/* Imagen de perfil */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="img"
                    src={banner}
                    alt="Irving Lara"
                    sx={{
                        width: { xs: '70%', sm: '60%', md: '80%' },
                        maxWidth: 350,
                        borderRadius: '50%',
                        border: '4px solid #00E5FF',
                        boxShadow: '0 0 40px rgba(0, 229, 255, 0.4)',
                        animation: 'pulse 3s infinite ease-in-out',
                        '@keyframes pulse': {
                            '0%': { transform: 'scale(1)', boxShadow: '0 0 40px rgba(0, 229, 255, 0.4)' },
                            '50%': { transform: 'scale(1.02)', boxShadow: '0 0 60px rgba(179, 136, 255, 0.6)' },
                            '100%': { transform: 'scale(1)', boxShadow: '0 0 40px rgba(0, 229, 255, 0.4)' },
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default HeroSection;