import { Box, Typography, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import 'animate.css';

const ServicePaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    textAlign: 'center',
    color: 'white',
    background: 'rgba(14, 23, 42, 0.8)',
    border: '1px solid #0ea5ea',
    borderRadius: '16px',
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&:hover': {
        boxShadow: '0 0 20px #0ea5ea',
        transform: 'translateY(-10px)',
    },
}));

const Services = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ py: 8 }} className="animate__animated animate__fadeInUp">
            <Typography variant="h2" align="center" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
                {t('services')}
            </Typography>
            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                <Grid item xs={12} md={6}>
                    <ServicePaper>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                            {t('customLandingPages')}
                        </Typography>
                        <Typography variant="body1">
                            {t('landingPageDescription')}
                        </Typography>
                    </ServicePaper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ServicePaper>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                            {t('frontendDevelopment')}
                        </Typography>
                        <Typography variant="body1">
                            {t('frontendDevelopmentDescription')}
                        </Typography>
                    </ServicePaper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Services;