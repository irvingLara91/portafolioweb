import React, { useState, useMemo } from 'react';
import { Box, Typography, Button, Grid, Paper, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {TechItem, techStackData} from "../../lib/TechStack/techStack.data.ts";

const TechStack = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    // Obtener categorías únicas para los filtros
    const categories = useMemo(() => {
        const cats = techStackData.map((item) => item.category);
        return ['all', ...Array.from(new Set(cats))];
    }, []);

    const filteredData = useMemo(() => {
        if (selectedCategory === 'all') return techStackData;
        return techStackData.filter((item) => item.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <Box sx={{ width: '100%', py: 6 }}>
            {/* Títulos */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        background: 'linear-gradient(90deg, #00E5FF, #B388FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    {t('techStackTitle')}
                </Typography>
                <Typography variant="body1" sx={{ color: '#94a9c9', mt: 1 }}>
                    {t('techStackSubtitle')}
                </Typography>
            </Box>

            {/* Filtros */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 1,
                    mb: 4,
                }}
            >
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        variant={selectedCategory === cat ? 'contained' : 'outlined'}
                        sx={{
                            borderRadius: 30,
                            px: 3,
                            py: 1,
                            borderColor: '#00E5FF',
                            color: selectedCategory === cat ? '#0B0F19' : 'white',
                            background: selectedCategory === cat ? 'linear-gradient(90deg, #00E5FF, #B388FF)' : 'transparent',
                            fontWeight: 600,
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
                            },
                        }}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat === 'all' ? t('allTech') : t(`${cat}Tech`)}
                    </Button>
                ))}
            </Box>

            {/* Grid de tecnologías */}
            <Grid container spacing={3} justifyContent="center">
                {filteredData.map((item: TechItem) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={item.name}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 2,
                                textAlign: 'center',
                                background: 'rgba(14, 23, 42, 0.7)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(0, 229, 255, 0.2)',
                                borderRadius: 4,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    borderColor: '#00E5FF',
                                    boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)',
                                },
                            }}
                        >
                            <Box component="span" sx={{ fontSize: '3rem' }}>
                                {item.icon}
                            </Box>
                            <Typography variant="body1" sx={{ color: 'white', mt: 1, fontWeight: 500 }}>
                                {item.name}
                            </Typography>
                            <Chip
                                label={t(`${item.category}Tech`)}
                                size="small"
                                sx={{
                                    mt: 1,
                                    background: 'rgba(0, 229, 255, 0.15)',
                                    color: '#00E5FF',
                                    borderColor: '#00E5FF',
                                }}
                                variant="outlined"
                            />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TechStack;