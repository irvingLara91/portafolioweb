import { Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ServicePackages from "./ServicePackages.tsx";

const SalesPage = () => {
    const { t } = useTranslation();

    return (

        <Box sx={{ py: 8, color: 'white' }}>
            <Container>
                <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {t('salesTitle')}
                </Typography>
                <Typography variant="h5" align="center" sx={{ mb: 8, color: '#94a9c9' }}>
                    {t('salesSubtitle')}
                </Typography>
                <ServicePackages />
            </Container>
        </Box>
    );
};

export default SalesPage;