import React from 'react';
import { Box, Typography, Grid, Paper, Container, Chip, Stack, Avatar, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { TypeAnimation } from 'react-type-animation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { techStackData } from "../../lib/TechStack/techStack.data";
import banner from '../../assets/banner2.png'; // Importa la imagen

// --- Styled Components ---
const GlassContainer = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(5),
    color: 'white',
    background: 'rgba(14, 23, 42, 0.7)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(0, 229, 255, 0.2)',
    borderRadius: '24px',
    boxShadow: '0 0 40px rgba(0, 229, 255, 0.15)',
    position: 'relative',
    zIndex: 2,
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: -50,
        right: -50,
        width: 200,
        height: 200,
        background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
    },
}));

const InfoCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    background: 'rgba(0, 229, 255, 0.05)',
    border: '1px solid rgba(0, 229, 255, 0.1)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    transition: 'all 0.3s ease',
    '&:hover': {
        background: 'rgba(0, 229, 255, 0.1)',
        borderColor: '#00E5FF',
        transform: 'translateY(-4px)',
        boxShadow: '0 0 20px rgba(0, 229, 255, 0.1)',
    },
}));

const AboutMePage = () => {
    const { t, i18n } = useTranslation();

    const displaySkills = techStackData.slice(0, 12);

    const socialLinks = {
        github: 'https://github.com/irvingLara91',
        linkedin: 'https://www.linkedin.com/in/irving-isidoro-lara-jiménez-05a5b4192/',
        email: 'mailto:irvinglara9115@email.com',
    };

    return (
        <Box
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

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <GlassContainer>
                    <Grid container spacing={5}>
                        {/* Columna izquierda: Foto + nombre + subtítulo */}
                        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    boxShadow: '0 0 30px rgba(0, 229, 255, 0.4)',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 229, 255, 0.3) 50%, transparent 100%)',
                                        animation: 'scanLine 3s infinite linear',
                                        zIndex: 1,
                                        pointerEvents: 'none',
                                    },
                                    '@keyframes scanLine': {
                                        '0%': { transform: 'translateY(-100%)' },
                                        '100%': { transform: 'translateY(100%)' },
                                    },
                                }}
                            >
                                <Avatar
                                    src={banner}
                                    alt="Irving Lara"
                                    sx={{
                                        width: 200,
                                        height: 200,
                                        border: '3px solid #00E5FF',
                                    }}
                                />
                            </Box>

                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mt: 3,
                                    color: 'white',
                                    textShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
                                }}
                            >
                                Irving Lara
                            </Typography>

                            <TypeAnimation
                                key={i18n.language}
                                sequence={[
                                    t('aboutMeSubtitle'), 2000,
                                    t('computerSystemsEngineer'), 2000,
                                    t('sevenYearsExperience'), 2000,
                                ]}
                                wrapper="h6"
                                speed={50}
                                style={{
                                    color: '#00E5FF',
                                    marginTop: '8px',
                                    height: '30px',
                                    fontSize: '1.1rem',
                                }}
                                repeat={Infinity}
                            />

                            {/* Redes sociales */}
                            <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 3 }}>
                                <IconButton href={socialLinks.github} target="_blank" sx={{ color: '#94a9c9', '&:hover': { color: '#00E5FF' } }}>
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton href={socialLinks.linkedin} target="_blank" sx={{ color: '#94a9c9', '&:hover': { color: '#0A66C2' } }}>
                                    <LinkedInIcon />
                                </IconButton>

                                <IconButton href={socialLinks.email} target="_blank" sx={{ color: '#94a9c9', '&:hover': { color: '#B388FF' } }}>
                                    <EmailIcon />
                                </IconButton>
                            </Stack>
                        </Grid>

                        {/* Columna derecha: Información detallada */}
                        <Grid item xs={12} md={8}>
                            {/* Descripción personal */}
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 600, mb: 2 }}>
                                {t('aboutMeIntro')}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#94a9c9', mb: 3, lineHeight: 1.8 }}>
                                {t('aboutMePassion')}
                            </Typography>

                            {/* Tarjetas de información: ubicación, empresa, rol */}
                            <Grid container spacing={2} sx={{ mb: 4 }}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <InfoCard>
                                        <LocationOnIcon sx={{ color: '#00E5FF' }} />
                                        <Box>
                                            <Typography variant="caption" sx={{ color: '#94a9c9' }}>{t('location')}</Typography>
                                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>{t('locationValue')}</Typography>
                                        </Box>
                                    </InfoCard>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <InfoCard>
                                        <BusinessIcon sx={{ color: '#00E5FF' }} />
                                        <Box>
                                            <Typography variant="caption" sx={{ color: '#94a9c9' }}>{t('company')}</Typography>
                                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>{t('companyValue')}</Typography>
                                        </Box>
                                    </InfoCard>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <InfoCard>
                                        <WorkIcon sx={{ color: '#00E5FF' }} />
                                        <Box>
                                            <Typography variant="caption" sx={{ color: '#94a9c9' }}>{t('role')}</Typography>
                                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>{t('roleValue')}</Typography>
                                        </Box>
                                    </InfoCard>
                                </Grid>
                            </Grid>

                            {/* Stack principal (destacado) */}
                            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                                {t('mainStack')}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                                {['React', 'Next.js', 'NestJS', 'React Native', 'TypeScript', 'Node.js'].map((tech) => (
                                    <Chip
                                        key={tech}
                                        label={tech}
                                        sx={{
                                            color: 'white',
                                            borderColor: '#00E5FF',
                                            background: 'rgba(0, 229, 255, 0.1)',
                                            fontWeight: 500,
                                        }}
                                        variant="outlined"
                                    />
                                ))}
                            </Box>

                            {/* Línea de tiempo (carrera) */}
                            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                                {t('experienceSectionTitle')}
                            </Typography>
                            <Box sx={{ position: 'relative', pl: 3, borderLeft: '2px solid rgba(0, 229, 255, 0.3)', mb: 4 }}>
                                {['timelineEvent1', 'timelineEvent2', 'timelineEvent3', 'timelineEvent4'].map((event, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            position: 'relative',
                                            mb: 3,
                                            pl: 2,
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                left: 0,
                                                top: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                width: 12,
                                                height: 12,
                                                background: '#00E5FF',
                                                borderRadius: '50%',
                                                boxShadow: '0 0 10px #00E5FF',
                                                animation: 'pulseDot 2s infinite alternate',
                                            },
                                            '@keyframes pulseDot': {
                                                '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.7 },
                                                '100%': { transform: 'translate(-50%, -50%) scale(1.3)', opacity: 1 },
                                            },
                                        }}
                                    >
                                        <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
                                            {t(event)}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            {/* Habilidades técnicas (desde techStackData) */}
                            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                                {t('skillsSectionTitle')}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {displaySkills.map((skill) => (
                                    <Chip
                                        key={skill.name}
                                        label={skill.name}
                                        icon={<Box component="span" sx={{ fontSize: '1.2rem' }}>{skill.icon}</Box>}
                                        sx={{
                                            color: 'white',
                                            borderColor: 'rgba(0, 229, 255, 0.3)',
                                            background: 'rgba(0, 229, 255, 0.05)',
                                            '&:hover': {
                                                background: 'rgba(0, 229, 255, 0.15)',
                                                borderColor: '#00E5FF',
                                                transform: 'scale(1.05)',
                                            },
                                            transition: 'all 0.3s',
                                        }}
                                        variant="outlined"
                                    />
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </GlassContainer>
            </Container>
        </Box>
    );
};

export default AboutMePage;