import React from 'react';
import { Box, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {SERVICE_PACKAGES} from "../../lib/services_.ts";


const PackagePaper = styled(Paper)(({ theme }) => ({
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
    '&:hover': {
        boxShadow: '0 0 20px #0ea5ea',
        transform: 'translateY(-10px)',
    },
}));

const ServicePackages = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ py: 8 }}>
            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                {SERVICE_PACKAGES.map((pkg) => (
                    <Grid item xs={12} md={4} key={pkg.key}>
                        <PackagePaper>
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                {t(pkg.key)}
                            </Typography>
                            <Typography variant="h3" sx={{ color: '#0ea5ea', my: 2 }}>
                                {pkg.price}
                            </Typography>
                            <List>
                                {pkg.features.map((feature, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon>
                                            <CheckCircleIcon sx={{ color: '#0bd1d1' }} />
                                        </ListItemIcon>
                                        <ListItemText primary={t(feature)} />
                                    </ListItem>
                                ))}
                            </List>
                        </PackagePaper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ServicePackages;