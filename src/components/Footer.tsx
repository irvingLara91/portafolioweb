import React from 'react';
import {Box, Typography, IconButton, alpha} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {icon: <GitHubIcon/>, url: 'https://github.com/irvingLara91', label: 'GitHub'},
        {
            icon: <LinkedInIcon/>,
            url: 'https://www.linkedin.com/in/irving-isidoro-lara-jiménez-05a5b4192/',
            label: 'LinkedIn'
        },
        {icon: <EmailIcon/>, url: 'mailto:irvinglara9115@email.com', label: 'Correo'}
    ];

    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                px: 2,
                mt: 'auto',
                backgroundColor: 'rgba(10, 15, 26, 0.85)',
                backdropFilter: 'blur(12px)',
                borderTop: '1px solid rgba(0, 229, 255, 0.2)',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #00E5FF, #B388FF, transparent)',
                    backgroundSize: '300% 100%',
                    animation: 'gradientMove 4s linear infinite',
                },
                '@keyframes gradientMove': {
                    '0%': {backgroundPosition: '0% 0%'},
                    '100%': {backgroundPosition: '300% 0%'},
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    mb: 2,
                    flexWrap: 'wrap',
                }}
            >
                {socialLinks.map(({icon, url, label}) => (
                    <IconButton
                        key={label}
                        component="a"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        sx={{
                            color: 'white',
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(0, 229, 255, 0.15)',
                            borderRadius: '50%',
                            padding: 1,
                            '&:hover': {
                                color: '#00E5FF',
                                borderColor: '#00E5FF',
                                boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)',
                                transform: 'translateY(-4px) scale(1.05)',
                                backgroundColor: alpha('#00E5FF', 0.1),
                            },
                        }}
                    >
                        {icon}
                    </IconButton>
                ))}
            </Box>

            <Typography
                variant="body2"
                sx={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    '& span': {
                        color: '#00E5FF',
                        fontWeight: 600,
                    },
                }}
            >
                © {currentYear} <span>Irving Lara</span>. Todos los derechos reservados.
                <br/>
                <Box
                    component="span"
                    sx={{
                        display: 'inline-block',
                        mt: 0.5,
                        fontSize: '0.75rem',
                        color: 'rgba(255,255,255,0.35)',
                    }}
                >
                    Hecho con ❤️ y mucho café
                </Box>
            </Typography>
        </Box>
    );
};

export default Footer;