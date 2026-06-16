import React, { useState, useMemo } from "react";
import { Box, Button, Grid, Paper, Typography, Chip, Stack, CardActionArea } from "@mui/material";
import { useTranslation } from "react-i18next";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {Projects_List,LIST_OPTIONS} from "../../lib/constants.ts";

const MyLatestProjects = () => {
    const { t } = useTranslation();
    const [selected, setSelected] = useState('allProjects');

    // Filtrar proyectos según categoría
    const filteredProjects = useMemo(() => {
        if (selected === 'allProjects') return Projects_List;
        return Projects_List.filter((p) => p.type === selected);
    }, [selected]);

    const handleFilter = (key: string) => {
        setSelected(key);
    };

    return (
        <Box
            id={"section-work"}
            sx={{ width: '100%', py: 6 }}>
            {/* Título */}
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
                    {t('myProjects')}
                </Typography>
                <Typography variant="body1" sx={{ color: '#94a9c9', mt: 1 }}>
                    {t('projectsSubtitle')}
                </Typography>
            </Box>

            {/* Filtros */}
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{ mb: 5, flexWrap: 'wrap', gap: 1 }}
            >
                {LIST_OPTIONS.map((item, index) => (
                    <Button
                        key={index}
                        variant={selected === item.key ? 'contained' : 'outlined'}
                        sx={{
                            borderRadius: 30,
                            px: 3,
                            py: 1,
                            borderColor: '#00E5FF',
                            color: selected === item.key ? '#0B0F19' : 'white',
                            background: selected === item.key
                                ? 'linear-gradient(90deg, #00E5FF, #B388FF)'
                                : 'transparent',
                            fontWeight: 600,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-3px)',
                                boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
                                borderColor: '#B388FF',
                            },
                        }}
                        onClick={() => handleFilter(item.key)}
                    >
                        {t(item.key)}
                    </Button>
                ))}
            </Stack>

            {/* Grid de proyectos */}
            <Grid container spacing={4} justifyContent="center">
                {filteredProjects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Paper
                            elevation={0}
                            sx={{
                                background: 'rgba(14, 23, 42, 0.7)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(0, 229, 255, 0.15)',
                                borderRadius: 4,
                                overflow: 'hidden',
                                transition: 'all 0.4s ease',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    borderColor: '#00E5FF',
                                    boxShadow: '0 0 40px rgba(0, 229, 255, 0.2)',
                                },
                            }}
                        >
                            <CardActionArea
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100%' }}
                            >
                                <Box
                                    component="img"
                                    src={project.image}
                                    alt={project.title}
                                    sx={{
                                        width: '100%',
                                        height: 180,
                                        objectFit: 'cover',
                                        borderBottom: '1px solid rgba(0, 229, 255, 0.1)',
                                    }}
                                />
                                <Box sx={{ p: 3, flex: 1 }}>
                                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#94a9c9', mb: 2 }}>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                                        <Chip
                                            label={t(project.type)}
                                            size="small"
                                            sx={{
                                                background: 'rgba(0, 229, 255, 0.15)',
                                                color: '#00E5FF',
                                                borderColor: '#00E5FF',
                                            }}
                                            variant="outlined"
                                        />
                                        <OpenInNewIcon sx={{ color: '#00E5FF', fontSize: 20 }} />
                                    </Box>
                                </Box>
                            </CardActionArea>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MyLatestProjects;